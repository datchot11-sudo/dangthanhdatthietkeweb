// Image utility functions for normalizing image links, handling fallbacks, and supporting direct file upload
import type React from 'react';
import {
  ANIMAL_AVATAR_PRESETS,
  DEFAULT_ANIMAL_ADMIN_AVATAR,
  DEFAULT_ANIMAL_USER_AVATAR
} from './animalAvatars';

export {
  ANIMAL_AVATAR_PRESETS,
  DEFAULT_ANIMAL_ADMIN_AVATAR,
  DEFAULT_ANIMAL_USER_AVATAR
};

// Fallback avatars using animal icon SVGs
export const FALLBACK_AVATAR = DEFAULT_ANIMAL_USER_AVATAR; // Mèo Vàng Thông Thái 🐱
export const FALLBACK_ADMIN_AVATAR = DEFAULT_ANIMAL_ADMIN_AVATAR; // Sư Tử Vương Giả 🦁 (Admin)
export const FALLBACK_HERITAGE_IMAGE = 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80';

// Preset Avatars collection for accounts (Icon Động Vật Đáng Yêu & Oai Phong)
export const PRESET_AVATARS = ANIMAL_AVATAR_PRESETS;


/**
 * Normalizes and fixes common image URLs:
 * 1. Trims whitespace and removes enclosing quotes.
 * 2. Unwraps Google Image search links (extracting imgurl= parameter).
 * 3. Converts Google Drive sharing links into reliable direct image URLs (lh3.googleusercontent.com/d/ID).
 * 4. Converts Unsplash web page links to direct image URLs.
 * 5. Converts Imgur page links to direct image URLs.
 * 6. Converts Dropbox links (dl=0) to direct image links (raw=1).
 * 7. Converts GitHub blob links to raw.githubusercontent.com.
 * 8. Fixes protocol-relative URLs (//example.com/... -> https://example.com/...).
 */
export function cleanImageUrl(rawUrl: string | null | undefined): string {
  if (!rawUrl) return '';
  let url = rawUrl.trim();

  // Remove surrounding quotes if pasted
  if ((url.startsWith('"') && url.endsWith('"')) || (url.startsWith("'") && url.endsWith("'"))) {
    url = url.slice(1, -1).trim();
  }

  // Protocol-relative
  if (url.startsWith('//')) {
    url = 'https:' + url;
  }

  // Google Search / Google Images redirect unwrapping:
  // e.g. https://www.google.com/imgres?imgurl=https%3A%2F%2F... or google.com/url?q=https%3A%2F%2F...
  if (url.includes('google.') && (url.includes('imgurl=') || url.includes('url?q='))) {
    try {
      const parsed = new URL(url);
      const imgurl = parsed.searchParams.get('imgurl') || parsed.searchParams.get('q');
      if (imgurl) {
        url = decodeURIComponent(imgurl).trim();
      }
    } catch {
      const match = url.match(/imgurl=([^&]+)/);
      if (match && match[1]) {
        url = decodeURIComponent(match[1]).trim();
      }
    }
  }

  // Google Drive File link conversion:
  // e.g., https://drive.google.com/file/d/1A2B3C4D5E/view?usp=sharing or https://drive.google.com/open?id=1A2B3C4D5E
  // Note: lh3.googleusercontent.com/d/FILE_ID is the modern direct image CDN that bypasses Google's 403 block on uc?export=view
  const driveFileRegex = /drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/;
  const driveOpenRegex = /drive\.google\.com\/(?:open|uc)\?(?:.*&)?id=([a-zA-Z0-9_-]+)/;
  const matchDrive = url.match(driveFileRegex) || url.match(driveOpenRegex);
  if (matchDrive && matchDrive[1]) {
    const fileId = matchDrive[1];
    return `https://lh3.googleusercontent.com/d/${fileId}`;
  }

  // Unsplash web page URL to direct image URL:
  // e.g. https://unsplash.com/photos/a-woman-in-traditional-dress-abc123xyz
  // or https://unsplash.com/photos/abc123xyz
  if (url.includes('unsplash.com/photos/')) {
    const parts = url.split('unsplash.com/photos/')[1]?.split(/[?#]/)[0];
    if (parts) {
      // The photo ID is often the last segment after dashes or the segment itself
      const segments = parts.split('-');
      const photoId = segments[segments.length - 1] || parts;
      if (photoId) {
        return `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=1200&q=80`;
      }
    }
  }

  // Imgur page URL conversion:
  // e.g. https://imgur.com/aBcDeFg -> https://i.imgur.com/aBcDeFg.jpg
  if (url.includes('imgur.com/') && !url.includes('i.imgur.com/')) {
    const imgurMatch = url.match(/imgur\.com\/(?:gallery\/|a\/)?([a-zA-Z0-9]+)/);
    if (imgurMatch && imgurMatch[1]) {
      return `https://i.imgur.com/${imgurMatch[1]}.jpg`;
    }
  }

  // Dropbox link conversion (dl=0 -> raw=1)
  if (url.includes('dropbox.com')) {
    if (url.includes('dl=0')) {
      url = url.replace('dl=0', 'raw=1');
    } else if (!url.includes('raw=1')) {
      url += (url.includes('?') ? '&' : '?') + 'raw=1';
    }
  }

  // GitHub blob to raw:
  // e.g. https://github.com/user/repo/blob/main/image.png -> https://raw.githubusercontent.com/user/repo/main/image.png
  if (url.includes('github.com') && url.includes('/blob/')) {
    url = url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
  }

  return url;
}

/**
 * Safe image onError handler to replace broken images with a fallback and avoid infinite loops
 */
export function handleImageFallback(
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl: string = FALLBACK_HERITAGE_IMAGE
) {
  const target = event.currentTarget;
  // Prevent infinite loop if fallback itself fails
  if (target.src !== fallbackUrl) {
    target.onerror = null;
    target.src = fallbackUrl;
  }
}

/**
 * Reads a user-selected local file (JPG, PNG, WEBP, GIF, SVG) and converts it to a Base64 data URL
 */
export function readImageFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('Vui lòng chọn tệp định dạng hình ảnh (JPG, PNG, WEBP, SVG).'));
      return;
    }
    // Limit to ~8MB to ensure smooth local storage & Firestore storage
    if (file.size > 8 * 1024 * 1024) {
      reject(new Error('Kích thước ảnh vượt quá 8MB. Vui lòng chọn ảnh dung lượng nhỏ hơn.'));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else {
        reject(new Error('Không thể đọc tệp hình ảnh.'));
      }
    };
    reader.onerror = () => {
      reject(new Error('Đã xảy ra lỗi khi đọc tệp.'));
    };
    reader.readAsDataURL(file);
  });
}
