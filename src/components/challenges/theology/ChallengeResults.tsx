
import React from 'react';
import { Trophy } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BookText, RefreshCw } from "lucide-react";

interface ChallengeResultsProps {
  score: number;
  maxScore: number;
  onRetake: () => void;
  onContinue: () => void;
  bookTitle: string;
  chapterTitle: string;
  keyQuote: string;
  keyQuoteLocation: string;
  keyThemes: string[];
}

const ChallengeResults = ({
  score,
  maxScore,
  onRetake,
  onContinue,
  bookTitle,
  chapterTitle,
  keyQuote,
  keyQuoteLocation,
  keyThemes = []
}: ChallengeResultsProps) => {
  // Calculate score percentage
  const scorePercentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
  // Ensure we never exceed 100% due to rounding
  const displayPercentage = Math.min(Math.round(scorePercentage), 100);

  return (
    <div className="flex flex-col items-center mt-4">
      <div className="relative w-36 h-36 mb-6">
        <div className="absolute inset-0 flex items-center justify-center">
          <Trophy className={`h-16 w-16 ${displayPercentage >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
        </div>
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-muted-foreground stroke-current"
            strokeWidth="10"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
          />
          <circle
            className={`${displayPercentage >= 70 ? 'text-yellow-500' : 'text-primary'} stroke-current`}
            strokeWidth="10"
            strokeLinecap="round"
            fill="transparent"
            r="40"
            cx="50"
            cy="50"
            strokeDasharray={`${displayPercentage * 2.51327} 251.327`}
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
        </svg>
      </div>

      <div className="text-center mb-6">
        <h3 className="text-3xl font-bold mb-1">{displayPercentage}%</h3>
        <p className="text-muted-foreground">
          Score: {score.toFixed(1)} / {maxScore} points
        </p>
        <div className="mt-2">
          {displayPercentage >= 90 ? (
            <Badge className="bg-yellow-500">Excellent!</Badge>
          ) : displayPercentage >= 70 ? (
            <Badge className="bg-green-500">Well Done!</Badge>
          ) : displayPercentage >= 50 ? (
            <Badge className="bg-blue-500">Good Effort</Badge>
          ) : (
            <Badge variant="outline">Keep Studying</Badge>
          )}
        </div>
      </div>

      <Tabs defaultValue="summary" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="key-quote">Key Quote</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="p-4 bg-muted/30 rounded-md mt-2">
          <h4 className="font-medium mb-2">Chapter Summary</h4>
          <p className="text-sm text-muted-foreground">
            In this chapter, C.S. Lewis explores {keyThemes.join(', ')}.
            {displayPercentage < 70 && ' Consider reviewing the chapter again to improve your understanding.'}
          </p>
        </TabsContent>
        <TabsContent value="key-quote" className="p-4 bg-muted/30 rounded-md mt-2">
          <h4 className="font-medium mb-2">Key Quote</h4>
          <blockquote className="border-l-4 border-primary pl-4 italic text-sm">
            "{keyQuote}"
          </blockquote>
          <p className="text-xs text-right mt-2 text-muted-foreground">
            — {keyQuoteLocation}
          </p>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row gap-2 justify-center mt-6">
        <Button 
          onClick={onRetake}
          variant="outline"
          className="flex items-center"
        >
          <RefreshCw className="mr-2 h-4 w-4" />
          Retake Challenge
        </Button>
        <Button 
          onClick={onContinue}
          className="flex items-center"
        >
          <BookText className="mr-2 h-4 w-4" />
          Continue Reading
        </Button>
      </div>
    </div>
  );
};

export default ChallengeResults;
