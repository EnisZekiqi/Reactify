import Navbar from "../../components/Navbar";
import { AnimatePresence, motion } from "framer-motion";
import circlewallpaper from "../../assets/download.png";
import { SiReact,SiFramer,SiTailwindcss } from "react-icons/si";
import { useState, useEffect } from "react";
import { useAnimate } from "motion/react"
import { p } from "framer-motion/client";

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
  

  const [libraries, setLibraries] = useState(null)
  
  const chooseLibrary = (libraryName) => {
  const selectedLibrary = Libraries.find(lib => lib.library.toLowerCase() === libraryName.toLowerCase());
  setLibraries(selectedLibrary);
  
  setTimeout(() => {
    // Scroll to the target section
    document.getElementById('library')?.scrollIntoView({ behavior: 'smooth' });

    // Animate after scroll
  }, 100); // slight delay to ensure scroll happens first
};



 const Libraries = [
  {
    library: 'React',
    description:
      'The heart of Reactify! A powerful JavaScript library for building fast, dynamic user interfaces. React helps us keep our UI modular and reactive.',
     install: 'npm create vite@latest',
    second:'Why choose Vite ? , is fast it uses HMR for fast updated thru the DOM it works smoothly with React and it is used in this project!'
  },
  {
    library: 'Framer Motion',
    description:
      'Framer Motion powers the smooth animations in Reactify. From page transitions to subtle micro-interactions, it makes everything feel alive and responsive.',
    install: 'npm install framer-motion',
    second: 'The newest update of the framer motion is changed to just motion , install both if you see any errors on the component since it is a lightweight library',
    secondInstall :'npm install motion'
  },
  {
    library: 'TailwindCSS',
    description:
      'Utility-first styling made easy. TailwindCSS helps Reactify stay clean, scalable, and responsive — without writing tons of custom CSS.',
    install: 'npm install tailwindcss @tailwindcss/vite',
    second2: 'Configure the Vite plugin Add the @tailwindcss/vite plugin to your Vite configuration.',
    allo: 'Import Tailwind CSS',
    caution:'Please restart the editor then reRun the project for the tailwind to work',
        importss:'CSS @import "tailwindcss" ',
    config: `
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})`
   },
];


    return ( 
        <div className="app-bg" style={{padding:0}}>
        <div className="flex mt-8 mx-6">
            <Navbar />
          </div>
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
      alt="Title Background" className="absolute inset-0 mask-b-from-20% mask-b-to-80% w-[100%]  -mt-24 sm:-mt-28  h-screen object-cover pointer-events-none select-none z-0  blur-none" />

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
      <p className="text-[rgba(255,255,255,0.5)] mt-4 block text-md md:text-lg text-center px-2">
  Reactify uses those libraries to work , click one to see the Docs
      </p>

        <motion.div
            initial={{opacity:0}}
         animate={{opacity:1,transition:{duration:0.5,delay:1}}}
    className="flex flex-col sm:flex-row  gap-4 items-center w-full justify-center px-12">
  <motion.div 
  initial={{rotate:0}}
  whileHover={{ rotate: 5 }}
  onClick={()=>chooseLibrary('react')}      
  className="library flex items-center w-full gap-3 group cursor-pointer">
    <a className="flex items-center gap-2" href="#library">
<SiReact className="w-[20px] h-[20px] text-cyan-400 sm:text-white group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_6px_#00d8ff] transition-all duration-300" />
    <p className="text-white">React</p>
   </a>
  </motion.div>

  <motion.div 
  initial={{rotate:0}}
  whileHover={{ rotate: 5 }}
    onClick={()=>chooseLibrary('framer motion')}      
  className="library flex items-center gap-3 group cursor-pointer">
     <a className="flex items-center gap-2" href="#library">
      <SiFramer className="w-[20px] h-[20px] text-pink-500 sm:text-white group-hover:text-pink-500 group-hover:drop-shadow-[0_0_6px_#e91e63] transition-all duration-300" />
    <p className="text-white ">Framer Motion</p>
    </a>
  </motion.div>

  <motion.div 
  initial={{rotate:0}}
  whileHover={{ rotate: 5 }}
   onClick={()=>chooseLibrary('tailwindcss')}                    
  className="library flex items-center gap-3 group cursor-pointer">
<a className="flex items-center gap-2" href="#library">
<SiTailwindcss className="w-[20px] h-[20px] text-blue-400 sm:text-white group-hover:text-blue-400 group-hover:drop-shadow-[0_0_6px_#38bdf8] transition-all duration-300" />
    <p className="text-white">TailwindCss</p>
   </a>
  </motion.div>
</motion.div>

      </motion.div>
      {
      /* Tooltip Logos */
          }
          <AnimatePresence mode="wait">
  {libraries && (
    <motion.div
      key={libraries.library} // super important for AnimatePresence!
      id="library"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 ,delay:0.5} }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      className="flex gap-8 justify-center mt-[25%] sm:mt-[10%] w-full mb-10 ml-0 px-4 sm:px-8 md:px-12"
    >
      <div className="w-full">
        <h1 className="text-2xl md:text-4xl font-bold text-white w-full text-start">
          Let's get started with {libraries.library}!
        </h1>
        <p className="text-[rgba(255,255,255,0.5)] mt-8">{libraries.description}</p>
        <pre className="bg-[#121212] text-[#eee] p-4 mt-4 text-wrap w-[300px] md:w-[400px] rounded-md border border-[#3b4345]">
          {libraries.install}
                  </pre>
                  {libraries.second2 && (
                    <p className="text-[rgba(255,255,255)] font-medium text-md mt-8 -mb-3 w-[300px]">{libraries.second2}</p>
                  )}
        {libraries.config && (
          <pre className="bg-[#121212] text-[#eee] p-4 mt-4 rounded-md border border-[#3b4345] whitespace-pre-wrap">
            {libraries.config}
          </pre>
                  )}
                  {libraries.second && (
                    <p className="mt-6 text-[rgba(255,255,255,0.5)]">{libraries.second}</p>
                  )}
                  {libraries.secondInstall && (
                  <pre className="bg-[#121212] text-[#eee] p-4 mt-4 w-[300px] md:w-[400px] rounded-md border border-[#3b4345]">
                {libraries.secondInstall}
              </pre>
                  )}
                  {libraries.allo && (
                    <p className="text-white font-medium mt-8 -mb-3" >{libraries.allo}</p>
                  )}
                  {libraries.importss && (
                    <pre className="bg-[#121212] text-[#eee] p-4 mt-4 w-[300px] md:w-[400px] rounded-md border border-[#3b4345]">{libraries.importss}</pre>
                  )}
                  {libraries.caution && (
                    <p className="text-[4gba(255,255,255,0.5)] mt-8">{libraries.caution}!</p>
                  )}
      </div>
    </motion.div>
  )}
</AnimatePresence>

      </div>
        </div>
     );
}
 
export default Docs;