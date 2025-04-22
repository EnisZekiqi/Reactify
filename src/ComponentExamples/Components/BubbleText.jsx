import { motion } from 'framer-motion';
import {example3,BubbleVariant} from '../javascript/BubbleLogic'

const BubbleText = () => {
    return ( 
       <motion.div
  variants={BubbleVariant}
  initial="initial"
  animate="animate"
>
  {example3.split("").map((char, index) => (
    <motion.span
      className="inline-block -ml-0 text-3xl sm:text-5xl font-semibold"
      key={index}
      whileHover={{
        fontWeight: 700,
        color: '#00d8ff',
        scale: 1.2,
        textShadow: '0px 0px 8px rgba(0, 216, 255, 0.8)',
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 12
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.03,
        duration: 0.3,
        ease: 'easeOut'
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ))}
</motion.div>

     );
}
 
export default BubbleText;