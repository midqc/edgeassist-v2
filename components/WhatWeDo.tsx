import Image from "next/image";

export default function WhatWeDo() {
  const features = [
    {
      title: "Plagiarism-Free Guarantee",
      description: "100% original content, passing all plagiarism checks.",
      image: "/images/plagiarism.png",
    },
    {
      title: "AI Detection Bypass",
      description: "Human-written content that bypasses AI detection systems.",
      image: "/images/ai-bypass.png",
    },
    {
      title: "Personalized Services",
      description: "Customized projects aligned with your academic goals.",
      image: "/images/personalized.png",
    },
    {
      title: "Confidentiality Assured",
      description:
        "Your privacy is our top priority, ensuring secure handling of your details.",
      image: "/images/confidentiality.png",
    },
    {
      title: "Expert Team",
      description: "Experienced professionals across various disciplines.",
      image: "/images/expert-team.png",
    },
    {
      title: "Timely Delivery",
      description: "Meeting deadlines, whether tight or flexible.",
      image: "/images/timely-delivery.png",
    },
  ];

  return (
    <section className="flex flex-col max-w-4xl items-center justify-center mx-auto rounded-3xl shadow-2xl bg-white p-8">
      <h2 className="text-3xl font-medium mb-8 text-center">
        Why Choose EdgeAssist?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl flex flex-col justify-between items-center"
          >
            <Image
              src={feature.image}
              alt={`${feature.title} icon`}
              width={60}
              height={60}
              className="mb-4 object-contain"
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
