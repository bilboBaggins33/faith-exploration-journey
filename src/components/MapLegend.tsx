
import React from 'react';

const MapLegend: React.FC = () => {
  return (
    <div className="absolute bottom-4 right-4 glass-card p-3 rounded-lg shadow-md">
      <h4 className="text-sm font-semibold mb-2">Map Legend</h4>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-bible-gold border border-bible-gold/70 mr-2"></div>
          <span className="text-xs">Unlocked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-gray-400 border border-gray-300 mr-2"></div>
          <span className="text-xs">Locked</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 rounded-full bg-green-500 border border-green-400 mr-2"></div>
          <span className="text-xs">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default MapLegend;
