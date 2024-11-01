import React from 'react';

const Tos = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-offWhite mt-[70px]">
      <h1 className="text-3xl font-bold mb-6 text-center text-peanut uppercase">Terms of Service</h1>
      <p className="mb-2 text-sm text-gray-400 text-center">Effective Date: September 9, 2024</p>

      <p className="mb-4">
        Welcome to <span className="font-semibold">GlyphicX</span>! These Terms of Service govern your use of our website and services. By accessing or using our services, you agree to comply with these terms. If you do not agree, please do not use our services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>
          By using our website, you acknowledge that you have read and agree to these Terms of Service. We may update these terms from time to time, and your continued use signifies acceptance of those changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">2. Services Offered</h2>
        <p>
          <span className="font-semibold">GlyphicX</span> provides graphic design, branding, and related services. Details about our offerings can be found on our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">3. Intellectual Property</h2>
        <p>
          All content on our website, including designs, graphics, and text, is the property of <span className="font-semibold">GlyphicX</span> and protected by intellectual property laws. User-generated content may grant us rights to use it as described in our policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">4. Payment Terms</h2>
        <p>
          All payments for services are due as specified at the time of purchase. We reserve the right to change our fees, and users will be notified accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">5. Changes to the Terms</h2>
        <p>
          We may update these Terms of Service at any time. Changes will be posted on this page, and the effective date will be updated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">6. Contact Information</h2>
        <p>
          For any questions regarding these Terms of Service, please contact us at <a href="mailto:info@GlyphicX.com" className="text-peanut underline">info@GlyphicX.com</a>.
        </p>
      </section>
    </div>
  );
};

export default Tos;
