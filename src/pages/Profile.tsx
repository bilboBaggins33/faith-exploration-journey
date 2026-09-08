import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import ProfileEditForm from '@/components/ProfileEditForm';
import SubscriptionStatus from '@/components/profile/SubscriptionStatus';
import ResetProgressSection from '@/components/profile/ResetProgressSection';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LayoutDashboard, UserCircle, Mail, Sparkles, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useGamification } from '@/hooks/use-gamification';

const Profile = () => {
  const { user, isLoading, refreshUserProfile, refreshSubscription } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { level, totalPoints, streak } = useGamification();
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
        refreshSubscription();
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
  }, [isLoading, user, navigate, subscriptionStatus, toast, refreshSubscription]);

  useEffect(() => {
    if (user) {
      setFullName(user.user_metadata?.full_name || '');
      setAvatarUrl(user.user_metadata?.avatar_url || null);
    }
  }, [user]);

  const handleProfileUpdated = () => {
    refreshUserProfile();
  };

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center min-h-[60vh]">
        <Loader2 className="h-10 w-10 text-bible-blue animate-spin mb-4" />
        <p className="text-muted-foreground">Loading your profile...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 min-h-screen pb-16">
      <div className="relative bg-bible-dark pt-24 md:pt-20 pb-16 md:pb-20 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-end gap-6 md:gap-8">
            <div className="h-24 w-24 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex items-center justify-center">
              {avatarUrl ? (
                <img src={avatarUrl} alt="" className="h-full w-full object-cover" />
              ) : (
                <UserCircle className="h-16 w-16 text-white/50" />
              )}
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                {fullName || 'Explorer'}
              </h1>
              <div className="flex items-center justify-center md:justify-start text-white/70 gap-2 mb-4">
                <Mail className="h-4 w-4" />
                <span>{user?.email}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 text-sm text-white/85">
                  <Sparkles className="h-3.5 w-3.5 text-bible-gold" />
                  Level {level}
                  <span className="text-white/45">· {totalPoints.toLocaleString()} pts</span>
                </span>
                <span className="text-white/25">·</span>
                <span className="inline-flex items-center gap-1.5 text-sm text-white/85">
                  <Flame className="h-3.5 w-3.5 text-bible-gold" />
                  {streak} day streak
                </span>
              </div>
            </div>

            <Button asChild variant="onDark" className="mt-4 md:mt-0">
              <Link to="/dashboard">
                <LayoutDashboard className="h-4 w-4" />
                Return to Dashboard
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <main className="flex-grow px-4 md:px-6 py-10 md:py-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div className="md:col-span-2 space-y-10">
              <section>
                <h2 className="text-xl font-serif font-semibold mb-6 pb-3 border-b border-border">
                  Account Information
                </h2>
                <ProfileEditForm
                  user={user}
                  fullName={fullName}
                  email={user?.email}
                  avatarUrl={avatarUrl}
                  onProfileUpdated={handleProfileUpdated}
                />
              </section>

              <section className="pt-2 border-t border-border">
                <ResetProgressSection />
              </section>
            </div>

            <aside className="md:border-l md:border-border md:pl-10">
              <SubscriptionStatus />
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
