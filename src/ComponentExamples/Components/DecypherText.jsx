import { motion } from "framer-motion";
import { useState,useEffect } from "react";
import { example5,DecypherVariants,chars } from "../javascript/DexypherLogic";


const DecypherText = () => {


  const [displayed, setDisplayed] = useState("");
    
    useEffect(() => {
        let current = ' '
        let target = example5
        let interations = 0

        const interval =setInterval(() => {
            current = target
                .split("")
                .map((char,i) => {
                    if (char === ' ') return ''
                    if (i < interations) return char
                    return chars[Math.floor(Math.random()* chars.length)]
                    
                
                }).join("")
            setDisplayed(current)
            interations += 0.5
            if(interations >= target.length) clearInterval(interval)
        }, 50);
        return ()=> clearInterval(interval)
     },[])

    return ( 
       <motion.div
             initial="hidden"
             animate="visible"
             variants={{
               hidden: { opacity: 1 },
               visible: {
                 opacity: 1,
                 transition: {
                   staggerChildren: 0.05,
                   delayChildren: 0.5,
                 },
               },
             }}
             className="flex flex-wrap gap-x-1"
           >
             {displayed.split("").map((char, index) => (
               <motion.span
                 className="inline-block -ml-1 text-[28px] sm:text-5xl font-semibold"
                 key={index}
                 variants={DecypherVariants}
               >
                 {char === " " ? "\u00A0" : char}
               </motion.span>
             ))}
           </motion.div>
     );
}
 
export default DecypherText;