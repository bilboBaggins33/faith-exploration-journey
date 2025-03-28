
import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BibleSearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  activeTestament: string;
  setActiveTestament: (testament: string) => void;
}

const BibleSearch: React.FC<BibleSearchProps> = ({
  searchTerm,
  setSearchTerm,
  activeTestament,
  setActiveTestament
}) => {
  return (
    <>
      <div className="relative mb-4">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </InputGroup>
      </div>
      
      <Tabs defaultValue={activeTestament} onValueChange={setActiveTestament} className="mb-4">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="old">Old Testament</TabsTrigger>
          <TabsTrigger value="new">New Testament</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
};

export default BibleSearch;
