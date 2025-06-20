export const codeSnippet27 = `
import { motion } from "framer-motion";

const DotHero = () => {
    return ( 
        <>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:0.4}}}
            className="dot w-[700px]  h-full flex items-center  justify-center text-center mask-y-from-70% mask-y-to-100% mask-x-from-70% mask-x-to-90%">
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:0.3,delay:0.4                  }}}
                className=" text-6xl font-bold ">Buzzing</motion.h1>
        </motion.div>
        </>
     );
}
 
export default DotHero;

`;

export const CSS2 = `

.dot { 
  
  background-size:cover;
  background-position: center center;
  background-repeat: repeat;
  animation: move 0.7s linear infinite;
 background-image: url(/src/assets/magicpattern-polka-dot-pattern-1750367755498.png);
}

@keyframes move {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 30px 30px;
  }
}

`;

export const codeSnippet27TS = `
import { motion } from "framer-motion";

const DotHero = () => {
    return ( 
        <>
            <motion.div
            initial={{opacity:0}}
            animate={{opacity:1,transition:{duration:0.4}}}
            className="dot w-[700px]  h-full flex items-center  justify-center text-center mask-y-from-70% mask-y-to-100% mask-x-from-70% mask-x-to-90%">
                <motion.h1
                initial={{opacity:0}}
                animate={{opacity:1,transition:{duration:0.3,delay:0.4                  }}}
                className=" text-6xl font-bold ">Buzzing</motion.h1>
        </motion.div>
        </>
     );
}
 
export default DotHero;

`

export const Usage = `
import DotHero from "./DotHero";

<DotHero />;
`;
