
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Cookie } from 'lucide-react';
import { useCookies } from '@/context/CookieContext';

export default function CookieConsent() {
  const { cookiesAccepted, acceptCookies, rejectCookies } = useCookies();
  const [open, setOpen] = useState(cookiesAccepted === null);

  const handleAccept = () => {
    acceptCookies();
    setOpen(false);
  };

  const handleReject = () => {
    rejectCookies();
    setOpen(false);
  };

  if (cookiesAccepted !== null) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="flex items-start space-x-4">
          <Cookie className="h-6 w-6 text-bible-blue mt-1" />
          <div>
            <h2 className="text-xl font-semibold mb-4">Cookie Preferences</h2>
            <p className="text-sm text-gray-600 mb-4">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <p className="text-sm text-gray-600">
              Read our{' '}
              <Link to="/cookie-policy" className="text-bible-blue hover:underline">
                Cookie Policy
              </Link>{' '}
              for more information about how we use cookies.
            </p>
          </div>
        </div>
        <DialogFooter className="flex sm:justify-between">
          <Button variant="outline" onClick={handleReject}>
            Reject All
          </Button>
          <Button onClick={handleAccept} className="bg-bible-blue hover:bg-bible-deepBlue">
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
