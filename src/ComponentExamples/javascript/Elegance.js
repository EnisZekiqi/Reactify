export const codeSnippet22 = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCloud, HiOutlineOfficeBuilding, HiOutlineBookOpen, HiOutlineDesktopComputer } from "react-icons/hi";

const Elegance = () => {
  const [selectedTab, setSelectedTab] = useState(null);

  const TABS = [
    { id: 'Office', icon: <HiOutlineOfficeBuilding  size={20}/> },
    { id: 'School', icon: <HiOutlineBookOpen  size={20}/> },
    { id: 'Tech', icon: <HiOutlineDesktopComputer  size={20}/> },
    { id: 'Cloud', icon: <HiOutlineCloud  size={20}/> }
  ];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        layout
        className="flex items-center gap-6"
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      >
        {TABS.map((tab) => (
          <motion.div
            key={tab.id}
            layout
            onMouseEnter={() => setSelectedTab(tab.id)}
            onMouseLeave={() => setSelectedTab(null)}
            animate={{
              width: selectedTab === tab.id ? 100 : 40,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#232829] rounded-2xl px-2 py-2 text-[#d6dbdc] flex items-center gap-2 border border-[#3b4345] overflow-hidden"
          >
            <span>{tab.icon}</span>
                <AnimatePresence>
              {selectedTab === tab.id && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {tab.id}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Elegance;

`;
export const codeSnippet22TS = `
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineCloud,
  HiOutlineOfficeBuilding,
  HiOutlineBookOpen,
  HiOutlineDesktopComputer,
} from "react-icons/hi";

// Define the type for a Tab item
type Tab = {
  id: string;
  icon: JSX.Element;
};

const Elegance: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  const TABS: Tab[] = [
    { id: "Office", icon: <HiOutlineOfficeBuilding size={20} /> },
    { id: "School", icon: <HiOutlineBookOpen size={20} /> },
    { id: "Tech", icon: <HiOutlineDesktopComputer size={20} /> },
    { id: "Cloud", icon: <HiOutlineCloud size={20} /> },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <motion.div
        layout
        className="flex items-center gap-6"
        transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
      >
        {TABS.map((tab) => (
          <motion.div
            key={tab.id}
            layout
            onMouseEnter={() => setSelectedTab(tab.id)}
            onMouseLeave={() => setSelectedTab(null)}
            animate={{
              width: selectedTab === tab.id ? 100 : 40,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="bg-[#232829] rounded-2xl px-2 py-2 text-[#d6dbdc] flex items-center gap-2 border border-[#3b4345] overflow-hidden"
          >
            <span>{tab.icon}</span>
            <AnimatePresence>
              {selectedTab === tab.id && (
                <motion.span
                  key="label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="whitespace-nowrap"
                >
                  {tab.id}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Elegance;

`;

export const Usage = `

import Elegance from "./Elegance";


<Elegance
  TABS = [
    { id: 'Office', icon: <HiOutlineOfficeBuilding  size={20}/> },
    { id: 'School', icon: <HiOutlineBookOpen  size={20}/> },
    { id: 'Tech', icon: <HiOutlineDesktopComputer  size={20}/> },
    { id: 'Cloud', icon: <HiOutlineCloud  size={20}/> }
  ];
/>
`;
