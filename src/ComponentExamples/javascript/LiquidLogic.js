export const example7 = "So Liquid!";

export const Usage = `
import LiquidText from "./LiquidText";


<LiquidText
 example7="So Liquid!"  />`;

export const codeSnippet7 = `
 
 const LiquidText = () => {
    return ( 
        <div className="relative inline-block overflow-hidden ">
            <span className="text-transparent stroke-[1px] text-3xl sm:text-5xl stroke-white rounded-xl  bg-[#00d8ff]">
                {example7}
            </span>
            <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 left-0 whitespace-nowrap text-3xl sm:text-5xl text-black"
            >
             {example7}
            </motion.span>
        </div>
     );
}
 
 `;

export const codeSnippet7TS = `
 import { Variants } from "framer-motion";
 
 interface LiquidText {
   example7: string;
 }
 
 const LiquidText: React.FC<LiquidTextProps> = ({ example7 }) => {
   return ( 
        <div className="relative inline-block overflow-hidden ">
            <span className="text-transparent stroke-[1px] text-3xl sm:text-5xl stroke-white rounded-xl  bg-[#00d8ff]">
                {example7}
            </span>
            <motion.span
                initial={{ x: '-100%' }}
                animate={{ x: '0%' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute top-0 left-0 whitespace-nowrap text-3xl sm:text-5xl text-black"
            >
             {example7}
            </motion.span>
        </div>
     );
 };
 `;
