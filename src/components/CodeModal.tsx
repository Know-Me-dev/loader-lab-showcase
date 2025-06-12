
import React, { useState, useEffect } from 'react';
import { X, Copy, Download, Palette, Settings, Eye } from 'lucide-react';
import { LoaderPreview } from './LoaderPreview';
import { ColorCustomizer } from './ColorCustomizer';
import { toast } from 'sonner';

export const CodeModal = ({ loader, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('preview');
  const [customizedCSS, setCustomizedCSS] = useState('');
  const [customizedHTML, setCustomizedHTML] = useState('');
  const [customizations, setCustomizations] = useState({
    primaryColor: '#3b82f6',
    secondaryColor: '#8b5cf6',
    size: 1,
    speed: 1
  });

  useEffect(() => {
    if (loader) {
      setCustomizedCSS(loader.css);
      setCustomizedHTML(loader.html);
      // Reset customizations when loader changes
      setCustomizations({
        primaryColor: '#3b82f6',
        secondaryColor: '#8b5cf6',
        size: 1,
        speed: 1
      });
    }
  }, [loader]);

  useEffect(() => {
    if (!loader) return;

    let modifiedCSS = loader.css;
    
    // Apply color customizations
    modifiedCSS = modifiedCSS.replace(/#3b82f6|#blue-500|blue/g, customizations.primaryColor);
    modifiedCSS = modifiedCSS.replace(/#8b5cf6|#purple-500|purple/g, customizations.secondaryColor);
    
    // Apply size customizations
    if (customizations.size !== 1) {
      modifiedCSS = modifiedCSS.replace(/(\d+)px/g, (match, size) => {
        return `${Math.round(parseInt(size) * customizations.size)}px`;
      });
    }
    
    // Apply speed customizations
    if (customizations.speed !== 1) {
      modifiedCSS = modifiedCSS.replace(/(\d*\.?\d+)s/g, (match, duration) => {
        return `${(parseFloat(duration) / customizations.speed).toFixed(2)}s`;
      });
    }

    setCustomizedCSS(modifiedCSS);
  }, [customizations, loader]);

  const handleCopy = async (content, type) => {
    try {
      await navigator.clipboard.writeText(content);
      toast.success(`${type} copied to clipboard!`);
    } catch (err) {
      toast.error(`Failed to copy ${type}`);
    }
  };

  const handleExport = (format) => {
    let content = '';
    let filename = '';

    switch (format) {
      case 'css':
        content = customizedCSS;
        filename = `${loader.name.toLowerCase().replace(/\s+/g, '-')}.css`;
        break;
      case 'html':
        content = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${loader.name}</title>
    <style>
${customizedCSS}
    </style>
</head>
<body>
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: #f3f4f6;">
        ${customizedHTML}
    </div>
</body>
</html>`;
        filename = `${loader.name.toLowerCase().replace(/\s+/g, '-')}.html`;
        break;
      case 'react':
        content = `import React from 'react';
import './loader.css';

const ${loader.name.replace(/\s+/g, '')}Loader = () => {
  return (
    <div className="loader-container">
      ${customizedHTML}
    </div>
  );
};

export default ${loader.name.replace(/\s+/g, '')}Loader;`;
        filename = `${loader.name.replace(/\s+/g, '')}Loader.jsx`;
        break;
    }

    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast.success(`${format.toUpperCase()} file downloaded!`);
  };

  if (!isOpen || !loader) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-bold">{loader.name}</h2>
            <p className="text-sm text-muted-foreground">{loader.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          {[
            { id: 'preview', label: 'Preview & Customize', icon: Eye },
            { id: 'css', label: 'CSS Code', icon: Settings },
            { id: 'html', label: 'HTML Code', icon: Copy }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex h-96">
          {activeTab === 'preview' && (
            <>
              {/* Preview */}
              <div className="flex-1 bg-muted/20 flex items-center justify-center p-8">
                <div className="bg-background rounded-xl p-8 shadow-lg">
                  <LoaderPreview 
                    css={customizedCSS} 
                    html={customizedHTML}
                    size="lg"
                  />
                </div>
              </div>
              
              {/* Customization Panel */}
              <div className="w-80 border-l p-6 overflow-y-auto">
                <ColorCustomizer
                  customizations={customizations}
                  onChange={setCustomizations}
                />
                
                {/* Export Options */}
                <div className="mt-6 pt-6 border-t">
                  <h4 className="font-semibold mb-3">Export Options</h4>
                  <div className="space-y-2">
                    {['css', 'html', 'react'].map((format) => (
                      <button
                        key={format}
                        onClick={() => handleExport(format)}
                        className="w-full p-2 text-left text-sm border rounded-lg hover:bg-accent transition-colors flex items-center justify-between"
                      >
                        <span>Export as {format.toUpperCase()}</span>
                        <Download size={14} />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {(activeTab === 'css' || activeTab === 'html') && (
            <div className="flex-1 relative">
              <div className="absolute top-4 right-4 z-10">
                <button
                  onClick={() => handleCopy(
                    activeTab === 'css' ? customizedCSS : customizedHTML,
                    activeTab.toUpperCase()
                  )}
                  className="p-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
                >
                  <Copy size={16} />
                  <span>Copy</span>
                </button>
              </div>
              <pre className="h-full p-6 bg-muted/50 overflow-auto text-sm font-mono">
                <code>
                  {activeTab === 'css' ? customizedCSS : customizedHTML}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
