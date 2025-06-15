import { motion } from "framer-motion";
import { useState } from "react";
import { example11 } from "../javascript/RotatingLogic";

const RotatingText = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const duration = 0.25;
  const stagger = 0.05;

  const letterVariants = {
    initial: { x: 0 },
    hover: { x: 20 },
    reset: { x: 0 },
  };

  return (
    <div className="flex flex-col gap-2 items-start text-white text-3xl sm:text-7xl font-semibold justify-start">
      {example11.map((word, i) => {
        const letters = word.split("");

        return (
          <motion.div
            className="inline-block cursor-pointer"
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {letters.map((char, j) => (
              <motion.span
                key={j}
                variants={letterVariants}
                initial="initial"
                animate={hoveredIndex === i ? "hover" : "reset"}
                transition={{
                  duration,
                  delay:
                    hoveredIndex === i
                      ? stagger * (letters.length - j) // reverse on enter
                      : stagger * j, // forward on leave
                  ease: "easeInOut",
                }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default RotatingText;
