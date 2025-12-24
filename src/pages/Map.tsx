import { useState } from 'react';
import MapContainer from '@/components/MapContainer';
import LocationDetailPanel from '@/components/LocationDetailPanel';
import { mapLocations } from '@/data/mapLocations';

const MapPage = () => {
  const [activeLocationId, setActiveLocationId] = useState<string | null>(null);
  const [showLocationDetail, setShowLocationDetail] = useState(false);

  const handleLocationClick = (id: string) => {
    setActiveLocationId(id);
    setShowLocationDetail(true);
  };

  const closeLocationDetail = () => {
    setShowLocationDetail(false);
  };

  const activeLocation = mapLocations.find(loc => loc.id === activeLocationId);

  return (
    <div className="flex flex-col flex-1">

      <main className="flex-1 pt-16">
        <section className="py-10 bg-bible-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-bible-dark mb-4">
                Biblical World Map
              </h1>
              <p className="max-w-3xl mx-auto text-bible-dark/80">
                Explore the stories, people, and places of the Bible. Click on locations to learn more and access challenges.
              </p>
            </div>

            <MapContainer
              locations={mapLocations}
              activeLocationId={activeLocationId}
              onLocationClick={handleLocationClick}
            />

            <div className="mt-6 flex justify-center">
              <p className="text-sm text-bible-dark/70 max-w-md text-center">
                Progress through the biblical timeline by completing challenges in each area. New locations unlock as you progress.
              </p>
            </div>
          </div>
        </section>

        {activeLocation && (
          <LocationDetailPanel
            location={activeLocation}
            isOpen={showLocationDetail}
            onClose={closeLocationDetail}
          />
        )}
      </main>
    </div>
  );
};

export default MapPage;
