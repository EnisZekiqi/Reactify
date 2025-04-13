import { motion } from 'framer-motion';
import { example1, letterVariants } from '../javascript/helloLogic';

const SimpleText = () => {
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
      {example1.split("").map((char, index) => (
        <motion.span
          className="inline-block -ml-1 text-5xl font-semibold"
          key={index}
          variants={letterVariants}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>     );
}
 
export default SimpleText;