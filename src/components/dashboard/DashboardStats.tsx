
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, BarChart2, Trophy, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface DashboardStatsProps {
  totalChaptersRead: number;
  overallProgress: number;
  challengesCompleted: number;
  streak: number;
}

const DashboardStats = ({ totalChaptersRead, overallProgress, challengesCompleted, streak }: DashboardStatsProps) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 md:mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
        {/* Chapters Read */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <CardContent className="pt-4 pb-4 md:pt-6 md:pb-5">
            <div className="flex items-center sm:items-start gap-3 md:gap-4">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-bible-deepBlue shadow-md shadow-blue-500/20 flex-shrink-0">
                <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Chapters Read</p>
                <div className="text-2xl md:text-3xl font-bold mt-0.5 md:mt-1 tracking-tight">{totalChaptersRead}</div>
                <p className="text-xs text-muted-foreground mt-0.5 md:mt-1">Out of 1,189 total</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Overall Progress */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <CardContent className="pt-4 pb-4 md:pt-6 md:pb-5">
            <div className="flex items-center sm:items-start gap-3 md:gap-4">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-md shadow-emerald-500/20 flex-shrink-0">
                <BarChart2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Overall Progress</p>
                <div className="text-2xl md:text-3xl font-bold mt-0.5 md:mt-1 tracking-tight">{overallProgress}%</div>
                <Progress value={overallProgress} className="h-1.5 mt-1.5 md:mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <CardContent className="pt-4 pb-4 md:pt-6 md:pb-5">
            <div className="flex items-center sm:items-start gap-3 md:gap-4">
              <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-amber-400 to-bible-gold shadow-md shadow-amber-500/20 flex-shrink-0">
                <Trophy className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs md:text-sm font-medium text-muted-foreground">Achievements</p>
                <div className="text-2xl md:text-3xl font-bold mt-0.5 md:mt-1 tracking-tight">{challengesCompleted}</div>
                <div className="flex justify-between items-center mt-0.5 md:mt-1">
                  <p className="text-xs text-muted-foreground">Challenges completed</p>
                  <Button variant="ghost" size="sm" onClick={() => navigate('/achievements')} className="text-bible-blue h-auto p-0 text-xs hover:bg-transparent">
                    View All
                    <ChevronRight className="ml-0.5 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
