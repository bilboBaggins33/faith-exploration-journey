import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { bibleBooks } from '@/data/bibleData';
import BibleBookCard from '@/components/bible/BibleBookCard';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { Input } from "@/components/ui/input"
import { InputGroup } from "@/components/ui/input-group"
import { Search } from 'lucide-react';

const BibleExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { progress } = useBibleProgress();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  
  const filteredBooks = bibleBooks.filter(book =>
    book.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="relative pt-24 px-4 md:px-8 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold font-serif mb-6 z-10 relative">Bible Explorer</h1>
      
      <InputGroup className="max-w-md mb-8">
        <Input
          type="search"
          placeholder="Search for a book"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="h-5 w-5 text-gray-500" />
      </InputGroup>
      
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filteredBooks.map((book) => {
          const completedChapters = progress?.completed_chapters?.filter(
            (chapter) => chapter.book_id === book.id
          ).length || 0;
          
          const progressPercent = (completedChapters / book.chapters) * 100;
          
          return (
            <motion.div key={book.id} variants={itemVariants}>
              <BibleBookCard
                bookId={book.id}
                bookName={book.name}
                totalChapters={book.chapters}
                progressPercent={Math.min(progressPercent, 100)}
                testament={book.testament}
                onClick={() => window.location.href = `/bible/${book.id}`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default BibleExplorer;
