import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProfileEditForm from '@/components/ProfileEditForm';
import SubscriptionStatus from '@/components/profile/SubscriptionStatus';
import ResetProgressSection from '@/components/profile/ResetProgressSection';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { Card } from "@/components/ui/card";
import { Loader2, LayoutDashboard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Profile = () => {
  const { user, isLoading, session, refreshUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [fullName, setFullName] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const queryParams = new URLSearchParams(location.search);
  const subscriptionStatus = queryParams.get('subscription');

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/auth');
    }

    if (subscriptionStatus) {
      if (subscriptionStatus === 'success') {
        toast({
          title: "Subscription Active",
          description: "Your premium subscription has been activated successfully.",
        });
      } else if (subscriptionStatus === 'canceled') {
        toast({
          title: "Subscription Canceled",
          description: "You can subscribe again anytime from your profile page.",
        });
      }

      navigate('/profile', { replace: true });
    }
  }, [isLoading, user, navigate, subscriptionStatus, toast]);

  useEffect(() => {
    if (user) {
      setFullName(user.user_metadata?.full_name || '');
      setAvatarUrl(user.user_metadata?.avatar_url || null);

      if (!fullName && user) {
        // This is a placeholder where you would fetch additional user profile data if needed
      }
    }
  }, [user, fullName]);

  const handleProfileUpdated = () => {
    refreshUserProfile();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1">
        <main className="flex-grow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-bible-blue animate-spin mb-4" />
                <p className="text-xl text-gray-600">Loading your profile...</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      <main className="flex-grow">
        <section className="py-10 bg-bible-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-serif font-bold">My Profile</h1>
                <p className="text-gray-600">
                  Manage your account settings
                </p>
              </div>
              <Button
                variant="outline"
                asChild
                className="flex items-center gap-2"
              >
                <Link to="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  View Dashboard
                </Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                <Card className="p-6 shadow-lg rounded-xl">
                  <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                  <ProfileEditForm
                    user={user}
                    fullName={fullName}
                    email={user?.email}
                    avatarUrl={avatarUrl}
                    onProfileUpdated={handleProfileUpdated}
                  />
                </Card>

                <Card className="p-6 shadow-lg rounded-xl">
                  <ResetProgressSection />
                </Card>
              </div>

              <div>
                <SubscriptionStatus />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Profile;
