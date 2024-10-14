import Image from 'next/image';

export default function HeroSection() {
  return (
    <main className="flex flex-col max-w-2xl items-center justify-center mx-auto rounded-3xl shadow-2xl bg-white p-8">
      <div className="w-full text-center">
        <div className="scale-100">
          <Image
            src="/logo.svg"
            alt="Edge Assist Logo"
            width={200}
            height={100}
            className="mx-auto mb-6"
          />
        </div>
        <h1 className="text-5xl font-medium mb-4">
          Expert Support for Assignments, Projects & Papers at EdgeAssist.
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-light text-center">
            Custom solutions, fast delivery, and original work.
          </h2>
        </div>
        <a
          href="https://forms.gle/oYUzB4PSu7YKFB8q7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-3xl text-white bg-blue-600 py-3 px-6 rounded-xl font-medium transition-transform duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:bg-blue-700"
        >
          Get Started Now
        </a>
      </div>
    </main>
  );
}
