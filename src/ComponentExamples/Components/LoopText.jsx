import { motion } from "framer-motion";
import { example11 } from "../javascript/RotatingLogic";
const LoopText = () => {

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

    return ( 

        <div>
             <div className="relative inline-block overflow-hidden ">
                        <span className="text-transparent stroke-[1px] text-3xl sm:text-5xl stroke-white rounded-xl  bg-[#]">
                        Creative
                        </span>
                        <motion.span
                           initial={{ y: '100%' }}
                            animate={{ y: '0%' }}
                            transition={{ duration: 1, ease: 'easeInOut' }}
                            className="absolute top-0 left-0 whitespace-nowrap text-3xl sm:text-5xl text-white"
                        >
                     {example11.map((word, i) => {
                const letters = word.split("");

                return (
                    <motion.div
                        className="inline-block cursor-pointer"
                        key={i}
                    >
                        {letters.map((char, j) => (
                            <motion.span
                                key={j}
                                variants={letterVariants}
                                initial="initial"
                                animate="visible"
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.div>
                );
            })}
                        </motion.span>
                    </div>
        </div>
     );
}
 
export default LoopText
;