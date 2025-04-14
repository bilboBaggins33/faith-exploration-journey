
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import { bibleBooks } from '@/data/bible/books';
import { getTodaysReading, getReadingForDate } from '@/data/bible/reading-plans/mcheyne';
import { BibleReading } from '@/data/bible/types';
import { useBibleProgress } from '@/hooks/use-bible-progress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, BookText, CheckCircle, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from 'date-fns';

interface ReadingItemProps {
  reading: BibleReading;
  index: number;
  isCompleted: boolean;
  onClick: () => void;
}

const ReadingItem = ({ reading, index, isCompleted, onClick }: ReadingItemProps) => {
  const book = bibleBooks.find(b => b.id === reading.bookId);

  return (
    <div 
      className={`flex items-center justify-between p-4 rounded-lg mb-2 cursor-pointer transition-all
        ${isCompleted ? 'bg-green-50 border border-green-200' : 'bg-gray-50 hover:bg-gray-100'}`}
      onClick={onClick}
    >
      <div className="flex items-center flex-1">
        <div className="w-8 h-8 rounded-full bg-bible-blue/10 flex items-center justify-center mr-3 text-sm font-medium">
          {index + 1}
        </div>
        <div>
          <h4 className="font-medium text-lg">{book?.name || reading.bookId}</h4>
          <p className="text-sm text-gray-600">
            Chapter {reading.chapter}
            {isCompleted && (
              <span className="inline-flex items-center text-green-600 ml-2">
                <CheckCircle className="h-4 w-4 mr-1" />
                Completed
              </span>
            )}
          </p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="ml-4">
        <BookOpen className="h-4 w-4 mr-2" />
        {isCompleted ? 'Review' : 'Read'}
      </Button>
    </div>
  );
};

const DailyReadingPlan = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [open, setOpen] = useState(false);
  const { getChapterStatus } = useBibleProgress();
  
  const readings = selectedDate ? getReadingForDate(selectedDate) : getTodaysReading();
  const todaysReadings = getTodaysReading();
  const isToday = selectedDate && format(selectedDate, 'MM-dd') === format(new Date(), 'MM-dd');
  
  const navigateToChapter = (bookId: string, chapter: number) => {
    navigate(`/challenge/bible/${bookId}/${chapter}`);
  };
  
  const getCompletionStatus = (bookId: string, chapter: number) => {
    const { isCompleted } = getChapterStatus(bookId, chapter);
    return isCompleted;
  };
  
  const getTodayCompletionPercentage = () => {
    if (!todaysReadings.length) return 0;
    
    const completedCount = todaysReadings.filter(reading => 
      getCompletionStatus(reading.bookId, reading.chapter)
    ).length;
    
    return Math.round((completedCount / todaysReadings.length) * 100);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-serif">M'Cheyne Reading Plan</CardTitle>
            <CardDescription>Readings for {format(selectedDate, 'MMMM d, yyyy')}</CardDescription>
          </div>
          
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                Change Date
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) => {
                  setSelectedDate(date || new Date());
                  setOpen(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        
        {isToday && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Today's Progress</span>
              <span className="text-sm font-medium">{getTodayCompletionPercentage()}%</span>
            </div>
            <Progress value={getTodayCompletionPercentage()} className="h-2" />
            <p className="text-sm text-gray-500 mt-2">
              {todaysReadings.filter(r => getCompletionStatus(r.bookId, r.chapter)).length} of {todaysReadings.length} readings completed
            </p>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        {readings.length > 0 ? (
          <div className="space-y-2">
            {readings.map((reading, index) => (
              <ReadingItem
                key={`${reading.bookId}-${reading.chapter}`}
                reading={reading}
                index={index}
                isCompleted={getCompletionStatus(reading.bookId, reading.chapter)}
                onClick={() => navigateToChapter(reading.bookId, reading.chapter)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-6">
            <BookText className="mx-auto h-12 w-12 text-gray-300 mb-3" />
            <p className="text-gray-500">No readings available for this date</p>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setSelectedDate(new Date())}
          disabled={isToday}
        >
          Today's Reading
        </Button>
        
        {isToday && (
          <Badge variant="outline" className="ml-auto">
            {format(new Date(), 'MMMM d')}
          </Badge>
        )}
      </CardFooter>
    </Card>
  );
};

export default DailyReadingPlan;
