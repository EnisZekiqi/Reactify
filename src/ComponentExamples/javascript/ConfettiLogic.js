export const button1 = "Submit";

import confetti from "canvas-confetti";

export const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.7 },
  });
};

export const installation = `

npm install --save canvas-confetti

npm install react-icons --save

`;

export const Animations = `

const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.7 },
  });
};

`;

export const codeSnippet14 = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineArrowDown, AiOutlineLoading } from "react-icons/ai";

const ConfettiButton = () => {
  const [buttonFunction,setButtonFunction]=useState('Submit')

  const fireConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 60,
    origin: { y: 0.7 },
  });
};

  const handleClick = () => {
    setButtonFunction('Loading')

    setTimeout(() => {
      fireConfetti();
      setButtonFunction('Submit')
    }, 3500);
  };

  return (
    <div
      className="relative inline-block overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Static button background */}
      <span className="text-transparent flex items-center gap-2 px-4 py-2 stroke-[1px] text-xl stroke-white rounded-xl bg-[#00d8ff] w-[160px] h-[48px] justify-center">
        {/* fallback "Submit" text lives behind */}
        <AiOutlineArrowDown />
        Submit
      </span>

      {/* Animated Content Layer */}
      <motion.button
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        disabled={buttonFunction === 'Loading'}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {buttonFunction === 'Loading' && (
            <motion.div
              key="loader"
              className="flex justify-center items-center text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                rotate: { repeat: Infinity, duration: 1, ease: "linear" },
              }}
            >
              <AiOutlineLoading size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Submit Text Animate In/Out */}
        <AnimatePresence>
          {buttonFunction === 'Submit' && (
            <motion.div
              key="submit"
              className="flex items-center gap-2 absolute top-[8%] mt-2 text-black z-[500]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <AiOutlineArrowDown size={20} />
              <span>Submit</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};

`;
export const codeSnippet14TS = `
declare function fireConfetti(): void;

const ConfettiButton: React.FC = () => {
  const [buttonFunction, setButtonFunction] = useState<"Submit" | "Loading">("Submit");

  const handleClick = () => {
    setButtonFunction("Loading");

    setTimeout(() => {
      fireConfetti();
      setButtonFunction("Submit");
    }, 3500);
  };

  return (
    <div
      className="relative inline-block overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      {/* Static button background */}
      <span className="text-transparent flex items-center gap-2 px-4 py-2 stroke-[1px] text-xl stroke-white rounded-xl bg-[#00d8ff] w-[160px] h-[48px] justify-center">
        <AiOutlineArrowDown />
        Submit
      </span>

      {/* Animated Content Layer */}
      <motion.button
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        disabled={buttonFunction === "Loading"}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {buttonFunction === "Loading" && (
            <motion.div
              key="loader"
              className="flex justify-center items-center text-black"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, rotate: 360 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.3 },
                rotate: { repeat: Infinity, duration: 1, ease: "linear" },
              }}
            >
              <AiOutlineLoading size={22} />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {buttonFunction === "Submit" && (
            <motion.div
              key="submit"
              className="flex items-center gap-2 absolute top-[8%] mt-2 text-black z-[500]"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <AiOutlineArrowDown size={20} />
              <span>Submit</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
};
`;

export const Usage = `

import ConfettiButton from "./ConfettiButton";


<ConfettiButton
 fireConfetti={fireConfetti}
 button1="Submit"
  />
`;
