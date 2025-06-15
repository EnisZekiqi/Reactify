import { motion } from "framer-motion";
import { useState } from "react";
import { example4, wordHover, wordVariants } from "../javascript/ExposeLogic";

const ExposeText = () => {
  return (
    <motion.p
      className="relative  text-center text-3xl sm:text-5xl font-semibold w-[100%] text-[rgba(255,255,255,1)] z-10 flex flex-wrap justify-center gap-1"
      variants={wordHover}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {example4.split(" ").map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          whileHover={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          className="inline-block mr-1"
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default ExposeText;
