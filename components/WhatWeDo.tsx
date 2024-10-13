'use client';

import { useEffect, useRef, useState } from 'react';

export default function WhatWeDo() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      title: 'Plagiarism-Free Guarantee',
      description: '100% original content, passing all plagiarism checks.',
      image: '/images/plagiarism.png', // path to your plagiarism image
    },
    {
      title: 'AI Detection Bypass',
      description: 'Human-written content that bypasses AI detection systems.',
      image: '/images/ai-bypass.png', // example placeholder for AI detection
    },
    {
      title: 'Personalized Services',
      description: 'Customized projects aligned with your academic goals.',
      image: '/images/personalized.png', // example placeholder for personalized services
    },
    {
      title: 'Confidentiality Assured',
      description:
        'Your privacy is our top priority, ensuring secure handling of your details.',
      image: '/images/confidentiality.png', // example placeholder for confidentiality
    },
    {
      title: 'Expert Team',
      description: 'Experienced professionals across various disciplines.',
      image: '/images/expert-team.png', // example placeholder for expert team
    },
    {
      title: 'Timely Delivery',
      description: 'Meeting deadlines, whether tight or flexible.',
      image: '/images/timely-delivery.png', // example placeholder for timely delivery
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="flex flex-col max-w-2xl items-center justify-center mx-auto rounded-3xl shadow-2xl bg-white p-8"
    >
      <h2 className="text-3xl font-medium mb-8 text-center">
        Why Choose EdgeAssist?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl flex flex-col justify-between items-center"
          >
            <img
              src={feature.image}
              alt={`${feature.title} icon`}
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-xl font-medium mb-2 text-blue-600 text-center">
              {feature.title}
            </h3>
            <p className="text-gray-700 text-center">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
