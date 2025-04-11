export const example1 = "Hello World!";

export const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const codeSnippet = `
const example1 = "Hello World!";

const letterVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

{example1.split("").map((char, index) => (
  <motion.span className="inline-block" key={index} variants={letterVariants}>
    {char === " " ? "\\u00A0" : char}
  </motion.span>
))}
`;