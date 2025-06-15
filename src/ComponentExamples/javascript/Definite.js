export const codeSnippet19 = `
import { motion } from "framer-motion";
import { useState } from "react";

const DefiniteCard = () => {
  const [changeDefinite, setChangeDefinite] = useState(false);

  return (
    <motion.div
      initial={{  opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8,delay:0.2 } }}
      onMouseEnter={() => setChangeDefinite(true)}
      onMouseLeave={() => setChangeDefinite(false)}
      className="bg-black hover:bg-white transition-all duration-300 rounded-3xl p-1.5 w-[230px] h-[230px]  sm:w-[350px] sm:h-[350px] overflow-hidden relative"
    >
      <div
        className={defniniteCard absolute inset-0 z-0 transition-all duration-300}
        style={{
          height: changeDefinite ? '85%' : '100%',
          top: changeDefinite ? '-4px' : '0',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 45%, transparent 95%)',
          maskImage: 'linear-gradient(to bottom, black 45%, transparent 95%)',
          maskRepeat: 'no-repeat',
          maskSize: '100% 100%',
          backgroundImage:
            'url(https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '16px',
        }}
      />

      <div
        className={relative z-10 flex items-center justify-between w-full px-3 h-full transition-all duration-300 {
          changeDefinite ? 'text-black' : 'text-white'
        }}
      >
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0 }}
          className="text-md font-medium mt-[85%] flex flex-col items-start transition-all duration-300"
        >
          Dolomites{" "}
          <span
            className={font-light   {
              changeDefinite
                ? 'text-[rgba(0,0,0,0.6)]'
                : 'text-[rgba(255,255,255,0.6)]'
            }} //Add '' to className
          >
            Italy
          </span>
        </motion.p>
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0 }}
          className={text-md font-medium mt-[85%] rounded-full p-2 cursor-pointer {
            changeDefinite ? 'bg-[rgba(0,216,255,0.6)]' : 'bg-[#34343480]'
          }} // Add '' to className
        >
          Directions
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DefiniteCard;



`;
export const codeSnippet19TS = `
import { motion } from "framer-motion";
import { useState } from "react";

const DefiniteCard: React.FC = () => {
  const [changeDefinite, setChangeDefinite] = useState<boolean>(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.2 } }}
      onMouseEnter={() => setChangeDefinite(true)}
      onMouseLeave={() => setChangeDefinite(false)}
      className="bg-black hover:bg-white transition-all duration-300 rounded-3xl p-1.5 w-[230px] h-[230px] sm:w-[350px] sm:h-[350px] overflow-hidden relative"
    >
      <div
        className="defniniteCard absolute inset-0 z-0 transition-all duration-300"
        style={{
          height: changeDefinite ? "85%" : "100%",
          top: changeDefinite ? "-4px" : "0",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 45%, transparent 95%)",
          maskImage: "linear-gradient(to bottom, black 45%, transparent 95%)",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
          backgroundImage:
            "url(https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "16px",
        }}
      />

      <div
        className={relative z-10 flex items-center justify-between w-full px-3 h-full transition-all duration-300 {
          changeDefinite ? "text-black" : "text-white"
        }}  //Add '' to className
      >
        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0 }}
          className="text-md font-medium mt-[85%] flex flex-col items-start transition-all duration-300"
        >
          Dolomites{" "}
          <span
            className={font-light {
              changeDefinite
                ? "text-[rgba(0,0,0,0.6)]"
                : "text-[rgba(255,255,255,0.6)]"
            }} //Add '' to className
          >
            Italy
          </span>
        </motion.p>

        <motion.p
          initial={{ y: -20, opacity: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, delay: 0 }}
          className={text-md font-medium mt-[85%] rounded-full p-2 cursor-pointer {
            changeDefinite ? "bg-[rgba(0,216,255,0.6)]" : "bg-[#34343480]"
          }} //Add '' to className
        >
          Directions
        </motion.p>
      </div>
    </motion.div>
  );
};

export default DefiniteCard;

`;

export const Usage = `

import DefiniteCard from "./DefiniteCard";


<DefiniteCard/>
`;
