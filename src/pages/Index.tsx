import { useState, useMemo, useEffect } from 'react';
import { Search, Heart, Flame, Grid, List, User } from 'lucide-react';
import { LoaderCard } from '../components/LoaderCard';
import { CodeModal } from '../components/CodeModal';
import { FilterTabs } from '../components/FilterTabs';
import { ThemeToggle } from '../components/ThemeToggle';
import { loaderData } from '../data/loaderData';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { toast } from 'sonner';
import { AuthModal } from '../components/AuthModal';
import { UserMenu } from '../components/UserMenu';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { supabaseFavorites } from '../data/supabaseFavorites';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('all');
  const [selectedLoader, setSelectedLoader] = useState(null);
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('loader-favorites', []);
  const [viewMode, setViewMode] = useState('grid');
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [syncingFavorites, setSyncingFavorites] = useState(false);

  const { user, loading: authLoading } = useSupabaseAuth();
  
  // Sync favorites with Supabase when user logs in
  // Reset favorites when auth state changes
  useEffect(() => {
    const initializeFavorites = async () => {
      if (user) {
        setSyncingFavorites(true);
        try {
          // On login, fetch user's favorites from Supabase
          const supabaseFavs = await supabaseFavorites.getFavorites(user.id);
          setFavorites(supabaseFavs); // Replace local favorites with server favorites
        } catch (err) {
          console.error('Error fetching favorites:', err);
          toast.error('Failed to fetch favorites');
          setFavorites([]); // Reset on error
        } finally {
          setSyncingFavorites(false);
        }
      } else {
        // On logout, clear favorites
        setFavorites([]);
      }
    };

    initializeFavorites();
  }, [user]); // Only depend on user, not favorites

  // Get unique tags from all loaders
  const allTags = useMemo(() => {
    const tags = new Set();
    loaderData.forEach(loader => {
      loader.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter loaders based on search and active filter
  const filteredLoaders = useMemo(() => {
    let filtered = loaderData;

    // Filter by section
    if (activeSection === 'favorites') {
      filtered = filtered.filter(loader => favorites.includes(loader.id));
    } else if (activeSection === 'hot') {
      filtered = filtered.filter(loader => loader.isHot);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(loader => 
        loader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        loader.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by active filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(loader => loader.tags.includes(activeFilter));
    }

    return filtered;
  }, [searchTerm, activeFilter, activeSection, favorites]);

  const toggleFavorite = async (loaderId: number) => {
    if (!user) {
      toast.error("Please log in to manage your favorites");
      return;
    }

    const removing = favorites.includes(loaderId);
    
    try {
      // Update Supabase first
      const success = removing
        ? await supabaseFavorites.removeFavorite(user.id, loaderId)
        : await supabaseFavorites.addFavorite(user.id, loaderId);

      if (!success) throw new Error('Failed to update favorite');

      // Then update local state
      setFavorites((prev: number[]) => {
        const newFavorites = removing
          ? prev.filter((id: number) => id !== loaderId)
          : [...prev, loaderId];
        return newFavorites;
      });
      
      toast.success(
        removing ? 'Removed from favorites' : 'Added to favorites',
        { duration: 2000 }
      );
    } catch (err) {
      console.error('Error updating favorite:', err);
      toast.error('Failed to update favorite');
    }
  };

  const openCodeModal = (loader: typeof loaderData[number]) => {
    setSelectedLoader(loader);
    setIsCodeModalOpen(true);
  };

  const hotLoaders = loaderData.filter(loader => loader.isHot);
  const favoriteLoaders = loaderData.filter(loader => favorites.includes(loader.id));

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Loader Gallery
                </h1>
                <p className="text-sm text-muted-foreground">Beautiful CSS loaders & animations</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
                title={`Switch to ${viewMode === 'grid' ? 'list' : 'grid'} view`}
              >
                {viewMode === 'grid' ? <List size={20} /> : <Grid size={20} />}
              </button>
                {!authLoading && (
                user ? (
                  <UserMenu 
                    user={user} 
                    onLogout={() => {
                      setFavorites([]); // Clear favorites on logout
                      setSyncingFavorites(false);
                    }} 
                  />
                ) : (
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="p-2 rounded-lg hover:bg-accent transition-colors flex items-center gap-1"
                    title="Login or Sign Up"
                  >
                    <User size={18} />
                    <span className="hidden sm:inline">Login</span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search loaders by name or tag..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
            />
          </div>

          {/* Section Navigation */}
          <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
            {[
              { id: 'all', label: 'All Loaders', icon: Grid },
              { id: 'hot', label: `Hot (${hotLoaders.length})`, icon: Flame },
              { id: 'favorites', label: `Favorites (${favoriteLoaders.length})`, icon: Heart }
            ].map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeSection === section.id
                      ? 'bg-background text-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon size={16} />
                  <span>{section.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* Filter Tabs */}
      <div className="container mx-auto px-4 py-4">
        <FilterTabs
          tags={allTags}
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {filteredLoaders.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No loaders found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredLoaders.map((loader) => (
              <LoaderCard
                key={loader.id}
                loader={loader}
                isFavorite={favorites.includes(loader.id)}
                onToggleFavorite={() => toggleFavorite(loader.id)}
                onViewCode={() => openCodeModal(loader)}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {/* Results Summary */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Showing {filteredLoaders.length} of {loaderData.length} loaders
          </p>
        </div>
      </main>

      {/* Code Modal */}
      <CodeModal
        loader={selectedLoader}
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
      />

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onAuthSuccess={() => setShowAuthModal(false)}
      />
    </div>
  );
};

export default Index;
