import { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { fireConfetti } from "../javascript/ConfettiLogic";
import { AiOutlineArrowDown, AiOutlineLoading } from "react-icons/ai";

const ConfettiButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showText, setShowText] = useState(true);

  const controls = useAnimation();

  const handleClick = () => {
    setIsClicked(true);
    controls.start({
      y: 100, // Animate it out to the right for exit
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });

    setTimeout(() => {
      fireConfetti();
      setIsClicked(false);
      setShowText(false);

      setTimeout(() => {
        controls.set({ y: -100, opacity: 0 }); // Reset to left
        controls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 1.2, ease: "easeInOut" },
        });
        setShowText(true);
      }, 100);
    }, 3500);
  };

  return (
    <div
      className="relative inline-block overflow-hidden"
      onClick={handleClick}
    >
      {/* Static button background */}
      <span className="text-transparent flex items-center gap-2 px-4 py-2 stroke-[1px] text-xl stroke-white rounded-xl bg-[#00d8ff] w-[160px] h-[48px] justify-center">
        {/* fallback "Submit" text lives behind */}
        <AiOutlineArrowDown />
        Submit
      </span>

      {/* Animated Content Layer */}
      <motion.span
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        disabled={isClicked}
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <AnimatePresence mode="wait">
          {isClicked && (
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
          {!isClicked && showText && (
            <motion.div
              key="submit"
              className="flex items-center gap-2 absolute top-[5%] mt-2 text-black z-[500]"
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
      </motion.span>
    </div>
  );
};

export default ConfettiButton;
