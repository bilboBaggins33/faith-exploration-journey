import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Shield, TrendingUp } from 'lucide-react';
import ChallengeSkeleton from './ChallengeSkeleton';
import { useAuth } from '@/context/auth';

const LoginRequired = () => {
  const navigate = useNavigate();
  const { signInWithGoogle } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  
  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Google sign-in error:', error);
    } finally {
      setIsSigningIn(false);
    }
  };
  
  return (
    <ChallengeSkeleton>
      <div className="flex flex-col lg:flex-row items-center gap-10 p-4 pt-20 pb-10">
        {/* Left: Benefits */}
        <div className="hidden lg:flex flex-1 flex-col gap-4 text-foreground">
          <h1 className="text-3xl font-bold mb-2">
            Sign in to unlock your full BibleQuest journey
          </h1>
          <p className="text-muted-foreground mb-4 max-w-md">
            Save your progress, track your streaks, and keep your Bible and theology challenges in sync across all your devices.
          </p>

          <div className="space-y-3 max-w-md">
            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/60 shadow-sm">
              <BookOpen className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Save your reading</h3>
                <p className="text-sm text-muted-foreground">
                  Automatically remember which Bible chapters and theology chapters you&apos;ve completed.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/60 shadow-sm">
              <TrendingUp className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Keep your streak</h3>
                <p className="text-sm text-muted-foreground">
                  Build momentum day by day with your personal reading streaks and points.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/80 backdrop-blur-sm rounded-xl p-3 border border-border/60 shadow-sm">
              <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold">Your data is safe</h3>
                <p className="text-sm text-muted-foreground">
                  We securely store your progress so you can pick up right where you left off.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Auth CTA */}
        <div className="flex-1 flex justify-center w-full">
          <Card className="w-full max-w-md bg-card/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-border/80">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-semibold mb-1">Sign in to Save Your Progress</h2>
              <p className="text-sm text-muted-foreground">
                Create a free account or sign in to keep your challenges synced.
              </p>
            </div>

            <div className="space-y-4">
              <Button 
                onClick={() => navigate('/auth')} 
                className="w-full h-11 text-base font-semibold"
                size="lg"
              >
                Go to Sign In / Sign Up
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  <span className="px-3 bg-card">Or continue with</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className="w-full h-11 flex items-center justify-center gap-2 bg-card hover:bg-muted transition-colors"
                size="lg"
              >
                {isSigningIn ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing in...
                  </span>
                ) : (
                  <>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    <span className="text-sm font-medium">Sign in with Google</span>
                  </>
                )}
              </Button>
            </div>

            <p className="text-[11px] text-center text-muted-foreground mt-5 leading-relaxed">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </Card>
        </div>
      </div>
    </ChallengeSkeleton>
  );
};

export default LoginRequired;
