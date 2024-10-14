import Link from 'next/link';

export default function ServiceAgreement() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 py-6 flex flex-col items-center justify-center">
      <main className="max-w-2xl mx-auto rounded-3xl shadow-2xl bg-white p-8">
        <h1 className="text-3xl font-medium mb-6 text-blue-600">EdgeAssist Service Agreement</h1>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Project Information Accuracy</h2>
          <p className='text-gray-600'>The client agrees to provide accurate, clear, and complete details regarding the project requirements. Any missing or unclear information may result in delays or additional requests for clarification.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Service Scope</h2>
          <p className='text-gray-600'>The services provided by EdgeAssist are based solely on the specifications provided in the submission form. Any substantial changes or additions to the project after submission may result in additional charges and extensions to the delivery time.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Revision Policy</h2>
          <p className='text-gray-600'>The client is entitled to one free revision if the completed work does not meet the agreed-upon requirements. Revisions must be requested within five business days. Further revisions, or revisions that involve new instructions, may incur extra charges.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Deadline Compliance</h2>
          <p className='text-gray-600'>EdgeAssist will make every effort to meet the provided deadline. However, the client must ensure that the deadline is reasonable, taking into account the scope of the work requested. If additional time is required due to project complexity or revision requests, the client will be informed promptly.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Intellectual Property and Plagiarism</h2>
          <p className='text-gray-600'>EdgeAssist guarantees that all work produced is original and free from plagiarism. However, clients are responsible for ensuring the ethical use of the provided work in accordance with their institution&apos;s policies on academic integrity. EdgeAssist does not endorse or condone academic dishonesty. Any request for work that directly violates academic integrity policies will be refused.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Confidentiality</h2>
          <p className='text-gray-600'>All client information, including personal details, project details, and submitted materials, will be kept confidential. EdgeAssist will not share or disclose any client information to third parties without consent.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Payment Terms</h2>
          <p className='text-gray-600'>Payment for services will be discussed and confirmed after an initial review of the project request. Payment must be completed before work commences unless otherwise agreed upon. Failure to make payment by the agreed-upon deadline may result in delays or cancellation of services.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Refund Policy</h2>
          <p className='text-gray-600'>Refunds are only issued under specific circumstances, such as failure to deliver the agreed-upon work or inability to meet the specified requirements. Partial refunds may be offered in cases of incomplete work or delays.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Client Responsibility</h2>
          <p className='text-gray-600'>The client is responsible for reviewing the final product and ensuring it meets their expectations. Once the final product is delivered, the client has five business days to request revisions. After this period, any additional work will be treated as a new project and may incur additional charges.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Limitation of Liability</h2>
          <p className='text-gray-600'>EdgeAssist will not be liable for any indirect, incidental, or consequential damages arising from the use of the services provided. Our maximum liability to the client, whether arising in contract, tort, or otherwise, will not exceed the amount paid for the specific service.</p>
        </section>

        <Link href="/" className="text-blue-600 hover:underline">
          Back to Home
        </Link>
      </main>
    </div>
  );
}
