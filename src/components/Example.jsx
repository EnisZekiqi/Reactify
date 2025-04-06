import { motion,AnimatePresence } from "framer-motion";
import { SiFramer,SiReact ,SiTailwindcss  } from "react-icons/si";
import { CiCircleQuestion } from "react-icons/ci";
import { useState } from "react";
const Example = () => {


    const example1 ="Hello World !"

const containerVariants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
        opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
    }),
  };

  const letterVariants = {
    hidden: { opacity: 0,y:10 },
    visible: { opacity: 1 ,y:0},
    };
    
    const example2 = "Animated words with blur effect";

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

// Child (each word)
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
  },
    };
    
    const [navMenu,setNavMenu]=useState(false)

    const startMenu = () => {
        setNavMenu(true)
        console.log(navMenu)
    }

    const [items, setItems] = useState([1, 2, 3, 4]);
    
 const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item !== id));
  };

   const containerVariants2 = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
          staggerChildren: 0.5,
          delayChildren:0.5
      },
    },
  };

  const itemVariants2 = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };
    return ( 
        <div className="h-[100%]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
                viewport={{once:true}}
                className="flex flex-col items-center justify-center">
                <p className="rounded-full bg-[#1A1A1A] font-extralight uppercase text-xs p-2">Examples</p>
                <h1 className="text-3xl font-medium text-[#fff] mt-3">Powerful Components</h1>
                <span className="text-md font-normal text-white opacity-50 w-[30%] text-center mt-3">Created with smooth animated & high performance animated components with interactive gestures</span>
            </motion.div>
            <div class="grid grid-cols-3 gap-2 mt-[10%] justify-items-center">
                <div class="... bg-[#191919] rounded-xl p-2 w-[300px] h-[300px]">
                    <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
                      <motion.p
        className="relative text-md md:text-lg text-center lg:text-3xl font-medium text-[rgba(255,255,255,0.5)] w-[100%]  mt-[30%] z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {example1.split("").map((char, index) => (
          <motion.span className="inline-block " key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
            </motion.span>
        ))}
        
      </motion.p>
                    <div className="flex justify-between items-center mt-[35%] px-4">
                        <h1 className="text-md font-medium text-white ">Simple Text</h1>
                        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
                            <SiFramer />
                            <SiReact />
                            <SiTailwindcss/>
                        </div>
        </div>
                </div>
                <div class="... bg-[#191919] rounded-xl p-2 w-[450px] h-[300px]">
              <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
                    <motion.p
  className="relative text-md md:text-lg text-center lg:text-3xl font-medium w-[100%] text-[rgba(255,255,255,0.5)] z-10 mt-[20%] flex flex-wrap justify-center gap-1"
  variants={wordContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {example2.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={wordVariants}
      className="inline-block"
    >
      {word}
    </motion.span>
  ))}
</motion.p>
<div className="flex justify-between items-center mt-[22%] px-4">
                        <h1 className="text-md font-medium text-white ">Blury Text</h1>
                        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
                            <SiFramer />
                            <SiReact />
                            <SiTailwindcss/>
                        </div>
        </div>
  </div>
                <div className="bg-[#191919] rounded-xl p-2 w-[300px] h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Top Section */}
      <div>
        <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end">
          <CiCircleQuestion className="w-[25px] h-[25px]" />
        </div>

        <div
          className="click cursor-pointer text-white text-center mt-2"
          onClick={startMenu}
        >
          Show More
        </div>

        <AnimatePresence mode="wait">
          {navMenu && (
            <motion.div
              className="flex flex-col gap-4 items-center mt-4"
              variants={containerVariants2}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              {items.map((item) => (
                <motion.span
                  key={item}
                  variants={itemVariants2}
                  exit="exit"
                  className="relative bg-[#1A1A1A] rounded-lg shadow-2xl w-[200px] h-[75px] flex items-center justify-center text-white text-lg"
                >
                  {item}
                  <button
                    onClick={() => removeItem(item)}
                    className="absolute top-1 right-2 text-xs text-red-400 hover:text-red-600"
                  >
                    ✕
                  </button>
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Fixed Slick Menu */}
      <div className="flex justify-between items-center w-full px-4 mb-2">
        <h1 className="text-md font-medium text-white">Slick Menu</h1>
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
          <SiFramer />
          <SiReact />
          <SiTailwindcss />
        </div>
      </div>
    </div>
  <div class="col-span-2 ... bg-[#191919] rounded-xl p-2 -mt-[30%]">04</div>
            </div>
            <div className="empty"></div>
        </div>
     );
}
 
export default Example;