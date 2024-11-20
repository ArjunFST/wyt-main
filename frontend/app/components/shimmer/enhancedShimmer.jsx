import React from "react";

const EnhancedShimmer = ({ className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base shimmer with curved borders */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-xl" />
      
      {/* Glowing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500 to-transparent animate-shimmer rounded-xl" />
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-sm animate-pulse rounded-xl" />
      
      {/* Content placeholder */}
      <div className="w-full h-full bg-transparent" />
    </div>
  );
};

// Add the custom animation to the existing tailwind config
const styles = {
  '.animate-shimmer': {
    animation: 'shimmer 2s infinite linear',
    backgroundSize: '200% 100%',
  },
  '@keyframes shimmer': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(100%)',
    },
  },
};

export default EnhancedShimmer;