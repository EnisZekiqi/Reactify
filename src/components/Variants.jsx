import { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { SiJavascript, SiTypescript } from "react-icons/si";
import { CiText } from "react-icons/ci";
import { RxButton } from "react-icons/rx";


const variants = () => {
  const [variant, setVariant] = useState(0);
  const [components, setComponents] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;
    const achieve = 26;
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
        <h1 className="text-[25px] font-medium text-[#fff] mt-3 text-center">
          Learn components
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
            <div className="group relative overflow-hidden flex flex-col items-start justify-end bg-[#00D8FF] rounded-xl text-8xl p-6 text-black w-[300px] md:w-[450px] h-[220px]">
  {/* JS Logo */}
  <div
    className="absolute top-4 right-18  -rotate-10 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
  >
<CiText/>
              </div>

  {/* TS Logo */}
  <div
    className="absolute bottom-16 rotate-10 right-24 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
  >
    <RxButton />
  </div>

  {variant}
  <p className="font-normal text-lg z-10">Components</p>
</div>
            <div className="group relative overflow-hidden flex flex-col items-start justify-end bg-transparent border border-[#00D8FF] rounded-xl text-8xl p-6 text-[#00D8FF] w-[300px] md:w-[450px] h-[220px]">
  {/* JS Logo */}
  <div
    className="absolute top-4 right-18 -rotate-10 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
  >
 <SiJavascript />
  </div>

  {/* TS Logo */}
  <div
    className="absolute bottom-16 rotate-10 right-24 w-8 h-8 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
  >
    <SiTypescript />
  </div>

  {components}
  <p className="font-normal text-lg z-10">Variants</p>
</div>

          </>
        )}
      </motion.div>
    </div>
  );
};

export default variants;
