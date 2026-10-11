import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { HomeHeroBanner } from './components/HomeHeroBanner';
import { RegionalMapSection } from './components/RegionalMapSection';
import { CostumesGrid } from './components/CostumesGrid';
import { RegionCostumeExplorer } from './components/RegionCostumeExplorer';
import { EthnicCostumesCatalog } from './components/EthnicCostumesCatalog';
import { AccessoriesGallerySection } from './components/AccessoriesGallerySection';
import { BrocadeMuseumSection } from './components/BrocadeMuseumSection';
import { CostumeDetailModal } from './components/CostumeDetailModal';
import { CostumeComparatorModal } from './components/CostumeComparatorModal';
import { CulturalAIAssistantModal } from './components/CulturalAIAssistantModal';
import { FavoritesModal } from './components/FavoritesModal';
import { ArticlesPage } from './components/ArticlesPage';
import { CustomerPortal } from './components/CustomerPortal';
import { AdminPortal } from './components/AdminPortal';
import { AuthModal, DEMO_USERS } from './components/AuthModal';
import { ProfileEditModal } from './components/ProfileEditModal';
import { Footer } from './components/Footer';
import { SpotlightShowcase } from './components/SpotlightShowcase';
import { FestivalsCalendarSection } from './components/FestivalsCalendarSection';
import { CulturalGallerySection } from './components/CulturalGallerySection';
import { CulturalQuizSection } from './components/CulturalQuizSection';
import logoImg from './assets/images/viet_heritage_logo_clean.png';

import { ALL_COSTUMES } from './data/costumesData';
import { INITIAL_ARTICLES } from './data/articlesData';
import {
  INITIAL_SPOTLIGHTS,
  INITIAL_FESTIVALS,
  INITIAL_GALLERY_ITEMS,
  CULTURAL_QUIZ_QUESTIONS
} from './data/promotionalData';
import {
  syncUserToFirebase,
  syncSpotlightsToFirebase,
  syncFestivalsToFirebase,
  syncGalleryToFirebase,
  syncArticlesToFirebase,
  fetchArticlesFromFirebase,
  syncCostumesToFirebase,
  fetchCostumesFromFirebase
} from './lib/firebase';
import { VietnamLandscape, VIETNAM_LANDSCAPES } from './data/landscapesData';
import { VietnamLandscapeSwitcher } from './components/VietnamLandscapeSwitcher';
import {
  Costume,
  Article,
  CulturalRegionKey,
  UserProfile,
  UserContribution,
  Spotlight,
  Festival,
  GalleryItem
} from './types/costume';

export function App() {
  // Navigation active tab: 'home' | 'map' | 'region_search' | 'catalog' | 'accessories' | 'articles' | 'customer_portal' | 'admin_portal'
  const [activeTab, setActiveTab] = useState<string>('home');

  // Selected Vietnam Landscape for Homepage Background
  const [selectedLandscape, setSelectedLandscape] = useState<VietnamLandscape>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_landscape_id');
      const found = VIETNAM_LANDSCAPES.find((l) => l.id === saved);
      return found || VIETNAM_LANDSCAPES[0];
    } catch {
      return VIETNAM_LANDSCAPES[0];
    }
  });

  const handleSelectLandscape = (landscape: VietnamLandscape) => {
    setSelectedLandscape(landscape);
    try {
      localStorage.setItem('viet_heritage_landscape_id', landscape.id);
    } catch (e) {
      console.error(e);
    }
  };

  // CMS Mutable Data with LocalStorage Persistence
  const [costumes, setCostumes] = useState<Costume[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_costumes_db');
      return saved ? JSON.parse(saved) : ALL_COSTUMES;
    } catch {
      return ALL_COSTUMES;
    }
  });

  const [articles, setArticles] = useState<Article[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_articles_db');
      return saved ? JSON.parse(saved) : INITIAL_ARTICLES;
    } catch {
      return INITIAL_ARTICLES;
    }
  });

  const [spotlights, setSpotlights] = useState<Spotlight[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_spotlights_db');
      return saved ? JSON.parse(saved) : INITIAL_SPOTLIGHTS;
    } catch {
      return INITIAL_SPOTLIGHTS;
    }
  });

  const [festivals, setFestivals] = useState<Festival[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_festivals_db');
      return saved ? JSON.parse(saved) : INITIAL_FESTIVALS;
    } catch {
      return INITIAL_FESTIVALS;
    }
  });

  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_gallery_db');
      return saved ? JSON.parse(saved) : INITIAL_GALLERY_ITEMS;
    } catch {
      return INITIAL_GALLERY_ITEMS;
    }
  });

  const handleUpdateSpotlights = (updated: Spotlight[]) => {
    setSpotlights(updated);
    syncSpotlightsToFirebase(updated);
    try {
      localStorage.setItem('viet_heritage_spotlights_db', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateFestivals = (updated: Festival[]) => {
    setFestivals(updated);
    syncFestivalsToFirebase(updated);
    try {
      localStorage.setItem('viet_heritage_festivals_db', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateGalleryItems = (updated: GalleryItem[]) => {
    setGalleryItems(updated);
    syncGalleryToFirebase(updated);
    try {
      localStorage.setItem('viet_heritage_gallery_db', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // User & Auth state
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_current_user');
      if (!saved || saved === 'logged_out' || saved === 'null') {
        return null;
      }
      return JSON.parse(saved);
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [isProfileEditModalOpen, setIsProfileEditModalOpen] = useState<boolean>(false);

  // Global Search Query in Header
  const [globalSearchQuery, setGlobalSearchQuery] = useState<string>('');

  // Filtering states for regional map & explorer
  const [selectedRegion, setSelectedRegion] = useState<CulturalRegionKey>('all');
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');

  // Modals state
  const [selectedCostume, setSelectedCostume] = useState<Costume | null>(null);
  const [costumeModalTab, setCostumeModalTab] = useState<string>('overview');
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState<boolean>(false);
  const [isFavoritesModalOpen, setIsFavoritesModalOpen] = useState<boolean>(false);

  // User saved favorites & compared
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_favorites');
      return saved ? JSON.parse(saved) : ['hmong_hoa', 'thai_ao_com_khan_pieu', 'nhat_binh_hue'];
    } catch {
      return ['hmong_hoa', 'thai_ao_com_khan_pieu', 'nhat_binh_hue'];
    }
  });

  const [comparedIds, setComparedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('viet_heritage_compared');
      return saved ? JSON.parse(saved) : ['hmong_hoa', 'thai_ao_com_khan_pieu'];
    } catch {
      return ['hmong_hoa', 'thai_ao_com_khan_pieu'];
    }
  });

  // Save changes to localStorage & Firebase Cloud
  const handleUpdateCostumes = (updated: Costume[]) => {
    setCostumes(updated);
    syncCostumesToFirebase(updated);
    try {
      localStorage.setItem('viet_heritage_costumes_db', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateArticles = (updated: Article[]) => {
    setArticles(updated);
    syncArticlesToFirebase(updated);
    try {
      localStorage.setItem('viet_heritage_articles_db', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // Sync initial cloud data on mount if present
  useEffect(() => {
    fetchArticlesFromFirebase().then((cloudArticles) => {
      if (cloudArticles && cloudArticles.length > 0) {
        setArticles(cloudArticles);
        try {
          localStorage.setItem('viet_heritage_articles_db', JSON.stringify(cloudArticles));
        } catch (e) {
          console.error(e);
        }
      }
    });

    fetchCostumesFromFirebase().then((cloudCostumes) => {
      if (cloudCostumes && cloudCostumes.length > 0) {
        setCostumes(cloudCostumes);
        try {
          localStorage.setItem('viet_heritage_costumes_db', JSON.stringify(cloudCostumes));
        } catch (e) {
          console.error(e);
        }
      }
    });
  }, []);

  const handleResetToDefault = () => {
    setCostumes(ALL_COSTUMES);
    setArticles(INITIAL_ARTICLES);
    try {
      localStorage.removeItem('viet_heritage_costumes_db');
      localStorage.removeItem('viet_heritage_articles_db');
    } catch (e) {
      console.error(e);
    }
  };

  const handleLogin = (user: UserProfile) => {
    setCurrentUser(user);
    syncUserToFirebase(user);
    try {
      localStorage.setItem('viet_heritage_current_user', JSON.stringify(user));
    } catch (e) {
      console.error(e);
    }
    if (user.role === 'admin') {
      setActiveTab('admin_portal');
    } else {
      setActiveTab('customer_portal');
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('viet_heritage_current_user');
    } catch (e) {
      console.error(e);
    }
    setActiveTab('home');
  };

  const handleUpdateProfile = (updatedUser: UserProfile) => {
    setCurrentUser(updatedUser);
    syncUserToFirebase(updatedUser);
    try {
      localStorage.setItem('viet_heritage_current_user', JSON.stringify(updatedUser));
      // Update in registered users list if found
      const savedAccountsStr = localStorage.getItem('viet_heritage_registered_users');
      if (savedAccountsStr) {
        const accounts = JSON.parse(savedAccountsStr);
        const idx = accounts.findIndex(
          (acc: any) =>
            acc.email?.toLowerCase() === updatedUser.email?.toLowerCase() ||
            acc.profile?.id === updatedUser.id
        );
        if (idx !== -1) {
          accounts[idx].profile = updatedUser;
          localStorage.setItem('viet_heritage_registered_users', JSON.stringify(accounts));
        }
      }
      // Keep DEMO_USERS in sync
      if (updatedUser.role === 'admin') {
        DEMO_USERS.admin = { ...DEMO_USERS.admin, ...updatedUser };
      } else {
        DEMO_USERS.customer = { ...DEMO_USERS.customer, ...updatedUser };
      }
    } catch (e) {
      console.error(e);
    }
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem('viet_heritage_favorites', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });

    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        savedCostumes: currentUser.savedCostumes?.includes(id)
          ? currentUser.savedCostumes.filter((x) => x !== id)
          : [...(currentUser.savedCostumes || []), id]
      };
      setCurrentUser(updatedUser);
      syncUserToFirebase(updatedUser);
      try {
        localStorage.setItem('viet_heritage_current_user', JSON.stringify(updatedUser));
      } catch (e) {
        console.error(e);
      }
    }
  };

  const toggleCompare = (id: string) => {
    setComparedIds((prev) => {
      let next: string[];
      if (prev.includes(id)) {
        next = prev.filter((item) => item !== id);
      } else {
        if (prev.length >= 4) {
          next = [...prev.slice(1), id];
        } else {
          next = [...prev, id];
        }
      }
      try {
        localStorage.setItem('viet_heritage_compared', JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      return next;
    });
  };

  const handleOpenCostumeDetail = (costume: Costume, initialTab: string = 'overview') => {
    setSelectedCostume(costume);
    setCostumeModalTab(initialTab);
  };

  // Customer portal note additions
  const handleAddUserNote = (costumeId: string, costumeName: string, text: string) => {
    if (!currentUser) return;
    const newNote = {
      id: `n_${Date.now()}`,
      costumeId,
      costumeName,
      noteText: text,
      createdAt: new Date().toLocaleDateString('vi-VN')
    };
    const updatedUser = {
      ...currentUser,
      notes: [newNote, ...(currentUser.notes || [])]
    };
    setCurrentUser(updatedUser);
    syncUserToFirebase(updatedUser);
    try {
      localStorage.setItem('viet_heritage_current_user', JSON.stringify(updatedUser));
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteUserNote = (noteId: string) => {
    if (!currentUser) return;
    const updatedUser = {
      ...currentUser,
      notes: (currentUser.notes || []).filter((n) => n.id !== noteId)
    };
    setCurrentUser(updatedUser);
    syncUserToFirebase(updatedUser);
    try {
      localStorage.setItem('viet_heritage_current_user', JSON.stringify(updatedUser));
    } catch (e) {
      console.error(e);
    }
  };

  // Filtered costumes for Home & Map view
  const filteredCostumes = useMemo(() => {
    return costumes.filter((costume) => {
      if (selectedRegion !== 'all' && costume.region !== selectedRegion) {
        return false;
      }
      if (selectedOccasion !== 'all' && !costume.occasions.includes(selectedOccasion as any)) {
        return false;
      }
      if (selectedGender !== 'all') {
        if (selectedGender === 'nu' && costume.gender !== 'nu') return false;
        if (selectedGender === 'ca_hai' && costume.gender === 'nu') return false;
      }
      if (globalSearchQuery.trim()) {
        const q = globalSearchQuery.toLowerCase().trim();
        const matchesName = costume.name.toLowerCase().includes(q);
        const matchesEthnic = costume.ethnicGroup.toLowerCase().includes(q);
        const matchesRegion = costume.regionName.toLowerCase().includes(q);
        const matchesProvinces = costume.provinces.some((p) => p.toLowerCase().includes(q));
        const matchesAccessories = costume.accessories.some(
          (a) => a.name.toLowerCase().includes(q) || (a.localName && a.localName.toLowerCase().includes(q))
        );
        if (!matchesName && !matchesEthnic && !matchesRegion && !matchesProvinces && !matchesAccessories) {
          return false;
        }
      }
      return true;
    });
  }, [costumes, selectedRegion, selectedOccasion, selectedGender, globalSearchQuery]);

  return (
    <div className="min-h-screen flex flex-col bg-white text-stone-900 selection:bg-emerald-800 selection:text-emerald-100 font-sans">
      {/* Top 2-Tier Header: Tier 1 = Logo + Search + Auth; Tier 2 = Permanent Horizontal Sub-Navbar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoritesCount={favorites.length}
        openFavoritesModal={() => setIsFavoritesModalOpen(true)}
        compareCount={comparedIds.length}
        openCompareModal={() => setIsCompareModalOpen(true)}
        openAIModal={() => setIsAIModalOpen(true)}
        globalSearchQuery={globalSearchQuery}
        setGlobalSearchQuery={setGlobalSearchQuery}
        currentUser={currentUser}
        openAuthModal={() => setIsAuthModalOpen(true)}
        onLogout={handleLogout}
        onQuickLogin={(role) => handleLogin(DEMO_USERS[role])}
        onOpenProfileEdit={() => {
          if (currentUser) {
            setIsProfileEditModalOpen(true);
          } else {
            setIsAuthModalOpen(true);
          }
        }}
      />

      {/* Main Content Rendered according to active tab */}
      <main className="flex-1">
        {/* TAB 1: Trang Chủ (Home) */}
        {activeTab === 'home' && (
          <div className="relative min-h-screen bg-white">
            <div className="relative z-10 space-y-2 sm:space-y-4">
              {/* Top Master Heritage Carousel Banner */}
              <HomeHeroBanner
                onExploreCatalog={() => setActiveTab('catalog')}
                onExploreAccessories={() => setActiveTab('accessories')}
                onExploreMap={() => setActiveTab('map')}
                onSelectRegion={(reg) => {
                  setSelectedRegion(reg);
                  setActiveTab('region_search');
                }}
                onOpenCostumeDetail={(costumeId) => {
                  const targetCostume = (costumes || []).find((c) => c.id === costumeId) || (ALL_COSTUMES || []).find((c) => c.id === costumeId);
                  if (targetCostume) {
                    handleOpenCostumeDetail(targetCostume, 'overview');
                  } else {
                    setActiveTab('catalog');
                  }
                }}
              />

              {/* Vietnam Landscape Scenery Bar */}
              <VietnamLandscapeSwitcher
                currentLandscape={selectedLandscape}
                onSelectLandscape={handleSelectLandscape}
              />

              {/* Promotional Spotlight Showcase */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <SpotlightShowcase
                  spotlights={spotlights}
                  costumes={costumes}
                  onSelectCostume={(costume) => handleOpenCostumeDetail(costume, 'overview')}
                  onOpenCostumeDetail={(costumeId) => {
                    const targetCostume = (costumes || []).find((c) => c.id === costumeId) || (ALL_COSTUMES || []).find((c) => c.id === costumeId);
                    if (targetCostume) {
                      handleOpenCostumeDetail(targetCostume, 'overview');
                    } else {
                      setActiveTab('catalog');
                    }
                  }}
                  onExploreCatalog={() => setActiveTab('catalog')}
                />
              </div>

              <HeroSection
                searchQuery={globalSearchQuery}
                setSearchQuery={(q) => {
                  setGlobalSearchQuery(q);
                  if (q.trim()) {
                    setActiveTab('catalog');
                  }
                }}
                onExploreClick={() => setActiveTab('catalog')}
                onSelectRegion={(reg) => {
                  setSelectedRegion(reg);
                  setActiveTab('region_search');
                }}
              />

              {/* Regional Map Overview */}
              <RegionalMapSection
                selectedRegion={selectedRegion}
                onSelectRegion={(reg) => {
                  setSelectedRegion(reg);
                  setActiveTab('region_search');
                }}
              />

              {/* Featured Costumes */}
              <CostumesGrid
                costumes={filteredCostumes}
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                selectedOccasion={selectedOccasion}
                setSelectedOccasion={setSelectedOccasion}
                selectedGender={selectedGender}
                setSelectedGender={setSelectedGender}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                comparedIds={comparedIds}
                toggleCompare={toggleCompare}
                onOpenCostume={handleOpenCostumeDetail}
              />

              {/* Accessories Section Preview */}
              <AccessoriesGallerySection
                onOpenCostumeDetail={handleOpenCostumeDetail}
              />

              {/* Brocade Museum Section */}
              <BrocadeMuseumSection />
            </div>
          </div>
        )}

        {/* TAB 2: Bản Đồ Trang Phục (Map) */}
        {activeTab === 'map' && (
          <div className="py-2">
            <RegionalMapSection
              selectedRegion={selectedRegion}
              onSelectRegion={(reg) => {
                setSelectedRegion(reg);
              }}
            />
            <CostumesGrid
              costumes={filteredCostumes}
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
              selectedOccasion={selectedOccasion}
              setSelectedOccasion={setSelectedOccasion}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              comparedIds={comparedIds}
              toggleCompare={toggleCompare}
              onOpenCostume={handleOpenCostumeDetail}
            />
          </div>
        )}

        {/* TAB 3: Tìm Trang Phục Theo Từng Miền (Region Explorer) */}
        {activeTab === 'region_search' && (
          <RegionCostumeExplorer
            costumes={costumes}
            selectedRegion={selectedRegion}
            onSelectRegion={setSelectedRegion}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            comparedIds={comparedIds}
            toggleCompare={toggleCompare}
            onOpenCostume={handleOpenCostumeDetail}
          />
        )}

        {/* TAB 4: Danh Mục Trang Phục Các Dân Tộc (Ethnic Catalog) */}
        {activeTab === 'catalog' && (
          <EthnicCostumesCatalog
            costumes={costumes}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            comparedIds={comparedIds}
            toggleCompare={toggleCompare}
            onOpenCostume={handleOpenCostumeDetail}
          />
        )}

        {/* TAB 5: Bộ Sưu Tập Phụ Kiện (Accessories Collection) */}
        {activeTab === 'accessories' && (
          <div className="py-4">
            <AccessoriesGallerySection
              onOpenCostumeDetail={handleOpenCostumeDetail}
            />
          </div>
        )}

        {/* TAB: Lịch Lễ Hội & Sự Kiện Văn Hóa 54 Dân Tộc */}
        {activeTab === 'festivals' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <FestivalsCalendarSection
              festivals={festivals}
              onSelectCostume={(costumeId) => {
                const targetCostume = (costumes || []).find((c) => c.id === costumeId) || (ALL_COSTUMES || []).find((c) => c.id === costumeId);
                if (targetCostume) {
                  handleOpenCostumeDetail(targetCostume, 'overview');
                } else {
                  setActiveTab('catalog');
                }
              }}
            />
          </div>
        )}

        {/* TAB: Thư Viện Cận Cảnh Chi Tiết Kỹ Thuật Chế Tác */}
        {activeTab === 'gallery' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CulturalGallerySection
              items={galleryItems}
              onOpenCostume={(costumeId) => {
                const targetCostume = (costumes || []).find((c) => c.id === costumeId) || (ALL_COSTUMES || []).find((c) => c.id === costumeId);
                if (targetCostume) {
                  handleOpenCostumeDetail(targetCostume, 'overview');
                } else {
                  setActiveTab('catalog');
                }
              }}
            />
          </div>
        )}

        {/* TAB: Đố Vui Di Sản Trang Phục */}
        {activeTab === 'quiz' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <CulturalQuizSection
              questions={CULTURAL_QUIZ_QUESTIONS}
              onExploreCostumes={() => setActiveTab('catalog')}
            />
          </div>
        )}

        {/* TAB 6: Trang Bài Viết & Di Sản (Articles / Blog CMS) */}
        {activeTab === 'articles' && (
          <ArticlesPage
            articles={articles}
            onAddComment={(artId, comment, user) => {
              const updated = articles.map((a) => {
                if (a.id === artId) {
                  return {
                    ...a,
                    comments: [
                      ...(a.comments || []),
                      {
                        id: `c_${Date.now()}`,
                        userName: user,
                        comment,
                        createdAt: 'Vừa xong'
                      }
                    ]
                  };
                }
                return a;
              });
              handleUpdateArticles(updated);
            }}
          />
        )}

        {/* TAB 7: Trang Khách Hàng (Customer / Member Portal) */}
        {activeTab === 'customer_portal' && (
          currentUser ? (
            <CustomerPortal
              user={currentUser}
              costumes={costumes}
              articles={articles}
              onSelectCostume={(c) => handleOpenCostumeDetail(c, 'overview')}
              onOpenArticle={() => setActiveTab('articles')}
              onAddNote={handleAddUserNote}
              onDeleteNote={handleDeleteUserNote}
              onLogout={handleLogout}
              onSwitchToAdmin={() => handleLogin(DEMO_USERS.admin)}
              onUpdateProfile={handleUpdateProfile}
              onSubmitContribution={(contrib) => {
                console.log('Contribution received:', contrib);
              }}
            />
          ) : (
            <div className="py-16 px-4 max-w-lg mx-auto text-center">
              <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={logoImg}
                    alt="Logo Trang Phục Việt"
                    className="w-full h-full object-contain rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-xl font-serif-cultural font-bold text-stone-900 mb-2">
                  Trang Khách Hàng & Thành Viên
                </h2>
                <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                  Vui lòng đăng nhập tài khoản Khách Hàng để quản lý bộ sưu tập y phục yêu thích, lưu trữ sổ tay nghiên cứu và gửi đóng góp ảnh di sản.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold shadow-sm transition-all cursor-pointer"
                  >
                    Đăng Nhập / Đăng Ký Bằng Email
                  </button>
                </div>
              </div>
            </div>
          )
        )}

        {/* TAB 8: Trang Quản Trị Viên (Admin CMS Portal) */}
        {activeTab === 'admin_portal' && (
          currentUser?.role === 'admin' ? (
            <AdminPortal
              costumes={costumes}
              articles={articles}
              spotlights={spotlights}
              festivals={festivals}
              galleryItems={galleryItems}
              currentUser={currentUser}
              onUpdateProfile={handleUpdateProfile}
              onUpdateCostumes={handleUpdateCostumes}
              onUpdateArticles={handleUpdateArticles}
              onUpdateSpotlights={handleUpdateSpotlights}
              onUpdateFestivals={handleUpdateFestivals}
              onUpdateGalleryItems={handleUpdateGalleryItems}
              onResetToDefault={handleResetToDefault}
              onLogout={handleLogout}
              onSwitchToCustomer={() => handleLogin(DEMO_USERS.customer)}
            />
          ) : (
            <div className="py-16 px-4 max-w-lg mx-auto text-center">
              <div className="bg-white rounded-3xl border border-stone-200 p-8 shadow-sm">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src={logoImg}
                    alt="Logo Trang Phục Việt"
                    className="w-full h-full object-contain rounded-full"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h2 className="text-xl font-serif-cultural font-bold text-stone-900 mb-2">
                  Xác Thực Quyền Quản Trị Viên
                </h2>
                <p className="text-xs text-stone-600 mb-6 leading-relaxed">
                  Khu vực dành riêng cho Ban Quản Trị để biên tập nội dung, chỉnh sửa danh mục y phục 54 dân tộc, hình ảnh phụ kiện và bài viết di sản.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setIsAuthModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-xl bg-stone-900 hover:bg-black text-emerald-300 text-xs font-bold shadow-sm transition-all border border-emerald-500/40 cursor-pointer"
                  >
                    Đăng Nhập Tài Khoản Quản Trị Viên
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </main>

      {/* Modals & Dialogs */}
      {/* 1. Costume Detail Modal (With enhanced accessories showcase & images) */}
      {selectedCostume && (
        <CostumeDetailModal
          costume={selectedCostume}
          initialTab={costumeModalTab}
          onClose={() => setSelectedCostume(null)}
          isFavorite={favorites.includes(selectedCostume.id)}
          onToggleFavorite={toggleFavorite}
          isCompared={comparedIds.includes(selectedCostume.id)}
          onToggleCompare={toggleCompare}
        />
      )}

      {/* 2. Costume Comparator Modal */}
      {isCompareModalOpen && (
        <CostumeComparatorModal
          allCostumes={costumes}
          comparedIds={comparedIds}
          onClose={() => setIsCompareModalOpen(false)}
          onSelectCostumeDetail={(c) => {
            setIsCompareModalOpen(false);
            handleOpenCostumeDetail(c, 'overview');
          }}
        />
      )}

      {/* 3. Cultural AI Assistant Modal */}
      {isAIModalOpen && (
        <CulturalAIAssistantModal onClose={() => setIsAIModalOpen(false)} />
      )}

      {/* 4. Favorites Collection Modal */}
      {isFavoritesModalOpen && (
        <FavoritesModal
          favorites={favorites}
          allCostumes={costumes}
          onClose={() => setIsFavoritesModalOpen(false)}
          onSelectCostume={(c) => handleOpenCostumeDetail(c, 'overview')}
          onRemoveFavorite={toggleFavorite}
        />
      )}

      {/* 5. Auth / Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        currentUser={currentUser}
        onLogin={handleLogin}
        onLogout={handleLogout}
        onUpdateProfile={handleUpdateProfile}
      />

      {/* 6. Direct User / Admin Profile Edit Modal */}
      {isProfileEditModalOpen && currentUser && (
        <ProfileEditModal
          isOpen={isProfileEditModalOpen}
          onClose={() => setIsProfileEditModalOpen(false)}
          user={currentUser}
          onSave={handleUpdateProfile}
        />
      )}

      {/* Footer */}
      <Footer
        onNavigate={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenAI={() => setIsAIModalOpen(true)}
      />
    </div>
  );
}

export default App;
