
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
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoggingIn(true);
    
    // Simulate login process
    setTimeout(() => {
      setLoggingIn(false);
      navigate('/profile');
    }, 1500);
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
        
        <div className="grid grid-cols-3 gap-3">
          <button
            type="button"
            className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.615 11.615 0 006.29 1.84" />
            </svg>
          </button>
          
          <button
            type="button"
            className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
          </button>
          
          <button
            type="button"
            className="inline-flex justify-center items-center py-2.5 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
          >
            <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
            </svg>
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setRegistering(true);
    
    // Simulate registration process
    setTimeout(() => {
      setRegistering(false);
      navigate('/profile');
    }, 1500);
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
