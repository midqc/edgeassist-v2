import Image from "next/image";

export default function WhatWeDo() {
  const features = [
    {
      title: "Plagiarism-Free Guarantee",
      description: ["100% original content, passing all plagiarism checks."],
      image: "/images/plagiarism.png",
    },
    {
      title: "AI Detection Bypass",
      description: [
        "Human-written content that bypasses AI detection",
        "systems.",
      ],
      image: "/images/ai-bypass.png",
    },
    {
      title: "Personalized Services",
      description: ["Customized projects aligned with your", "academic goals."],
      image: "/images/personalized.png",
    },
    {
      title: "Confidentiality Assured",
      description: [
        "Your privacy is our top priority, ensuring secure",
        "handling of your details.",
      ],
      image: "/images/confidentiality.png",
    },
    {
      title: "Professional Support",
      description: ["Experienced experts across various disciplines."],
      image: "/images/expert-team.png",
    },
    {
      title: "Timely Delivery",
      description: ["Meeting deadlines, whether tight or flexible."],
      image: "/images/timely-delivery.png",
    },
  ];

  return (
    <section className="flex flex-col max-w-4xl items-center justify-center mx-auto rounded-3xl shadow-2xl bg-white p-8">
      <h2 className="text-3xl font-medium mb-8 text-center">
        Why Choose EdgeAssist?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-end">
              <div className="w-6 h-6 bg-gray-50 relative">
                <div className="absolute right-0 bottom-0 w-6 h-6 bg-white rounded-br-lg"></div>
              </div>
              <div className="bg-gray-50 p-2 rounded-t-xl">
                <Image
                  src={feature.image}
                  alt={`${feature.title} icon`}
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <div className="w-6 h-6 bg-gray-50 relative">
                <div className="absolute left-0 bottom-0 w-6 h-6 bg-white rounded-bl-lg"></div>
              </div>
            </div>
            <div className="flex items-end">
              <div className="w-6 h-6 bg-gray-50 relative">
                <div className="absolute right-0 bottom-0 w-6 h-6 bg-white rounded-br-lg"></div>
              </div>
              <h3 className="text-xl font-medium text-blue-600 text-center bg-gray-50 px-3 py-1 rounded-tl-xl rounded-tr-xl">
                {feature.title}
              </h3>
              <div className="w-6 h-6 bg-gray-50 relative">
                <div className="absolute left-0 bottom-0 w-6 h-6 bg-white rounded-bl-lg"></div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-md text-gray-700 text-center bg-gray-50 px-3 pt-2 pb-0 rounded-xl">
                {feature.description[0]}
              </p>
              {feature.description[1] && (
                <p className="text-md text-gray-700 text-center bg-gray-50 px-3 pt-0 pb-2 rounded-b-xl">
                  {feature.description[1]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
