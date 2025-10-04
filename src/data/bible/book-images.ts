
// Maps Bible book IDs to their respective image paths
export const bibleBookImages: Record<string, string> = {
  // Old Testament
  'genesis': '/assets/bible/1280/genesis.webp',
  'exodus': '/assets/bible/exodus.jpg',
  'leviticus': '/assets/bible/leviticus.jpg',
  'numbers': '/assets/bible/numbers.jpg',
  'deuteronomy': '/assets/bible/deuteronomy.jpg',
  'joshua': '/assets/bible/joshua.jpg',
  'judges': '/assets/bible/judges.jpg',
  'ruth': '/assets/bible/ruth.jpg',
  '1samuel': '/assets/bible/1samuel.jpg',
  '2samuel': '/assets/bible/2samuel.jpg',
  '1kings': '/assets/bible/1kings.jpg',
  '2kings': '/assets/bible/2kings.jpg',
  '1chronicles': '/assets/bible/1chronicles.jpg',
  '2chronicles': '/assets/bible/2chronicles.jpg',
  'ezra': '/assets/bible/ezra.jpg',
  'nehemiah': '/assets/bible/nehemiah.jpg',
  'esther': '/assets/bible/esther.jpg',
  'job': '/assets/bible/job.jpg',
  'psalms': '/assets/bible/psalms.jpg',
  'proverbs': '/assets/bible/proverbs.jpg',
  'ecclesiastes': '/assets/bible/ecclesiastes.jpg',
  'songofsolomon': '/assets/bible/song.jpg',
  'isaiah': '/assets/bible/isaiah.jpg',
  'jeremiah': '/assets/bible/jeremiah.jpg',
  'lamentations': '/assets/bible/lamentations.jpg',
  'ezekiel': '/assets/bible/ezekiel.jpg',
  'daniel': '/assets/bible/daniel.jpg',
  'hosea': '/assets/bible/hosea.jpg',
  'joel': '/assets/bible/joel.jpg',
  'amos': '/assets/bible/amos.jpg',
  'obadiah': '/assets/bible/obadiah.jpg',
  'jonah': '/assets/bible/jonah.jpg',
  'micah': '/assets/bible/micah.jpg',
  'nahum': '/assets/bible/nahum.jpg',
  'habakkuk': '/assets/bible/habakkuk.jpg',
  'zephaniah': '/assets/bible/zephaniah.jpg',
  'haggai': '/assets/bible/haggai.jpg',
  'zechariah': '/assets/bible/zechariah.jpg',
  'malachi': '/assets/bible/malachi.jpg',

  // New Testament
  'matthew': '/assets/bible/matthew.jpg',
  'mark': '/assets/bible/mark.jpg',
  'luke': '/assets/bible/luke.jpg',
  'john': '/assets/bible/john.jpg',
  'acts': '/assets/bible/acts.jpg',
  'romans': '/assets/bible/romans.jpg',
  '1corinthians': '/assets/bible/1corinthians.jpg',
  '2corinthians': '/assets/bible/2corinthians.jpg',
  'galatians': '/assets/bible/galatians.jpg',
  'ephesians': '/assets/bible/ephesians.jpg',
  'philippians': '/assets/bible/philippians.jpg',
  'colossians': '/assets/bible/colossians.jpg',
  '1thessalonians': '/assets/bible/1thessalonians.jpg',
  '2thessalonians': '/assets/bible/2thessalonians.jpg',
  '1timothy': '/assets/bible/1timothy.jpg',
  '2timothy': '/assets/bible/2timothy.jpg',
  'titus': '/assets/bible/titus.jpg',
  'philemon': '/assets/bible/philemon.jpg',
  'hebrews': '/assets/bible/hebrews.jpg',
  'james': '/assets/bible/james.jpg',
  '1peter': '/assets/bible/1peter.jpg',
  '2peter': '/assets/bible/2peter.jpg',
  '1john': '/assets/bible/1john.jpg',
  '2john': '/assets/bible/2john.jpg',
  '3john': '/assets/bible/3john.jpg',
  'jude': '/assets/bible/jude.jpg',
  'revelation': '/assets/bible/revelation.jpg',
};

// Define thumbnail images (use existing thumbnail directory)
export const bibleBookThumbnails: Record<string, string> = Object.keys(bibleBookImages).reduce(
  (acc, key) => {
    // Convert "/assets/bible/genesis.jpg" to "/assets/bible/thumbnail/genesis.jpg"
    const mainImage = bibleBookImages[key];
    const imageName = mainImage.split('/').pop(); // Get filename
    acc[key] = `/assets/bible/thumbnail/${imageName}`;
    return acc;
  },
  {} as Record<string, string>
);

// Get book image or fallback to a default image
export const getBookImage = (bookId: string): string => {
  return bibleBookImages[bookId] || '/assets/bible/default.jpg';
};

// Get book thumbnail or fallback to full image
export const getBookThumbnail = (bookId: string): string => {
  return bibleBookThumbnails[bookId] || getBookImage(bookId);
};
