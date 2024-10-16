"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <main className="flex flex-col max-w-4xl items-center justify-center mx-auto rounded-3xl bg-white p-8">
      <div className="w-full text-center">
        <h1 className="text-5xl font-medium mb-4">
          Expert Support for Assignments, Projects & Papers.
        </h1>
        <div className="mb-6">
          <h2 className="text-2xl font-light text-center">
            Custom solutions, fast delivery, and original work.
          </h2>
        </div>
        <motion.a
          href="https://forms.gle/oYUzB4PSu7YKFB8q7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-3xl text-white py-3 px-6 rounded-xl font-medium relative overflow-hidden animate-gradient-x shadow-soft"
          style={{
            background: "linear-gradient(90deg, #2563eb, #60a5fa, #2563eb)",
            backgroundSize: "200% 100%",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
        >
          Get Started Now
        </motion.a>
      </div>
    </main>
  );
}
