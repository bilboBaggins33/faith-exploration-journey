import { theologyBooks } from './books';

/** Resolve theology book cover — prefers the book's coverImage, falls back to default. */
export const getTheologyBookImage = (bookId: string): string => {
  const book = theologyBooks.find(b => b.id === bookId);
  return book?.coverImage || '/assets/bible/default.webp';
};

export const getTheologyBookThumbnail = (bookId: string): string =>
  getTheologyBookImage(bookId);
