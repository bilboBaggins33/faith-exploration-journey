import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { bibleBooks, bibleChapters, sampleChapterChallenges } from '@/data/bibleData';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { InputGroup } from '@/components/ui/input-group';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Book, Search, BookOpen, 
  ChevronRight, BookMarked, 
  ChevronDown, Clock, ArrowRight,
  ArrowLeft, ArrowLeftCircle, ArrowRightCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import BibleChapterCard from '@/components/bible/BibleChapterCard';
import BibleBookCard from '@/components/bible/BibleBookCard';
import BibleBooksList from '@/components/bible/BibleBooksList';
import { useIsMobile } from '@/hooks/use-mobile';
import { getBookImage } from '@/data/bible/book-images';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator, 
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarInset,
  SidebarTrigger
} from '@/components/ui/sidebar';

const BibleExplorer = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTestament, setActiveTestament] = useState('all');
  const { progress, loading, getBookProgress, getChapterStatus } = useBibleProgress();
  const isMobile = useIsMobile();
  
  const selectedBook = bibleBooks.find(book => book.id === bookId);
  const bookChapters = selectedBook 
    ? Array.from({ length: selectedBook.chapters }, (_, i) => i + 1)
    : [];
  
  const recentlyReadBooks = useMemo(() => {
    if (!progress || !progress.completed_chapters || progress.completed_chapters.length === 0) {
      return [];
    }

    const bookIds = progress.completed_chapters
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime())
      .map(chapter => chapter.book_id)
      .filter((id, index, self) => self.indexOf(id) === index)
      .slice(0, 5);

    return bookIds.map(id => bibleBooks.find(book => book.id === id))
      .filter(book => book !== undefined) as typeof bibleBooks;
  }, [progress]);

  const navigateToAdjacentBook = (direction: 'prev' | 'next') => {
    if (!selectedBook) return;
    
    const currentIndex = bibleBooks.findIndex(book => book.id === selectedBook.id);
    if (currentIndex === -1) return;
    
    const newIndex = direction === 'prev' 
      ? (currentIndex - 1 + bibleBooks.length) % bibleBooks.length 
      : (currentIndex + 1) % bibleBooks.length;
      
    navigate(`/bible/${bibleBooks[newIndex].id}`);
  };

  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };

  const handleBookChange = (value: string) => {
    navigate(`/bible/${value}`);
  };

  const getRecentChapter = (bookId: string) => {
    if (!progress || !progress.completed_chapters) return 1;

    const bookChapters = progress.completed_chapters
      .filter(chapter => chapter.book_id === bookId)
      .sort((a, b) => new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime());

    return bookChapters.length > 0 ? bookChapters[0].chapter : 1;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <SidebarProvider defaultOpen={!isMobile}>
        <div className="flex-1 flex w-full pt-24">
          <Sidebar variant="inset" collapsible="icon">
            <SidebarHeader className="mt-2">
              <div className="flex items-center px-2">
                <BookOpen className="mr-2 text-bible-blue" size={20} />
                <h3 className="font-semibold">Bible Explorer</h3>
              </div>
            </SidebarHeader>
            
            <SidebarContent>
              {!loading && recentlyReadBooks.length > 0 && (
                <SidebarGroup>
                  <SidebarGroupLabel>
                    <Clock size={16} className="mr-1" />
                    <span>Recently Read</span>
                  </SidebarGroupLabel>
                  <SidebarMenu>
                    {recentlyReadBooks.map(book => (
                      <SidebarMenuItem key={book.id}>
                        <SidebarMenuButton
                          isActive={bookId === book.id} 
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
                          isActive={bookId === book.id}
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
                          isActive={bookId === book.id}
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
          </Sidebar>
          
          <SidebarInset className="p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                {selectedBook ? (
                  <div className="flex items-center">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => navigate('/bible')}
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
              
              {isMobile && !selectedBook && (
                <div className="mb-6 sticky top-24 z-10 bg-background">
                  <Select onValueChange={handleBookChange} value={bookId || "select-book"}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a book" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="old-testament-header" disabled className="font-bold">
                        Old Testament
                      </SelectItem>
                      {bibleBooks
                        .filter(book => book.testament === 'old')
                        .map(book => (
                          <SelectItem key={book.id} value={book.id}>
                            {book.name}
                          </SelectItem>
                        ))}
                      
                      <SelectItem value="new-testament-header" disabled className="font-bold">
                        New Testament
                      </SelectItem>
                      {bibleBooks
                        .filter(book => book.testament === 'new')
                        .map(book => (
                          <SelectItem key={book.id} value={book.id}>
                            {book.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              {!isMobile && !selectedBook && (
                <div className="mb-6">
                  <div className="glass-card p-5 rounded-xl mb-6">
                    <h2 className="text-xl font-bold mb-3">Continue Reading</h2>
                    {recentlyReadBooks.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recentlyReadBooks.slice(0, 3).map(book => {
                          const recentChapter = getRecentChapter(book.id);
                          return (
                            <motion.div
                              key={book.id}
                              whileHover={{ y: -5 }}
                              className="bg-white shadow-sm rounded-lg overflow-hidden flex flex-col cursor-pointer"
                              onClick={() => navigateToChapter(book.id, recentChapter)}
                            >
                              <AspectRatio ratio={16/9} className="bg-muted">
                                <img 
                                  src={getBookImage(book.id)} 
                                  alt={`${book.name} book cover`}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = '/placeholder.svg';
                                  }}
                                />
                              </AspectRatio>
                              <div className="p-4 flex items-center justify-between">
                                <div>
                                  <h3 className="font-medium">{book.name}</h3>
                                  <p className="text-xs text-gray-500">Chapter {recentChapter}</p>
                                </div>
                                <Button variant="ghost" size="icon">
                                  <ArrowRight size={16} />
                                </Button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        Start reading the Bible to see your recent books here.
                      </p>
                    )}
                  </div>
                  
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
                  
                  <Tabs defaultValue="all" onValueChange={setActiveTestament} className="mb-4">
                    <TabsList className="grid grid-cols-3 w-full">
                      <TabsTrigger value="all">All</TabsTrigger>
                      <TabsTrigger value="old">Old Testament</TabsTrigger>
                      <TabsTrigger value="new">New Testament</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              )}
              
              {selectedBook ? (
                <div className="glass-card rounded-xl overflow-hidden">
                  <div className="relative">
                    <AspectRatio ratio={16/9} className="bg-muted">
                      <img 
                        src={getBookImage(selectedBook.id)} 
                        alt={`${selectedBook.name} book cover`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                      
                      <div className="absolute inset-0 flex items-center justify-between px-3">
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => navigateToAdjacentBook('prev')}
                          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
                        >
                          <ArrowLeftCircle className="text-white" size={24} />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          onClick={() => navigateToAdjacentBook('next')}
                          className="bg-white/20 hover:bg-white/40 backdrop-blur-sm transition-colors h-10 w-10 rounded-full"
                        >
                          <ArrowRightCircle className="text-white" size={24} />
                        </Button>
                      </div>
                    </AspectRatio>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-2xl font-serif font-bold text-white flex items-center">
                        <BookMarked className="mr-2 text-white" />
                        {selectedBook.name}
                      </h2>
                      <p className="text-white/80">
                        {selectedBook.testament === 'old' ? 'Old Testament' : 'New Testament'} • 
                        {selectedBook.chapters} chapters
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {bookChapters.map(chapter => {
                        const { isCompleted, score, maxScore } = getChapterStatus(selectedBook.id, chapter);
                        
                        return (
                          <div key={chapter} className="w-full aspect-square">
                            <BibleChapterCard
                              bookId={selectedBook.id}
                              chapter={chapter}
                              isCompleted={isCompleted}
                              score={score}
                              maxScore={maxScore}
                              onClick={() => navigateToChapter(selectedBook.id, chapter)}
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                <BibleBooksList 
                  books={bibleBooks}
                  getBookProgress={getBookProgress}
                  searchTerm={searchTerm}
                  activeTestament={activeTestament}
                  isMobile={isMobile}
                />
              )}
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
      
      <Footer />
    </div>
  );
};

export default BibleExplorer;
