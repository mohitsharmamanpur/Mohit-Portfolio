import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  item: {
    icon: React.ElementType;
    title: string;
    description: string;
    year: string;
    category: string;
    verifyLink: string;
    isBigAchievement?: boolean;
    isOracle?: boolean;
  };
  theme: 'light' | 'dark';
  gradientColors: string;
  highlightColor?: string;
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
  item,
  theme,
  gradientColors,
  highlightColor = 'blue',
}) => {
  const Icon = item.icon;
  
  return (
    <div
      className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-xl relative ${
        theme === 'dark'
          ? 'bg-gray-800/60 border-gray-700 hover:border-gray-600'
          : 'bg-white/80 border-gray-200 hover:border-gray-300'
      } ${item.isOracle ? `ring-2 ring-${highlightColor}-500/50 shadow-lg shadow-${highlightColor}-500/20` : ''}`}
    >
      {item.isBigAchievement && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center animate-bounce shadow-lg">
          <Star className="w-3 h-3 text-white" />
        </div>
      )}
      
      <div className="flex items-center gap-4 mb-4">
        <div 
          className={`p-3 rounded-lg bg-gradient-to-br ${gradientColors} shadow-md`}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>
        <span 
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            theme === 'dark' 
              ? `bg-${highlightColor}-900/30 text-${highlightColor}-300` 
              : `bg-${highlightColor}-100 text-${highlightColor}-800`
          }`}
        >
          {item.category}
        </span>
      </div>
      
      <h4 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {item.title}
        {item.isOracle && (
          <span className="ml-2 text-orange-500">★</span>
        )}
      </h4>
      
      <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {item.description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
          {item.year}
        </span>
        <a
          href={item.verifyLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-1 text-sm font-medium text-${highlightColor}-500 hover:text-${highlightColor}-400 transition-colors`}
        >
          Verify <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
