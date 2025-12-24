import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const CookiePolicy = () => {
  return (
    <div className="flex flex-col flex-1">

      <main className="flex-grow py-12 px-4 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-serif font-bold mb-8">Cookie Policy</h1>

          <ScrollArea className="h-[70vh] rounded-md border p-6">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. What Are Cookies?</h2>
                <p className="text-gray-600">
                  Cookies are small text files stored on your device when you visit our website. They help us improve your browsing experience and understand how you interact with our platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. Types of Cookies We Use</h2>
                <p className="text-gray-600">
                  We use essential, functional, and analytics cookies to ensure our website works properly and to improve user experience.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                  <li>Essential Cookies: Necessary for core website functionality</li>
                  <li>Performance Cookies: Help us understand website usage</li>
                  <li>Functional Cookies: Enhance your browsing experience</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Cookie Management</h2>
                <p className="text-gray-600">
                  You can control or disable cookies through your browser settings. However, this may impact the functionality of our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Third-Party Cookies</h2>
                <p className="text-gray-600">
                  We may use third-party services that set cookies for analytics, performance, and advertising purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Updates to Cookie Policy</h2>
                <p className="text-gray-600">
                  We may update this policy periodically. We recommend reviewing it regularly for any changes.
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default CookiePolicy;
