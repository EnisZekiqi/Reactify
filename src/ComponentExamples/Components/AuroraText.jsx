import { motion } from "framer-motion";
import { example8 } from "../javascript/AuroraLogic";

const AuroraText = () => {
    return ( 
        <div>
            <span className="relative inline-block text-white group">
                <span className="animate-aurora relative text-3xl sm:text-5xl rounded-2xl group:transition-all duration-150 px-2 z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:animate-aurora bg-gradient-to-r from-pink-500 via-blue-500 to-green-400">
                    {example8}
                </span>
            </span>
        </div>
     );
}
 
export default AuroraText;