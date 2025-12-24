// Maps theology book IDs to their respective image paths
export const theologyBookImages: Record<string, string> = {
    'mere-christianity': '/assets/theology/mere-christianity.jpg',
    'knowing-god': '/assets/theology/knowing-god.jpg',
    'westminster-confession': '/assets/theology/westminster-confession.jpg',
    'institutes': '/assets/theology/institutes.jpg',
    'city-of-god': '/assets/theology/city-of-god.jpg',
    'confessions': '/assets/theology/confessions.jpg',
};

// Get theology book image or fallback to a default image
export const getTheologyBookImage = (bookId: string): string => {
    return theologyBookImages[bookId] || '/assets/bible/default.jpg';
};
