
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useSupabaseAuth } from './useSupabaseAuth';
import { useAuthOperations } from './useAuthOperations';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, session, isLoading, refreshUserProfile, getUserAvatar } = useSupabaseAuth();
  const { signIn, signInWithGoogle, signUp, signOut, createSubscription, checkSubscription } = useAuthOperations();
  const [hasSubscription, setHasSubscription] = useState(false);
  const [checkingSubscription, setCheckingSubscription] = useState(false);

  // Check subscription status when user changes
  useEffect(() => {
    const verifySubscription = async () => {
      if (user) {
        setCheckingSubscription(true);
        const isSubscribed = await checkSubscription();
        setHasSubscription(isSubscribed);
        setCheckingSubscription(false);
      } else {
        setHasSubscription(false);
      }
    };

    verifySubscription();
  }, [user]);

  const value = {
    user,
    session,
    isLoading,
    hasSubscription,
    checkingSubscription,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    refreshUserProfile,
    getUserAvatar,
    createSubscription,
    checkSubscription
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
