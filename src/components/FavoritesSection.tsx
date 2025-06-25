import React, { useEffect, useState } from 'react';
import { loaderData } from '../data/loaderData';
import { LoaderCard } from './LoaderCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useSupabaseAuth } from '../hooks/useSupabaseAuth';
import { supabaseFavorites } from '../data/supabaseFavorites';
import { toast } from 'sonner';

export const FavoritesSection = () => {
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const { user } = useSupabaseAuth();
  const [loading, setLoading] = useState(false);

  // Sync with Supabase when user logs in
  useEffect(() => {
    const syncFavorites = async () => {
      if (user) {
        setLoading(true);
        try {
          // Get favorites from Supabase
          const supabaseFavs = await supabaseFavorites.getFavorites(user.id);
          // Merge with local favorites
          const mergedFavs = await supabaseFavorites.syncFavorites(user.id, favorites);
          setFavorites(mergedFavs);
        } catch (err) {
          console.error('Error syncing favorites:', err);
          toast.error('Failed to sync favorites');
        } finally {
          setLoading(false);
        }
      }
    };

    syncFavorites();
  }, [user]);

  const toggleFavorite = async (loaderId: number) => {
    let newFavorites: number[];
    const removing = favorites.includes(loaderId);

    try {
      if (user) {
        // Update Supabase first
        const success = removing
          ? await supabaseFavorites.removeFavorite(user.id, loaderId)
          : await supabaseFavorites.addFavorite(user.id, loaderId);

        if (!success) throw new Error('Failed to update favorite');
      }

      // Then update local state
      newFavorites = removing
        ? favorites.filter(id => id !== loaderId)
        : [...favorites, loaderId];
      
      setFavorites(newFavorites);
      
      toast.success(removing ? 'Removed from favorites' : 'Added to favorites');
    } catch (err) {
      console.error('Error updating favorite:', err);
      toast.error('Failed to update favorite');
    }
  };

  const favoriteLoaders = loaderData.filter(loader => favorites.includes(loader.id));

  if (loading) {
    return (
      <div className="p-4 flex items-center justify-center min-h-[200px]">
        <div className="animate-spin w-6 h-6 border-2 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Favorite Loaders</h2>
      {favoriteLoaders.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-sm text-muted-foreground mb-2">No favorites added yet.</p>
          <p className="text-xs text-muted-foreground">
            Click the heart icon on any loader to add it to your favorites
          </p>
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {favoriteLoaders.map(loader => (
            <LoaderCard
              key={loader.id}
              loader={loader}
              isFavorite={favorites.includes(loader.id)}
              onToggleFavorite={() => toggleFavorite(loader.id)}
              onViewCode={() => {}} 
              viewMode="grid"
            />
          ))}
        </div>
      )}
    </div>
  );
};
