"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question:
      "What makes EdgeAssist unique compared to other academic support services?",
    answer:
      "EdgeAssist stands out by offering plagiarism-free, human-written content that avoids AI detection, along with personalized service and dedicated customer support.",
  },
  {
    question: "What are your typical turnaround times?",
    answer:
      "We can deliver standard essays within 48-72 hours. For larger or more complex projects, delivery times are tailored to meet your deadlines, with options for expedited services.",
  },
  {
    question: "Can you handle complex or technical projects?",
    answer:
      "Yes, our expert team is well-versed in various academic and professional fields, meaning we can support everything from simple essays to highly technical research and coding projects.",
  },
  {
    question: "How do you ensure the originality of your work?",
    answer:
      "We use sophisticated plagiarism detection tools and manual checks to ensure that every project is 100% original and tailored to your specific requirements.",
  },
  {
    question: "What happens if I'm not satisfied with the work?",
    answer:
      "Your satisfaction is our priority. We offer one free revision to align the work with your expectations. If more changes are needed, we provide additional revisions at a reasonable fee.",
  },
  {
    question: "How do payments work?",
    answer:
      "Payments are processed securely, and we provide a clear pricing structure upfront based on your project's complexity and requirements.",
  },
  {
    question: "What is your refund policy?",
    answer:
      "We offer partial or full refunds in cases where we are unable to meet the agreed-upon project requirements. You can find more details in our Service Agreement.",
  },
];

const FAQItem: React.FC<{ item: FAQItem; isLast: boolean }> = ({
  item,
  isLast,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`py-4 ${!isLast ? "border-b border-gray-200" : ""}`}>
      <button
        className="flex justify-between items-center w-full text-left cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{item.question}</span>
        <span className="text-2xl">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          )}
        </span>
      </button>
      <motion.div
        className="mt-2 text-gray-600"
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
        style={{ overflow: "hidden" }}
      >
        <p>{item.answer}</p>
      </motion.div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="flex flex-col max-w-4xl w-full mx-auto rounded-3xl shadow-2xl bg-white p-8">
      <h2 className="text-3xl font-medium mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isLast={index === faqData.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
