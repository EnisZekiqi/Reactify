import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  const [statePricing, setStatePricing] = useState("Monthly");

  const cards = [
    {
      title: "EnterPrise",
      description: "Everything to go public",
      price: { Monthly: 499, Annual: 399 },
      ability: [
        "10,000,000 requests/month",
        "Phone support",
        "∞ users on your account",
      ],
    },
    {
      title: "Professional",
      description: "Everything to launch",
      price: { Monthly: 49, Annual: 39 },
      ability: [
        "100,000 requests/month",
        "Email in app support",
        "10 users on your account",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="mt-[20%] font-bold text-4xl">Pricing Plans</h1>

      {/* Toggle */}
      <div className="relative bg-[#1c1c1c] p-1 rounded-full flex items-center gap-4 w-64 justify-between">
        <motion.span
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-0 left-0 w-1/2 h-full bg-white rounded-full z-0"
          style={{
            left: statePricing === "Monthly" ? 0 : "50%",
          }}
        />
        <button
          onClick={() => setStatePricing("Monthly")}
          className={`z-10 w-1/2 py-2 rounded-full text-sm font-semibold ${
            statePricing === "Monthly" ? "text-black" : "text-white"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setStatePricing("Annual")}
          className={`z-10 w-1/2 py-2 rounded-full text-sm font-semibold ${
            statePricing === "Annual" ? "text-black" : "text-white"
          }`}
        >
          Annual
        </button>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-6 flex-wrap p-8 h-full">
        {cards.map((prp, index) => {
          const priceToShow = prp.price[statePricing];

          return (
            <motion.div
              key={index}
              className="bg-[#060606] h-fit border border-[#3B4345] rounded-lg shadow-md p-6 w-80 hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <h2 className="text-2xl font-bold mb-2">{prp.title}</h2>
              <p className="text-gray-400 mb-4">{prp.description}</p>

              {/* Animated Price */}
              <div className="text-3xl font-semibold mb-4 h-10 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={statePricing + prp.title} // forces re-render on state change
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                    style={{
                      color:
                        prp.title === "Professional" ? "#00d8ff" : "#fff",
                    }}
                  >
                    ${priceToShow}
                    <span
                      className="text-base font-normal ml-1"
                      style={{
                        color:
                          prp.title === "Professional" ? "#00d8ff" : "#fff",
                      }}
                    >
                      /mo
                    </span>
                  </motion.span>
                </AnimatePresence>
              </div>

              <ul className="mb-4">
                {prp.ability.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-sm flex items-center gap-1 text-gray-300 mb-1"
                  >
                    <IoMdCheckmark /> {item}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-auto ${
                  prp.title === "Professional"
                    ? "bg-[#00d8ff] text-black"
                    : "bg-white text-black"
                } py-2 rounded transition-colors`}
              >
                Choose Plan
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
