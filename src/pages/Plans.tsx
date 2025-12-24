import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookText, Calendar, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { getTodaysReading } from '@/data/bible/reading-plans/mcheyne';
import { getTodaysBibleInYearReading } from '@/data/bible/reading-plans/bible-in-year';
import { bibleBooks } from '@/data/bible/books';
import { format } from 'date-fns';

const Plans = () => {
  const navigate = useNavigate();
  const todaysMcheyneReadings = getTodaysReading();
  const todaysBibleInYearReadings = getTodaysBibleInYearReading();

  const handleReadingClick = (bookId: string, chapter: number) => {
    navigate(`/bible/${bookId}/${chapter}`);
  };

  const getBookName = (bookId: string) => {
    return bibleBooks.find(b => b.id === bookId)?.name || bookId;
  };

  return (
    <div className="flex flex-col min-h-screen">

      <main className="flex-grow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-bible-dark mb-4">
              Reading Plans
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover structured approaches to reading through Scripture with our carefully curated reading plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* M'Cheyne Plan */}
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <Calendar className="h-8 w-8 text-bible-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold mb-2">M'Cheyne Reading Plan</h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    Read through the New Testament and Psalms twice, and the Old Testament once in a year.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-bible-dark">
                  Today's Readings ({format(new Date(), 'MMMM d')})
                </h3>
                {todaysMcheyneReadings.length > 0 ? (
                  <div className="space-y-2">
                    {todaysMcheyneReadings.map((reading, index) => (
                      <div
                        key={`${reading.bookId}-${reading.chapter}`}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                        onClick={() => handleReadingClick(reading.bookId, reading.chapter)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-bible-blue/10 flex items-center justify-center text-xs font-medium text-bible-blue">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{getBookName(reading.bookId)}</p>
                            <p className="text-xs text-gray-600">Chapter {reading.chapter}</p>
                          </div>
                        </div>
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No readings available for today</p>
                )}
              </div>

              <Button asChild className="w-full">
                <Link to="/daily-reading" className="flex items-center justify-center gap-2">
                  <BookText className="h-4 w-4" />
                  View Full Plan
                </Link>
              </Button>
            </Card>

            {/* Bible in a Year Plan */}
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <BookOpen className="h-8 w-8 text-bible-blue flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold mb-2">Bible in a Year</h2>
                  <p className="text-gray-600 mb-4 text-sm">
                    Read through the entire Bible sequentially from Genesis to Revelation.
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-bible-dark">
                  Today's Readings ({format(new Date(), 'MMMM d')})
                </h3>
                {todaysBibleInYearReadings.length > 0 ? (
                  <div className="space-y-2">
                    {todaysBibleInYearReadings.map((reading, index) => (
                      <div
                        key={`${reading.bookId}-${reading.chapter}`}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                        onClick={() => handleReadingClick(reading.bookId, reading.chapter)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-bible-blue/10 flex items-center justify-center text-xs font-medium text-bible-blue">
                            {index + 1}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{getBookName(reading.bookId)}</p>
                            <p className="text-xs text-gray-600">Chapter {reading.chapter}</p>
                          </div>
                        </div>
                        <BookOpen className="h-4 w-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-gray-500">No readings available for today</p>
                )}
              </div>

              <Button variant="outline" className="w-full" disabled>
                <span className="flex items-center justify-center gap-2">
                  <BookText className="h-4 w-4" />
                  Coming Soon
                </span>
              </Button>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Plans;
