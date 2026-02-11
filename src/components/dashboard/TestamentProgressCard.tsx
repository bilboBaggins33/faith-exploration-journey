
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface TestamentProgressCardProps {
  overallProgress: number;
}

const TestamentProgressCard = ({ overallProgress }: TestamentProgressCardProps) => {
  return (
    <Card className="mt-6 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg">Old vs New Testament</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Old Testament</span>
              <span className="text-sm font-medium">
                {Math.round(overallProgress * 0.7)}%
              </span>
            </div>
            <Progress value={Math.round(overallProgress * 0.7)} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">New Testament</span>
              <span className="text-sm font-medium">
                {Math.round(overallProgress * 1.2)}%
              </span>
            </div>
            <Progress value={Math.round(overallProgress * 1.2)} className="h-2" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestamentProgressCard;
