
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { CalendarDays, Clock } from 'lucide-react';

const DailyReadingCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="mt-6 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <CalendarDays className="w-5 h-5 mr-2 text-bible-blue" />
          Daily Reading Plan
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="p-2 bg-gray-50 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-bible-blue/10 text-bible-blue p-1 rounded mr-3">
                <Clock className="h-4 w-4" />
              </div>
              <span>Genesis 1</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/bible/GEN/1">
                Read
              </Link>
            </Button>
          </div>
          <div className="p-2 bg-gray-50 rounded-md flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-bible-blue/10 text-bible-blue p-1 rounded mr-3">
                <Clock className="h-4 w-4" />
              </div>
              <span>Matthew 1</span>
            </div>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/bible/MAT/1">
                Read
              </Link>
            </Button>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full mt-4"
          onClick={() => navigate('/daily-reading')}
        >
          View Full Plan
        </Button>
      </CardContent>
    </Card>
  );
};

export default DailyReadingCard;
