
import React from 'react';
import MapLocation from '@/components/MapLocation';
import MapLegend from '@/components/MapLegend';
import { MapLocationData } from '@/data/mapLocations';

interface MapContainerProps {
  locations: MapLocationData[];
  activeLocationId: string | null;
  onLocationClick: (id: string) => void;
}

const MapContainer: React.FC<MapContainerProps> = ({ 
  locations, 
  activeLocationId, 
  onLocationClick 
}) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Map Container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-xl bg-bible-beige">
        {/* Map Background */}
        <img 
          src="https://images.unsplash.com/photo-1624383228539-c1d7b592fe21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          alt="Biblical World Map Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        
        {/* Map Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-bible-beige/20 to-bible-gold/20"></div>
        
        {/* Locations */}
        {locations.map(location => (
          <MapLocation
            key={location.id}
            id={location.id}
            title={location.title}
            description={location.description}
            position={location.position}
            status={location.status}
            onClick={onLocationClick}
            isActive={location.id === activeLocationId}
          />
        ))}
      </div>
      
      <MapLegend />
    </div>
  );
};

export default MapContainer;
