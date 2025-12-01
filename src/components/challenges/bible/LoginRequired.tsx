import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BookOpen, Shield, TrendingUp } from 'lucide-react';
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
    <div className="relative min-h-[600px] py-12 md:py-16">
      {/* Dark background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bible-dark via-bible-deepBlue to-bible-dark -z-10">
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/assets/bible/default.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left side - Benefits */}
        <div className="hidden md:block space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight text-white mb-4">
              Track Your Spiritual Journey
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Join thousands of believers exploring God's Word through interactive challenges, 
              reading plans, and theological insights.
            </p>
          </div>
          
          <div className="space-y-5 pt-2">
            <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <BookOpen className="w-7 h-7 text-bible-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2 text-white text-lg">Save Your Progress</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Keep track of completed Bible chapters and theology books across all devices
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <TrendingUp className="w-7 h-7 text-bible-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2 text-white text-lg">Build Your Streak</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Maintain daily reading habits and watch your knowledge grow
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-5 bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/20 hover:bg-white/15 transition-colors">
              <Shield className="w-7 h-7 text-bible-gold shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold mb-2 text-white text-lg">Secure & Private</h3>
                <p className="text-sm text-white/80 leading-relaxed">
                  Your data is encrypted and only accessible to you
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right side - Sign In Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20 p-8 md:p-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-serif font-bold text-bible-dark mb-2">Welcome Back</h2>
            <p className="text-sm text-bible-dark/70 mt-2">
              Sign in to continue your Bible journey
            </p>
          </div>
          
          <div className="space-y-5">
            <Button 
              onClick={() => navigate('/auth')} 
              className="w-full bg-bible-blue hover:bg-bible-deepBlue h-12 text-base font-semibold"
              size="lg"
            >
              Sign In / Sign Up
            </Button>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-bible-dark/60">
                  Or continue with
                </span>
              </div>
            </div>
            
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="w-full flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed h-12"
            >
              {isSigningIn ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Connecting...
                </span>
              ) : (
                <>
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                  </svg>
                  Google
                </>
              )}
            </button>
          </div>
          
          <p className="text-xs text-center text-bible-dark/60 mt-8">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-bible-blue hover:underline font-medium">Terms</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-bible-blue hover:underline font-medium">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginRequired;
