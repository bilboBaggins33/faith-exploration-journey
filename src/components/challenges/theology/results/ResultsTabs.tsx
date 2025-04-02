
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResultsTabsProps {
  keyThemes: string[];
  keyQuote: string;
  keyQuoteLocation: string;
  scorePercentage: number;
}

const ResultsTabs: React.FC<ResultsTabsProps> = ({
  keyThemes,
  keyQuote,
  keyQuoteLocation,
  scorePercentage
}) => {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="key-quote">Key Quote</TabsTrigger>
      </TabsList>
      <TabsContent value="summary" className="p-4 bg-muted/30 rounded-md mt-2">
        <h4 className="font-medium mb-2">Chapter Summary</h4>
        <p className="text-sm text-muted-foreground">
          In this chapter, the author explores {keyThemes.join(', ')}.
          {scorePercentage < 70 && ' Consider reviewing the chapter again to improve your understanding.'}
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
  );
};

export default ResultsTabs;
