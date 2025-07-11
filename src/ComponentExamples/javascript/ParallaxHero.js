export const codeSnippet26 = `
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScrollContainerRef } from "../../components/ScrollContext";

const ParallaxHero = () => {
  const containerRef = useRef(null);
  const scrollContainerRef = useScrollContainerRef();

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [1, -1000]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [1, 1, 0.3, 0]);

  const yImgLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImgRight = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgSizeLeft = useTransform(scrollYProgress, [0, 1], [110, 200]);
  const bgSizeRight = useTransform(scrollYProgress, [0, 1], [110, 200]);
  // 🪄 Background size as motion value (string)
  const bgSizeLeftPercent = useTransform(bgSizeLeft, (v) => '$ {v}%');
  const bgSizeRightPercent = useTransform(bgSizeRight, (v) => '$ {v}%');
  
  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative h-[220vh] w-full flex items-center justify-center"
      >
        {/* Title */}
              <motion.h1
                   initial={{  scale: 0 }}
                   animate={{scale:1,transition:{delay:0,duration:0.3}}}
          style={{ y: yText, opacity: opacityText }}
          className="text-center font-bold mt-[300px] sm:mt-[200px] text-4xl md:text-6xl lg:text-9xl z-[10] text-white"
        >
          Reactify
        </motion.h1>

        {/* Images with animated background size */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[52vw] z-[5] flex justify-between pointer-events-none gap-10">
          {/* LEFT IMAGE */}
          <motion.div
            style={{ y: yImgLeft }}
            className="w-[200px] h-[300px] bg-no-repeat bg-center bg-cover "
          >
                      <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{opacity:1,scale:1,transition:{delay:0.2,duration:0.3}}}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1749746812481-6e03eabdd2e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: bgSizeLeftPercent,
                backgroundAttachment:'fixed'

              }}
              className="w-full h-full will-change-transform"
            />
          </motion.div>

          {/* RIGHT IMAGE */}
                  <motion.div
                       initial={{ opacity: 0, scale: 0 }}
                       animate={{opacity:1,scale:1,transition:{delay:0.3,duration:0.3}}}
            style={{ y: yImgRight }}
            className="w-[300px] h-[350px] bg-no-repeat bg-center bg-cover "
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1749909551094-a03dee3ff334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: bgSizeRightPercent,
                backgroundAttachment:'fixed'
              }}
              className="w-full h-full will-change-transform mt-10 rotate-12"
            />
          </motion.div>
        </div>
      </div>

      <p className="text-white/50 -mt-10">Other Content Here!</p>
    </div>
  );
};

export default ParallaxHero;

`;

export const codeSnippet26TS = `
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { useScrollContainerRef } from "../../components/ScrollContext";

// Optional: define type if your ScrollContext returns something specific
// For now assuming it's 'RefObject<HTMLElement> | null'

const ParallaxHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useScrollContainerRef(); // Should be typed in ScrollContext

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], [1, -1000]);
  const opacityText = useTransform(scrollYProgress, [0, 0.3, 0.9, 1], [1, 1, 0.3, 0]);

  const yImgLeft = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yImgRight = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const bgSizeLeft = useTransform(scrollYProgress, [0, 1], [110, 200]);
  const bgSizeRight = useTransform(scrollYProgress, [0, 1], [110, 200]);

  const bgSizeLeftPercent = useTransform(bgSizeLeft, (v) => '$ {v}%');
  const bgSizeRightPercent = useTransform(bgSizeRight, (v) => '$ {v}%');

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative h-[220vh] w-full flex items-center justify-center"
      >
        {/* Title */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1, transition: { delay: 0, duration: 0.3 } }}
          style={{ y: yText, opacity: opacityText }}
          className="text-center font-bold mt-[300px] sm:mt-[200px] text-4xl md:text-6xl lg:text-9xl z-[10] text-white"
        >
          Reactify
        </motion.h1>

        {/* Images */}
        <div className="absolute top-[42%] left-1/2 -translate-x-1/2 w-[52vw] z-[5] flex justify-between pointer-events-none gap-10">
          {/* Left Image */}
          <motion.div
            style={{ y: yImgLeft }}
            className="w-[200px] h-[300px] bg-no-repeat bg-center bg-cover"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: { delay: 0.2, duration: 0.3 },
              }}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1749746812481-6e03eabdd2e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: bgSizeLeftPercent,
                backgroundAttachment: "fixed",
              }}
              className="w-full h-full will-change-transform"
            />
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            style={{ y: yImgRight }}
            className="w-[300px] h-[350px] bg-no-repeat bg-center bg-cover"
          >
            <motion.div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1749909551094-a03dee3ff334?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: bgSizeRightPercent,
                backgroundAttachment: "fixed",
              }}
              className="w-full h-full will-change-transform mt-10 rotate-12"
            />
          </motion.div>
        </div>
      </div>

      <p className="text-white/50 -mt-10">Other Content Here!</p>
    </div>
  );
};

export default ParallaxHero;

`;

export const Usage = `
import ParallaxHero from "./ParallaxHero";

<ParallaxHero />;
`;
