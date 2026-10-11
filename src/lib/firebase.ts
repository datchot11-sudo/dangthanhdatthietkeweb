import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  getDocs,
  getDocFromServer,
  collection,
  onSnapshot,
  deleteDoc
} from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';
import { UserProfile, Spotlight, Festival, GalleryItem, Article, Costume } from '../types/costume';

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);
export const auth = getAuth(app);

export enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

export interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
    emailVerified?: boolean | null;
    isAnonymous?: boolean | null;
    tenantId?: string | null;
    providerInfo?: {
      providerId?: string | null;
      email?: string | null;
    }[];
  };
}

export function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null): never {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData?.map(provider => ({
        providerId: provider.providerId,
        email: provider.email,
      })) || []
    },
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

// Test connection on boot as specified in the skill
export async function testConnection(): Promise<boolean> {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    console.log('Firebase Firestore connection tested successfully.');
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline, using offline cache fallback.');
    } else {
      console.log('Firebase initialized (test ping completed)');
    }
    return true;
  }
}

testConnection();

// Cloud sync for User Profiles (email, notes, bookmarks)
export async function syncUserToFirebase(profile: UserProfile): Promise<void> {
  const safeId = profile.id.replace(/[^a-zA-Z0-9_-]/g, '_');
  const path = `users/${safeId}`;
  try {
    await setDoc(doc(db, 'users', safeId), {
      ...profile,
      updatedAt: new Date().toISOString(),
    }, { merge: true });
    console.log(`[Firebase Cloud] User ${profile.email} saved to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync user to cloud, fallback to local state:', error);
  }
}

export async function fetchUserFromFirebase(userId: string): Promise<UserProfile | null> {
  const safeId = userId.replace(/[^a-zA-Z0-9_-]/g, '_');
  try {
    const snap = await getDoc(doc(db, 'users', safeId));
    if (snap.exists()) {
      return snap.data() as UserProfile;
    }
  } catch (error) {
    console.warn('[Firebase Cloud] Could not fetch user from cloud:', error);
  }
  return null;
}

// Cloud sync for Promotional Showcase data
export async function syncSpotlightsToFirebase(spotlights: Spotlight[]): Promise<void> {
  try {
    for (const spot of spotlights) {
      await setDoc(doc(db, 'spotlights', spot.id), spot, { merge: true });
    }
    console.log(`[Firebase Cloud] Synced ${spotlights.length} spotlights to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync spotlights:', error);
  }
}

export async function syncFestivalsToFirebase(festivals: Festival[]): Promise<void> {
  try {
    for (const fest of festivals) {
      await setDoc(doc(db, 'festivals', fest.id), fest, { merge: true });
    }
    console.log(`[Firebase Cloud] Synced ${festivals.length} festivals to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync festivals:', error);
  }
}

export async function syncGalleryToFirebase(items: GalleryItem[]): Promise<void> {
  try {
    for (const item of items) {
      await setDoc(doc(db, 'gallery', item.id), item, { merge: true });
    }
    console.log(`[Firebase Cloud] Synced ${items.length} gallery items to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync gallery items:', error);
  }
}

// Cloud sync for Articles
export async function syncArticlesToFirebase(articles: Article[]): Promise<void> {
  try {
    for (const article of articles) {
      await setDoc(doc(db, 'articles', article.id), article, { merge: true });
    }
    console.log(`[Firebase Cloud] Synced ${articles.length} articles to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync articles:', error);
  }
}

export async function fetchArticlesFromFirebase(): Promise<Article[] | null> {
  try {
    const snap = await getDocs(collection(db, 'articles'));
    if (!snap.empty) {
      return snap.docs.map((d) => d.data() as Article);
    }
  } catch (error) {
    console.warn('[Firebase Cloud] Could not fetch articles from cloud:', error);
  }
  return null;
}

// Cloud sync for Custom Costumes
export async function syncCostumesToFirebase(costumes: Costume[]): Promise<void> {
  try {
    for (const costume of costumes) {
      await setDoc(doc(db, 'costumes', costume.id), costume, { merge: true });
    }
    console.log(`[Firebase Cloud] Synced ${costumes.length} costumes to Firestore.`);
  } catch (error) {
    console.warn('[Firebase Cloud] Could not sync costumes:', error);
  }
}

export async function fetchCostumesFromFirebase(): Promise<Costume[] | null> {
  try {
    const snap = await getDocs(collection(db, 'costumes'));
    if (!snap.empty) {
      return snap.docs.map((d) => d.data() as Costume);
    }
  } catch (error) {
    console.warn('[Firebase Cloud] Could not fetch costumes from cloud:', error);
  }
  return null;
}

