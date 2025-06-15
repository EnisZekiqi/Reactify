import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { button3 } from "../javascript/SliderLogic";

const SliderButton = () => {
  const [selectMode, setSelectMode] = useState("Free");
  const [selectDay, setSelectDay] = useState("Annual");

  const filteredButtons = button3.filter(
    (btn) => btn !== "Free" && btn !== "Premium",
  );

  return (
    <motion.div className="relative flex items-center justify-center shadow-2xl gap-24 cursor-pointer rounded-full bg-white text-black p-2.5 w-[280px]  sm:w-[300px] h-[60px] text-lg font-semibold">
      <span
        style={{
          color: selectMode === "Free" ? "#fff" : "#000",
          transition: "color 1s easeInOut",
          zIndex: 100,
        }}
        onClick={() => setSelectMode("Free")}
      >
        {button3[0]}
      </span>

      <AnimatePresence>
        <span
          onClick={() => setSelectMode("Premium")}
          className="flex flex-col items-center text-center"
          style={{
            color: selectMode === "Premium" ? "#fff" : "#000",
            transition: "color 1s easeInOut",
          }}
        >
          {selectMode !== "Premium" && (
            <motion.p
              key="premium-label"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
              exit={{ opacity: 0, scale: 0, transition: { duration: 0.5 } }}
              className="ml-4"
            >
              {button3[1]}
            </motion.p>
          )}

          <div className="relative flex items-center text-xs gap-8 font-light -mt-0 -mr-4 w-full justify-center">
            {selectMode === "Premium" && (
              <motion.span
                layout
                transition={{ type: "spring", stiffness: 250, damping: 20 }}
                className="absolute rounded-full bg-white z-10 -mt-4"
                style={{
                  width: "70px",
                  height: "50px",
                  top: 0,
                  left: selectDay === "Monthly" ? "-16%" : "50%",
                }}
              />
            )}

            {filteredButtons.map((btn, i) => (
              <span
                key={i}
                onClick={() => {
                  if (selectMode === "Premium") {
                    setSelectDay(btn);
                  }
                }}
                className={`relative z-20 cursor-pointer ${
                  selectDay === btn || selectMode !== "Premium"
                    ? "font-medium text-black"
                    : "text-white"
                }`}
              >
                {btn}
              </span>
            ))}
          </div>
        </span>
      </AnimatePresence>

      {/* Main Free/Premium switch background */}
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className="absolute rounded-full bg-black z-0 ml-0.5 sm:ml-0"
        style={{
          width: "50%",
          height: selectMode === "Premium" ? "60px" : "60px",
          left: selectMode === "Free" ? "-1%" : "51%",
        }}
      />
    </motion.div>
  );
};

export default SliderButton;
