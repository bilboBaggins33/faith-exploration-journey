
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageSquare, User } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: values
      });
      
      if (error) {
        throw new Error(error.message);
      }
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-bible-dark dark:text-white sm:text-4xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-bible-dark/70 dark:text-white/70">
              Have questions about Bible Adventure Quest? We'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white dark:bg-bible-dark/50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-bible-blue" />
                  Email Us
                </h3>
                <p className="text-bible-dark/70 dark:text-white/70">
                  For general inquiries, please email:
                </p>
                <a 
                  href="mailto:info@bibleadventurequest.com" 
                  className="text-bible-blue hover:underline"
                >
                  info@bibleadventurequest.com
                </a>
              </div>

              <div className="bg-white dark:bg-bible-dark/50 p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-4">Follow Our Journey</h3>
                <p className="text-bible-dark/70 dark:text-white/70 mb-4">
                  Our mission is to help families engage with Scripture through interactive challenges and quests.
                </p>
                <p className="text-bible-dark/70 dark:text-white/70">
                  Join our community to receive updates on new features and content.
                </p>
              </div>
            </div>

            <div className="md:col-span-3 bg-white dark:bg-bible-dark/50 p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-bible-dark/40 dark:text-white/40" />
                            <Input placeholder="Your name" className="pl-10" {...field} />
                          </div>
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
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-bible-dark/40 dark:text-white/40" />
                            <Input placeholder="Your email address" className="pl-10" {...field} />
                          </div>
                        </FormControl>
                        <FormDescription>
                          We'll never share your email with anyone else.
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-bible-dark/40 dark:text-white/40" />
                            <Textarea 
                              placeholder="Type your message here..." 
                              className="min-h-[120px] pl-10 pt-7" 
                              {...field} 
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-bible-blue hover:bg-bible-deepBlue text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
