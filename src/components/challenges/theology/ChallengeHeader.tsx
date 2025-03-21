
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import BiblePassageDialog from "@/components/challenges/BiblePassageDialog";

interface ChallengeHeaderProps {
  bookId: string;
  bookTitle: string;
  chapterTitle: string;
  author: string;
  chapter: number;
  passageText: string;
}

const ChallengeHeader = ({
  bookId,
  bookTitle,
  chapterTitle,
  author,
  chapter,
  passageText
}: ChallengeHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate(`/theology/${bookId}`)}
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <Badge variant="outline" className="font-normal">
            {author}
          </Badge>
        </div>
        <h1 className="text-2xl md:text-3xl font-serif font-bold">
          {bookTitle}: {chapterTitle}
        </h1>
      </div>
      <div className="mt-4 md:mt-0">
        <BiblePassageDialog 
          bookName={bookTitle} 
          chapter={chapter}
          passageText={passageText}
        />
      </div>
    </div>
  );
};

export default ChallengeHeader;
