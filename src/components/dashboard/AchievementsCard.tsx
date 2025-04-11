
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Trophy, Star, CalendarDays, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AchievementsCard = () => {
  const navigate = useNavigate();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center">
          <Trophy className="w-5 h-5 mr-2 text-bible-blue" />
          Recent Achievements
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 p-2 bg-amber-50 border border-amber-100 rounded-md">
            <div className="bg-amber-100 p-2 rounded-full">
              <Star className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="font-medium">First Steps</h3>
              <p className="text-xs text-gray-500">Completed your first chapter</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-2 bg-gray-100 border border-gray-200 rounded-md opacity-60">
            <div className="bg-gray-200 p-2 rounded-full">
              <BookOpen className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-medium">Book Finisher</h3>
              <p className="text-xs text-gray-500">Complete an entire book of the Bible</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3 p-2 bg-gray-100 border border-gray-200 rounded-md opacity-60">
            <div className="bg-gray-200 p-2 rounded-full">
              <CalendarDays className="h-5 w-5 text-gray-500" />
            </div>
            <div>
              <h3 className="font-medium">7-Day Streak</h3>
              <p className="text-xs text-gray-500">Read the Bible for 7 consecutive days</p>
            </div>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full mt-4"
          onClick={() => navigate('/achievements')}
        >
          View All Achievements
        </Button>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
