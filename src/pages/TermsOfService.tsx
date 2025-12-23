import React from 'react';
import Navbar from '@/components/Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';

const TermsOfService = () => {
  return (
    <div className="flex flex-col flex-1">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-serif font-bold mb-8">Terms of Service</h1>
          
          <ScrollArea className="h-[70vh] rounded-md border p-6">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-600">
                  By accessing and using Bible Quest, you agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">2. Service Description</h2>
                <p className="text-gray-600">
                  Bible Quest is an interactive Bible learning platform that provides Bible study materials, challenges, and educational content.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">3. User Accounts</h2>
                <p className="text-gray-600">
                  To access certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account information.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">4. Subscription Terms</h2>
                <p className="text-gray-600">
                  Premium features require a paid subscription. Subscriptions automatically renew unless cancelled. Refunds are provided in accordance with applicable laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">5. Content Usage</h2>
                <p className="text-gray-600">
                  All content provided through the service is for personal, non-commercial use only. You may not redistribute or sell any content from the platform.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">6. User Conduct</h2>
                <p className="text-gray-600">
                  Users must not engage in any activity that disrupts the service or violates these terms. We reserve the right to terminate accounts for misconduct.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">7. Intellectual Property</h2>
                <p className="text-gray-600">
                  All content, features, and functionality are owned by Bible Quest and are protected by international copyright laws.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Users will be notified of significant changes via email or through the platform.
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default TermsOfService;
