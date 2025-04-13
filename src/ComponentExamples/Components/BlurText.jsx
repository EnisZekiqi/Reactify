import { motion } from 'framer-motion';
import { example2, wordContainerVariants,wordVariants } from '../javascript/helloLogic2';

const BlurText = () => {
    return ( 
  <motion.p
  className="relative text-2xl md:text-lg text-center lg:text-5xl font-semibold w-[100%] text-[rgba(255,255,255,1)] z-10 flex flex-wrap justify-center gap-1"
  variants={wordContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {example2.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={wordVariants}
      className="inline-block mr-1"
    >
      {word}
    </motion.span>
  ))}
</motion.p>     );
}
 
export default BlurText;