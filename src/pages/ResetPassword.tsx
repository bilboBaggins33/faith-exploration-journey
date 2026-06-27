import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Key, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import ScrollToTop from '@/components/ScrollToTop';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [hasRecoverySession, setHasRecoverySession] = useState<boolean | null>(null);

  // The recovery link creates a session automatically (detectSessionInUrl).
  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(({ data }) => {
      if (active) setHasRecoverySession(Boolean(data.session));
    });
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' || session) {
        setHasRecoverySession(true);
      }
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 8) {
      toast({ title: 'Password too short', description: 'Use at least 8 characters.', variant: 'destructive' });
      return;
    }
    if (password !== confirmPassword) {
      toast({ title: 'Passwords do not match', description: 'Please re-enter your password.', variant: 'destructive' });
      return;
    }
    try {
      setSubmitting(true);
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setDone(true);
      toast({ title: 'Password updated', description: 'You can now sign in with your new password.' });
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (error) {
      toast({
        title: 'Could not reset password',
        description: (error as Error).message || 'The reset link may have expired. Please request a new one.',
        variant: 'destructive',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-bible-dark">
      <ScrollToTop />
      <div className="absolute inset-0 z-0">
        <img src="/assets/bible/default.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="text-center mb-6">
          <h1 className="text-2xl font-serif font-medium text-white mb-1 tracking-wide drop-shadow-md">
            Set a new password
          </h1>
          <p className="text-white/80 font-light text-base">
            Choose a strong password for your account
          </p>
        </div>

        <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8">
          {done ? (
            <div className="text-center py-6">
              <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
              <p className="text-white/90">Password updated — redirecting you in…</p>
            </div>
          ) : hasRecoverySession === false ? (
            <div className="text-center py-6 space-y-4">
              <p className="text-white/80 text-sm">
                This reset link is invalid or has expired. Request a new one from the sign-in page.
              </p>
              <Button
                className="bg-bible-gold hover:bg-bible-gold/90 text-bible-dark"
                onClick={() => navigate('/auth')}
              >
                Back to sign in
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative group">
                <Key className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-bible-gold transition-colors" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-10 pr-10 h-12 rounded-xl focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
                  placeholder="New password (min 8 chars)"
                  required
                  minLength={8}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>

              <div className="relative group">
                <ShieldCheck className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-bible-gold transition-colors" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 pl-10 h-12 rounded-xl focus:bg-white/10 focus:border-bible-gold/50 transition-all hover:bg-white/10"
                  placeholder="Confirm new password"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-12 bg-bible-gold hover:bg-bible-gold/90 text-bible-dark font-medium text-lg rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                {submitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="h-4 w-4 border-2 border-bible-dark/30 border-t-bible-dark rounded-full animate-spin" />
                    Updating…
                  </span>
                ) : (
                  'Update Password'
                )}
              </Button>
            </form>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
