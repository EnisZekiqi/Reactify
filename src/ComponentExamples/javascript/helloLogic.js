export const example1 = "Hello World!";

export const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const codeSnippet = `

const  SimpleText = ({containerVariants, letterVariants, example1}) =>{

      return (
      <motion.p className="relative text-2xl text-center font-medium"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}>

        {example1.split("").map((char, index) =>
          <motion.span className="inline-block "
          key={index}
          variants={letterVariants}>
                {char === " " ? "\u00A0" : char}
            </motion.span>)}
        
      </motion.p>
      );
    }
`;

export const Animations = `

const containerVariants = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.5 * i },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

`

export const Usage = `
import SimpleText from "./SimpleText";


<SimpleText
 containerVariants={containerVariants}
 example1="Hello World!"
 letterVariants={letterVariants}  />
`