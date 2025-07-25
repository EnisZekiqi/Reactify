import { motion,useInView  } from "framer-motion";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { useRef } from "react";

const WhyUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false });
  

    return ( 
        <>
            <div className="flex flex-col h-full">
                <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: 0.3 },
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center justify-center"
                      >
                        <p className="rounded-full bg-[#1A1A1A] font-extralight uppercase text-xs p-2">
                          Why Reactify ?
                        </p>
                        <h1 className="text-[26px] font-medium text-[#fff] mt-3 text-center">
                          Built for the developers
                        </h1>
                        <span className="text-sm sm:text-md font-normal text-white opacity-50 w-full md:w-[30%] text-center mt-3">
                          Created with smooth animated & high performance animated components
                          with interactive gestures
                        </span>
                </motion.div>
               <motion.div
                    
                       class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[5%] justify-items-center  rounded-xl"
                     >
          <motion.div
  className="pc relative bg-transparent z-100 mask-b-from-80% mask-b-to-100%  rounded-xl flex flex-col justify-end p-4 w-full h-[400px] overflow-hidden group border border-[#343434]  divide-y md:divide-y-0 md:divide-x divide-[#343434]"
  whileHover="hover"
  initial="initial"
>
  {/* Hover background layer */}
  <div className="ccc absoluite inset-0 z-0" />

  {/* Canvas overlay */}
  <motion.canvas
    width="400"
    height="264"
    aria-label="Dithered version of image"
    className="absolute inset-0 w-full h-full object-cover image-rendering-pixelated opacity-0 z-0"
    variants={{
      initial: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.3 } },
    }}
  />

  {/* Radial gradient mask */}
  <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

  {/* Text */}
  <motion.div
    layout
    className="absolute bottom-4 left-4 right-4 z-20"
    variants={{
      initial: { y: 0 },
      hover: { y: -30, transition: { duration: 0.4 } },
    }}
  >
    <h1 className="text-2xl font-medium"> User Experience</h1>
    <motion.p
      className="text-white/60 text-sm mt-2"
      variants={{
        initial: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
      }}
    >
      We design smooth UI flows and intuitive layouts that keep users engaged.
                </motion.p>
                
  </motion.div>
</motion.div>


                      <motion.div
  className="champ relative bg-transparent z-100 mask-b-from-80% mask-b-to-100%  rounded-xl flex flex-col justify-end p-4 w-full h-[400px] overflow-hidden group border border-[#343434]  divide-y md:divide-y-0 md:divide-x divide-[#343434]"
  whileHover="hover"
  initial="initial"
>
  {/* Hover background layer */}
  <div className="ccc absoluite inset-0 z-0" />

  {/* Canvas overlay */}
  <motion.canvas
    width="400"
    height="264"
    aria-label="Dithered version of image"
    className="absolute inset-0 w-full h-full object-cover image-rendering-pixelated opacity-0 z-0"
    variants={{
      initial: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.3 } },
    }}
  />

  {/* Radial gradient mask */}
  <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

  {/* Text */}
  <motion.div
    layout
    className="absolute bottom-4 left-4 right-4 z-20"
    variants={{
      initial: { y: 0 },
      hover: { y: -30, transition: { duration: 0.4 } },
    }}
  >
    <h1 className="text-2xl font-medium">Improved SEO</h1>
    <motion.p
      className="text-white/60 text-sm mt-2"
      variants={{
        initial: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
      }}
    >
      Rank higher on Google.Stand out from competitors
    </motion.p>
  </motion.div>
</motion.div>
                        <motion.div
  className="fast relative bg-transparent z-100 mask-b-from-80% mask-b-to-100%  rounded-xl flex flex-col justify-end p-4 w-full h-[400px] overflow-hidden group border border-[#343434]  divide-y md:divide-y-0 md:divide-x divide-[#343434]"
  whileHover="hover"
  initial="initial"
>
  {/* Hover background layer */}
  <div className="ccc absoluite inset-0 z-0" />

  {/* Canvas overlay */}
  <motion.canvas
    width="400"
    height="264"
    aria-label="Dithered version of image"
    className="absolute inset-0 w-full h-full object-cover image-rendering-pixelated opacity-0 z-0"
    variants={{
      initial: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.3 } },
    }}
  />

  {/* Radial gradient mask */}
  <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

  {/* Text */}
  <motion.div
    layout
    className="absolute bottom-4 left-4 right-4 z-20"
    variants={{
      initial: { y: 0 },
      hover: { y: -30, transition: { duration: 0.4 } },
    }}
  >
    <h1 className="text-2xl font-medium">Increased conversion</h1>
    <motion.p
      className="text-white/60 text-sm mt-2"
      variants={{
        initial: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
      }}
    >
      Turn components into life . Boost your projects
    </motion.p>
  </motion.div>
</motion.div>
                         <motion.div
  className="save relative bg-transparent z-100 mask-b-from-80% mask-b-to-100%  rounded-xl flex flex-col justify-end p-4 w-full h-[400px] overflow-hidden group border border-[#343434]  divide-y md:divide-y-0 md:divide-x divide-[#343434]"
  whileHover="hover"
  initial="initial"
>
  {/* Hover background layer */}
  <div className="ccc absoluite inset-0 z-0" />

  {/* Canvas overlay */}
  <motion.canvas
    width="400"
    height="264"
    aria-label="Dithered version of image"
    className="absolute inset-0 w-full h-full object-cover image-rendering-pixelated opacity-0 z-0"
    variants={{
      initial: { opacity: 0 },
      hover: { opacity: 1, transition: { duration: 0.3 } },
    }}
  />

  {/* Radial gradient mask */}
  <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/40 to-transparent z-10 pointer-events-none" />

  {/* Text */}
  <motion.div
    layout
    className="absolute bottom-4 left-4 right-4 z-20"
    variants={{
      initial: { y: 0 },
      hover: { y: -30, transition: { duration: 0.4 } },
    }}
  >
    <h1 className="text-2xl font-medium">Cost Savings</h1>
    <motion.p
      className="text-white/60 text-sm mt-2"
      variants={{
        initial: { opacity: 0, y: 20 },
        hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.1 } },
      }}
    >
      Reduce your time by eliminating the code you write
    </motion.p>
  </motion.div>
</motion.div>
                     </motion.div>
        </div>
        </>
     );
}
 
export default WhyUs;