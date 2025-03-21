
import React from 'react';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BiblePassageDialogProps {
  bookName: string;
  chapter: number;
  passageText: string;
}

const BiblePassageDialog = ({ bookName, chapter, passageText }: BiblePassageDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <BookOpen className="h-4 w-4" />
          Read {bookName} {chapter}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{bookName} Chapter {chapter}</DialogTitle>
          <DialogDescription>
            Read the full passage below to prepare for the challenge
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[50vh] mt-4 pr-4">
          <div className="space-y-4">
            {passageText ? (
              <div className="text-base leading-relaxed">
                {passageText}
              </div>
            ) : (
              <div className="text-center py-8 text-muted-foreground italic">
                Please connect to a Bible API to view the full text of {bookName} {chapter}.
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BiblePassageDialog;
