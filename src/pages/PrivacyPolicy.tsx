import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col flex-1">

      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-serif font-bold mb-8">Privacy Policy</h1>

          <ScrollArea className="h-[70vh] rounded-md border p-6">
            <div className="space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-3">1. Information We Collect</h2>
                <p className="text-gray-600">
                  We collect information you provide directly, including account details, reading progress, and usage data to improve your experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">2. How We Use Your Information</h2>
                <p className="text-gray-600">
                  Your information is used to provide and improve our services, personalize your experience, and communicate with you about your account.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">3. Information Sharing</h2>
                <p className="text-gray-600">
                  We do not sell your personal information. We may share data with service providers who assist in operating our platform.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information from unauthorized access or disclosure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">5. Cookies and Tracking</h2>
                <p className="text-gray-600">
                  We use cookies and similar technologies to enhance your experience and collect usage data for analytics purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
                <p className="text-gray-600">
                  You have the right to access, correct, or delete your personal information. Contact us to exercise these rights.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">7. Children's Privacy</h2>
                <p className="text-gray-600">
                  Our service is not directed to children under 13. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-3">8. Updates to Privacy Policy</h2>
                <p className="text-gray-600">
                  We may update this policy periodically. We will notify you of significant changes via email or through the platform.
                </p>
              </section>
            </div>
          </ScrollArea>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
