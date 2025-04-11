
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import { Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TheologyBook {
  id: string;
  name: string;
  progress: number;
  author: string;
}

interface TheologyBooksCardProps {
  recentTheologyBooks: TheologyBook[];
}

const TheologyBooksCard = ({ recentTheologyBooks }: TheologyBooksCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Book className="w-5 h-5 mr-2 text-bible-blue" />
          Theology Books
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentTheologyBooks.length > 0 ? (
          <div className="space-y-4">
            {recentTheologyBooks.map(book => (
              <div key={book.id} className="flex items-center justify-between p-2 border-b last:border-0">
                <div>
                  <h3 className="font-medium">{book.name}</h3>
                  <p className="text-xs text-gray-500">{book.author}</p>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <Progress 
                      value={book.progress} 
                      className="w-24 h-2 mr-2"
                      color={book.progress === 100 ? "bg-green-500" : undefined}
                    />
                    {book.progress}% complete
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-bible-blue hover:bg-bible-deepBlue"
                  onClick={() => navigate('/theology')}
                >
                  Continue
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Book className="h-12 w-12 mx-auto text-gray-300 mb-2" />
            <p className="text-gray-500">You haven't started reading any theology books yet</p>
            <Button 
              className="mt-4 bg-bible-blue hover:bg-bible-deepBlue"
              onClick={() => navigate('/theology')}
            >
              Explore Books
            </Button>
          </div>
        )}
        
        <div className="mt-4 text-right">
          <Button variant="outline" onClick={() => navigate('/theology')}>
            View All Theology Books
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TheologyBooksCard;
