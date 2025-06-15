export const example2 = "This is so cool";

export const wordContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

// Child (each word)
export const wordVariants = {
  hidden: {
    opacity: 0,
    y: 10,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const codeSnippet2 = `
const BlurText = ({ wordVariants, wordContainerVariants, example2 }) => {
  return (
    <motion.p
      className="relative text-2xl text-center font-medium"
      variants={wordContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {example2.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};


`;

export const Animations = `

 const wordContainerVariants = {
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
        filter: "blur(0px)",
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    }
}
`;

export const codeSnippet2TS = `
import { Variants } from "framer-motion";

interface BlurTextProps {
  wordContainerVariants: Variants;
  wordVariants: Variants;
  example2: string;
}

const BlurText: React.FC<BlurTextProps> = ({ wordVariants, wordContainerVariants, example2 }) => {
  return (
    <motion.p
      className="relative text-2xl text-center font-medium"
      variants={wordContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {example2.split(" ").map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};
`;

export const Usage = `
import BlurText from "./BlurText";


<BlurText
 wordContainerVariants={wordContainerVariants}
 example2="This is so cool"
 wordVariants={wordVariants}  />`;
