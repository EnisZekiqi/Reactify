export const example2 = 'Blur Text'



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
    }
}



export const codeSnippet2 = `

const example2 = 'Blur Text'

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

<motion.p className="relative text-2xl ...">
  {example2.split(" ").map((word, index) => (
    <motion.span key={index}>{word}</motion.span>
  ))}
</motion.p>
`;