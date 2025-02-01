import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle only the clicked item
  };

  //TODO: add answers
  const faqs = [
    "Can I get additional custom props?",
    "What cities are you available in?",
    "Can I get digital copies of the photos?",
  ];

  return (
    <div className="flex flex-col mb-10 bg-primary w-full rounded-b-lg p-6 pb-10 border border-">
      <h2 className="font-bold text-3xl font-museo-moderno mb-4">
        Frequently Asked Questions
      </h2>
      {faqs.map((question, index) => (
        <div
          key={index}
          className={`mb-4 cursor-pointer ${
            openIndex === index ? "font-bold text-xl" : ""
          }`}
          onClick={() => toggleFAQ(index)}
        >
          <p className="mb-4 font-semibold">{question}</p>
          <hr className="border-black/20" />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
