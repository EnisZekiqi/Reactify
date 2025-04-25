import { motion,useAnimation } from "framer-motion";
import { example9 } from "../javascript/StreamLogic";
import { useEffect } from "react";

const StreamText = () => {

    
  const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: ['-100%', '100%'],
            transition: {
                duration: 7,
                ease: 'linear',
                repeat: Infinity,
            },
        });
    }, [controls]);


    return ( 
        <div>
            <div className="relative inline-block overflow-hidden mask-x-from-70% mask-x-to-90%">
                        <span className="text-transparent  stroke-[1px] text-3xl sm:text-5xl stroke-white rounded-xl  bg-[#]">
                            {example9}
                        </span>
                        <motion.span
                    animate={controls}
                            className="absolute  top-0 left-0 whitespace-nowrap text-3xl sm:text-5xl text-white"
                        >
                         {example9}
                        </motion.span>
                 </div>
        </div>
     );
}
 
export default StreamText;