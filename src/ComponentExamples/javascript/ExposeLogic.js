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