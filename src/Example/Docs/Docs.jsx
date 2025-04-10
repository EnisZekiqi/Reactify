import Navbar from "../../components/Navbar";
import { motion } from "framer-motion";
import circlewallpaper from "../../assets/download.png";
import { SiReact,SiFramer,SiTailwindcss } from "react-icons/si";

const Docs = () => {

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.7, // wait for Reactify to finish
      staggerChildren: 0.3, // animate logos one by one
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      // no delay here; the container handles the delay + staggering
    },
  },
};

    return ( 
        <div className="app-bg">
            <Navbar />
               <div className="relative flex flex-col items-center justify-center mt-24 sm:mt-10 z-[90]">
      <div className="flex flex-col items-center mt-[5%]">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0
        }
      }} className="">
        <p className="rounded-full bg-[#1A1A1A] font-extralight uppercase text-xs p-2">Documentation</p>        </motion.div>
        {
        /* Background Image Layer */
      }
  <motion.img initial={{
        opacity: 0,
        scale: 1.1
      }} animate={{
        opacity: 0.1,
        scale: 1,
        transition: {
          delay: 1,
          duration: 0.8,
          ease: "easeOut"
        }
      }} src={circlewallpaper} // 🔁 Replace this with your image URL
      alt="Title Background" className="absolute inset-0 mask-b-from-20% mask-b-to-80% w-screen -mt-24 sm:-mt-28  h-screen object-cover pointer-events-none select-none z-0  blur-none" />

  {
        /* The Animated Title */
      }
  <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5,
          duration: 0.5
        }
      }} className="relative font-medium text-2xl lg:text-3xl xl:text-5xl text-white z-[10] text-center px-6 py-3 w-full md:w-2/3">
    Get started with Reactify
  </motion.h1>
    </div>

      <div className="flex w-full justify-center">
       <motion.p className="read-the-docs text-center text-sm md:text-md lg:text-lg w-full md:w-[55%] mt-5 flex flex-wrap justify-center">
 
      </motion.p>

      </div>
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1
      }
    }} className="flex flex-col items-center justify-center gap-4 w-full sm:w-fit mt-8">
      <p className="text-[rgba(255,255,255,0.5)] mt-4 hidden sm:block text-md md:text-lg text-center ">
  Reactify uses those libraries to work
      </p>

        <motion.div
            initial={{opacity:0}}
         animate={{opacity:1,transition:{duration:0.5,delay:1}}}
    className="flex gap-4 items-center">
  <motion.div 
  initial={{rotate:0}}
  whileHover={{rotate:5}}
  className="library flex items-center gap-3 group cursor-pointer">
    <SiReact className="w-[20px] h-[20px] text-white group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_#00d8ff] transition-all duration-300" />
    <p className="text-white">React</p>
  </motion.div>

  <motion.div 
  initial={{rotate:0}}
  whileHover={{rotate:5}}
  className="library flex items-center gap-3 group cursor-pointer">
    <SiFramer className="w-[20px] h-[20px] text-white group-hover:text-pink-500 group-hover:drop-shadow-[0_0_6px_#e91e63] transition-all duration-300" />
    <p className="text-white ">Framer Motion</p>
  </motion.div>

  <motion.div 
  initial={{rotate:0}}
  whileHover={{rotate:5}}
  className="library flex items-center gap-3 group cursor-pointer">
    <SiTailwindcss className="w-[20px] h-[20px] text-white group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_#38bdf8] transition-all duration-300" />
    <p className="text-white">TailwindCss</p>
  </motion.div>
</motion.div>

      </motion.div>
      {
      /* Tooltip Logos */
    }
      <motion.div className="flex gap-8 justify-center mt-15" variants={containerVariants} initial="hidden" animate="show">
      
      </motion.div>
      </div>
        </div>
     );
}
 
export default Docs;