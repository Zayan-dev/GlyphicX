import React from 'react';

const Tos = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-offWhite pt-32">
      <h1 className="text-3xl font-bold mb-6 text-center mainHeading text-transparent bg-clip-text bg-gradient-to-r from-peanut to-lightPink">
        Terms of Service
      </h1>
      <p className="mb-2 text-base text-gray-400 text-center">
        Effective Date: September 9, 2024
      </p>

      <p className="para mb-4">
        Welcome to <span className="font-semibold">GlyphicX</span>! These Terms
        of Service govern your use of our website and services. By accessing or
        using our services, you agree to comply with these terms. If you do not
        agree, please do not use our services.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">
          Acceptance of Terms
        </h2>
        <p className="para">
          By using our website, you acknowledge that you have read and agree to
          these Terms of Service. We may update these terms from time to time,
          and your continued use signifies acceptance of those changes.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">
          Services Offered
        </h2>
        <p className="para">
          <span className="font-semibold">GlyphicX</span> provides graphic
          design, branding, and related services. Details about our offerings
          can be found on our website.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">
          Intellectual Property
        </h2>
        <p className="para">
          All content on our website, including designs, graphics, and text, is
          the property of <span className="font-semibold">GlyphicX</span> and
          protected by intellectual property laws. User-generated content may
          grant us rights to use it as described in our policies.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">Payment Terms</h2>
        <p className="para">
          All payments for services are due as specified at the time of
          purchase. We reserve the right to change our fees, and users will be
          notified accordingly.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">
          Changes to the Terms
        </h2>
        <p className="para">
          We may update these Terms of Service at any time. Changes will be
          posted on this page, and the effective date will be updated.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl text-peanut mb-3 subHeading">
          Contact Information
        </h2>
        <p className="para">
          For any questions regarding these Terms of Service, please contact us
          at{" "}
          <a href="mailto:info@GlyphicX.com" className="text-peanut underline">
            info@GlyphicX.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default Tos;
