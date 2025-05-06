import { motion,AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";

const DropDownNav = () => {

    const [selected, setSelected] = useState(null)
    const [selectStyle, setSelectStyle] = useState('')
    
    const TABS = [
        {
            id: 'Product', content: <div className="grid grid-cols-3">
                <div className="flex items-center justify-start ml-10  gap-4">
                    <span className="font-semibold">Startup</span>
                    <span className="font-semibold">Scaleup </span>
                    <span className="font-semibold">Enterprise</span>
                </div>
            </div>
        },
        {
            id: 'Pricing', content: <div className="flex items-center justify-around gap-4">
            <div className="f border-r border-[#00d8ff] pr-5 flex flex-col gap-2 items-center text-sm font-medium text-[#9faaac] hover:text-[#fbfbfb] transition-all duration-200"><FiHome size={24}/> <p>Home</p></div>
            <div className="f border-r border-[#00d8ff] pr-5 flex flex-col gap-2 items-center text-sm font-medium text-[#9faaac] hover:text-[#fbfbfb] transition-all duration-200"><FiPieChart size={24}/><p>Chart1</p></div>
            <div className="f  pr-0 flex flex-col gap-2 items-center text-sm font-medium text-[#9faaac] hover:text-[#fbfbfb] transition-all duration-200"><FiBarChart2 size={24}/><p>Chart2</p></div>
        </div> },
        {
            id: 'Blog', content: <div className="flex items-center gap-3">
            <div className="flex flex-col gap-1 items-start"><h2>Text1</h2> <p className="text-start text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit velit hic accusamus vel doloribus optio sit eos eius sequi, assumenda totam commodi unde ipsa voluptatem sint repellat consectetur, officiis aspernatur!
            Culpa doloremque,</p></div>
            <div className="flex flex-col gap-1 items-start"> <h2>Text2</h2> <p className="text-start text-xs">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic molestias suscipit repellat doloremque quam. Deserunt quas neque excepturi minus harum tempora delectus est adipisci, itaque hic ipsam eius repudiandae porro.
           </p></div>
        </div> }
    ]


    return ( 
        <div className="flex h-fit w-full justify-center items-start -mt-40">
  <AnimatePresence mode="wait">
    <div className="relative flex items-center gap-6 text-md">
      {TABS.map((tab) => (
        <div
          key={tab.id}
          onMouseEnter={() => setSelected(tab.id)}
          onMouseLeave={() => setSelected(null)}
          className={`relative flex flex-col items-center`}
        >
          <div
            className={`${
              selected === tab.id ? 'bg-[#232829]' : ''
            } rounded-2xl p-2 flex items-center gap-1 transition-all duration-300`}
          >
            {tab.id}
            <motion.div
              animate={{ rotate: selected === tab.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <FiChevronDown />
            </motion.div>
          </div>

              {/* The dropdown cube & content */}
              
          <AnimatePresence>
            {selected === tab.id && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="absolute top-[48px] flex flex-col items-center z-10"
              >
                {/* Arrow Cube */}
                <div className="h-4 w-4 rotate-45 bg-[#232829] border-t border-[#3b4345] border-l mb-[-8px]" />

                {/* Dropdown content */}
                <div className="bg-[#232829] text-white p-4 rounded-xl border border-[#3b4345] min-w-[350px]  text-center">
                  {tab.content} 
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
                </div>
  </AnimatePresence>
</div>

     );
}
 
export default DropDownNav;