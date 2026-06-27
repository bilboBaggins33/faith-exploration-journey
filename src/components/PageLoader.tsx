import { Loader2 } from 'lucide-react';

/**
 * Suspense fallback shown while a lazily-loaded route chunk is fetched.
 */
const PageLoader = () => (
  <div className="flex flex-1 items-center justify-center min-h-[60vh] w-full">
    <Loader2 className="h-10 w-10 animate-spin text-bible-blue" />
  </div>
);

export default PageLoader;
