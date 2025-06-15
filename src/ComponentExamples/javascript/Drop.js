import {
  CiCamera,
  CiAlarmOn,
  CiLocationOn,
  CiImageOn,
  CiAlarmOff,
  CiGps,
} from "react-icons/ci";

export const menuItems = {
  Camera: [
    {
      title: "Gallery",
      desc: "Check all the images you have taken",
    },
    {
      title: "Camera",
      desc: "Take selfies & photos whenever you are",
    },
  ],
  Alarm: [
    {
      title: "Alarm",
      desc: "Set up Alarm at anytime you need it",
    },
    {
      title: "Disable",
      desc: "Disable all Alarms you have set up ",
    },
  ],
  Location: [
    {
      title: "Current Location",
      desc: "See where you are right now",
    },
    {
      title: "Set up Location",
      desc: "Choose where you want to travel",
    },
  ],
};

export const codeSnippet20 = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiCamera, CiAlarmOn, CiLocationOn, CiImageOn,CiAlarmOff,CiGps   } from "react-icons/ci";

const menuItems = {
  Camera: [
    {
      icon: <CiImageOn size={30} />,
      title: "Gallery",
      desc: "Check all the images you have taken",
    },
    {
      icon: <CiCamera size={30} />,
      title: "Camera",
      desc: "Take selfies & photos whenever you are",
    },
  ],
  Alarm: [
    {
      icon: <CiAlarmOn size={30} />,
      title: "Alarm",
      desc: "Set up Alarm at anytime you need it",
    },
    {
      icon: <CiAlarmOff size={30} />,
      title: "Disable",
      desc: "Disable all Alarms you have set up ",
    },
  ],
  Location: [
    {
      icon: <CiLocationOn size={30} />,
      title: "Current Location",
      desc: "See where you are right now",
    },
    {
      icon: <CiGps size={30} />,
      title: "Set up Location",
      desc: "Choose where you want to travel",
    },
  ],
};

const DropNav = () => {
  const [selectMenu, setSelectMenu] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <div className="w-full sm:w-full h-[90%] flex items-end justify-end pb-2 sm:pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        onMouseLeave={() => {
          setIsAnimating(true);
          setTimeout(() => {
            setSelectMenu("");
            setIsAnimating(false);
          }, 300); // delay to let animation exit
        }}
        className="dropnav rounded-2xl bg-[rgb(251,251,251,0.55)] border border-[#dde1e2] p-2 sm:p-4 flex flex-col items-center justify-center gap-4 w-[290px] sm:w-[350px]"
      >
        {/* Content wrapper — expands before content animates in */}
        <motion.div
          animate={{
            height: selectMenu ? "auto" : "0px",
          }}
          transition={{
            type: "spring",
            stiffness: 180,
            damping: 20,
          }}
          className="w-full overflow-hidden"
        >
          {/* Animate presence of content inside the height container */}
          <AnimatePresence mode="wait">
            {selectMenu && !isAnimating && (
              <motion.div
                key={selectMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.1,
                    duration: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { duration: 0.2 },
                }}
                className="w-full text-center pt-2"
              >
                <div className="flex flex-col gap-5 pb-1">
                  {menuItems[selectMenu]?.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 0.97,
                        background: "rgb(251,251,251,0.25)",
                      }}
                      className="flex items-center gap-2 text-black rounded-lg p-1"
                    >
                      {item.icon}
                      <div className="flex flex-col items-start gap-0">
                        {item.title}
                        <span className="text-xs font-light">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navbar */}
        <div
          style={{
            borderTop: selectMenu ? "1px solid #000" : "none",
            transition: "border-top 0.2s ease, padding 0.2s ease",
            paddingTop: selectMenu ? "12px" : "0",
          }}
          className="flex items-center justify-around w-full gap-4 -mt-4"
        >
          {["Camera", "Alarm", "Location"].map((item) => (
            <div
              key={item}
              onMouseEnter={() => {
                if (selectMenu !== item) {
                  setIsAnimating(true);
                  setSelectMenu("");
                  setTimeout(() => {
                    setSelectMenu(item);
                    setIsAnimating(false);
                  }, 250); // ensures exit transition finishes before re-enter
                }
              }}
              className={flex items-center gap-1 text-sm sm:text-base p-1 sm:p-1.5 rounded-xl transition-colors duration-300 cursor-pointer {
                selectMenu === item
                  ? "bg-[#181b1b] text-[#fbfbfb]"
                  : "bg-transparent text-[#000] hover:bg-[#181b1b] hover:text-[#fbfbfb]"
              }} //Add '' to className
            >
              {item === "Camera" && <CiCamera className="w-5 h-5 sm:w-6 sm:h-6" />}
              {item === "Alarm" && <CiAlarmOn className="w-5 h-5 sm:w-6 sm:h-6" />}
              {item === "Location" && <CiLocationOn className="w-5 h-5 sm:w-6 sm:h-6" />}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DropNav;

`;
export const codeSnippet20TS = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CiCamera,
  CiAlarmOn,
  CiLocationOn,
  CiImageOn,
  CiAlarmOff,
  CiGps,
} from "react-icons/ci";
import type { ReactElement } from "react";

// Type for a single menu item
type MenuItem = {
  icon: ReactElement;
  title: string;
  desc: string;
};

// Full menu map type
type MenuItemsType = {
  [key: string]: MenuItem[];
};

const menuItems: MenuItemsType = {
  Camera: [
    {
      icon: <CiImageOn size={30} />,
      title: "Gallery",
      desc: "Check all the images you have taken",
    },
    {
      icon: <CiCamera size={30} />,
      title: "Camera",
      desc: "Take selfies & photos whenever you are",
    },
  ],
  Alarm: [
    {
      icon: <CiAlarmOn size={30} />,
      title: "Alarm",
      desc: "Set up Alarm at anytime you need it",
    },
    {
      icon: <CiAlarmOff size={30} />,
      title: "Disable",
      desc: "Disable all Alarms you have set up ",
    },
  ],
  Location: [
    {
      icon: <CiLocationOn size={30} />,
      title: "Current Location",
      desc: "See where you are right now",
    },
    {
      icon: <CiGps size={30} />,
      title: "Set up Location",
      desc: "Choose where you want to travel",
    },
  ],
};

const DropNav: React.FC = () => {
  const [selectMenu, setSelectMenu] = useState<string>("");
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  return (
    <div className="w-full sm:w-full h-[90%] flex items-end justify-end pb-2 sm:pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        onMouseLeave={() => {
          setIsAnimating(true);
          setTimeout(() => {
            setSelectMenu("");
            setIsAnimating(false);
          }, 300);
        }}
        className="dropnav rounded-2xl bg-[rgb(251,251,251,0.55)] border border-[#dde1e2] p-2 sm:p-4 flex flex-col items-center justify-center gap-4 w-[290px] sm:w-[350px]"
      >
        {/* Content Expansion */}
        <motion.div
          animate={{ height: selectMenu ? "auto" : "0px" }}
          transition={{ type: "spring", stiffness: 180, damping: 20 }}
          className="w-full overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {selectMenu && !isAnimating && (
              <motion.div
                key={selectMenu}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
                className="w-full text-center pt-2"
              >
                <div className="flex flex-col gap-5 pb-1">
                  {menuItems[selectMenu]?.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 0.97,
                        background: "rgb(251,251,251,0.25)",
                      }}
                      className="flex items-center gap-2 text-black rounded-lg p-1"
                    >
                      {item.icon}
                      <div className="flex flex-col items-start gap-0">
                        {item.title}
                        <span className="text-xs font-light">{item.desc}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Navigation Tabs */}
        <div
          style={{
            borderTop: selectMenu ? "1px solid #000" : "none",
            transition: "border-top 0.2s ease, padding 0.2s ease",
            paddingTop: selectMenu ? "12px" : "0",
          }}
          className="flex items-center justify-around w-full gap-4 -mt-4"
        >
          {["Camera", "Alarm", "Location"].map((item) => (
            <div
              key={item}
              onMouseEnter={() => {
                if (selectMenu !== item) {
                  setIsAnimating(true);
                  setSelectMenu("");
                  setTimeout(() => {
                    setSelectMenu(item);
                    setIsAnimating(false);
                  }, 250);
                }
              }}
              className={flex items-center gap-1 text-sm sm:text-base p-1 sm:p-1.5 rounded-xl transition-colors duration-300 cursor-pointer {
                selectMenu === item
                  ? "bg-[#181b1b] text-[#fbfbfb]"
                  : "bg-transparent text-[#000] hover:bg-[#181b1b] hover:text-[#fbfbfb]"
              }}
            >
              {item === "Camera" && (
                <CiCamera className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
              {item === "Alarm" && (
                <CiAlarmOn className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
              {item === "Location" && (
                <CiLocationOn className="w-5 h-5 sm:w-6 sm:h-6" />
              )}
              <span>{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default DropNav;

`;

export const Usage = `

import DropNav from "./DropNav";


<DropNav
    menuItems = {
    Camera: [
      {
        title: "Gallery",
        desc: "Check all the images you have taken",
      },
      {
        title: "Camera",
        desc: "Take selfies & photos whenever you are",
      },
    ],
    Alarm: [
      {
        title: "Alarm",
        desc: "Set up Alarm at anytime you need it",
      },
      {
        title: "Disable",
        desc: "Disable all Alarms you have set up ",
      },
    ],
    Location: [
      {
        title: "Current Location",
        desc: "See where you are right now",
      },
      {
        
        title: "Set up Location",
        desc: "Choose where you want to travel",
      },
    ],
  }
    />
`;
