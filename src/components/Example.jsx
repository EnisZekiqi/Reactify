import { motion,AnimatePresence,LayoutGroup } from "framer-motion";
import { SiFramer,SiReact ,SiTailwindcss  } from "react-icons/si";
import { CiCircleQuestion } from "react-icons/ci";
import { useState, useEffect } from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FaArrowRight } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdCheckmark,IoMdCopy  } from "react-icons/io";
import { useFormState,useFormStatus } from "react-dom";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';


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
    
    const example2 = "This animation is Nice!";

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
  
const items = [
  {
    title: 'Framer Motion',
    bgImage: 'https://framerusercontent.com/images/PW7TZzsRuEq5sLfu3FYVeD6Kcg.png',
    text:'Framer Motion or now called Motion is an animation library that is simple to start and fun to master '
  },
  {
    title: 'React',
    bgImage: 'https://media.licdn.com/dms/image/v2/D5612AQHK3Cr_P9REJw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708847734586?e=2147483647&v=beta&t=FCYsysCNzjm85_2l02-lh5PltEu34kZN1R2CH_hplto',
    text:'React 19 is used in this Library which means it has new hooks on the components and better optimization'
  },
  {
    title: 'TailwindCSS',
    bgImage: 'https://miro.medium.com/v2/resize:fit:1400/1*Q0uAcG_S2J2gkcUaF5PyxA.png',
    text:'For styling direct into the JSX or TSX we use the TailwindCSS for faster coding and better layout '
  },
];

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
  

  //// functions for copying examples ///
  
  const codeExamples = {
  example1: `
<motion.p className="relative text-2xl ...">
  {example1.split("").map((char, index) => (
    <motion.span key={index}>{char}</motion.span>
  ))}
</motion.p>
`,
  example2: `
<motion.p className="relative text-2xl ...">
  {example2.split(" ").map((word, index) => (
    <motion.span key={index}>{word}</motion.span>
  ))}
</motion.p>
`,
};

  const [showModal, setShowModal] = useState(false)
  const [activeExample,setActiveExample]=useState(null)


  const chooseExample = (key) => {
    setActiveExample(key)
    setShowModal(true)

  }

  const closeExample = () => {
    setActiveExample(null)
    setShowModal(false)
  }
const customStyle = {
  backgroundColor: 'rgba(255,255,255,0.1)', // Dark blue background
  color: '#00d8ff',            // Light text color (off-white)
  borderRadius: '8px',          // Rounded corners for the code block
  padding: '20px',              // Add padding around the code
  fontSize: '16px',             // Adjust font size
  lineHeight: '1.5',            // Line height for readability
  overflowX: 'auto',            // Allow horizontal scrolling if needed
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Optional shadow to give depth
  };
  const customTokenStyles = {
  'keyword': {
    color: '#00000', // Neon blue for keywords
  },
  'string': {
    color: '#ffff00', // Golden yellow for strings
  },
  'variable': {
    color: '#00ff00', // Orange for variables
  },
  'comment': {
    color: '#7F8C8D', // Dark gray for comments
    fontStyle: 'italic', // Italicize comments
  },
};

const [copied,setCopied]=useState(false)
  
  const handleCopy = (event) => {
    event.stopPropagation()
    setCopied(true)
    navigator.clipboard.writeText(codeExamples[activeExample])
    setTimeout(() => {
      setCopied(false)
    }, 3000);
  }



    return ( 
        <div className="h-[100%]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } }}
                viewport={{once:true}}
                className="flex flex-col items-center justify-center">
                <p className="rounded-full bg-[#1A1A1A] font-extralight uppercase text-xs p-2">Examples</p>
                <h1 className="text-3xl font-medium text-[#fff] mt-3 text-center">Powerful Components</h1>
                <span className="text-md font-normal text-white opacity-50 w-full md:w-[30%] text-center mt-3">Created with smooth animated & high performance animated components with interactive gestures</span>
            </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{once:true}}
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2 mt-[5%] justify-items-center">
                <motion.div
                variants={letterVariants}
            class="... bg-[#191919] rounded-xl p-2 w-[100%] md:w-[300px] h-[220px] md:h-[300px]">
                    <div onClick={()=>chooseExample('example1')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
                      <motion.p
        className="relative text-2xl text-md md:text-lg text-center lg:text-3xl font-medium text-[rgba(255,255,255,0.5)] w-[100%] mt-[15%] md:mt-[30%] z-10"
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
                    <div className="flex justify-between items-center  mt-[23%] md:mt-[35%] px-4">
                        <h1 className="text-md font-medium text-white  ">Simple Text</h1>
                        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
                            <SiFramer />
                            <SiReact />
                            <SiTailwindcss/>
                        </div>
        </div>
                </motion.div>
                <motion.div 
                variants={letterVariants}
            class="... bg-[#191919] rounded-xl p-2 w-[100%] md:w-[420px] lg:w-[450px] h-[220px] md:h-[300px]">
              <div onClick={()=>chooseExample('example2')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
                    <motion.p
  className="relative text-2xl md:text-lg text-center lg:text-3xl font-medium w-[100%] text-[rgba(255,255,255,0.5)] z-10 mt-[15%] md:mt-[20%] flex flex-wrap justify-center gap-1"
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
<div className="flex justify-between items-center mt-[23%] md:mt-[22%] px-4">
                        <h1 className="text-md font-medium text-white ">Blury Text</h1>
                        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
                            <SiFramer />
                            <SiReact />
                            <SiTailwindcss/>
                        </div>
        </div>
  </motion.div>
          <motion.div
                variants={letterVariants}
            className="bg-[#191919] rounded-xl p-2 w-full md:w-[300px] h-[300px] lg:h-[600px]  flex flex-col justify-between overflow-hidden">
        <div>
          <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end">
            <CiCircleQuestion className="w-[25px] h-[25px]" />
          </div>

          <div className="flex w-full justify-center items-center mt-[0%] lg:mt-[70%] ">
            <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={navMenu ? { opacity: 0, transition: { duration: 0.5 } } : { opacity: 1, transition: { duration: 0.5 } }}
          className="click cursor-pointer text-center bg-[#00d8ff] text-black w-fit rounded-lg mt-12 md:mt-4 p-1 md:p-2.5 text-xl"
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
              className="relative bg-[#1E1E1E] rounded-lg shadow-2xl border border-[#3b4345] md:w-[200px] w-[150px]  h-[50px] md:h-[75px] flex items-center justify-center text-white text-lg"
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
    </motion.div>
          <motion.div
                variants={letterVariants}
            class="col-span-1 lg:col-span-2 ... bg-[#191919] rounded-xl p-2 lg:-mt-[30%] w-[100%] lg:w-[95%] -ml-0 lg:ml-17  flex-col gap-10 items-center justify-center">
 <div className="i text-end w-full pr-2 pt-2 flex items-end justify-end">
            <CiCircleQuestion className="w-[25px] h-[25px]" />
          </div>
            <LayoutGroup>
              <div className="flex justify-center items-center gap-10">
              {items.map((item, index) => (
  <Tippy key={index} content="Click Me" placement="top">
    <motion.div
      layoutId={`image-${index}`}
      onClick={() => handleClick(item,index)}
      style={{
      maskImage: `url('${mask}')`,
  WebkitMaskImage: `url('${mask}')`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        backgroundImage: `url(${item.bgImage})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
      }}
      className={`w-[200px] h-[100px] cursor-pointer 
        ${index === 0 ? '-rotate-10' : index === 1 ? '-mt-12' : 'rotate-10'}
        transition-all duration-300 hover:opacity-70`}
    />
  </Tippy>
))}

                <AnimatePresence>
        {activeIndex !== null && (
          <>
            {/* BACKDROP */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            />

            {/* CENTER IMAGE WITHOUT MASK */}
            <motion.div
              layoutId={`image-${activeIndex}`}
              className="fixed top-1/2 left-1/2 z-50 w-[270px] md:w-[400px] h-[250px] p-2.5 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl bg-cover bg-center"
              style={{
                backgroundImage: `url(${activeIndex.bgImage})`,
              }}
              initial={{ borderRadius: 20,opacity:0,scale:0 }}
              animate={{ borderRadius: 16,opacity:1,scale:1,transition:{duration:0.5} }}
              exit={{ opacity: 0, scale: 0.9 }}
                    >
                       <div>
                <h2 className="text-2xl font-bold mb-2">{activeIndex.title}</h2>
                <p className="text-sm opacity-90">
                  {activeIndex.text}
                        </p>
              </div>

              <div className="flex justify-end items-end h-full gap-3 -mt-30 md:-mt-22">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-[#232829] text-white rounded-md hover:bg-[#181b1b] transition-all duration-300"
                >
                  Close
                </button>
                
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
          </div>
          </LayoutGroup>
<div className="flex justify-between items-center w-full px-4 mb-2 mt-[10%]">
        <h1 className="text-md font-medium text-white">Mask Modal</h1>
        <div className="flex items-center gap-3 text-[rgba(255,255,255,0.5)]">
          <SiFramer />
          <SiReact />
          <SiTailwindcss />
        </div>
      </div>
          </motion.div>
          
        </motion.div>
            <motion.button
            initial={{opacity:1,gap:2}}
            whileHover={{opacity:0.7,gap:4,transition:{duration:0.5}}}
             className="bg-transparent text-md font-medium
              text-white mt-6 text-center w-full cursor-pointer
               hover:text-(rgba(255,255,255,0.5)) flex items-center justify-center gap-3">
                <p className="mr-1 hover:mr-2 transition-all duration-300">Explore all components</p> <FaArrowRight />
                </motion.button>
        <div className="empty"></div>
        <AnimatePresence>
           {showModal && (
  <motion.div
      initial={{ opacity: 0 }}
       animate={{opacity:1,transition:{duration:0.5}}}
      exit={{opacity:0,transition:{duration:0.5}}}
    onClick={closeExample} className="fixed inset-0 pointer-events-auto z-[500] bg-[rgba(0,0,0,0.5)] bg-opacity-70 flex items-center justify-center">
    <div onClick={(e)=>e.stopPropagation()} className="bg-[#121212] border border-[#3b4345] text-white p-6 rounded-lg max-w-[90%] md:max-w-[700px] overflow-auto max-h-[90vh] relative">
      <button
        className="absolute top-2 right-2 text-white hover:text-red-400"
        onClick={() => setShowModal(false)}
      >
        ✖
      </button>
              <pre className="mb-4 relative">
                <SyntaxHighlighter
        language="jsx"
        style={oneDark} // Use the base Nord theme
        customStyle={customStyle} // Apply the custom style
        codeTagProps={{ style: customTokenStyles }} // Apply custom token styles
      >
        {codeExamples[activeExample]}
    </SyntaxHighlighter>
          </pre>
      <button
        onClick={handleCopy}
        className="mt-4 absolute top-4 right-6 bg-transparent text-[rgba(255,255,255,0.5)] px-4 py-2 rounded  transition"
      >
        {copied ? (
                <IoMdCheckmark className="w-[20px] h-[20px]" />
              ) : (
                <IoMdCopy className="w-[20px] h-[20px]" />
              )}          </button>
    </div>
  </motion.div>
)}
       </AnimatePresence>

        </div>
     );
}
 
export default Example;