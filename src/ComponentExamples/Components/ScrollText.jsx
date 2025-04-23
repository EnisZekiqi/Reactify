import { motion,useInView,useScroll,useTransform } from "framer-motion";
import { useState,useRef } from "react";
import { example6,wordContainerVariants,wordVariants } from "../javascript/ScrollLogic";
import { useScrollContainerRef } from "../../components/ScrollContext";
const ScrollText = () => {

    const ref = useRef(null);

      const scrollContainerRef = useScrollContainerRef();

    const { scrollYProgress } = useScroll({
     container:scrollContainerRef,
    target: ref,
    offset: ["start 1.5", "end 0.9"], // Trigger start of animation when element enters viewport
 });
    
      const words = example6.split(" ");

const opacity = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);



  return (
      <div className="flex relative  flex-col items-center">
            <h1
  className=" mt-[235%] sm:mt-[20%] mb-[15%] sm:-mb-[00%] text-3xl sm:text-5xl text-center font-bold text-[rgba(255,255,255,0.5)]"
  style={{ opacity }}
>
  Scroll Down
</h1>
      <div className="h-[100%] mt-[15%] -mb-[80%] bg-transparnet text-white flex items-center justify-center">
  
      <div className="relative min-h-[800px]" >
        <div ref={ref} className="w-full">
          <div className="flex flex-wrap gap-2 text-2xl sm:text-4xl font-bold">
            {words.map((word, index) => {
              // Offset each word's animation slightly with a "staggered scroll" feel
              const start = index * 0.02;
              const end = start + 0.2;

              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );

              const y = useTransform(
                scrollYProgress,
                [start, end],
                [20, 0]
              );

              const blur = useTransform(
                scrollYProgress,
                [start, end],
                [8, 0]
              );

            const blurString = useTransform(blur, (b) => `blur(${b}px)`);

                
              return (
              <motion.span
                key={index}
                style={{
                    opacity,
                    y,
                    filter: blurString, // ✅ Pass it directly as a MotionValue
                }}
                >
                {word}
                </motion.span>
              );
            })}
          </div>
        </div>
              </div>
    </div>
      </div>
  );
};

 
export default ScrollText;