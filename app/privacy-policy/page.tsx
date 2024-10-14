'use client';

import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200">
      <main className="flex flex-col max-w-2xl w-full mx-auto rounded-3xl shadow-2xl bg-white p-8 my-8">
        <h1 className="text-3xl font-medium mb-6">EdgeAssist Privacy Policy</h1>
        <p className="mb-4"><strong>Effective Date</strong>: [Insert Date]</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">1. Introduction</h2>
        <p className="mb-4">At EdgeAssist, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services, including services provided internationally.</p>

        <h2 className="text-2xl font-medium mt-6 mb-4">2. Information We Collect</h2>
        <p className="mb-4">We may collect the following types of information:</p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Personal Information</strong>: This includes information that can identify you personally, such as your name, email address, phone number, and payment information, which you provide when you register for our services or communicate with us.</li>
          <li><strong>Project Information</strong>: Details related to the projects you submit, including specifications, requirements, and any other information you choose to provide.</li>
          <li><strong>Usage Data</strong>: We may collect information about how you access and use our website, including your IP address, browser type, pages visited, and the time and date of your visits.</li>
        </ul>

        {/* Add the rest of the sections here */}

        <h2 className="text-2xl font-medium mt-6 mb-4">9. Changes to This Privacy Policy</h2>
        <p className="mb-4">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. We encourage you to review this Privacy Policy periodically for any changes.</p>

        <Link href="/" className="mt-8 inline-block text-blue-600 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}