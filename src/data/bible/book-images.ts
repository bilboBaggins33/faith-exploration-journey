// Maps Bible book IDs to compressed WebP image paths
export const bibleBookImages: Record<string, string> = {
  // Old Testament
  genesis: '/assets/bible/genesis.webp',
  exodus: '/assets/bible/exodus.webp',
  leviticus: '/assets/bible/leviticus.webp',
  numbers: '/assets/bible/numbers.webp',
  deuteronomy: '/assets/bible/deuteronomy.webp',
  joshua: '/assets/bible/joshua.webp',
  judges: '/assets/bible/judges.webp',
  ruth: '/assets/bible/ruth.webp',
  '1samuel': '/assets/bible/1samuel.webp',
  '2samuel': '/assets/bible/2samuel.webp',
  '1kings': '/assets/bible/1kings.webp',
  '2kings': '/assets/bible/2kings.webp',
  '1chronicles': '/assets/bible/1chronicles.webp',
  '2chronicles': '/assets/bible/2chronicles.webp',
  ezra: '/assets/bible/ezra.webp',
  nehemiah: '/assets/bible/nehemiah.webp',
  esther: '/assets/bible/esther.webp',
  job: '/assets/bible/job.webp',
  psalms: '/assets/bible/psalms.webp',
  proverbs: '/assets/bible/proverbs.webp',
  ecclesiastes: '/assets/bible/ecclesiastes.webp',
  songofsolomon: '/assets/bible/song.webp',
  isaiah: '/assets/bible/isaiah.webp',
  jeremiah: '/assets/bible/jeremiah.webp',
  lamentations: '/assets/bible/lamentations.webp',
  ezekiel: '/assets/bible/ezekiel.webp',
  daniel: '/assets/bible/daniel.webp',
  hosea: '/assets/bible/hosea.webp',
  joel: '/assets/bible/joel.webp',
  amos: '/assets/bible/amos.webp',
  obadiah: '/assets/bible/obadiah.webp',
  jonah: '/assets/bible/jonah.webp',
  micah: '/assets/bible/micah.webp',
  nahum: '/assets/bible/nahum.webp',
  habakkuk: '/assets/bible/habakkuk.webp',
  zephaniah: '/assets/bible/zephaniah.webp',
  haggai: '/assets/bible/haggai.webp',
  zechariah: '/assets/bible/zechariah.webp',
  malachi: '/assets/bible/malachi.webp',

  // New Testament
  matthew: '/assets/bible/matthew.webp',
  mark: '/assets/bible/mark.webp',
  luke: '/assets/bible/luke.webp',
  john: '/assets/bible/john.webp',
  acts: '/assets/bible/acts.webp',
  romans: '/assets/bible/romans.webp',
  '1corinthians': '/assets/bible/1corinthians.webp',
  '2corinthians': '/assets/bible/2corinthians.webp',
  galatians: '/assets/bible/galatians.webp',
  ephesians: '/assets/bible/ephesians.webp',
  philippians: '/assets/bible/philippians.webp',
  colossians: '/assets/bible/colossians.webp',
  '1thessalonians': '/assets/bible/1thessalonians.webp',
  '2thessalonians': '/assets/bible/2thessalonians.webp',
  '1timothy': '/assets/bible/1timothy.webp',
  '2timothy': '/assets/bible/2timothy.webp',
  titus: '/assets/bible/titus.webp',
  philemon: '/assets/bible/philemon.webp',
  hebrews: '/assets/bible/hebrews.webp',
  james: '/assets/bible/james.webp',
  '1peter': '/assets/bible/1peter.webp',
  '2peter': '/assets/bible/2peter.webp',
  '1john': '/assets/bible/1john.webp',
  '2john': '/assets/bible/2john.webp',
  '3john': '/assets/bible/3john.webp',
  jude: '/assets/bible/jude.webp',
  revelation: '/assets/bible/revelation.webp',
};

export const DEFAULT_BOOK_IMAGE = '/assets/bible/default.webp';

// Thumbnail images — small compressed versions in /assets/bible/thumbnail/
export const bibleBookThumbnails: Record<string, string> = Object.keys(bibleBookImages).reduce(
  (acc, key) => {
    const mainImage = bibleBookImages[key];
    const imageName = mainImage.split('/').pop()!;
    acc[key] = `/assets/bible/thumbnail/${imageName}`;
    return acc;
  },
  {} as Record<string, string>
);

export const getBookImage = (bookId: string): string => {
  return bibleBookImages[bookId] || DEFAULT_BOOK_IMAGE;
};

export const getBookThumbnail = (bookId: string): string => {
  return bibleBookThumbnails[bookId] || getBookImage(bookId);
};
