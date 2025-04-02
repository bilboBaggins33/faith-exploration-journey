
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Book, BookOpen, Clock } from 'lucide-react';
import { bibleBooks } from '@/data/bibleData';
import { 
  SidebarHeader, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupLabel, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton 
} from '@/components/ui/sidebar';
import { BibleBook } from '@/data/bibleData';

interface BibleSidebarProps {
  recentlyReadBooks: BibleBook[];
  currentBookId?: string;
}

const BibleSidebar = ({ recentlyReadBooks, currentBookId }: BibleSidebarProps) => {
  const navigate = useNavigate();
  
  return (
    <>
      <SidebarHeader className="mt-8">
        <div className="flex items-center px-2">
          <BookOpen className="mr-2 text-bible-blue" size={20} />
          <h3 className="font-semibold">Bible Explorer</h3>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        {recentlyReadBooks.length > 0 && (
          <SidebarGroup>
            <SidebarGroupLabel>
              <Clock size={16} className="mr-1" />
              <span>Recently Read</span>
            </SidebarGroupLabel>
            <SidebarMenu>
              {recentlyReadBooks.map(book => (
                <SidebarMenuItem key={book.id}>
                  <SidebarMenuButton
                    isActive={currentBookId === book.id} 
                    onClick={() => navigate(`/bible/${book.id}`)}
                    tooltip={`${book.name} (${book.testament === 'old' ? 'OT' : 'NT'})`}
                  >
                    <Book size={16} />
                    <span>{book.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        )}
        
        <SidebarGroup>
          <SidebarGroupLabel>
            <span>Old Testament</span>
          </SidebarGroupLabel>
          <SidebarMenu>
            {bibleBooks
              .filter(book => book.testament === 'old')
              .map(book => (
                <SidebarMenuItem key={book.id}>
                  <SidebarMenuButton 
                    isActive={currentBookId === book.id}
                    onClick={() => navigate(`/bible/${book.id}`)}
                    tooltip={`${book.name} (${book.chapters} chapters)`}
                  >
                    <Book size={16} />
                    <span>{book.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>
            <span>New Testament</span>
          </SidebarGroupLabel>
          <SidebarMenu>
            {bibleBooks
              .filter(book => book.testament === 'new')
              .map(book => (
                <SidebarMenuItem key={book.id}>
                  <SidebarMenuButton 
                    isActive={currentBookId === book.id}
                    onClick={() => navigate(`/bible/${book.id}`)}
                    tooltip={`${book.name} (${book.chapters} chapters)`}
                  >
                    <Book size={16} />
                    <span>{book.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </>
  );
};

export default BibleSidebar;
