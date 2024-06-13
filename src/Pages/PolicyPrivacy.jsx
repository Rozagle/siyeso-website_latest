// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div id='policyprivacy' className="bg-gray-100 min-h-screen">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4">
        <Link to="/">Back to Home</Link>
      </button>
      <div className="max-w-4xl mx-auto p-8">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
        </header>
        <div className="bg-white rounded-lg shadow-md p-8">
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Introduction to Privacy Policy</h2>
            <p>Our privacy policy outlines the ways in which we collect, use, and protect your personal information.</p>
            <p>We are committed to safeguarding your privacy and ensuring that your personal data is handled responsibly.</p>
            <p>Understanding our privacy policy will help you make informed decisions about sharing your information with us.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p>We collect information that you provide directly to us, such as your name, email address, and payment details.</p>
            <p>Our systems also gather data automatically, including IP addresses, browser type, and usage patterns.</p>
            <p>We may obtain information about you from third-party sources to enhance our services.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p>Your information helps us provide, maintain, and improve our services.</p>
            <p>We use your data to communicate with you, including sending updates and promotional offers.</p>
            <p>Personal data is crucial for ensuring security and preventing fraud.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Sharing Your Information</h2>
            <p>We do not sell your personal information to third parties.</p>
            <p>Your data may be shared with trusted partners who assist us in operating our website and conducting our business.</p>
            <p>We may disclose your information to comply with legal obligations or protect our rights.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Data Security</h2>
            <p>We implement robust security measures to protect your personal information from unauthorized access.</p>
            <p>Regular security audits and encryption technologies ensure the safety of your data.</p>
            <p>Despite our efforts, no security system is impenetrable, and we encourage you to take precautions as well.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Choices and Rights</h2>
            <p>You have the right to access, correct, or delete your personal information.</p>
            <p>You can opt-out of receiving promotional communications from us at any time.</p>
            <p>Our policy outlines the process for exercising your data protection rights.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
            <p>We may update our privacy policy from time to time to reflect changes in our practices.</p>
            <p>Significant changes will be communicated to you through our website or via email.</p>
            <p>Your continued use of our services after policy changes constitutes acceptance of the new terms.</p>
          </section>
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:privacy@ourcompany.com" className="text-blue-500">privacy@ourcompany.com</a>.</p>
            <p>Our support team is available to address any issues related to your privacy and data protection.</p>
            <p>We value your feedback and strive to improve our privacy practices based on your input.</p>
          </section>
        </div>
      </div>
      <footer className="bg-gray-200 py-4 text-center">
        <p>Contact us at <a href="mailto:privacy@ourcompany.com" className="text-blue-500">privacy@ourcompany.com</a> for any inquiries regarding our privacy policy.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
