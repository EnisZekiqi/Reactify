import { animate } from "framer-motion"

export const example4 = 'Hover to Expose Text'

export const wordHover = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

export const wordVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(4px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }
}

export const codeSnippet4 = `

const  ExposeText = ({wordHover, wordVariants, example4}) =>{

      return (
       <motion.p
        className="relative  text-center text-3xl sm:text-5xl font-semibold flex flex-wrap justify-center gap-1"
        variants={wordHover}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {example4.split(" ").map((word, index) => (
          <motion.span
            key={index}
               variants={wordVariants}
                whileHover={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{once:true}}
                className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p> 
      );
    }
`;

export const codeSnippet4TS = `
import { Variants } from "framer-motion";

interface ExposeTextProps {
  wordHover: Variants;
  wordVariants: Variants;
  example4: string;
}

const ExposeText: React.FC<ExposeTextProps> = ({ wordVariants, wordHover, example4 }) => {
  return (
     <motion.p
        className="relative  text-center text-3xl sm:text-5xl font-semibold flex flex-wrap justify-center gap-1"
        variants={wordHover}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {example4.split(" ").map((word, index) => (
          <motion.span
            key={index}
               variants={wordVariants}
                whileHover={{ opacity: 1, filter: 'blur(0px)' }}
                viewport={{once:true}}
                className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p> 
  );
};
`;

export const Animations = `

const wordHover = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const wordVariants = {
    hidden: {
        opacity: 0,
        y: 10,
        filter: "blur(4px)",
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(4px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }
}

`
export const Usage = `
import ExposeText from "./ExposeText";


<ExposeText
 wordHover={wordHover}
 example4="Hover to Expose Text"
 wordVariants={wordVariants}  />`