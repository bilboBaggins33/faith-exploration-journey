
import React from 'react';
import { AuthContext } from './AuthContext';
import { useSupabaseAuth } from './useSupabaseAuth';
import { useAuthOperations } from './useAuthOperations';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, session, isLoading, refreshUserProfile, getUserAvatar } = useSupabaseAuth();
  const { signIn, signInWithGoogle, signUp, signOut } = useAuthOperations();

  const value = {
    user,
    session,
    isLoading,
    signIn,
    signInWithGoogle,
    signUp,
    signOut,
    refreshUserProfile,
    getUserAvatar,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
