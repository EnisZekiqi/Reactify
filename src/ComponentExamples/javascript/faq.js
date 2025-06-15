export const codeSnippet24 = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiChat1, CiCoins1, CiMicrochip, CiRoute } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState("");

  const faqs = [
    { id: "What is Interaction Design", description: "Interaction design is about creating engaging interfaces with well-thought-out behaviors.", icon: <CiChat1 size={23} /> },
    { id: "Principles & Patterns", description: "Design principles and reusable patterns help users navigate your app intuitively.", icon: <CiCoins1 size={23} /> },
    { id: "Usability & Accessibility", description: "Ensuring that your product is easy to use and accessible to all users is essential.", icon: <CiRoute size={23} /> },
    { id: "UX Optimization", description: "UX optimization focuses on improving user satisfaction by refining every interaction.", icon: <CiMicrochip size={23} /> }
  ];

  return (
    <div className="flex flex-col items-start gap-2">
      {faqs.map((faq, index) => (
        <motion.div
          layout
          onClick={() =>
            setShowFAQ(showFAQ === faq.id ? "" : faq.id)
          }
          key={index}
          className="p-3 border border-[#343434] rounded-2xl w-[320px] bg-white text-black cursor-pointer shadow-sm"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-md sm:text-lg font-medium">
              {faq.icon}
              {faq.id}
            </div>
            <motion.div
              animate={{ rotate: showFAQ === faq.id ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <IoIosArrowDown />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {showFAQ === faq.id && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: 50, y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden text-sm text-gray-600 mt-2"
              >
                {faq.description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;

`;

export const codeSnippet24TS = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CiChat1,
  CiCoins1,
  CiMicrochip,
  CiRoute,
} from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { ReactNode } from "react";

// Define the FAQ item type
interface FAQItem {
  id: string;
  description: string;
  icon: ReactNode;
}

const FAQ: React.FC = () => {
  const [showFAQ, setShowFAQ] = useState<string>("");

  const faqs: FAQItem[] = [
    {
      id: "What is Interaction Design",
      description:
        "Interaction design is about creating engaging interfaces with well-thought-out behaviors.",
      icon: <CiChat1 size={23} />,
    },
    {
      id: "Principles & Patterns",
      description:
        "Design principles and reusable patterns help users navigate your app intuitively.",
      icon: <CiCoins1 size={23} />,
    },
    {
      id: "Usability & Accessibility",
      description:
        "Ensuring that your product is easy to use and accessible to all users is essential.",
      icon: <CiRoute size={23} />,
    },
    {
      id: "UX Optimization",
      description:
        "UX optimization focuses on improving user satisfaction by refining every interaction.",
      icon: <CiMicrochip size={23} />,
    },
  ];

  return (
    <div className="flex flex-col items-start gap-2">
      {faqs.map((faq) => (
        <motion.div
          layout
          onClick={() => setShowFAQ(showFAQ === faq.id ? "" : faq.id)}
          key={faq.id}
          className="p-3 border border-[#343434] rounded-2xl w-[320px] bg-white text-black cursor-pointer shadow-sm"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-md sm:text-lg font-medium">
              {faq.icon}
              {faq.id}
            </div>
            <motion.div
              animate={{ rotate: showFAQ === faq.id ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <IoIosArrowDown />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {showFAQ === faq.id && (
              <motion.div
                key="content"
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden text-sm text-gray-600 mt-2"
              >
                {faq.description}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default FAQ;

`;

export const Usage = `
import FAQ from "./FAQ";

<FAQ
faqs = [
    { id: "What is Interaction Design", description: "Interaction design is about creating engaging interfaces with well-thought-out behaviors.", icon: <CiChat1 size={23} /> },
    { id: "Principles & Patterns", description: "Design principles and reusable patterns help users navigate your app intuitively.", icon: <CiCoins1 size={23} /> },
    { id: "Usability & Accessibility", description: "Ensuring that your product is easy to use and accessible to all users is essential.", icon: <CiRoute size={23} /> },
    { id: "UX Optimization", description: "UX optimization focuses on improving user satisfaction by refining every interaction.", icon: <CiMicrochip size={23} /> }
  ];
/>;
`;
