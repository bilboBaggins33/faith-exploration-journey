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
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-bible-dark">
      <ScrollToTop />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/bible/default.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-serif font-medium text-white mb-1 tracking-wide drop-shadow-md">
            Welcome
          </h1>
          <p className="text-white/80 font-light text-base">
            Begin your journey through Scripture
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden min-h-[650px] flex flex-col">
          <Tabs defaultValue="login" className="w-full h-full flex flex-col">
            <TabsList className="bg-transparent w-full p-0 h-auto rounded-none justify-start border-b border-white/10 shrink-0 flex">
              <TabsTrigger
                value="login"
                className="flex-1 py-3 text-sm text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/5 rounded-none border-b-2 border-transparent data-[state=active]:border-bible-gold transition-all duration-300 shadow-none"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="register"
                className="flex-1 py-3 text-sm text-white/70 data-[state=active]:text-white data-[state=active]:bg-white/5 rounded-none border-b-2 border-transparent data-[state=active]:border-bible-gold transition-all duration-300 shadow-none"
              >
                Sign Up
              </TabsTrigger>
            </TabsList>

            <div className="p-8 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <TabsContent value="login" className="mt-0 focus-visible:outline-none w-full">
                  <LoginForm />
                </TabsContent>

                <TabsContent value="register" className="mt-0 focus-visible:outline-none w-full">
                  <RegisterForm />
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </div>

        <div className="text-center mt-8 text-sm text-white/60 font-light">
          By continuing, you agree to our{' '}
          <Link to="/terms" className="text-white/90 hover:text-white underline decoration-white/30 hover:decoration-white transition-all">Terms</Link>
          {' '}and{' '}
          <Link to="/privacy" className="text-white/90 hover:text-white underline decoration-white/30 hover:decoration-white transition-all">Privacy Policy</Link>
        </div>
      </motion.div>
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

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <div className="relative group">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-bible-gold transition-colors" />
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-10 h-12 rounded-xl focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
              placeholder="Email address"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="relative group">
            <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-bible-gold transition-colors" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-10 pr-10 h-12 rounded-xl focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
              placeholder="Password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center text-white/70 hover:text-white cursor-pointer transition-colors">
            <input
              type="checkbox"
              className="rounded border-white/30 bg-white/10 text-bible-gold focus:ring-bible-gold mr-2"
            />
            Remember me
          </label>
          <a href="#" className="text-bible-gold hover:text-bible-gold/80 transition-colors">
            Forgot password?
          </a>
        </div>

        <Button
          type="submit"
          className="w-full h-12 bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
          disabled={loggingIn}
        >
          {loggingIn ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-4 w-4 border-2 border-bible-dark/30 border-t-bible-dark rounded-full animate-spin" />
              Signing in...
            </span>
          ) : 'Sign In'}
        </Button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs uppercase tracking-widest">
          <span className="px-4 bg-transparent text-white/40">Or continue with</span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleGoogleSignIn}
        disabled={loggingInWithGoogle}
        className="w-full h-10 bg-white text-bible-dark hover:bg-gray-50 font-medium text-sm rounded-lg flex items-center justify-center transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
      >
        {loggingInWithGoogle ? (
          <div className="h-4 w-4 border-2 border-bible-dark/30 border-t-bible-dark rounded-full animate-spin mr-2" />
        ) : (
          <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
          </svg>
        )}
        Continue with Google
      </button>
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
  const navigate = useNavigate();
  const { signUp, createSubscription } = useAuth();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      toast({ title: "Missing information", description: "Please fill out all fields.", variant: "destructive" });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: "Passwords do not match", description: "Please make sure your passwords match.", variant: "destructive" });
      return;
    }
    if (password.length < 8) {
      toast({ title: "Password too short", description: "Password must be at least 8 characters long.", variant: "destructive" });
      return;
    }
    try {
      setRegistering(true);
      await signUp(email, password, name);
      // Removed subscription automatic redirect for simpler flow, or keep as needed. 
      // Keeping original logic of checking out subscription.
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
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="space-y-6"
    >
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
        <div className="bg-bible-gold/20 p-2 rounded-lg">
          <CreditCard className="text-bible-gold h-5 w-5" />
        </div>
        <div>
          <h3 className="text-white font-medium text-sm">Premium Membership - $2.99/mo</h3>
          <p className="text-white/60 text-xs mt-1">
            Includes full access to all challenges & theology books.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-bible-gold transition-colors" />
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-white/5 border-white/10 text-white text-sm placeholder:text-white/30 pl-9 h-10 rounded-lg focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
            placeholder="Full Name"
            required
          />
        </div>

        <div className="relative group">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-bible-gold transition-colors" />
          <Input
            id="register-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white/5 border-white/10 text-white text-sm placeholder:text-white/30 pl-9 h-10 rounded-lg focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
            placeholder="Email address"
            required
          />
        </div>

        <div className="relative group">
          <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-bible-gold transition-colors" />
          <Input
            id="register-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-white/5 border-white/10 text-white text-sm placeholder:text-white/30 pl-9 h-10 rounded-lg focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
            placeholder="Password (min 8 chars)"
            required
            minLength={8}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        <div className="relative group">
          <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50 group-focus-within:text-bible-gold transition-colors" />
          <Input
            id="confirm-password"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="bg-white/5 border-white/10 text-white text-sm placeholder:text-white/30 pl-9 h-10 rounded-lg focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
            placeholder="Confirm Password"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>

        <div className="flex items-center pt-1">
          <input
            id="terms"
            type="checkbox"
            className="rounded border-white/30 bg-white/10 text-bible-gold focus:ring-bible-gold required:border-red-500 h-3 w-3"
            required
          />
          <label htmlFor="terms" className="ml-2 block text-xs text-white/60">
            I agree to the{' '}
            <Link to="/terms" className="text-bible-gold hover:underline">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-bible-gold hover:underline">Privacy Policy</Link>
          </label>
        </div>

        <Button
          type="submit"
          className="w-full h-10 bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium text-sm rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] mt-2"
          disabled={registering}
        >
          {registering ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-3 w-3 border-2 border-bible-dark/30 border-t-bible-dark rounded-full animate-spin" />
              Creating Account...
            </span>
          ) : 'Sign Up & Subscribe'}
        </Button>
      </form>
    </motion.div>
  );
};

export default AuthPage;
