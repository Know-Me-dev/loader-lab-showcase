
import React from 'react';
import { Heart } from 'lucide-react';
import { LoaderCard } from './LoaderCard';

export const FavoritesSection = ({ 
  favorites, 
  loaders, 
  onToggleFavorite, 
  onViewCode 
}) => {
  const favoriteLoaders = loaders.filter(loader => favorites.includes(loader.id));

  if (favoriteLoaders.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold mb-2">No favorites yet</h3>
        <p className="text-muted-foreground">
          Click the heart icon on any loader to add it to your favorites
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {favoriteLoaders.map((loader) => (
        <LoaderCard
          key={loader.id}
          loader={loader}
          isFavorite={true}
          onToggleFavorite={() => onToggleFavorite(loader.id)}
          onViewCode={() => onViewCode(loader)}
        />
      ))}
    </div>
  );
};
