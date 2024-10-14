import Link from 'next/link';

export default function ServiceAgreement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 py-6 flex flex-col items-center justify-center">
      <main className="max-w-2xl mx-auto rounded-3xl shadow-2xl bg-white p-8">
        <h1 className="text-3xl font-medium mb-6">EdgeAssist Service Agreement</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Project Information Accuracy</h2>
          <p>The client agrees to provide accurate, clear, and complete details regarding the project requirements. Any missing or unclear information may result in delays or additional requests for clarification.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Service Scope</h2>
          <p>The services provided by EdgeAssist are based solely on the specifications provided in the submission form. Any substantial changes or additions to the project after submission may result in additional charges and extensions to the delivery time.</p>
        </section>

        {/* Add the rest of the sections here */}

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Limitation of Liability</h2>
          <p>EdgeAssist will not be liable for any indirect, incidental, or consequential damages arising from the use of the services provided. Our maximum liability to the client, whether arising in contract, tort, or otherwise, will not exceed the amount paid for the specific service.</p>
        </section>

        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}