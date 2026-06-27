
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { BookOpen, CheckCircle } from "lucide-react";
import BiblePassageDialog from './BiblePassageDialog';

interface ReadConfirmationSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  bookName: string;
  chapter: number;
}

const ReadConfirmationSheet = ({
  open,
  onOpenChange,
  onConfirm,
  bookName,
  chapter
}: ReadConfirmationSheetProps) => {
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent>
        <SheetHeader className="mb-6">
          <SheetTitle>Before You Begin</SheetTitle>
          <SheetDescription>
            Have you read {bookName} Chapter {chapter}?
          </SheetDescription>
        </SheetHeader>
        
        <div className="space-y-8">
          <p className="text-sm text-muted-foreground">
            It's best to read the Scripture passage before taking the challenge. 
            This will help you understand the context and answer the questions correctly.
          </p>
          
          <div className="flex flex-col gap-4">
            <BiblePassageDialog 
              bookName={bookName} 
              chapter={chapter} 
              passageText={getSamplePassageText(bookName, chapter)}
            />
            
            <Button onClick={handleConfirm} className="gap-2">
              <CheckCircle className="h-4 w-4" />
              I've Read the Passage
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Bundled public-domain (KJV) text for the free sample chapters. Other chapters
// fall back to a friendly prompt in BiblePassageDialog.
function getSamplePassageText(bookName: string, chapter: number): string {
  if (bookName === "Genesis" && chapter === 1) {
    return `1 In the beginning God created the heaven and the earth.
2 And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters.
3 And God said, Let there be light: and there was light.
4 And God saw the light, that it was good: and God divided the light from the darkness.
5 And God called the light Day, and the darkness he called Night. And the evening and the morning were the first day.
6 And God said, Let there be a firmament in the midst of the waters, and let it divide the waters from the waters.
7 And God made the firmament, and divided the waters which were under the firmament from the waters which were above the firmament: and it was so.
8 And God called the firmament Heaven. And the evening and the morning were the second day.
9 And God said, Let the waters under the heaven be gathered together unto one place, and let the dry land appear: and it was so.
10 And God called the dry land Earth; and the gathering together of the waters called he Seas: and God saw that it was good.
11 And God said, Let the earth bring forth grass, the herb yielding seed, and the fruit tree yielding fruit after his kind, whose seed is in itself, upon the earth: and it was so.
12 And the earth brought forth grass, and herb yielding seed after his kind, and the tree yielding fruit, whose seed was in itself, after his kind: and God saw that it was good.
13 And the evening and the morning were the third day.
14 And God said, Let there be lights in the firmament of the heaven to divide the day from the night; and let them be for signs, and for seasons, and for days, and years:
15 And let them be for lights in the firmament of the heaven to give light upon the earth: and it was so.
16 And God made two great lights; the greater light to rule the day, and the lesser light to rule the night: he made the stars also.
17 And God set them in the firmament of the heaven to give light upon the earth,
18 And to rule over the day and over the night, and to divide the light from the darkness: and God saw that it was good.
19 And the evening and the morning were the fourth day.
20 And God said, Let the waters bring forth abundantly the moving creature that hath life, and fowl that may fly above the earth in the open firmament of heaven.
21 And God created great whales, and every living creature that moveth, which the waters brought forth abundantly, after their kind, and every winged fowl after his kind: and God saw that it was good.
22 And God blessed them, saying, Be fruitful, and multiply, and fill the waters in the seas, and let fowl multiply in the earth.
23 And the evening and the morning were the fifth day.
24 And God said, Let the earth bring forth the living creature after his kind, cattle, and creeping thing, and beast of the earth after his kind: and it was so.
25 And God made the beast of the earth after his kind, and cattle after their kind, and every thing that creepeth upon the earth after his kind: and God saw that it was good.
26 And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.
27 So God created man in his own image, in the image of God created he him; male and female created he them.
28 And God blessed them, and God said unto them, Be fruitful, and multiply, and replenish the earth, and subdue it: and have dominion over the fish of the sea, and over the fowl of the air, and over every living thing that moveth upon the earth.
29 And God said, Behold, I have given you every herb bearing seed, which is upon the face of all the earth, and every tree, in the which is the fruit of a tree yielding seed; to you it shall be for meat.
30 And to every beast of the earth, and to every fowl of the air, and to every thing that creepeth upon the earth, wherein there is life, I have given every green herb for meat: and it was so.
31 And God saw every thing that he had made, and, behold, it was very good. And the evening and the morning were the sixth day.`;
  }

  if (bookName === "Matthew" && chapter === 2) {
    return `1 Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east to Jerusalem,
2 Saying, Where is he that is born King of the Jews? for we have seen his star in the east, and are come to worship him.
3 When Herod the king had heard these things, he was troubled, and all Jerusalem with him.
4 And when he had gathered all the chief priests and scribes of the people together, he demanded of them where Christ should be born.
5 And they said unto him, In Bethlehem of Judaea: for thus it is written by the prophet,
6 And thou Bethlehem, in the land of Juda, art not the least among the princes of Juda: for out of thee shall come a Governor, that shall rule my people Israel.
7 Then Herod, when he had privily called the wise men, enquired of them diligently what time the star appeared.
8 And he sent them to Bethlehem, and said, Go and search diligently for the young child; and when ye have found him, bring me word again, that I may come and worship him also.
9 When they had heard the king, they departed; and, lo, the star, which they saw in the east, went before them, till it came and stood over where the young child was.
10 When they saw the star, they rejoiced with exceeding great joy.
11 And when they were come into the house, they saw the young child with Mary his mother, and fell down, and worshipped him: and when they had opened their treasures, they presented unto him gifts; gold, and frankincense and myrrh.
12 And being warned of God in a dream that they should not return to Herod, they departed into their own country another way.
13 And when they were departed, behold, the angel of the Lord appeareth to Joseph in a dream, saying, Arise, and take the young child and his mother, and flee into Egypt, and be thou there until I bring thee word: for Herod will seek the young child to destroy him.
14 When he arose, he took the young child and his mother by night, and departed into Egypt:
15 And was there until the death of Herod: that it might be fulfilled which was spoken of the Lord by the prophet, saying, Out of Egypt have I called my son.
16 Then Herod, when he saw that he was mocked of the wise men, was exceeding wroth, and sent forth, and slew all the children that were in Bethlehem, and in all the coasts thereof, from two years old and under, according to the time which he had diligently inquired of the wise men.
17 Then was fulfilled that which was spoken by Jeremiah the prophet, saying,
18 In Rama was there a voice heard, lamentation, and weeping, and great mourning, Rachel weeping for her children, and would not be comforted, because they are not.
19 But when Herod was dead, behold, an angel of the Lord appeareth in a dream to Joseph in Egypt,
20 Saying, Arise, and take the young child and his mother, and go into the land of Israel: for they are dead which sought the young child's life.
21 And he arose, and took the young child and his mother, and came into the land of Israel.
22 But when he heard that Archelaus did reign in Judaea in the room of his father Herod, he was afraid to go thither: notwithstanding, being warned of God in a dream, he turned aside into the parts of Galilee:
23 And he came and dwelt in a city called Nazareth: that it might be fulfilled which was spoken by the prophets, He shall be called a Nazarene.`;
  }
  
  // For other chapters, return a placeholder message
  return ""; 
}

export default ReadConfirmationSheet;
