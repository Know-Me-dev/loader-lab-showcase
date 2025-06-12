
import React, { useState } from 'react';
import { Heart, Eye, Copy, Flame } from 'lucide-react';
import { LoaderPreview } from './LoaderPreview';

export const LoaderCard = ({ 
  loader, 
  isFavorite, 
  onToggleFavorite, 
  onViewCode,
  viewMode = 'grid' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleCopyCSS = async (e) => {
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(loader.css);
      // Toast notification handled by parent
    } catch (err) {
      console.error('Failed to copy CSS:', err);
    }
  };

  if (viewMode === 'list') {
    return (
      <div 
        className="group relative bg-card border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 w-24 h-24 bg-muted rounded-lg flex items-center justify-center">
            <LoaderPreview 
              css={loader.css} 
              html={loader.html}
              size="sm"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold truncate">{loader.name}</h3>
              {loader.isHot && (
                <Flame className="w-4 h-4 text-orange-500" title="Hot loader" />
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {loader.description}
            </p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {loader.tags.slice(0, 4).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
                >
                  {tag}
                </span>
              ))}
              {loader.tags.length > 4 && (
                <span className="px-2 py-1 text-xs text-muted-foreground">
                  +{loader.tags.length - 4}
                </span>
              )}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyCSS}
              className="p-2 rounded-lg hover:bg-accent transition-colors opacity-0 group-hover:opacity-100"
              title="Copy CSS"
            >
              <Copy size={16} />
            </button>
            
            <button
              onClick={() => onViewCode()}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              title="View & customize code"
            >
              <Eye size={16} />
            </button>
            
            <button
              onClick={onToggleFavorite}
              className={`p-2 rounded-lg transition-all ${
                isFavorite 
                  ? 'text-red-500 hover:text-red-600' 
                  : 'text-muted-foreground hover:text-red-500'
              }`}
              title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Heart 
                size={16} 
                className={isFavorite ? 'fill-current' : ''} 
              />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Preview Area */}
      <div className="aspect-square bg-muted/50 flex items-center justify-center p-8 relative">
        {loader.isHot && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
            <Flame size={10} />
            Hot
          </div>
        )}
        
        <LoaderPreview 
          css={loader.css} 
          html={loader.html}
          isHovered={isHovered}
        />
        
        {/* Quick Actions Overlay */}
        <div className={`absolute inset-0 bg-black/20 flex items-center justify-center gap-2 transition-opacity duration-200 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <button
            onClick={handleCopyCSS}
            className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
            title="Copy CSS"
          >
            <Copy size={16} className="text-gray-800" />
          </button>
          
          <button
            onClick={onViewCode}
            className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all hover:scale-110"
            title="View & customize code"
          >
            <Eye size={16} className="text-gray-800" />
          </button>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-sm truncate flex-1">{loader.name}</h3>
          <button
            onClick={onToggleFavorite}
            className={`p-1 rounded transition-all ml-2 ${
              isFavorite 
                ? 'text-red-500 hover:text-red-600' 
                : 'text-muted-foreground hover:text-red-500'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart 
              size={16} 
              className={isFavorite ? 'fill-current' : ''} 
            />
          </button>
        </div>
        
        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
          {loader.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1">
          {loader.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
          {loader.tags.length > 3 && (
            <span className="px-2 py-1 text-xs text-muted-foreground">
              +{loader.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
