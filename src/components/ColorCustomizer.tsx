
import React from 'react';
import { Palette, Move, Zap } from 'lucide-react';

export const ColorCustomizer = ({ customizations, onChange }) => {
  const colorPresets = [
    { name: 'Blue', primary: '#3b82f6', secondary: '#8b5cf6' },
    { name: 'Green', primary: '#10b981', secondary: '#06d6a0' },
    { name: 'Red', primary: '#ef4444', secondary: '#f59e0b' },
    { name: 'Purple', primary: '#8b5cf6', secondary: '#ec4899' },
    { name: 'Orange', primary: '#f59e0b', secondary: '#ef4444' },
    { name: 'Teal', primary: '#14b8a6', secondary: '#06b6d4' }
  ];

  const handlePresetClick = (preset) => {
    onChange({
      ...customizations,
      primaryColor: preset.primary,
      secondaryColor: preset.secondary
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3 flex items-center space-x-2">
          <Palette size={16} />
          <span>Colors</span>
        </h4>
        
        {/* Color Presets */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          {colorPresets.map((preset) => (
            <button
              key={preset.name}
              onClick={() => handlePresetClick(preset)}
              className="p-2 rounded-lg border hover:border-primary transition-colors"
              title={preset.name}
            >
              <div className="flex space-x-1">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: preset.primary }}
                />
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: preset.secondary }}
                />
              </div>
            </button>
          ))}
        </div>

        {/* Custom Colors */}
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Primary Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={customizations.primaryColor}
                onChange={(e) => onChange({
                  ...customizations,
                  primaryColor: e.target.value
                })}
                className="w-8 h-8 rounded border"
              />
              <input
                type="text"
                value={customizations.primaryColor}
                onChange={(e) => onChange({
                  ...customizations,
                  primaryColor: e.target.value
                })}
                className="flex-1 px-2 py-1 text-sm border rounded"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">Secondary Color</label>
            <div className="flex items-center space-x-2">
              <input
                type="color"
                value={customizations.secondaryColor}
                onChange={(e) => onChange({
                  ...customizations,
                  secondaryColor: e.target.value
                })}
                className="w-8 h-8 rounded border"
              />
              <input
                type="text"
                value={customizations.secondaryColor}
                onChange={(e) => onChange({
                  ...customizations,
                  secondaryColor: e.target.value
                })}
                className="flex-1 px-2 py-1 text-sm border rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Size Control */}
      <div>
        <h4 className="font-semibold mb-3 flex items-center space-x-2">
          <Move size={16} />
          <span>Size</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Scale: {customizations.size}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={customizations.size}
            onChange={(e) => onChange({
              ...customizations,
              size: parseFloat(e.target.value)
            })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>0.5x</span>
            <span>2x</span>
          </div>
        </div>
      </div>

      {/* Speed Control */}
      <div>
        <h4 className="font-semibold mb-3 flex items-center space-x-2">
          <Zap size={16} />
          <span>Animation Speed</span>
        </h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Speed: {customizations.speed}x</span>
          </div>
          <input
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={customizations.speed}
            onChange={(e) => onChange({
              ...customizations,
              speed: parseFloat(e.target.value)
            })}
            className="w-full"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Slow</span>
            <span>Fast</span>
          </div>
        </div>
      </div>
    </div>
  );
};
