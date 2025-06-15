import { motion,AnimatePresence } from "framer-motion";
import { useState,useRef,useEffect } from "react";

const FluidMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const buttonRef = useRef(null);

    const [clipOrigin, setClipOrigin] = useState({ x: "50%", y: "50%" });

    const toggleMenu = () => {
        if (buttonRef.current) {
          const rect = buttonRef.current.getBoundingClientRect();
          const x = rect.left + rect.width / 2;
          const y = rect.top + rect.height / 2;
      
          setClipOrigin({ x: `${x}px`, y: `${y}px` });
        }
      
        setMenuOpen((prev) => !prev);
    };
    
      useEffect(() => {
        if (menuOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "auto";
        }
      }, [menuOpen]);

    return ( 
        <>
         <div className="relative w-full -mt-[30%]">
  {/* Header and Button */}
  <div className="flex items-center justify-between gap-[250px] pt-4 border-b border-[#343434] pb-2">
    <h1 className="text-xl sm:text-2xl md:text-3xl">Brand</h1>
    <button
      ref={buttonRef}
      onClick={toggleMenu}
      style={{ zIndex: menuOpen ? "1100" : "500" }}
      className="py-1 px-2.5 rounded-full text-white border font-semibold cursor-pointer pointer-events-auto bg-transparent border-black dark:border-white relative"
    >
      {menuOpen ? "Close" : "Menu"}
    </button>
  </div>

  {/* Animated Menu */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        key="mobileMenu"
        initial={{
            clipPath: `circle(0px at 50vw 30vh)`,
          }}
          animate={{
            clipPath: `circle(2000px at 50vw 30vh)`,
            transition: { duration: 0.6, ease: "easeInOut" },
          }}
          exit={{
            clipPath: `circle(0px at 50vw 30vh)`,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          className="absolute top-0 left-0 w-full min-h-full rounded-3xl bg-[#5C54F9] dark:bg-[#5C54F9] flex flex-col gap-8 p-8 z-[1000] text-white overflow-hidden"
      >
        <motion.div
          className="mt-[20%] flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delay: 1 },
            },
          }}
        >
          {["Projects", "About", "Skills"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-2xl font-semibold border-b">{item}</h2>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</div>

        </>
     );
}
 
export default FluidMenu;