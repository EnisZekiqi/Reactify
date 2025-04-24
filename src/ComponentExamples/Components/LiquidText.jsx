import { motion } from "framer-motion";
import { example7 } from "../javascript/LiquidLogic";

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
 
export default LiquidText;