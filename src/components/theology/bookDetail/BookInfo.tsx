
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface BookInfoProps {
  title: string;
  author: string;
  year: number;
  category: string;
  chaptersCount: number;
  description: string;
}

const BookInfo: React.FC<BookInfoProps> = ({
  title,
  author,
  year,
  category,
  chaptersCount,
  description
}) => {
  return (
    <div>
      <div className="flex justify-between items-start mb-6">
        <div>
          <Badge variant="outline" className="mb-3">{category}</Badge>
          <h2 className="text-2xl font-bold mb-1">{title}</h2>
          <p className="text-gray-600">by {author}, {year}</p>
        </div>
        <Badge className="bg-blue-500">{chaptersCount} chapters</Badge>
      </div>
      
      <p className="text-gray-700 mb-6">{description}</p>
    </div>
  );
};

export default BookInfo;
