import { motion } from 'framer-motion';
import { example2, wordContainerVariants,wordVariants } from '../javascript/helloLogic2';

const BlurText = () => {
    return ( 
  <motion.p
  className="relative text-2xl md:text-lg text-center lg:text-3xl font-medium w-[100%] text-[rgba(255,255,255,0.5)] z-10 mt-[15%] md:mt-[20%] flex flex-wrap justify-center gap-1"
  variants={wordContainerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  {example2.split(" ").map((word, index) => (
    <motion.span
      key={index}
      variants={wordVariants}
      className="inline-block"
    >
      {word}
    </motion.span>
  ))}
</motion.p>     );
}
 
export default BlurText;