import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { CiGift,CiFaceSmile,CiCircleCheck ,CiHardDrive    } from "react-icons/ci";
import circlewallpaper from './assets/download.png'
import Example from './components/Example'
import Variants from './components/Variants'
function App() {
  const [count, setCount] = useState(0)

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
    { id: 1, label: 'Free and open-source',text:'Completly free to use and open-source for your projects', svg: <CiGift/> },
    { id: 2, label: 'Easy to use',text:'User-friendly and easy to start and explore ', svg:<CiFaceSmile/> },
    { id: 3, label: 'Production Ready',text:'Written in JavaScript & TypeScript with high performance', svg:<CiCircleCheck/> },
    { id: 4, label: 'Powerful Engine',text:'React 19 & updated motion features includes better performance', svg:<CiHardDrive /> },
  ]

  const text =
  "Building dynamic, interactive UIs with React, powered by Framer Motion for animations and Tailwind CSS for sleek, responsive designs.";

const words = text.split(" ");


  return (
    <div className='app-bg'>
      <Navbar />
     <HeroSection circlewallpaper={circlewallpaper} words={words} containerVariants={containerVariants} logos={logos} itemVariants={itemVariants} />
    <div className="empty"></div>
      <Example />
      <Variants/>
    </div>
  )
}

export default App

    function HeroSection({circlewallpaper, words, containerVariants, logos, itemVariants}) {
      return (<div className=" text-white">
       <div className="relative flex flex-col items-center justify-center mt-10 z-[90]">
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
      }} className="logowrapper">
         <svg width='25px' height='25px' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="nonzero" clip-rule="nonzero" d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z" fill="#000000"></path> <path fill-rule="nonzero" clip-rule="nonzero" d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z" fill="#000000"></path> <path fill-rule="nonzero" clip-rule="nonzero" d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z" fill="#000000"></path> <path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z" fill="#000000"></path> </g></svg>
        </motion.div>
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
      alt="Title Background" className="absolute inset-0 w-screen h-screen object-contain pointer-events-none select-none z-0  blur-md" />

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
          delay: 1,
          duration: 0.5
        }
      }} className="relative font-medium text-5xl lg:text-7xl xl:text-9xl text-white z-[10] text-center px-6 py-3">
    Reactify
  </motion.h1>
    </div>

      <div className="flex w-full justify-center">
       <motion.p className="read-the-docs text-center text-sm md:text-md lg:text-lg w-full md:w-[55%] mt-5 flex flex-wrap justify-center">
  {words.map((word, index) => <motion.span key={index} initial={{
          opacity: 0,
          y: 20,
          filter: "blur(8px)"
        }} animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            delay: 1 + index * 0.05,
            // stagger by word
            duration: 0.4,
            ease: "easeOut"
          }
        }} className="mr-1" // margin between words
        >
      {word}
    </motion.span>)}
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
        delay: 0.5
      }
    }} className="flex items-center justify-center gap-4">
      <p className="text-white mt-4 text-md md:text-lg text-center underline">
  Ready to bring your ideas to life?
      </p>

      <motion.button className="mt-4 md:px-6 md:py-3  px-4 py-2 bg-[#00d8ff] hover:bg-[#00adcc] text-black rounded-lg shadow" whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
  Get Started
      </motion.button>

      </motion.div>
      {
      /* Tooltip Logos */
    }
      <motion.div className="flex gap-8 justify-center mt-15" variants={containerVariants} initial="hidden" animate="show">
        {logos.map((logo, index) => <motion.div className='' key={logo.id} variants={itemVariants}>
            <Tippy className='opacity-100 hover:opacity-60 transition-all duration-300 ' content={logo.text} placement="top">
              <div className="text-2xl cursor-pointer opacity:100 hover:opacity-60 transition-all duration-300 flex flex-col items-center">
                {logo.svg}
                <p className='text-white font-light text-sm w-full lg:w-3/5 text-center'>{logo.label}</p>
              </div>
            </Tippy>
          </motion.div>)}
      </motion.div>
      </div>

      {
    /* Subtext */
  }
    </div>);
    }
  