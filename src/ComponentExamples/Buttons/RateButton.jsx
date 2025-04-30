import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiStar } from "react-icons/ci";
import { button2 } from "../javascript/RateLogic";

const RateButton = () => {
  const [rateMe, setRateMe] = useState("notClicked");
  const [animateStar, setAnimateStar] = useState(false);
  const [count, setCount] = useState(38);

  const handleClick = () => {
    setAnimateStar(true);
    setRateMe("Clicked");
    setCount((prev) => prev + 1);

    setTimeout(() => {
      setAnimateStar(false);
      setRateMe("notClicked");
    }, 2000); // shorter to better sync
  };

  return (
      <div className="relative z-[100]"
          onClick={handleClick}>
      <AnimatePresence>
        {rateMe === "Clicked" && (
          <motion.span
            className="absolute left-[115px] top-[-10px] text-[#FFB900] font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: -25,
              transition: { duration: 0.5, delay: 0.6 },
            }}
            exit={{ opacity: 0, y: -40 }}
          >
            +1
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3, damping: 50 }}
        onMouseEnter={() => setRateMe("Hovering")}
         disabled={rateMe === 'Clicked'}
        className={`group flex border border-[#3b4345ab] cursor-pointer items-center justify-center gap-2 w-[150px] rounded-2xl px-2.5 bg-[rgba(0,0,0,0.7)] shadow-2xl text-white transition-all duration-500 ${
          rateMe === "Clicked" ? "shadow-[0_0_12px_#FFB900]" : ""
        }`}
      >
        {/* Star Animation */}
        <div className="relative w-[30px] h-[50px]">
          <AnimatePresence>
            {animateStar && (
              <motion.div
                className="absolute top-[10px] left-0 z-10"
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  x: [0, 80, 100], // start, mid (for curve), end
                  y: [0, 55, -45], // gives us U shape
                  scale: [1, 0.6, 0.3],
                  opacity: [1, 1, 0],
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                exit={{ opacity: 1, scale: 0 }}
              >
                <CiStar
                  className="text-white group-hover:text-amber-400 group-hover:drop-shadow-[0_0_6px_#FFB900] transition-all duration-300"
                  size={25}
                />
              </motion.div>
            )}
                  </AnimatePresence>
         {!animateStar && (
            <motion.span
                initial={{ opacity: 0, y: -20 }}
                 animate={{opacity:1,y:0,transition:{duration:0.5}}}
                 >
                <CiStar
              className="text-white mt-0.5 group-hover:text-amber-400 group-hover:drop-shadow-[0_0_6px_#FFB900] transition-all duration-300 absolute top-[10px] left-0"
              size={25}
            />
          </motion.span> 
          )}
        </div>

        {/* Button Content */}
        <span className="text-xl -ml-1 ">{button2}</span>
        <span className="text-xl font-medium text-[rgba(255,255,255,255.7)] mt-1 border-l py-2 border-[rgba(255,255,255,0.4)] pl-1.5">
          {count}
        </span>
      </motion.button>
    </div>
  );
};

export default RateButton;
