export const example6 = 'This is a text which will animate bit by bit when you scroll down.Cool right ? All this is made by Enis Zekiqi with love and dedication'


export const wordContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// Child (each word)
export const wordVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }
}

export const Animations = `

const wordContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }
}

`
export const codeSnippet6 = `

const ScrollText = ({wordVariants,wordContainerVariants,example6}) => {

    const ref = useRef(null);

      const scrollContainerRef = useScrollContainerRef();

    const { scrollYProgress } = useScroll({
     container:scrollContainerRef,
    target: ref,
    offset: ["start 1.5", "end 0.9"], // Trigger start of animation when element enters viewport , change accordingly 
 });
    
      const words = example6.split(" ");

const opacity = useTransform(scrollYProgress, [0, 0.1], [0.5, 1]);



  return (
      <div className="flex relative  flex-col items-center">
            <h1
  className="  text-3xl sm:text-5xl text-center font-bold text-[rgba(255,255,255,0.5)]"
  style={{ opacity }}
>
  Scroll Down
</h1>
      <div className="h-[100%] bg-transparnet text-white flex items-center justify-center">
  
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

            const blurString = useTransform(blur, (b) => blur({b}px)); /// add $ at the {b} 

                
              return (
              <motion.span
                key={index}
                style={{
                    opacity,
                    y,
                    filter: blurString, // 
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
`;
export const codeSnippet6TS = `

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { useScrollContainerRef } from "../../components/ScrollContext";

interface ScrollTextProps {
  wordVariants: Record<string, any>;
  wordContainerVariants: Record<string, any>;
  example6: string;
}

const ScrollText: React.FC<ScrollTextProps> = ({
  wordVariants,
  wordContainerVariants,
  example6,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useScrollContainerRef();

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: ref,
    offset: ["start 1.5", "end 0.9"],
  });

  const words = example6.split(" ");

  const headerOpacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0.5, 1]
  );

  return (
    <div className="flex relative flex-col items-center">
      <h1
        className=" text-3xl sm:text-5xl text-center font-bold text-[rgba(255,255,255,0.5)]"
        style={{ opacity: headerOpacity }}
      >
        Scroll Down
      </h1>
      <div className="h-[100%]  bg-transparent text-white flex items-center justify-center">
        <div className="relative min-h-[800px]">
          <div ref={ref} className="w-full">
            <div className="flex flex-wrap gap-2 text-2xl sm:text-4xl font-bold">
              {words.map((word, index) => {
                const start = index * 0.02;
                const end = start + 0.2;

                const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                const y = useTransform(scrollYProgress, [start, end], [20, 0]);
                const blur = useTransform(scrollYProgress, [start, end], [8, 0]);

                const blurString: MotionValue<string> = useTransform(
                  blur,
                  (b) => blur({b}px) /// add $ at the {b}
                );

                return (
                  <motion.span
                    key={index}
                    style={{
                      opacity,
                      y,
                      filter: blurString,
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


`


export const Usage = `
import ScrollText from "./ScrollText";


<ScrollText
 wordVariants={wordVariants}
 example6="This is a text which will animate bit by bit when you scroll down.Cool right ?"
 wordContainerVariants={wordContainerVariants}  />
`


