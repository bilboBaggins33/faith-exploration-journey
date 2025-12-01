import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Eye, EyeOff, User, Key, Mail, ShieldCheck, CreditCard } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/auth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { Link } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';

const AuthPage = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Redirect if already logged in
  useEffect(() => {
    if (!isLoading && user) {
      const state = location.state as { from?: string } | null;
      navigate(state?.from || '/dashboard');
    }
  }, [user, isLoading, navigate, location]);
  return (
    <div className="min-h-screen flex">
      <ScrollToTop />
      
      {/* Left side - Branding with gradient background */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-bible-blue via-bible-deepBlue to-bible-dark">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/assets/bible/default.jpg"
            alt="Auth background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 text-white">
          <div>
            <Link to="/" className="inline-block">
              <img
                src="/BibleQuestLogoDark.png"
                alt="Bible Quest Logo"
                className="h-16 w-auto mb-12 brightness-0 invert"
              />
            </Link>
          </div>
          
          <div className="space-y-6">
            <h1 className="text-4xl font-serif font-bold leading-tight">
              Deepen Your Understanding of Scripture
            </h1>
            <p className="text-lg text-white/90">
              Join thousands of believers exploring God's Word through interactive challenges, 
              reading plans, and theological insights.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold">1,189</div>
                <div className="text-sm text-white/80">Bible Chapters</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-white/80">Theology Books</div>
              </div>
            </div>
          </div>
          
          <div className="text-sm text-white/60">
            © 2024 Bible Quest. All rights reserved.
          </div>
        </div>
      </div>
      
      {/* Right side - Auth form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12 bg-gradient-to-br from-bible-dark via-bible-deepBlue to-bible-dark relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <img 
            src="/assets/bible/default.jpg"
            alt="Auth background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-md">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 text-center">
            <Link to="/" className="inline-block">
              <img
                src="/BibleQuestLogoDark.png"
                alt="Bible Quest Logo"
                className="h-12 w-auto mx-auto brightness-0 invert"
              />
            </Link>
          </div>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            <Tabs defaultValue="login" className="w-full">
              <div className="px-6 pt-8 pb-3">
                <TabsList className="grid grid-cols-2 w-full bg-gray-100">
                  <TabsTrigger 
                    value="login"
                    className="data-[state=active]:bg-white data-[state=active]:text-bible-blue"
                  >
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register"
                    className="data-[state=active]:bg-white data-[state=active]:text-bible-blue"
                  >
                    Sign Up
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <div className="p-6 pt-6">
                <TabsContent value="login" className="mt-0">
                  <LoginForm />
                </TabsContent>
                
                <TabsContent value="register" className="mt-0">
                  <RegisterForm />
                </TabsContent>
              </div>
            </Tabs>
          </div>
          
          <div className="text-center mt-8 text-sm text-white/80">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="text-bible-gold hover:text-bible-gold/80 hover:underline font-medium">Terms</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-bible-gold hover:text-bible-gold/80 hover:underline font-medium">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingInWithGoogle, setLoggingInWithGoogle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  
  // Get the return URL from location state, or default to dashboard
  const getReturnUrl = () => {
    const state = location.state as { from?: string } | null;
    return state?.from || '/dashboard';
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setLoggingIn(true);
      await signIn(email, password);
      navigate(getReturnUrl());
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoggingIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoggingInWithGoogle(true);
      await signInWithGoogle();
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setLoggingInWithGoogle(false);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      setLoggingInWithGoogle(false);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      
      if (error) throw error;
      
    } catch (error) {
      console.error('Facebook login error:', error);
      toast({
        title: "Login failed",
        description: "Could not sign in with Facebook",
        variant: "destructive",
      });
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-serif font-bold text-bible-dark">Welcome Back</h1>
          <p className="text-sm text-bible-dark/70 mt-2">
            Sign in to continue your biblical journey
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label 
              htmlFor="email" 
              className="text-sm font-medium flex items-center"
            >
              <Mail className="h-4 w-4 mr-2 text-bible-blue" />
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="glass-input"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label 
              htmlFor="password" 
              className="text-sm font-medium flex items-center"
            >
              <Key className="h-4 w-4 mr-2 text-bible-blue" />
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-bible-blue focus:ring-bible-blue"
              />
              <label htmlFor="remember" className="ml-2 block text-sm text-bible-dark/70">
                Remember me
              </label>
            </div>
            
            <a href="#" className="text-sm text-bible-blue hover-link">
              Forgot password?
            </a>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bible-blue hover:bg-bible-deepBlue"
            disabled={loggingIn}
          >
            {loggingIn ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing in...
              </span>
            ) : (
              'Sign In'
            )}
          </Button>
        </form>
        
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
        
        <div className="grid grid-cols-2 gap-3 mt-6">
          <button
            type="button"
            onClick={handleGoogleSignIn}
            disabled={loggingInWithGoogle}
            className="flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            {loggingInWithGoogle ? (
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

          <button
            type="button"
            onClick={handleFacebookSignIn}
            className="flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5 mr-2 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            Facebook
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registering, setRegistering] = useState(false);
  const [redirectingToPayment, setRedirectingToPayment] = useState(false);
  const navigate = useNavigate();
  const { signUp, createSubscription } = useAuth();
  const { toast } = useToast();
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
      toast({
        title: "Missing information",
        description: "Please fill out all fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        description: "Please make sure your passwords match.",
        variant: "destructive",
      });
      return;
    }
    
    if (password.length < 8) {
      toast({
        title: "Password too short",
        description: "Password must be at least 8 characters long.",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setRegistering(true);
      await signUp(email, password, name);
      
      setRegistering(false);
      setRedirectingToPayment(true);
      
      const checkoutUrl = await createSubscription();
      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      } else {
        navigate('/profile');
      }
      
    } catch (error) {
      console.error('Registration error:', error);
      setRegistering(false);
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-serif font-bold text-bible-dark">Create Your Account</h1>
          <p className="text-sm text-bible-dark/70 mt-2">
            Join our community of Bible explorers
          </p>
        </div>
        
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-5 mb-5">
          <div className="flex items-start">
            <CreditCard className="text-bible-blue mt-1 mr-3 flex-shrink-0" size={18} />
            <div>
              <h3 className="font-medium text-bible-blue">Premium Membership</h3>
              <p className="text-sm text-gray-600">
                Your subscription includes full access to all Bible challenges and theology books.
              </p>
              <div className="mt-2 flex items-baseline">
                <span className="text-lg font-bold text-bible-blue">$2.99</span>
                <span className="ml-1 text-sm text-gray-500">/month</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                First payment will be processed after sign up. Cancel anytime.
              </p>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label 
              htmlFor="name" 
              className="text-sm font-medium flex items-center"
            >
              <User className="h-4 w-4 mr-2 text-bible-blue" />
              Full Name
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="glass-input"
              placeholder="John Doe"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label 
              htmlFor="register-email" 
              className="text-sm font-medium flex items-center"
            >
              <Mail className="h-4 w-4 mr-2 text-bible-blue" />
              Email
            </label>
            <Input
              id="register-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <label 
              htmlFor="register-password" 
              className="text-sm font-medium flex items-center"
            >
              <Key className="h-4 w-4 mr-2 text-bible-blue" />
              Password
            </label>
            <div className="relative">
              <Input
                id="register-password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="glass-input pr-10"
                placeholder="••••••••"
                required
                minLength={8}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Password must be at least 8 characters
            </p>
          </div>
          
          <div className="space-y-2">
            <label 
              htmlFor="confirm-password" 
              className="text-sm font-medium flex items-center"
            >
              <ShieldCheck className="h-4 w-4 mr-2 text-bible-blue" />
              Confirm Password
            </label>
            <div className="relative">
              <Input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="glass-input pr-10"
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-bible-blue focus:ring-bible-blue"
              required
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-bible-dark/70">
              I agree to the{' '}
              <Link to="/terms" className="text-bible-blue hover-link">Terms of Service</Link>
              {' '}and{' '}
              <Link to="/privacy" className="text-bible-blue hover-link">Privacy Policy</Link>
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bible-blue hover:bg-bible-deepBlue"
            disabled={registering || redirectingToPayment}
          >
            {registering ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : redirectingToPayment ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Redirecting to payment...
              </span>
            ) : (
              'Sign Up & Subscribe - $2.99/month'
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthPage;
