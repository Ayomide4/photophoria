import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Can I get additional custom props?",
    answer:
      "Yes, you can request custom props when booking your Photo Booth experience.",
  },
  {
    question: "What cities are you available in?",
    answer:
      "We are available in the Dallas-Fort Worth environs and North Dallas environs.",
  },
  {
    question: "Can I get digital copies of the photos?",
    answer:
      "Yes, our Photo Booths provide unlimited digital sharing to your mobile phones and social media.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col mb-10 bg-primary w-full rounded-b-lg p-6 pb-10 md:h-full md:mb-0 md:rounded-none md:rounded-r-xl">
      <h2 className="font-bold text-3xl font-museo-moderno mb-4 lg:text-5xl lg:mb-8">
        Frequently Asked Questions
      </h2>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4">
          {/* Question */}
          <div
            className="cursor-pointer flex justify-between items-center font-semibold transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-lg lg:text-2xl">{faq.question}</p>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
            >
              ➕
            </motion.div>
          </div>

          {/* Answer with smooth expand/collapse animation */}
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-lg text-black lg:text-xl">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          <hr className="border-black/20 mt-2 lg:mb-4" />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
