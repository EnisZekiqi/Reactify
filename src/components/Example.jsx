import { motion,AnimatePresence,LayoutGroup } from "framer-motion";
import { SiFramer,SiReact ,SiTailwindcss  } from "react-icons/si";
import { CiCircleQuestion } from "react-icons/ci";
import { useState, useEffect } from "react";
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { FaArrowRight } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nord } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { IoMdCheckmark,IoMdCopy,IoMdClose   } from "react-icons/io";
import { useFormState,useFormStatus } from "react-dom";
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Link } from "react-router-dom";

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
  {"Your Text".split("").map((char, index) => (
    <motion.span key={index}>{char}</motion.span>
  ))}
</motion.p>
`,

  example2: `
<motion.p className="relative text-2xl ...">
  {"Your text here".split(" ").map((word, index) => (
    <motion.span key={index}>{word}</motion.span>
  ))}
</motion.p>
`,

  example3: `
<motion.div
  initial={{ opacity: 1, scale: 1 }}
  animate={navMenu ? { opacity: 0, transition: { duration: 0.5 } } : { opacity: 1, transition: { duration: 0.5 } }}
  className="click cursor-pointer text-center ..."
  onClick={startMenu}
  style={{ display: navMenu ? 'none' : 'block', transition: 'display 0.2s ease' }}
>
  Show Menu
</motion.div>

<motion.div
  className="list flex flex-col gap-4 items-center mt-4"
  variants={containerVariants2}
  initial="hidden"
  animate={navMenu ? "show" : "hidden"}
  style={{ display: navMenu ? "flex" : "none", marginTop: navMenu ? '-40px' : '0px' }}
>
  <AnimatePresence mode="popLayout">
    {visibleItems.map((item) => (
      <motion.span
        key={item}
        exit={{ opacity: 0, y: -20, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-[#1E1E1E] ..."
      >
        {item}
      </motion.span>
    ))}
  </AnimatePresence>
</motion.div>
`,

  example4: `
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
        layoutId={"some-unique-id"}
        className="fixed top-1/2 left-1/2 z-50 w-[270px] md:w-[400px] h-[250px] p-2.5 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/your-image.jpg')",
        }}
        initial={{ borderRadius: 20, opacity: 0, scale: 0 }}
        animate={{ borderRadius: 16, opacity: 1, scale: 1, transition: { duration: 0.5 } }}
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
`
};

  const codeExplain = {
    example1: [{ Name: 'Simple Text', description: 'Showing letter by letter into the screen with smooth transition' }],
    example2: [{ Name: 'Blur Text', description: 'Showing word by word into the screen using Y and blury text in the start with transition on the screen' }],
    example3: [{ Name: 'Slick Menu', description: 'Showing a list with intro animation exiting animation and reshowing the menu button again with smooth transition' }],
    example4:[{Name:'Mask Modal',description:'Showing a modal when by default has a mask in the image and then a layer on the !important image'}]
}


  
  const [showModal, setShowModal] = useState(false)
  const [activeExample,setActiveExample]=useState(null)
  const currentExplanation = codeExplain[activeExample] || [];


  const chooseExample = (key) => {
    setActiveExample(key)
    setShowModal(true)

  }

  const closeExample = () => {
    setActiveExample(null)
    setShowModal(false)
  }
const customStyle = {
  backgroundColor: '#232829', // Dark blue background
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
                    <div onClick={()=>chooseExample('example1')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end cursor-pointer"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
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
              <div onClick={()=>chooseExample('example2')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end cursor-pointer"><CiCircleQuestion  className="w-[25px] h-[25px]"/></div>
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
          <div  onClick={()=>chooseExample('example3')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end cursor-pointer">
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
 <div onClick={()=>chooseExample('example4')} className="i text-end w-full pr-2 pt-2 flex items-end justify-end cursor-pointer">
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
                <Link to='/example/simple-text' className="flex items-center"> <p className="mr-1 hover:mr-2 transition-all duration-300 flex items-center">Explore all components</p> <FaArrowRight /></Link>
        </motion.button>
        <div className="empty"></div>
        <AnimatePresence>
           {showModal && (
  <motion.div
      initial={{ opacity: 0 }}
       animate={{opacity:1,transition:{duration:0.5}}}
      exit={{opacity:0,transition:{duration:0.5}}}
    onClick={closeExample} className="fixed inset-0 pointer-events-auto z-[500] bg-[rgba(0,0,0,0.5)] bg-opacity-70 flex items-center justify-center">
    <div onClick={(e)=>e.stopPropagation()} className="bg-[#121212] border border-[#3b4345] text-white p-6 rounded-lg max-w-[90%] md:w-[600px] overflow-auto max-h-[70vh] relative">
      <button
        className="absolute top-4 right-4 text-white cursor-pointer"
        onClick={() => setShowModal(false)}
      >
        <IoMdClose className="w-[20px] h-[20px]"/>
                </button>
     <motion.svg className="m-1 logocontainer" width='22px' height='20px' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <motion.path fill-rule="nonzero" clip-rule="nonzero" d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z" fill="#00d8ff"></motion.path> <motion.path fill-rule="nonzero" clip-rule="nonzero" d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z" fill="#00d8ff"></motion.path> <motion.path fill-rule="nonzero" clip-rule="nonzero" d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z" fill="#00d8ff"></motion.path> <motion.path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z" fill="#00d8ff"></motion.path> </g></motion.svg>
                
       {currentExplanation.map((exp, index) => (
  <div key={index} className="mb-4 mt-12">
    <p className="text-lg font-semibold">{exp.Name}</p>
    <p className="text-sm text-gray-400">{exp.description}</p>
  </div>
))}
              <div className="relative">
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
        className="mt-0 absolute -ml-10 top-2 -mr-0 right-2 cursor-pointer w-[40px] h-[40px] bg-[#181b1b] text-[rgba(255,255,255,0.5)] px-2 py-2 rounded  transition border border-[#3b4345]"
      >
        {copied ? (
                <IoMdCheckmark className="w-[20px] h-[20px]" />
              ) : (
                <IoMdCopy className="w-[20px] h-[20px]" />
              )}          </button>
              </div>
    </div>
  </motion.div>
)}
       </AnimatePresence>

        </div>
     );
}
 

    const  SimpleText = ({containerVariants, char, index, letterVariants,example1}) =>{
      return (<motion.p className="relative text-2xl text-md md:text-lg text-center lg:text-3xl font-medium text-[rgba(255,255,255,0.5)] w-[100%] mt-[15%] md:mt-[30%] z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
  once: true
}}>
        {example1.split("").map((char, index) => <motion.span className="inline-block " key={index} variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
            </motion.span>)}
        
      </motion.p>);
    }
  export default Example;