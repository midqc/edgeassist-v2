import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200">
      <main className="flex flex-col max-w-2xl w-full mx-auto rounded-3xl shadow-2xl bg-white p-8 my-8">
        <h1 className="text-3xl font-medium mb-6">EdgeAssist Privacy Policy</h1>
        <p className="mb-4">Effective Date: October 14, 2024</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">1. Introduction</h2>
        <p className="mb-4">At EdgeAssist, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including services provided internationally.</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">2. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Personal Information: This includes information that can identify you personally, such as your name, email address, phone number, and payment information, which you provide when you register for our services or communicate with us.</li>
          <li>Project Information: Details related to the projects you submit, including specifications, requirements, and any other information you choose to provide.</li>
          <li>Usage Data: We may collect information about how you access and use our website, including your IP address, browser type, pages visited, and the time and date of your visits.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-6 mb-4">3. How We Use Your Information</h2>
        <p className="mb-4">We may use the information we collect for various purposes, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>To provide and maintain our services.</li>
          <li>To communicate with you, including sending updates and important information about your projects.</li>
          <li>To process your payments and manage your account.</li>
          <li>To improve our website and services through data analysis.</li>
          <li>To comply with legal obligations and protect our rights.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-6 mb-4">4. Sharing Your Information</h2>
        <p className="mb-4">We do not sell or rent your personal information to third parties. However, we may share your information in the following circumstances:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Service Providers: We may employ third-party companies and individuals to facilitate our services, such as payment processors and email service providers. These third parties will only have access to your personal information to perform tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
          <li>Legal Requirements: We may disclose your information if required by law or in response to valid requests by public authorities.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-6 mb-4">5. International Data Transfers</h2>
        <p className="mb-4">Your information, including personal information, may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. If you are located outside India and choose to provide information to us, please note that we transfer the data, including personal information, to India and process it there. By providing your information, you consent to the transfer of your information to India and its use in accordance with this Privacy Policy.</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">6. Data Security</h2>
        <p className="mb-4">We implement a variety of security measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">7. Your Rights</h2>
        <p className="mb-4">Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc list-inside mb-4">
          <li>The right to access, correct, or delete your personal information.</li>
          <li>The right to restrict or object to the processing of your personal information.</li>
          <li>The right to withdraw consent at any time where we rely on your consent to process your personal information.</li>
        </ul>

        <h2 className="text-2xl font-medium mt-6 mb-4">8. Cookies</h2>
        <p className="mb-4">Our website may use cookies to enhance user experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>

        <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}
