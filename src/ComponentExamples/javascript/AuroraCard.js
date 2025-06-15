export const codeSnippet18 = `
import { motion } from "framer-motion";
import { useState } from "react";

const AuroraCard = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.4 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center h-full bg-[#]">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
        className="w-[230px] h-[230px] sm:w-[350px] sm:h-[350px]"
      >
        <motion.div
          animate={{ rotateX: rotate.y, rotateY: rotate.x }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative w-full h-full border border-[#343434] rounded-xl p-6 bg-black/50 backdrop-blur-md overflow-hidden"
        >
          <motion.div
            className="w-22 h-22 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[rgba(0,216,255,0.8)] to-[rgba(0,173,204,0.6)] blur-lg absolute"
            style={{ x: rotate.x * 0.5, y: rotate.y * 0.5 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="w-18 h-18 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#a700ff] to-[#33e0ff] blur-lg absolute top-[50%] left-[50%]"
            style={{ x: rotate.x * -0.3, y: rotate.y * 0.3 }}
            animate={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="relative  text-start font-medium mt-10 text-white z-10 flex flex-wrap items-start justify-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-3xl">Hover Aurora</p>
                      <motion.span
                          animate={{ opacity: [0.8, 1, 0.7, 0.8], transition: { duration: 2, ease: 'easeInOut', repeat: Infinity } }}
                          className="text-xs sm:text-md font-medium mt-4"
                      >This card is cool right ? i am loving this animation </motion.span>
          </motion.div>

          <motion.div
            className="mt-6 z-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#00d8ff] text-black px-2.5 sm:px-5 py-2 rounded-full font-semibold shadow-lg"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuroraCard;


`;
export const codeSnippet18TS = `
import { motion } from "framer-motion";
import { useState, MouseEvent } from "react";

interface RotateState {
  x: number;
  y: number;
}

const AuroraCard: React.FC = () => {
  const [rotate, setRotate] = useState<RotateState>({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.4 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex justify-center items-center h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ perspective: 1000 }}
        className="w-[230px] h-[230px] sm:w-[350px] sm:h-[350px]"
      >
        <motion.div
          animate={{ rotateX: rotate.y, rotateY: rotate.x }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          className="relative w-full h-full border border-[#343434] rounded-xl p-6 bg-black/50 backdrop-blur-md overflow-hidden"
        >
          <motion.div
            className="w-22 h-22 sm:w-40 sm:h-40 rounded-full bg-gradient-to-r from-[rgba(0,216,255,0.8)] to-[rgba(0,173,204,0.6)] blur-lg absolute"
            style={{ x: rotate.x * 0.5, y: rotate.y * 0.5 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.div
            className="w-18 h-18 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-[#a700ff] to-[#33e0ff] blur-lg absolute top-[50%] left-[50%]"
            style={{ x: rotate.x * -0.3, y: rotate.y * 0.3 }}
            animate={{ x: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.div
            className="relative text-start font-medium mt-10 text-white z-10 flex flex-wrap items-start justify-start"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-3xl">Hover Aurora</p>
            <motion.span
              animate={{
                opacity: [0.8, 1, 0.7, 0.8],
                transition: { duration: 2, ease: "easeInOut", repeat: Infinity },
              }}
              className="text-xs sm:text-md font-medium mt-4"
            >
              This card is cool right? I am loving this animation.
            </motion.span>
          </motion.div>

          <motion.div
            className="mt-6 z-10 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#00d8ff] text-black px-2.5 sm:px-5 py-2 rounded-full font-semibold shadow-lg"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuroraCard;



`;

export const Usage = `

import AuroraCard from "./AuroraCard";


<AuroraCard/>
`;
