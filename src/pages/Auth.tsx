
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Eye, EyeOff, User, Key, Mail, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/hooks/use-toast';

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-10 bg-bible-beige min-h-[calc(100vh-4rem)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center min-h-[calc(100vh-16rem)]">
              <div className="w-full max-w-md">
                <div className="glass-card rounded-xl shadow-xl overflow-hidden">
                  <Tabs defaultValue="login" className="w-full">
                    <div className="px-6 pt-6">
                      <TabsList className="grid grid-cols-2 w-full">
                        <TabsTrigger value="login">Sign In</TabsTrigger>
                        <TabsTrigger value="register">Sign Up</TabsTrigger>
                      </TabsList>
                    </div>
                    
                    <div className="p-6">
                      <TabsContent value="login">
                        <LoginForm />
                      </TabsContent>
                      
                      <TabsContent value="register">
                        <RegisterForm />
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-sm text-bible-dark/70">
                    By signing in or creating an account, you agree to our{' '}
                    <a href="#" className="text-bible-blue hover-link">Terms of Service</a>{' '}
                    and{' '}
                    <a href="#" className="text-bible-blue hover-link">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
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
  const { signIn, signInWithGoogle } = useAuth();
  const { toast } = useToast();
  
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
      navigate('/profile');
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
      // No navigation needed as redirect is handled by Supabase OAuth
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setLoggingInWithGoogle(false);
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
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold">Welcome Back</h1>
          <p className="text-sm text-bible-dark/70">
            Sign in to continue your biblical journey
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
        
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-bible-dark/60">
              Or continue with
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
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
                Connecting to Google...
              </span>
            ) : (
              <>
                <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                  <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                  <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                </svg>
                Sign in with Google
              </>
            )}
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
  const navigate = useNavigate();
  const { signUp } = useAuth();
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
      navigate('/profile');
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
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
        <div className="text-center mb-8">
          <h1 className="text-2xl font-serif font-bold">Create Your Account</h1>
          <p className="text-sm text-bible-dark/70">
            Join our community of Bible explorers
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
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
              <a href="#" className="text-bible-blue hover-link">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-bible-blue hover-link">Privacy Policy</a>
            </label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-bible-blue hover:bg-bible-deepBlue"
            disabled={registering}
          >
            {registering ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating account...
              </span>
            ) : (
              'Create Account'
            )}
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default AuthPage;
