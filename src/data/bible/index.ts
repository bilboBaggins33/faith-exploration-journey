
export * from './books';
export * from './types';
export * from './chapters';

// Export sample chapter challenges for backwards compatibility with existing components
export const sampleChapterChallenges = {
  // This is a placeholder for backward compatibility
  // In a real app, this would contain actual challenge data
  genesis: {
    1: {
      title: "Genesis Chapter 1",
      questions: []
    }
  }
};
