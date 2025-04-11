
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, BarChart2, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import StreakCounter from './StreakCounter';

interface DashboardStatsProps {
  totalChaptersRead: number;
  overallProgress: number;
  challengesCompleted: number;
  streak: number;
}

const DashboardStats = ({ totalChaptersRead, overallProgress, challengesCompleted, streak }: DashboardStatsProps) => {
  const navigate = useNavigate();
  
  return (
    <div className="mb-8">
      <StreakCounter streak={streak} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-bible-blue" />
              Total Chapters Read
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{totalChaptersRead}</div>
            <p className="text-sm text-gray-500 mt-1">Out of 1,189 total chapters</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <BarChart2 className="w-5 h-5 mr-2 text-bible-blue" />
              Overall Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{overallProgress}%</div>
            <Progress value={overallProgress} className="h-2 mt-2" />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-bible-blue" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{challengesCompleted}</div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-500 mt-1">Challenges completed</p>
              <Button variant="ghost" size="sm" onClick={() => navigate('/achievements')} className="text-bible-blue">
                View All
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
