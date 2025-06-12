
import React, { useEffect, useRef } from 'react';

export const LoaderPreview = ({ css, html, isHovered = false, size = 'md' }) => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Create style element
    const styleElement = document.createElement('style');
    styleElement.textContent = css;
    
    // Add the styles to the preview container
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(styleElement);
    
    // Create HTML content
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML = html;
    containerRef.current.appendChild(contentDiv);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, [css, html]);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div 
      ref={containerRef}
      className={`${sizeClasses[size]} flex items-center justify-center relative transition-transform duration-200 ${
        isHovered ? 'scale-110' : ''
      }`}
      style={{ 
        isolation: 'isolate',
        contain: 'style layout'
      }}
    />
  );
};
