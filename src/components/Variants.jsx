import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
const variants = () => {
  const [variant, setVariant] = useState(0);
  const [components, setComponents] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const achieve = 24;
    const interval = setInterval(() => {
      setVariant((prev) => {
        if (prev < achieve) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50);
    return () => clearInterval(interval);
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const achive = 2;
    const interval = setInterval(() => {
      setComponents((prev) => {
        if (prev < achive) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 500);
    return () => clearInterval(interval);
  }, [hasStarted]);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3 },
        }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center"
      >
        <p className="rounded-full bg-[#1A1A1A] font-extralight uppercase text-xs p-2">
          Explore
        </p>
        <h1 className="text-3xl font-medium text-[#fff] mt-3 text-center">
          Learn about components
        </h1>
        <span className="text-sm sm:text-md font-normal text-white opacity-50 w-full md:w-[30%] text-center mt-3">
          A hundred percent free,and at least twice as awesome{" "}
        </span>
      </motion.div>
      <motion.div
        whileInView={() => setHasStarted(true)}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center mt-10 gap-4 justify-center "
      >
        {hasStarted && (
          <>
            <div className="flex flex-col justify-end bg-[#00D8FF] rounded-xl text-8xl font-bold text-black p-6 w-[300px] md:w-[450px]  h-[220px]">
              {variant} <p className="font-normal text-lg">Components</p>
            </div>
            <div className="flex flex-col items-start justify-end bg-transparent border border-[#00D8FF] rounded-xl text-8xl p-6 text-[#00D8FF] w-[300px] md:w-[450px] h-[220px]">
              {components} <p className="font-normal text-lg">Variants</p>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default variants;
