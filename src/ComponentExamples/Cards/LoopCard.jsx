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
        <div className="relative w-[300px] h-[300px] rounded-2xl overflow-hidden bg-[rgba(0,0,0,0.5)] shadow-lg">
            {/* 🔁 Background Image with Fade Transition */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={`bg-${currentIndex}`}
                    src={currentCard.img}
                    alt="Background"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full object-cover blur-md scale-110 z-0"
                />
            </AnimatePresence>

            {/* 📦 Foreground Content with Slide Transition */}
            <AnimatePresence mode="wait">
                <motion.div
                 
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="relative z-10 p-4 text-white bg-black/40 h-full flex flex-col justify-center items-center backdrop-blur-sm rounded-2xl"
                >
                    <img
                        src={currentCard.img}
                        alt={currentCard.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white"
                    />
                    <h2 className="mt-2 font-bold text-lg">{currentCard.name}</h2>
                    <p className="text-sm text-gray-200">{currentCard.description}</p>
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
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
        </div>
    );
};

export default LoopCard;
