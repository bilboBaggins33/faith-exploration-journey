
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SidebarTrigger } from '@/components/ui/sidebar';

interface BibleBookHeaderProps {
  selectedBook?: { id: string; name: string };
  onBackClick: () => void;
}

const BibleBookHeader: React.FC<BibleBookHeaderProps> = ({
  selectedBook,
  onBackClick
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      {selectedBook ? (
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onBackClick}
            className="mr-2"
          >
            <ArrowLeft size={16} className="mr-1" />
            Back
          </Button>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark">
            {selectedBook.name}
          </h1>
        </div>
      ) : (
        <h1 className="text-2xl md:text-3xl font-serif font-bold text-bible-dark">
          Bible Books
        </h1>
      )}
      <SidebarTrigger className="md:hidden" />
    </div>
  );
};

export default BibleBookHeader;
