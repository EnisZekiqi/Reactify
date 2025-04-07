import { motion,AnimatePresence } from "framer-motion";
import { SiFramer,SiReact ,SiTailwindcss  } from "react-icons/si";
import { CiCircleQuestion } from "react-icons/ci";
import { useState, useEffect } from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
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
    const itemsList = ["Apple", "Banana", "Orange"];
  const [navMenu,setNavMenu]=useState(false)
  const [visibleItems, setVisibleItems] = useState([]);

  const startMenu = () => {
    setNavMenu(true)
    setVisibleItems(itemsList); // reset items

  }
 
  useEffect(() => {
    if (navMenu) {
      const timer = setTimeout(() => {
        let i = 0;
        const interval = setInterval(() => {
          setVisibleItems((prev) => {
            const updated = [...prev];
            updated.pop(); // remove last item
            return updated;
          });

          i++;
          if (i >= itemsList.length) {
            clearInterval(interval);
            setNavMenu(false); // done hiding
          }
        }, 500); // delay between each item disappearing
      }, 1500); // how long to wait before starting to hide

      return () => clearTimeout(timer);
    }
  }, [navMenu]);

  

   const containerVariants2 = {
  show: {
    opacity:1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: { when: "afterChildren" },
  },
};

  const itemVariants2 = {
  initial: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  };
  
  const items = [0, 1, 2]; // simulate multiple blocks


const bgImage = "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&h=1000&q=80";
  const mask = "https://tailwindcss.com/_next/static/media/mask.4b6d7838.png";
  
  const [activeIndex, setActiveIndex] = useState(null);
    const [showMask, setShowMask] = useState(true);

  
 const handleClick = (index) => {
    setActiveIndex(index);
        setShowMask(true);
setTimeout(() => {
      setShowMask(false);
    }, 300);
  };

  const handleClose = () => {
    setActiveIndex(null);
        setShowMask(true); // Reset mask for next time

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
        <div>
          <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end">
            <CiCircleQuestion className="w-[25px] h-[25px]" />
          </div>

          <div className="flex w-full justify-center items-center mt-[70%]">
            <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={navMenu ? { opacity: 0, transition: { duration: 0.5 } } : { opacity: 1, transition: { duration: 0.5 } }}
          className="click cursor-pointer text-center bg-[#00d8ff] text-black w-fit rounded-lg mt-4 p-2.5 text-xl"
                  onClick={startMenu}
                  style={{display:navMenu ? 'none' :'block',transition:'display 0.2s ease'}}
            >
          Show Menu
            </motion.div>
          </div>

          <motion.div
            className="list  flex flex-col gap-4 items-center mt-4"
            variants={containerVariants2}
            initial="hidden"
            animate={navMenu ? "show" : "hidden"}
            style={{ display: navMenu ? "flex" : "none",marginTop:navMenu ? '-40px':'0px' }}
          >
            <AnimatePresence mode="popLayout">
          {visibleItems.map((item) => (
            <motion.span
              key={item}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative bg-[#1E1E1E] rounded-lg shadow-2xl border border-[#3b4345] w-[200px] h-[75px] flex items-center justify-center text-white text-lg"
            >
              {item}
            </motion.span>
          ))}
            </AnimatePresence>
          </motion.div>
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
          <div class="col-span-2 ... bg-[#191919] rounded-xl p-2 -mt-[30%] w-[95%] ml-17  flex-col gap-10 items-center justify-center">
 <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end">
            <CiCircleQuestion className="w-[25px] h-[25px]" />
          </div>
          <div className="flex justify-center items-center gap-10">
               {items.map((_, index) => (
          <Tippy key={index} content="Click Me" placement="top">
            <motion.div
              layoutId={`image-${index}`}
              onClick={() => handleClick(index)}
              className={`w-[200px] h-[100px] cursor-pointer 
                ${index === 0 ? '-rotate-10' : index === 1 ? '-mt-12' : 'rotate-10'}
                mask-[url('${mask}')] mask-no-repeat mask-center mask-contain 
                bg-[url('${bgImage}')] bg-cover bg-center transition-all duration-300 hover:opacity-70`}
            />
          </Tippy>
        ))}
                 <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* Enlarged Card */}
            <motion.div
              layoutId={`image-${activeIndex}`}
              className={`fixed top-1/2 left-1/2 z-50 w-[400px] h-[300px] -translate-x-1/2 -translate-y-1/2 bg-cover bg-center rounded-xl shadow-2xl p-6 text-white flex flex-col justify-between`}
              style={{
                backgroundImage: `url(${bgImage})`,
                WebkitMaskImage: showMask ? `url(${mask})` : 'none',
                maskImage: showMask ? `url(${mask})` : 'none',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                WebkitMaskSize: 'contain',
                transition: 'mask-image 0.1s ease-in-out',
              }}
              initial={{ opacity: 0.5, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              {/* Content inside the zoomed card */}
              <div>
                <h2 className="text-2xl font-bold mb-2">Fruit Card #{activeIndex + 1}</h2>
                <p className="text-sm opacity-90">
                  This is some additional content inside the zoomed card. You can put descriptions, links, or anything here!
                </p>
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition"
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-blue-600 rounded-md hover:bg-blue-700 transition"
                >
                  Action
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
          </div>
<div className="flex justify-between items-center w-full px-4 mb-2 mt-[10%]">
        <h1 className="text-md font-medium text-white">Mask Modal</h1>
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
          <SiFramer />
          <SiReact />
          <SiTailwindcss />
        </div>
      </div>
  </div>
        </div>
            <button className="bg-transparent text-md font-medium text-white mt-6 text-center w-full cursor-pointer hover:text-(rgba(255,255,255,0.5))">Explore all components</button>
        <div className="empty"></div>
        </div>
     );
}
 
export default Example;