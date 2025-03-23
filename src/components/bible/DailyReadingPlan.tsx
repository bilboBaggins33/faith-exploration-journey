
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
import { CalendarIcon, BookOpen, CheckCircle } from 'lucide-react';
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
      className={`flex items-center justify-between p-3 rounded-lg mb-2 cursor-pointer
        ${isCompleted ? 'bg-green-50 border border-green-200' : 'bg-gray-50 hover:bg-gray-100'}`}
      onClick={onClick}
    >
      <div className="flex items-center">
        <div className="w-6 h-6 rounded-full bg-bible-blue/10 flex items-center justify-center mr-3 text-xs font-medium">
          {index + 1}
        </div>
        <div>
          <h4 className="font-medium">{book?.name || reading.bookId}</h4>
          <p className="text-sm text-gray-500">Chapter {reading.chapter}</p>
        </div>
      </div>
      {isCompleted && (
        <CheckCircle className="h-5 w-5 text-green-500" />
      )}
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
    <Card className="mb-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-serif">M'Cheyne Reading Plan</CardTitle>
            <CardDescription>Read through the Bible in one year</CardDescription>
          </div>
          
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <CalendarIcon className="h-4 w-4" />
                {selectedDate ? format(selectedDate, 'PPP') : 'Select date'}
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
          <div className="mt-2">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">Today's progress</span>
              <span className="text-sm">{getTodayCompletionPercentage()}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-bible-blue rounded-full"
                style={{ width: `${getTodayCompletionPercentage()}%` }}
              ></div>
            </div>
          </div>
        )}
      </CardHeader>
      
      <CardContent>
        {readings.length > 0 ? (
          <div className="space-y-1">
            {readings.map((reading, index) => {
              const isCompleted = getCompletionStatus(reading.bookId, reading.chapter);
              
              return (
                <ReadingItem
                  key={`${reading.bookId}-${reading.chapter}`}
                  reading={reading}
                  index={index}
                  isCompleted={isCompleted}
                  onClick={() => navigateToChapter(reading.bookId, reading.chapter)}
                />
              );
            })}
          </div>
        ) : (
          <div className="text-center py-6">
            <BookOpen className="mx-auto h-12 w-12 text-gray-300 mb-3" />
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
