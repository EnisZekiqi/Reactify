import { motion } from "framer-motion";

const DotHero = () => {
    return ( 
        <>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:0.4}}}
            className="dot w-[300px] lg:w-[700px]  h-full flex items-center  justify-center text-center mask-y-from-70% mask-y-to-100% mask-x-from-70% mask-x-to-90%">
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:0.3,delay:0.4                  }}}
                className=" text-2xl md:text-4xl lg:text-6xl font-bold ">Buzzing</motion.h1>
        </motion.div>
        </>
     );
}
 
export default DotHero;