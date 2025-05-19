import type React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdatedDate = "May 18, 2025";
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 text-oxium-white">
        Privacy Policy
      </h1>
      <p className="text-center text-sm text-oxium-secondary mb-10 sm:mb-12">
        Last updated: {lastUpdatedDate}
      </p>
      <div className="text-left text-oxium-secondary space-y-6">
        <p className="leading-relaxed">
          This Privacy Policy describes how Oxium AI LLC ("Oxium") collects, uses, and shares information about you when you visit our website at http://www.oxium.ai (the "Site"). By using the Site, you agree to the terms of this Privacy Policy.
        </p>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">1. INFORMATION WE COLLECT</h2>
          <p className="leading-relaxed">
            We collect information you provide directly to us, including your name, email address, phone number, and any other information you choose to provide. We also collect information automatically, such as your IP address, browser type, and usage data.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">2. HOW WE USE YOUR INFORMATION</h2>
          <p className="leading-relaxed">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 leading-relaxed">
            <li>Provide, maintain, and improve our services.</li>
            <li>Personalize your experience on our Site.</li>
            <li>Communicate with you about your account or transactions.</li>
            <li>Send you marketing communications, if you have opted-in.</li>
            <li>Ensure compliance with legal obligations.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">3. HOW WE SHARE YOUR INFORMATION</h2>
          <p className="leading-relaxed">
            We do not sell your personal information. We may share your information with:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 leading-relaxed">
            <li>Service providers and partners who perform services on our behalf.</li>
            <li>Government authorities if required by law.</li>
            <li>In connection with any merger, sale, or transfer of assets.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">4. DATA SECURITY</h2>
          <p className="leading-relaxed">
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no system is completely secure.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">5. DATA RETENTION</h2>
          <p className="leading-relaxed">
            We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected or as required by law. You may request deletion of your data at any time.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">6. USER RIGHTS</h2>
          <p className="leading-relaxed">
            You may access, correct, or delete your personal information by contacting us at hello@oxium.ai.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">7. CHILDREN'S PRIVACY</h2>
          <p className="leading-relaxed">
            Our Site is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">8. CHANGES TO THIS POLICY</h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our Site.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">9. CONTACT INFORMATION</h2>
          <p className="leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <address className="not-italic space-y-1 leading-relaxed">
            <p>Oxium AI LLC</p>
            <p>Houston, Texas, United States of America</p>
            <p>Email: hello@oxium.ai</p>
            <p>Phone: +1 617 380 4224</p>
          </address>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
