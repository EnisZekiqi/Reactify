export const example10 = ' Melting'

export const CSS1 = `

@keyframes drip {
  0% {
    transform: translateY(0) scaleY(1);
    opacity: 1;
  }
  100% {
    transform: translateY(20px) scaleY(2);
    opacity: 0;
  }
}

.animate-drip {
  opacity: 0;
  animation: drip 1.5s linear infinite;
}

`

export const codeSnippet10 = `

const droplets = [
  { left: "0", delay: "delay-0" },
  { left: "1rem", delay: "delay-100" },
  { left: "2rem", delay: "delay-200" },
  { left: "3rem", delay: "delay-300" },
  { left: "4rem", delay: "delay-400" },
  { left: "5rem", delay: "delay-500" },
  { left: "6rem", delay: "delay-600" },
  { left: "7rem", delay: "delay-700" },

];

const Drip = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <motion.span
        className="relative group inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 1 }}
        animate={{ scale: hovered ? 0.97 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span
          animate={{ y: hovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="text-white text-3xl sm:text-5xl inline-block"
        >
          {example10}
        </motion.span>

        {/* Underline */}
        <span className="absolute left-0 top-full w-full h-1 bg-white"></span>

        {/* Droplets */}
        {droplets.map((drop, i) => (
          <span
            key={i}
            className={animate-drip {hovered ? "pause" : ""} absolute top-full w-1.5 h-1.5 bg-white rounded-full} // add ''  & $ inside {} in the className 
            style={{ left: drop.left, animationDelay: {i * 0.2}s }} // add '' & $ inside {} in the style 
          />
        ))}
      </motion.span>
    </div>
  );
};

 
`;
export const codeSnippet10TS = `

import { motion } from "framer-motion";
import { useState } from "react";
import { example10 } from "../javascript/MeltingLogic";

interface StreamText {
  example10: string;
}

const DripText: React.FC<ScrollTextProps> = ({example10}) => {
    
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <motion.span
        className="relative group inline-block"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        initial={{ scale: 1 }}
        animate={{ scale: hovered ? 0.97 : 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.span
          animate={{ y: hovered ? 5 : 0 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="text-white text-3xl sm:text-5xl inline-block"
        >
          {example10}
        </motion.span>

        {/* Underline */}
        <span className="absolute left-0 top-full w-full h-1 bg-white"></span>

        {/* Droplets */}
        {droplets.map((drop, i) => (
          <span
            key={i}
            className={animate-drip {hovered ? "pause" : ""} absolute top-full w-1.5 h-1.5 bg-white rounded-full} // add '' & $ inside {}  inside the className 
            style={{ left: drop.left, animationDelay: {i * 0.2}s }} // add '' & $ inside {} in the style 
          />
        ))}
      </motion.span>
    </div>
  );
};

`


export const Usage = `
import DripText from "./DripText";


<DripText example10="Melting"/>
`