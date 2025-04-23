export const example5 = 'DecypherText'

export const DecypherVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

export const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";


export const codeSnippet5 = `

const DecypherText = ({example5,chars,DecypherVariants}) => {


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
`;
export const codeSnippet5TS = `

import { useState, useEffect } from "react";
import { Variants, motion } from "framer-motion";

interface DecypherTextProps {
  DecypherVariants: Variants;
  chars: string;
  example5: string;
}

const ExposeText: React.FC<DecypherTextProps> = ({ chars, DecypherVariants, example5 }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let current = ' ';
    let target = example5;
    let iterations = 0;

    const interval = setInterval(() => {
      current = target
        .split("")
        .map((char, i) => {
          if (char === ' ') return '';
          if (i < iterations) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplayed(current);
      iterations += 0.5;

      if (iterations >= target.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [chars, example5]);

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
};

`

export const Animations = `

const DecypherVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
};

`
export const Usage = `
import DecypherText from "./DecypherText";


<DecypherText
 DecypherVariants={DecypherVariants}
 example5="DecypherText"
 chars={chars}  />`

