import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import {
  CiGift,
  CiFaceSmile,
  CiCircleCheck,
  CiHardDrive,
} from "react-icons/ci";
import circlewallpaper from "./assets/download.png";
import Example from "./components/Example";
import Variants from "./components/Variants";
import Ending from "./components/Ending";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Docs from "./Example/Docs/Docs";
import Example2 from "./Example/Docs/Example";
import { Link } from "react-router-dom";
import { IoMdCheckmark, IoMdCopy, IoMdClose } from "react-icons/io";
import reactlog from '../src/assets/export.png'
function App() {

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

  const logos = [
    {
      id: 1,
      label: "Free and open-source",
      text: "Completly free to use and open-source for your projects",
      svg: <CiGift />,
    },
    {
      id: 2,
      label: "Easy to use",
      text: "User-friendly and easy to start and explore ",
      svg: <CiFaceSmile />,
    },
    {
      id: 3,
      label: "Production Ready",
      text: "Written in JavaScript & TypeScript with high performance",
      svg: <CiCircleCheck />,
    },
    {
      id: 4,
      label: "Powerful Engine",
      text: "React 19 & updated motion features includes better performance",
      svg: <CiHardDrive />,
    },
  ];

  const text =
    "Building dynamic, interactive UIs with React, powered by Framer Motion for animations and Tailwind CSS for sleek, responsive designs.";

  const words = text.split(" ");

  

  const AllIntro = () => (
    <div className="app-bg">
      <Navbar />
      <HeroSection
        circlewallpaper={circlewallpaper}
        words={words}
        containerVariants={containerVariants}
        logos={logos}
        itemVariants={itemVariants}
      
      />
      <div className="empty"></div>
      <Example />
      <Variants />
      <div className="empty" style={{ height: "100px" }}></div>
      <Ending />
    </div>
  );

  return (
    <Routes>
      <Route path="/" element={<AllIntro />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/example/:exampleId" element={<Example2 />} />
    </Routes>
  );
}

export default App;

function HeroSection({
  circlewallpaper,
  words,
  containerVariants,
  logos,
  itemVariants,
 
})


{
  return (
    <div className=" text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between mt-14">
      <div className="relative flex flex-col items-center lg:items-start justify-center mt-24 sm:mt-10 z-[90]">
        <div className="flex flex-col items-center lg:items-start mt-[5%]">
         
          {/* Background Image Layer */}
          

          {/* The Animated Title */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.5,
              },
            }}
            className="relative font-medium text-3xl md:text-5xl lg:text-6xl  text-white z-[10] text-center lg:text-start w-full lg:w-[70%]"
          >
            Animated UI Components for React Developers
          </motion.h1>
        </div>

        <div className="flex w-full justify-center lg:justify-start">
          <motion.p className="read-the-docs text-wrap text-center lg:text-start text-sm md:text-md lg:text-lg w-full md:w-[55%] mt-5 flex flex-wrap justify-center lg:justify-start">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(8px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: {
                    delay: 1 + index * 0.05,
                    // stagger by word
                    duration: 0.4,
                    ease: "easeOut",
                  },
                }}
                className="mr-1" // margin between words
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
              delay: 0.5,
            },
          }}
          className="flex items-center justify-center gap-4 w-full sm:w-fit"
        >
          <p className="text-white bg-[#191919] px-3 py-1.5 rounded-xl mt-4 hidden sm:block text-md md:text-lg text-center ">
          Ready to bring your ideas to life?
</p>
          <motion.button
            className="mt-4 md:px-6 md:py-1.5  sm:px-4 sm:py-2 px-2 py-2 w-full sm:w-fit bg-[#00d8ff] hover:bg-[#00adcc] text-black rounded-lg shadow font-medium"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            <Link to="/docs"> Get Started</Link>
          </motion.button>
        </motion.div>
        {/* Tooltip Logos */}
        <motion.div
          className="flex gap-8 justify-center mt-15"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {logos.map((logo, index) => (
            <motion.div className="" key={logo.id} variants={itemVariants}>
              <Tippy
                className="opacity-100 hover:opacity-60 transition-all duration-300 w-[200px] mx-6"
                content={logo.text}
                placement="top"
              >
                <div className="text-xl sm:text-2xl cursor-pointer opacity:100 hover:opacity-60 transition-all duration-300 flex flex-col items-center">
                  {logo.svg}
                  <p className="text-white font-light text-xs sm:text-sm w-full lg:w-3/5 text-center">
                    {logo.label}
                  </p>
                </div>
              </Tippy>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 0.5, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
          className="ray absolute block lg:hidden -top-30  left-1/4 -rotate-10 mask-x-from-70% mask-x-to-100% -translate-x-1/2 z-40 w-[400px] h-[400px] pointer-events-none" />
      {/* Subtext */}
      <div className="hidden md:flex flex-col  w-fit relative z-50">
  {/* Light Ray Background */}
  <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 0.5, y: 0 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
          className="ray absolute hidden lg:block -top-30  left-1/4 -rotate-10 mask-x-from-70% mask-x-to-100% -translate-x-1/2 z-40 w-[400px] h-[400px] pointer-events-none" />

  {/* React Logo */}
  <img className="ml-20 lg:ml-0" src={reactlog} width="220px" alt="" />

  {/* Card 1 */}
  <div className="cardxx z-[600] w-[200px] h-[200px] border z-[500] border-[#343434] rounded-xl -ml-[100px] lg:-ml-[220px] -mt-10 -rotate-10">
    <div className="dot w-[200px] h-[200px] flex items-center justify-center">
      <h1 className="cardxx-text text-white text-2xl font-bold transition-all duration-300 text-center">
        DotHero
      </h1>
    </div>
  </div>

  {/* Card 2 */}
  <div className="cardxx relative group w-[200px] rotate-10 h-[200px] -mt-[200px] lg:mt-0 ml-[280px] lg:ml-0 overflow-hidden border border-[#343434] rounded-lg ">
    <div className="absolute inset-0 z-0 bg-grid animate-gridMove opacity-10"></div>
    <motion.div className="absolute inset-0 pointer-events-none z-10" />
    <div className="cardxx-text z-20 flex items-center justify-center h-full text-white font-bold text-2xl transition-all duration-300 text-center">
      Grid Card
    </div>
  </div>
</div>

    </div>
  );
}
