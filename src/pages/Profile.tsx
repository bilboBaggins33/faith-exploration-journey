
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProfileEditForm from '@/components/ProfileEditForm';
import ReadingStats from '@/components/profile/ReadingStats';
import ResetProgressSection from '@/components/profile/ResetProgressSection';
import SubscriptionStatus from '@/components/profile/SubscriptionStatus';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, UserRound, Settings } from 'lucide-react';

const Profile = () => {
  const { user, isLoading, session, refreshUserProfile } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const [fullName, setFullName] = useState<string>('');
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  
  // Get subscription query param
  const queryParams = new URLSearchParams(location.search);
  const subscriptionStatus = queryParams.get('subscription');
  
  useEffect(() => {
    // Check if user is not logged in
    if (!isLoading && !user) {
      navigate('/auth');
    }
    
    // Handle subscription status query parameter
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
      
      // Clean URL by removing query params
      navigate('/profile', { replace: true });
    }
  }, [isLoading, user, navigate, subscriptionStatus, toast]);
  
  // Update user profile data
  useEffect(() => {
    if (user) {
      setFullName(user.user_metadata?.full_name || '');
      setAvatarUrl(user.user_metadata?.avatar_url || null);
      
      // Check if we need to fetch profile data
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
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div className="flex justify-center items-center min-h-[50vh]">
              <div className="flex flex-col items-center">
                <Loader2 className="h-10 w-10 text-bible-blue animate-spin mb-4" />
                <p className="text-xl text-gray-600">Loading your profile...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-10 bg-bible-beige">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h1 className="text-3xl font-serif font-bold">My Profile</h1>
              <p className="text-gray-600">
                Manage your account settings and track your reading journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Tabs defaultValue="profile" className="glass-card rounded-xl shadow-xl mb-8">
                  <TabsList className="grid grid-cols-2 w-full">
                    <TabsTrigger value="profile" className="flex items-center">
                      <UserRound className="mr-2 h-4 w-4" />
                      Profile
                    </TabsTrigger>
                    <TabsTrigger value="settings" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </TabsTrigger>
                  </TabsList>
                  
                  <div className="p-6">
                    <TabsContent value="profile">
                      <ProfileEditForm
                        user={user}
                        fullName={fullName}
                        email={user?.email}
                        avatarUrl={avatarUrl}
                        onProfileUpdated={handleProfileUpdated}
                      />
                    </TabsContent>
                    
                    <TabsContent value="settings">
                      <ResetProgressSection />
                    </TabsContent>
                  </div>
                </Tabs>
                
                <ReadingStats />
              </div>
              
              <div className="space-y-8">
                <SubscriptionStatus />
                
                <Card className="p-5">
                  <h3 className="text-lg font-medium mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    <li>
                      <a 
                        href="/bible" 
                        className="text-bible-blue hover:text-bible-deepBlue block p-2 hover:bg-blue-50 rounded"
                      >
                        Bible Explorer
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/theology" 
                        className="text-bible-blue hover:text-bible-deepBlue block p-2 hover:bg-blue-50 rounded"
                      >
                        Theology Books
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/daily-reading" 
                        className="text-bible-blue hover:text-bible-deepBlue block p-2 hover:bg-blue-50 rounded"
                      >
                        Daily Reading Plan
                      </a>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
