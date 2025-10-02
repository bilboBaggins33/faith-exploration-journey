
import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { useSupabaseAuth } from './useSupabaseAuth';
import { useAuthOperations } from './useAuthOperations';

const SUBSCRIPTION_CACHE_KEY = 'subscription_status';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

interface SubscriptionCache {
  hasSubscription: boolean;
  timestamp: number;
  userId: string;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, session, isLoading, refreshUserProfile, getUserAvatar } = useSupabaseAuth();
  const { signIn, signInWithGoogle, signUp, signOut, createSubscription, checkSubscription } = useAuthOperations();
  const [hasSubscription, setHasSubscription] = useState(false);
  const [checkingSubscription, setCheckingSubscription] = useState(false);

  // Check subscription status with caching
  useEffect(() => {
    const verifySubscription = async () => {
      if (!user) {
        setHasSubscription(false);
        setCheckingSubscription(false);
        return;
      }

      // Check cache first
      const cached = localStorage.getItem(SUBSCRIPTION_CACHE_KEY);
      if (cached) {
        try {
          const cacheData: SubscriptionCache = JSON.parse(cached);
          const isCacheValid = 
            cacheData.userId === user.id &&
            Date.now() - cacheData.timestamp < CACHE_DURATION;

          if (isCacheValid) {
            setHasSubscription(cacheData.hasSubscription);
            setCheckingSubscription(false);
            // Silently revalidate in background
            checkSubscription().then(isSubscribed => {
              if (isSubscribed !== cacheData.hasSubscription) {
                setHasSubscription(isSubscribed);
                localStorage.setItem(SUBSCRIPTION_CACHE_KEY, JSON.stringify({
                  hasSubscription: isSubscribed,
                  timestamp: Date.now(),
                  userId: user.id
                }));
              }
            });
            return;
          }
        } catch (e) {
          // Invalid cache, proceed with fresh check
        }
      }

      // No valid cache, show loading and check
      setCheckingSubscription(true);
      const isSubscribed = await checkSubscription();
      setHasSubscription(isSubscribed);
      setCheckingSubscription(false);
      
      // Cache the result
      localStorage.setItem(SUBSCRIPTION_CACHE_KEY, JSON.stringify({
        hasSubscription: isSubscribed,
        timestamp: Date.now(),
        userId: user.id
      }));
    };

    verifySubscription();
  }, [user]);

  // Wrapper to invalidate cache after creating subscription
  const createSubscriptionWithCacheInvalidation = async () => {
    const result = await createSubscription();
    // Invalidate cache so next check will be fresh
    localStorage.removeItem(SUBSCRIPTION_CACHE_KEY);
    return result;
  };

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
    createSubscription: createSubscriptionWithCacheInvalidation,
    checkSubscription
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
