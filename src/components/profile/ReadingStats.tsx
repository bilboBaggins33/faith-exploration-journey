
import React from 'react';
import { useAuth } from '@/context/auth';
import { Card } from "@/components/ui/card";
import { BookText, BarChart2 } from 'lucide-react';

const ReadingStats = () => {
  const { user } = useAuth();

  return (
    <Card className="p-5">
      <h3 className="text-lg font-medium mb-4">Reading Progress</h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-100 rounded-lg">
            <BookText className="h-6 w-6 text-bible-blue" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Bible Chapters Read</h4>
            <p className="text-2xl font-bold">0</p>
            <p className="text-sm text-gray-500">Start your reading journey</p>
          </div>
        </div>
        
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-amber-100 rounded-lg">
            <BarChart2 className="h-6 w-6 text-amber-600" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Theology Books Progress</h4>
            <p className="text-2xl font-bold">0%</p>
            <p className="text-sm text-gray-500">Explore theological works</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-sm text-center text-gray-500">
          Complete chapters and study materials to grow your stats
        </p>
      </div>
    </Card>
  );
};

export default ReadingStats;
