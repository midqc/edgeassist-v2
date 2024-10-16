import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function TermsAndConditions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-100 to-neutral-200 gap-6">
      <Navbar />
      <main className="flex flex-col max-w-3xl w-full mx-auto rounded-3xl bg-white p-8">
        <h1 className="text-4xl font-medium mb-6 text-black text-center">
          Terms and Conditions
        </h1>
        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">General Usage Policy</h2>
          <p className="text-gray-600">
            By accessing and using EdgeAssist&apos;s services, users agree to
            comply with these Terms and Conditions. If you do not agree to these
            terms, you may not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">
            User Rights and Responsibilities
          </h2>
          <p className="text-gray-600">
            Users are responsible for providing accurate information when using
            the services. Users must also adhere to all applicable laws and
            regulations while using EdgeAssist&apos;s services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Intellectual Property</h2>
          <p className="text-gray-600">
            All content, trademarks, and other intellectual property associated
            with EdgeAssist&apos;s services are owned by EdgeAssist. Users may
            not reproduce or distribute any content without prior written
            permission.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-medium mb-2">Limitation of Liability</h2>
          <p className="text-gray-600">
            EdgeAssist shall not be liable for any damages arising from the use
            of its services. This includes, but is not limited to, direct,
            indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="">
          <h2 className="text-2xl font-medium mb-2">Dispute Resolution</h2>
          <p className="text-gray-600">
            In the event of a dispute, users agree to first attempt to resolve
            the matter informally with EdgeAssist. If an informal resolution is
            not possible, users agree to pursue mediation before seeking legal
            action.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
