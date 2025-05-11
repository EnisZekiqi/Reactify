

export const card = [
    {
        name: 'Ella Marie', description: 'Creative Director', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746221984/images8_c4eus0.jpg'
        
    },
     {
        name: 'Sam Smith', description: 'Youtuber & Content Creator', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746222025/images_5_q74apj.jpg'
        
    },
     {
        name: 'Ella Marie', description: 'Creative Director', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746222033/images_9_rgjjwh.jpg'
        
    }
    
]


export const codeSnippet17 = `
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { card } from "../javascript/LoopCard";

const LoopCard = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentCard = card[currentIndex];

    return (
        <div className="cardImg relative w-[230px] h-[230px] sm:w-[350px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg">
           
            <AnimatePresence mode="wait">
                <motion.img
                    key={bg-{currentIndex}}
                    src={currentCard.img}
                    alt="Background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute -top-30 sm:-top-50 left-0 w-full h-full object-cover blur-md scale-110 z-0"
                />
            </AnimatePresence>

            {/* 📦 Foreground Content with Slide Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                   
                    className="relative z-10 p-4 text-white bg-[#23282944] border border-[#343434] h-full flex flex-col items-start gap-2 justify-center backdrop-blur-sm rounded-2xl overflow-hidden"
                >
                  <AnimatePresence mode="wait">
  <motion.div
    key={currentIndex}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5,staggerDelay:0.4 }}
    className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-2 justify-center p-4"
  >
    <img
      src={currentCard.img}
      alt={currentCard.name}
      className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white"
    />
    <h2 className="mt-2 font-bold text-lg">{currentCard.name}</h2>
    <p className="text-sm text-gray-200">{currentCard.description}</p>
    <div className="mt-2 flex flex-wrap justify-start gap-1.5">
      {currentCard.hobbies.map((hobby, index) => (
        <span
          key={index}
          className="text-xs px-2 py-1 bg-white/20 border border-white/30 text-white rounded-full"
        >
          {hobby}
        </span>
      ))}
    </div>
  </motion.div>
</AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default LoopCard;

`
export const codeSnippet17TS = `
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { card } from "../javascript/LoopCard";

interface CardItem {
  img: string;
  name: string;
  description: string;
  hobbies: string[];
}

const LoopCard: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % card.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentCard = card[currentIndex] as CardItem;

  return (
    <div className="cardImg relative w-[230px] h-[230px] sm:w-[350px] sm:h-[300px] rounded-2xl overflow-hidden shadow-lg">
      <AnimatePresence mode="wait">
        <motion.img
          key={bg-{currentIndex}}
          src={currentCard.img}
          alt="Background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute -top-30 sm:-top-50 left-0 w-full h-full object-cover blur-md scale-110 z-0"
        />
      </AnimatePresence>

      {/* 📦 Foreground Content with Slide Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          className="relative z-10 p-4 text-white bg-[#23282944] border border-[#343434] h-full flex flex-col items-start gap-2 justify-center backdrop-blur-sm rounded-2xl overflow-hidden"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, staggerDelay: 0.4 }}
              className="absolute top-0 left-0 w-full h-full flex flex-col items-start gap-2 justify-center p-4"
            >
              <img
                src={currentCard.img}
                alt={currentCard.name}
                className="w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-white"
              />
              <h2 className="mt-2 font-bold text-lg">{currentCard.name}</h2>
              <p className="text-sm text-gray-200">{currentCard.description}</p>
              <div className="mt-2 flex flex-wrap justify-start gap-1.5">
                {currentCard.hobbies.map((hobby, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 bg-white/20 border border-white/30 text-white rounded-full"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LoopCard;


`

export const Usage = `

import LoopCard from "./LoopCard";


<LoopCard
card = [
    {
        name: 'Ella Marie', description: 'Creative Director', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746221984/images8_c4eus0.jpg'
    },
     {
        name: 'Sam Smith', description: 'Youtuber & Content Creator', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746222025/images_5_q74apj.jpg'
    },
     {
        name: 'Ella Marie', description: 'Creative Director', hobbies: ['Museums', 'Book Club', 'Filming', '+6 Hobbies'],img:'https://res.cloudinary.com/datm8nslc/image/upload/v1746222033/images_9_rgjjwh.jpg'
    }

]
/>
`