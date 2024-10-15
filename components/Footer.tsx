import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col max-w-2xl w-full mx-auto rounded-3xl shadow-2xl bg-white p-8 mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-medium mb-4">Contact Information</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:hello@edgeassist.in"
              className="text-blue-600 hover:underline"
            >
              hello@edgeassist.in
            </a>
          </p>
          <a
            href="https://wa.me/919915172910?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20the%20services%20offered%20by%20EdgeAssist."
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            WhatsApp
          </a>
        </div>
        <div>
          <h3 className="text-xl font-medium mb-4">Legal Information</h3>
          <Link
            href="/service-agreement"
            className="block text-blue-600 hover:underline"
          >
            Service Agreement
          </Link>
          <Link
            href="/terms-and-conditions"
            className="block text-blue-600 hover:underline"
          >
            Terms & Conditions
          </Link>
          <Link
            href="/privacy-policy"
            className="block text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-gray-500">
        © 2024 EdgeAssist. All rights reserved.
      </div>
    </footer>
  );
}
