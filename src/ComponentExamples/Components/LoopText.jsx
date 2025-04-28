import { motion,AnimatePresence } from "framer-motion";
import { useState,useEffect } from "react";
import { example12 } from "../javascript/LoopLogic";

const LoopText = () => {

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};


    
    const [currentIndex, setCurrentIndex] = useState(0)
    
    useEffect(() => {
        
        const interval =setInterval(() => {
            setCurrentIndex((prevIndex)=>(prevIndex + 1 ) % example12.length)
        }, 5000);
        
        return ()=> clearInterval(interval)
    },[example12.length])
    
    
    
    return ( 

        <motion.div
           
            className="flex items-center gap-4 w-fit transition-all duration-300">
  <p className="text-3xl sm:text-5xl">Creative</p>
  <div className="relative inline-block overflow-hidden transition-all duration-300">
        <AnimatePresence mode="wait">
                    <motion.span
                        key={currentIndex}
                 initial={{ transform: "scaleX(0.9)", }}
                 animate={{  transform: "scaleX(1)",}}
                exit={{transform:"scaleX(0.9)",transition:{delay:0.1}}}
      className="text-transparent stroke-[1px] text-3xl sm:text-5xl stroke-white rounded-xl bg-[#00d8ff] inline-block transition-all duration-500 max-w-full"
    >
      {/* Adjust this to animate width changes smoothly */}
      {currentIndex === 0 && '1234567'}
      {currentIndex === 1 && ' interfacee'}
      {currentIndex === 2 && ' experiencee'}
    </motion.span>
        </AnimatePresence>
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        exit={{ y: '-100%' }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="absolute top-0 left-0 sm:left-2 whitespace-nowrap text-3xl sm:text-5xl text-black"
      >
        {example12[currentIndex]
          .split('') // Split the word into characters
          .map((char, index) => (
            <motion.span
              className="inline-block -ml-0 text-3xl sm:text-5xl font-light"
              key={index} // Each character gets a unique key
              variants={letterVariants} // Animating each letter
              initial="hidden" // Start hidden
              animate="visible" // Animate to visible
              exit={{ opacity: 0 }} // Exit animation
              transition={{
                duration: 0.5, // Adjust duration for each letter's animation
                delay: index * 0.1, // Stagger the delay for each letter
              }}
            >
              {char === ' ' ? '\u00A0' : char} {/* Handle spaces */}
            </motion.span>
          ))}
      </motion.span>
    </AnimatePresence>
  </div>
</motion.div>

     );
}
 
export default LoopText
;