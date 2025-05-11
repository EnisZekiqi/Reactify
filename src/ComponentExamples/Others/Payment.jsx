import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CiWallet ,CiCircleRemove } from "react-icons/ci";

const Payment = () => {

    const [addCash, setAddCash] = useState(false)
    
    const [choosePayment, setChoosePayment] = useState('')

    return ( 
        <div className={`${addCash ? 'bg-white w-[260px] sm:w-fit rounded-3xl transition-all duration-500':'bg-transparent'}`}>
            <div className={`${addCash ? 'bg-transparent':'bg-white'} flex items-center  gap-10 justify-around text-black p-2 rounded-full`}>
                <div className="flex items-center gap-2">
                    <CiWallet size={23}/>
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-light text-[0,0,0,0.5]">Wallet</span>
                        <p className="text-lg font-semibold">$34.00</p>
                    </div>
                </div>
                <motion.div
                    initial={{ x: 0, y: 0 }}
                    animate={{
                    x: addCash ? -140 : 0,
                    y: addCash ? 230 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}             
                onClick={()=>setAddCash(true)}
                    className="bg-black text-white rounded-full text-xs sm:text-lg w-22 sm:w-fit p-3 cursor-pointer z-50"> Add Cash</motion.div>
                {addCash && <motion.div
                    initial={{opacity: 0 }}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}
                onClick={()=>setAddCash(false)}
                    className=" text-black rounded-full p-0 sm:p-3 cursor-pointer"><CiCircleRemove size={25}/></motion.div>}
            </div>
            {addCash && 
                <div className="flex flex-col text-black z-[500]">
                    <span className="text-sm sm:text-md font-semibold pl-2 mt-2">Payment Mode</span>
                                        <div className="relative space-y-4 mt-4 mx-2">
                    {['card1', 'card2'].map((card, index) => (
                        <div
                        key={card}
                        onClick={() => setChoosePayment(card)}
                        className="relative z-10 bg-white rounded-2xl px-3 py-2 flex justify-between items-center cursor-pointer"
                        >
                        <div className="flex items-center text-sm sm:text-md">
                            <span
                            className={`rounded-full ${
                                choosePayment === card ? 'bg-black' : 'bg-white'
                            } border border-black p-1.5 sm:p-2`}
                            ></span>
                            <p className="pl-2">*********6756</p>
                        </div>
                        <span className="text-sm sm:text-md">VISA</span>

                        {choosePayment === card && (
                            <motion.div
                            layoutId="highlight"
                            className="absolute top-0 left-0 w-full h-full rounded-2xl border border-black z-[-1]"
                            transition={{ type: 'spring', stiffness: 250, damping: 20 }}
                            />
                        )}
                        </div>
                    ))}
                    </div>
                    <div className="opacity-0 w-22 h-23 sm:h-23"></div>
            </div>
            }
        </div>
     );
}
 
export default Payment;