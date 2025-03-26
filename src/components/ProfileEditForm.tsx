
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User } from '@supabase/supabase-js';
import { Pencil, Loader2, Upload, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/lib/supabase';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const profileFormSchema = z.object({
  fullName: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

interface ProfileEditFormProps {
  user: User | null;
  fullName: string;
  email: string | undefined;
  avatarUrl: string | null;
  onProfileUpdated: () => void;
}

const ProfileEditForm = ({ user, fullName, email, avatarUrl, onProfileUpdated }: ProfileEditFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAvatarLoading, setIsAvatarLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(avatarUrl);
  const { toast } = useToast();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues: {
      fullName: fullName || '',
      email: email || '',
    },
  });

  async function onSubmit(data: ProfileFormValues) {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Update email if changed
      if (data.email !== email) {
        const { error: emailError } = await supabase.auth.updateUser({
          email: data.email,
        });
        
        if (emailError) throw emailError;
        
        toast({
          title: "Email update initiated",
          description: "Please check your inbox to confirm your new email address.",
        });
      }
      
      // Update profile data
      const { error: profileError } = await supabase
        .from('user_profiles')
        .update({
          full_name: data.fullName,
        })
        .eq('user_id', user.id);
      
      if (profileError) throw profileError;
      
      toast({
        title: "Profile updated",
        description: "Your profile information has been updated successfully.",
      });
      
      onProfileUpdated();
    } catch (error: any) {
      console.error('Error updating profile:', error.message);
      toast({
        title: "Update failed",
        description: error.message || "Failed to update profile information",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  }

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file || !user) return;
    
    // Check file size (max 2MB)
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Profile picture must be less than 2MB",
        variant: "destructive",
      });
      return;
    }
    
    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive",
      });
      return;
    }
    
    // Create a preview
    setPreviewUrl(URL.createObjectURL(file));
    
    setIsAvatarLoading(true);
    try {
      // Check if avatars bucket exists, if not, try to create it
      const { data: buckets } = await supabase.storage.listBuckets();
      let avatarBucketExists = buckets?.some(bucket => bucket.name === 'avatars');
      
      if (!avatarBucketExists) {
        // Try to create the bucket
        try {
          const { error } = await supabase.storage.createBucket('avatars', {
            public: true
          });
          if (error) throw error;
          avatarBucketExists = true;
        } catch (bucketError) {
          console.error('Error creating avatars bucket:', bucketError);
          // Continue anyway, since we'll inform the user if upload fails
        }
      }
      
      // Upload the file
      const filePath = `${user.id}/${Date.now()}_${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });
      
      if (uploadError) throw uploadError;
      
      // Get the public URL
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      const publicUrl = data.publicUrl;
      
      // Update user metadata with avatar URL
      await supabase.auth.updateUser({
        data: { avatar_url: publicUrl }
      });
      
      toast({
        title: "Avatar updated",
        description: "Your profile picture has been updated successfully.",
      });
      
      onProfileUpdated();
    } catch (error: any) {
      console.error('Error uploading avatar:', error.message);
      toast({
        title: "Upload failed",
        description: error.message || "Failed to upload profile picture",
        variant: "destructive",
      });
      // Reset preview on error
      setPreviewUrl(avatarUrl);
    } finally {
      setIsAvatarLoading(false);
    }
  };

  const handleRemoveAvatar = async () => {
    if (!user) return;
    
    setIsAvatarLoading(true);
    try {
      // Update user metadata to remove avatar URL
      await supabase.auth.updateUser({
        data: { avatar_url: null }
      });
      
      setPreviewUrl(null);
      
      toast({
        title: "Avatar removed",
        description: "Your profile picture has been removed.",
      });
      
      onProfileUpdated();
    } catch (error: any) {
      console.error('Error removing avatar:', error.message);
      toast({
        title: "Failed to remove avatar",
        description: error.message || "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsAvatarLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <Avatar className="w-24 h-24 border-4 border-white bg-white shadow-lg">
            {previewUrl ? (
              <AvatarImage src={previewUrl} alt="Profile picture" />
            ) : (
              <AvatarFallback className="text-3xl bg-bible-sky text-bible-blue">
                {fullName?.charAt(0) || user?.email?.charAt(0) || '?'}
              </AvatarFallback>
            )}
            
            {isAvatarLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full">
                <Loader2 className="h-8 w-8 text-white animate-spin" />
              </div>
            )}
          </Avatar>
          
          <div className="flex mt-2 gap-2 justify-center">
            <label htmlFor="avatar-upload">
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                className="cursor-pointer"
                disabled={isAvatarLoading}
              >
                <Upload className="h-4 w-4 mr-1" /> Upload
              </Button>
              <input 
                id="avatar-upload" 
                type="file" 
                accept="image/*" 
                className="hidden" 
                onChange={handleAvatarUpload}
                disabled={isAvatarLoading}
              />
            </label>
            
            {previewUrl && (
              <Button 
                type="button" 
                variant="outline" 
                size="sm"
                className="cursor-pointer text-red-500 border-red-200 hover:bg-red-50"
                onClick={handleRemoveAvatar}
                disabled={isAvatarLoading}
              >
                <X className="h-4 w-4 mr-1" /> Remove
              </Button>
            )}
          </div>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your name" 
                    {...field} 
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your email address" 
                    type="email" 
                    {...field}
                    disabled={isLoading}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div className="flex justify-end">
            <Button type="submit" className="bg-bible-blue hover:bg-bible-deepBlue" disabled={isLoading}>
              {isLoading && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileEditForm;
