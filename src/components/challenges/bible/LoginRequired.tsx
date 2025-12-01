import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Shield, TrendingUp } from 'lucide-react';
import { useAuth } from '@/context/auth';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen flex flex-col relative">
      {/* Blurred Background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(/assets/hero-bg.jpg)',
          filter: 'blur(8px)',
          transform: 'scale(1.1)'
        }}
      />
      <div className="fixed inset-0 -z-10 bg-background/60" />
      
      {/* Logo */}
      <div className="absolute top-6 left-6 z-10">
        <img 
          src="/BibleQuestLogoDark.png" 
          alt="BibleQuest" 
          className="h-12 md:h-16 drop-shadow-lg"
        />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4 pt-32 pb-24">
        <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Benefits */}
          <div className="hidden md:block space-y-6 text-foreground">
            <h1 className="text-4xl font-bold mb-8 drop-shadow-md">
              Track Your Spiritual Journey
            </h1>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-background/40 backdrop-blur-sm p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Save Your Progress</h3>
                  <p className="text-sm text-muted-foreground">
                    Keep track of completed Bible chapters and theology books across all devices
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-background/40 backdrop-blur-sm p-4 rounded-lg">
                <TrendingUp className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Build Your Streak</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintain daily reading habits and watch your knowledge grow
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-background/40 backdrop-blur-sm p-4 rounded-lg">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Secure & Private</h3>
                  <p className="text-sm text-muted-foreground">
                    Your data is encrypted and only accessible to you
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Sign In Card */}
          <Card className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
              <p className="text-muted-foreground">
                Sign in to continue your Bible journey
              </p>
            </div>
            
            <div className="space-y-4">
              <Button 
                onClick={() => navigate('/auth')} 
                className="w-full h-12 text-base font-semibold"
                size="lg"
              >
                Sign In / Sign Up
              </Button>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase tracking-wide">
                  <span className="px-3 bg-card text-muted-foreground font-medium">Or</span>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                onClick={handleGoogleSignIn}
                disabled={isSigningIn}
                className="w-full h-12 flex items-center justify-center gap-3"
                size="lg"
              >
                {isSigningIn ? (
                  <>
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Signing in...</span>
                  </>
                ) : (
                  <>
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                      <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                      <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                      <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                      <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                    </svg>
                    <span className="font-medium">Continue with Google</span>
                  </>
                )}
              </Button>
            </div>
            
            <p className="text-xs text-center text-muted-foreground mt-6">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginRequired;
