export type CulturalRegionKey =
  | 'all'
  | 'tay_bac'
  | 'dong_bac'
  | 'dong_bang_bac_bo'
  | 'bac_trung_bo'
  | 'nam_trung_bo'
  | 'tay_nguyen'
  | 'nam_bo';

export type OccasionType = 'le_hoi' | 'le_cuoi' | 'doi_thuong' | 'nghi_le_tam_linh';

export type GenderType = 'nu' | 'nam' | 'ca_hai';

export interface ColorMeaning {
  name: string;
  hex: string;
  meaning: string;
}

export interface CostumeLayer {
  id: string;
  partName: string;
  localName?: string;
  position: 'dau' | 'than_tren' | 'than_duoi' | 'toan_than' | 'chan';
  description: string;
  craftTechnique: string;
  symbolism: string;
  image?: string;
}

export interface Accessory {
  id: string;
  name: string;
  localName?: string;
  category: 'khan_mu' | 'trang_suc_bac_dong' | 'that_lung_xa_tich' | 'tui_guoi' | 'hai_guoc' | 'khac';
  description: string;
  spiritualMeaning: string;
  wearingStyle: string;
  image?: string;
  material?: string;
  origin?: string;
}

export interface PatternMotif {
  name: string;
  symbolMeaning: string;
  historicalOrigin: string;
  motifCategory?: string;
  image?: string;
}

export interface Technique {
  name: string;
  description: string;
  uniqueness: string;
  image?: string;
}

export interface FolkStory {
  title: string;
  summary: string;
  fullStory: string;
  culturalMoral: string;
  audioNarratorText?: string;
}

export interface LandscapeFeature {
  title: string;
  location: string;
  imageUrl: string;
  description: string;
  regionKey: CulturalRegionKey;
}

export interface Costume {
  id: string;
  name: string;
  ethnicGroup: string;
  subGroup?: string;
  languageFamily: string;
  region: CulturalRegionKey;
  regionName: string;
  provinces: string[];
  gender: GenderType;
  occasions: OccasionType[];
  summary: string;
  coverImage: string;
  galleryImages?: string[];
  landscapeImage?: string;
  landscapeName?: string;
  badge: string;
  material: string[];
  mainColors: ColorMeaning[];
  costumeLayers: CostumeLayer[];
  accessories: Accessory[];
  patternsAndMotifs: PatternMotif[];
  techniques: Technique[];
  folkStory: FolkStory;
  interestingFacts: string[];
  culturalQuotes?: string;
}

export interface RegionInfo {
  id: CulturalRegionKey;
  name: string;
  tagline: string;
  provincesCount: number;
  highlightFeatures: string[];
  color: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  ethnicGroup?: string;
  ethnicGroupId?: string;
  culturalContext?: string;
}

export interface Festival {
  id: string;
  name: string;
  ethnicGroup: string;
  location: string;
  timeOfYear: string;
  monthLunar?: string;
  description: string;
  costumeHighlights: string;
  image: string;
  tags: string[];
}

export interface Spotlight {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  costumeId?: string;
  imageUrl: string;
  active: boolean;
  order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  ethnicGroup: string;
  category: 'hoa_van' | 'trang_suc' | 'det_nhuom' | 'le_hoi';
  mediaType: 'image' | 'video';
  url: string;
  caption: string;
  authorOrSource?: string;
}

export interface ArticleComment {
  id: string;
  userName: string;
  userAvatar?: string;
  comment: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'nghien_cuu' | 'nghe_nhan' | 'le_hoi' | 'bao_ton' | 'ky_thuat_det';
  summary: string;
  content: string;
  coverImage: string;
  author: string;
  authorRole: string;
  publishedAt: string;
  readTime: string;
  ethnicGroupId?: string;
  tags: string[];
  viewsCount?: number;
  comments?: ArticleComment[];
}

export type UserRole = 'customer' | 'admin';

export interface UserNote {
  id: string;
  costumeId: string;
  costumeName: string;
  noteText: string;
  createdAt: string;
}

export interface UserContribution {
  id: string;
  userId: string;
  userName: string;
  title: string;
  content: string;
  ethnicGroup: string;
  images?: string[];
  createdAt: string;
  status: 'pending' | 'approved' | 'rejected';
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  bio?: string;
  joinedAt: string;
  phone?: string;
  location?: string;
  savedCostumes: string[];
  savedArticles: string[];
  notes: UserNote[];
}
