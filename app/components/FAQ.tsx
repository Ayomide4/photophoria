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
    <div className="flex flex-col mb-10 bg-primary w-full rounded-b-lg p-6 pb-10 md:h-full md:mb-0 md:rounded-none md:rounded-r-xl xl:p-8 2xl:p-10">
      {/* FAQ Heading */}
      <h2 className="font-bold text-3xl font-museo-moderno mb-4 lg:text-5xl lg:mb-8 xl:text-6xl xl:mb-10 2xl:text-7xl 2xl:mb-12">
        Frequently Asked Questions
      </h2>

      {/* FAQ Items */}
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 xl:mb-6 2xl:mb-8">
          {/* Question */}
          <div
            className="cursor-pointer flex justify-between items-center font-semibold transition-all duration-300"
            onClick={() => toggleFAQ(index)}
          >
            <p className="text-lg lg:text-2xl xl:text-3xl 2xl:text-4xl">
              {faq.question}
            </p>
            <motion.div
              animate={{ rotate: openIndex === index ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="text-xl xl:text-2xl 2xl:text-3xl"
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
                <p className="mt-2 text-lg text-black lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Divider */}
          <hr className="border-black/20 mt-2 lg:mb-4 xl:mt-4 2xl:mt-6" />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
