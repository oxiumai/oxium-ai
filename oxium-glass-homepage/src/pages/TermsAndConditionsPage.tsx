import type React from 'react';

const TermsAndConditionsPage: React.FC = () => {
  const lastUpdatedDate = "May 18, 2025";
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 sm:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 text-oxium-white">
        Terms and Conditions
      </h1>
      <p className="text-center text-sm text-oxium-secondary mb-10 sm:mb-12">
        Last updated: {lastUpdatedDate}
      </p>
      <div className="text-left text-oxium-secondary space-y-6">
        <p className="leading-relaxed">
          These Terms and Conditions, together with the Service Agreement, constitute a legally binding agreement made between the Client identified in the Service Agreement and Oxium AI LLC ("Oxium"), concerning Client’s access to and use of the http://www.oxium.ai (the "Site"). Client agrees that by accessing the Site, Client has read, understood, and agreed to be bound by all of these Terms and Conditions. Oxium reserves the right, in its sole discretion, to make changes or modifications to these Terms and Conditions at any time and for any reason. Oxium will post the updated Terms and Conditions on the Site. Client will be subject to, and deemed to be aware of and to have accepted, any revised Terms and Conditions if Client continues to use the Site after the date such revised Terms and Conditions are posted.
        </p>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">1. CLIENT ACCESS AND CLIENT DATA</h2>
          <p className="leading-relaxed">
            Oxium grants Client a non-exclusive, non-transferable right to access the Site and use the Services during the term, solely for use by Client’s authorized users in accordance with these Terms and Conditions. Such use is limited to Client's internal business use. Oxium shall provide to Client the necessary passwords and network links or connections to allow Client to access the Site. Oxium acknowledges that, as between Oxium and Client, Client owns all right, title, and interest, including all intellectual property rights, in and to Client’s data uploaded to the Site. Client grants Oxium a non-exclusive, royalty-free, worldwide license to use Client data solely to the extent necessary for Oxium to provide the Services.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">2. OXIUM’S INTELLECTUAL PROPERTY RIGHTS</h2>
          <p className="leading-relaxed">
            Client acknowledges that, as between Client and Oxium, Oxium owns all right, title, and interest, including all intellectual property rights, in and to Oxium’s intellectual property, which includes all source code, databases, functionality, software, website designs, audio, video, text, photographs, graphics, and any proprietary AI models or data trained to enhance service performance.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">3. CLIENT REPRESENTATIONS</h2>
          <p className="leading-relaxed">
            By using the Site, Client represents and warrants that:
          </p>
          <ul className="list-disc list-inside pl-4 space-y-1 leading-relaxed">
            <li>All information provided by Client is accurate and complete.</li>
            <li>Client will comply with these Terms and Conditions.</li>
            <li>Client will not use the Site for any illegal or unauthorized purpose.</li>
            <li>Client’s use of the Site will not violate any applicable law or regulation.</li>
            <li>Client has obtained from its prospective customers the consent required by the TCPA or other applicable law to allow Oxium to contact those prospective customers on Client’s behalf.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">4. AI SERVICE SPECIFICATIONS</h2>
          <p className="leading-relaxed">
            Oxium provides AI-powered lead qualification, appointment scheduling, and sales automation services. Client acknowledges that these services do not guarantee specific financial results or sales outcomes, as AI performance can vary by client.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">5. CANCELLATION</h2>
          <p className="leading-relaxed">
            In the event Services are terminated by either Party, Client shall pay for all appointments scheduled through the Services through the effective date of termination.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">6. DATA SECURITY AND PRIVACY</h2>
          <p className="leading-relaxed">
            Oxium will employ reasonable administrative, technical, and physical safeguards to ensure the confidentiality, integrity, and availability of Client data. Oxium is committed to data security and is compliant with all applicable data protection regulations, including but not limited to GDPR and CCPA. Oxium will not share, sell, transfer, or otherwise make Client data available to any third party except as required to deliver the Services.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">7. DATA BACKUPS</h2>
          <p className="leading-relaxed">
            Oxium will maintain certain data that Client transmits to the Site for the purpose of managing the performance of the Site. However, Oxium does not guarantee data backups or the preservation of any specific data. Client is responsible for maintaining independent copies of any critical data.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">8. LIMITATION OF LIABILITY</h2>
          <p className="leading-relaxed">
            IN NO EVENT WILL OXIUM OR ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO CLIENT OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM CLIENT’S USE OF THE SITE OR SERVICES.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">9. DISPUTE RESOLUTION</h2>
          <p className="leading-relaxed">
            These Terms and Conditions are governed by and construed in accordance with the laws of the State of Texas, United States, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms and Conditions shall be resolved through binding arbitration in Houston, Texas, administered by the American Arbitration Association.
          </p>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-3 text-oxium-white">10. CONTACT INFORMATION</h2>
          <p className="leading-relaxed">
            If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditionsPage;
