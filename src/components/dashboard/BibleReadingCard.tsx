
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookProgress {
  id: string;
  name: string;
  progress: number;
}

interface BibleReadingCardProps {
  recentlyReadBooks: BookProgress[];
}

const BibleReadingCard = ({ recentlyReadBooks }: BibleReadingCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="mb-6 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <BookOpen className="w-5 h-5 mr-2 text-bible-blue" />
          Bible Reading
        </CardTitle>
      </CardHeader>
      <CardContent>
        {recentlyReadBooks.length > 0 ? (
          <div className="space-y-4">
            {recentlyReadBooks.map(book => (
              <div key={book.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50/80 transition-colors duration-200 border-b last:border-0">
                <div>
                  <h3 className="font-medium">{book.name}</h3>
                  <div className="flex items-center text-sm text-gray-500">
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
                  onClick={() => navigate(`/bible/${book.id}`)}
                >
                  Continue
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <BookOpen className="h-12 w-12 mx-auto text-gray-300 mb-2" />
            <p className="text-gray-500">You haven't started reading yet</p>
            <Button
              className="mt-4 bg-bible-blue hover:bg-bible-deepBlue"
              onClick={() => navigate('/bible')}
            >
              Start Reading
            </Button>
          </div>
        )}

        <div className="mt-4 text-right">
          <Button variant="outline" onClick={() => navigate('/bible')}>
            View All Bible Books
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BibleReadingCard;
