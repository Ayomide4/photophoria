import { RightArrow } from "@/public/assets/svg";
import { useState } from "react";

const CoreValues = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggleCoreValues = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const coreValues = [
    {
      title: "Creativity",
      description: "Innovating new ways to make every event unique",
    },
    {
      title: "Connection",
      description:
        "Bringing people together through shared moments and memories",
    },
    {
      title: "Reliability",
      description:
        "Ensuring seamless, stress-free services that are user-friendly and efficient.",
    },
    {
      title: "Elegance",
      description: "Providing high-quality, premium experiences",
    },
  ];

  return (
    <div>
      {coreValues.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="relative flex flex-col bg-inherit w-full rounded-xl p-6 pb-10 border border-black/40 cursor-pointer transition-all duration-300"
            onClick={() => toggleCoreValues(index)}
          >
            <h2 className=" text-3xl mb-4">{item.title}</h2>
            <div
              className={`overflow-hidden transition-max-h duration-300 ${
                isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 w-[90%]">{item.description}</p>
            </div>
            {/* Arrow Container */}
            <div
              className={`absolute top-4 right-4 w-14 h-14 rounded-xl ${
                isOpen ? "bg-primary" : "bg-black"
              } flex items-center justify-center`}
            >
              <div
                className={`transform ${isOpen ? "-rotate-90" : "rotate-90"}`}
              >
                {/* Change arrow color dynamically */}
                <RightArrow fill={isOpen ? "#000000" : "#FFDF61"} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CoreValues;
