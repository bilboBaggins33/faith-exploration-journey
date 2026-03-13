import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProfileEditForm from '@/components/ProfileEditForm';
import SubscriptionStatus from '@/components/profile/SubscriptionStatus';
import ResetProgressSection from '@/components/profile/ResetProgressSection';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { Card } from "@/components/ui/card";
import { Loader2, LayoutDashboard, UserCircle, Mail } from 'lucide-react';
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
      <div className="flex flex-col flex-1 items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 text-bible-blue animate-spin mb-4" />
        <p className="text-gray-500">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen pb-12">
      {/* Dark Hero Banner */}
      <div className="relative bg-gradient-to-br from-bible-dark via-[#1a1a3e] to-[#0f2027] pt-24 md:pt-20 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-bible-blue rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-bible-gold rounded-full blur-[80px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
            <div className="relative">
              <div className="h-24 w-24 rounded-full border-4 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
                {avatarUrl ? (
                  <img src={avatarUrl} alt="Profile" className="h-full w-full object-cover" />
                ) : (
                  <UserCircle className="h-16 w-16 text-white/50" />
                )}
              </div>
              <div className="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-4 border-[#1a1a3e]"></div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                {fullName || 'Explorer'}
              </h1>
              <div className="flex items-center justify-center md:justify-start text-white/70 gap-2 mb-4">
                <Mail className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
            </div>

            <Button
              variant="outline"
              asChild
              className="mt-4 md:mt-0 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white"
            >
              <Link to="/dashboard">
                <LayoutDashboard className="h-4 w-4 mr-2" />
                Return to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-grow px-4 md:px-6 -mt-6 md:-mt-8 relative z-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card className="p-6 border-0 shadow-lg rounded-xl overflow-hidden">
                <h2 className="text-xl font-semibold mb-6 pb-2 border-b">Account Information</h2>
                <ProfileEditForm
                  user={user}
                  fullName={fullName}
                  email={user?.email}
                  avatarUrl={avatarUrl}
                  onProfileUpdated={handleProfileUpdated}
                />
              </Card>

              <Card className="p-6 border-0 shadow-lg rounded-xl overflow-hidden">
                <ResetProgressSection />
              </Card>
            </div>

            <div>
              <Card className="border-0 shadow-lg rounded-xl overflow-hidden h-full">
                <SubscriptionStatus />
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
