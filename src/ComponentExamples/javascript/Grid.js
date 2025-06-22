export const codeSnippet29 = `
import { motion } from "framer-motion";

const GridCard = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        x: -5, // subtle left shift
        y: -5, // subtle upward lift
        boxShadow: "15px 15px 25px rgba(0, 216, 255, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group w-[270px] h-[270px] md:w-[300px] md:h-[300px] overflow-hidden border border-[rgb(59,67,69)] rounded-lg bg-black"
    >
      {/* Grid Background Layer */}
      <div className="absolute inset-0 z-0 bg-grid animate-gridMove opacity-10"></div>

      {/* Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%)",
        }}
        whileHover={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,216,255,0.2), transparent 70%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white font-semibold text-xl">
        Hover Me
      </div>
    </motion.div>
  );
};

export default GridCard;

`;

export const codeSnippet29TS = `
import { motion } from "framer-motion";
import React from "react";

const GridCard: React.FC = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        x: -5,
        y: -5,
        boxShadow: "15px 15px 25px rgba(0, 216, 255, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative group w-[270px] h-[270px] md:w-[300px] md:h-[300px] overflow-hidden border border-[rgb(59,67,69)] rounded-lg bg-black"
    >
      {/* Grid Background Layer */}
      <div className="absolute inset-0 z-0 bg-grid animate-gridMove opacity-10"></div>

      {/* Spotlight Overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        initial={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05), transparent 60%)",
        }}
        whileHover={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(0,216,255,0.2), transparent 70%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-white font-semibold text-xl">
        Hover Me
      </div>
    </motion.div>
  );
};

export default GridCard;

`;

export const Usage = `

import GridCard from "./GridCard
<GridCard />;
`;
