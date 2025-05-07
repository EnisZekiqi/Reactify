import { motion,AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CiWallet } from "react-icons/ci";

const Payment = () => {

    const [addCash, setAddCash] = useState(false)
    
    const [choosePayment, setChoosePayment] = useState('')

    return ( 
        <div className={`${addCash ? 'bg-white rounded-3xl transition-all duration-500':'bg-transparent'}`}>
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
                    animate={{ x: addCash ? [10, -70, -140]:[0,0,0], y: addCash ? [30, 100, 230]:[0,0,0,] }}
                    transition={{duration:0.5}}
                onClick={()=>setAddCash(true)}
                    className="bg-black text-white rounded-full p-3 cursor-pointer">+ Add Cash</motion.div>
                {addCash && <motion.div
                    initial={{opacity: 0 }}
                    animate={{opacity:1}}
                    transition={{duration:0.5}}
                onClick={()=>setAddCash(false)}
                    className=" text-black rounded-full p-3 cursor-pointer">X</motion.div>}
            </div>
            {addCash && 
                <div className="flex flex-col text-black z-[500]">
                    <span className="text-md font-semibold pl-2 mt-2">Payment Mode</span>
                    <span
                        onClick={()=>setChoosePayment('card1')}                    
                        className={`flex items-center justify-between  ${choosePayment === 'card1' ? 'border border-black ' : 'border-none'}mx-2 rounded-2xl p-1`}>
                        <p className="flex items-center px-2 mt-1">
                            <span
                                className={`rounded-full ${choosePayment === 'card1' ? 'bg-black w-4.5 h-4.5' : 'bg-white'} border border-black p-2`}></span>
                                <p className="pl-2">*********6756</p>
                        </p>
                        VISA
                    </span>
                    <span
                      onClick={()=>setChoosePayment('card2')}
                        className={`flex items-center justify-between mt-4  ${choosePayment === 'card2' ? 'border border-black ' : 'border-none'}mx-2 rounded-2xl p-1`}>
                        <p className="flex items-center px-2 mt-1">
                            <span
                                className={`rounded-full ${choosePayment === 'card2' ? 'bg-black w-4.5 h-4.5' : 'bg-white'} border border-black p-2`}></span>
                                <p className="pl-2">*********6756</p>
                        </p>
                        VISA
                    </span>
                    <span>7</span>    <span className="opacity-0">7</span><span className="opacity-0">7</span>  <span className="opacity-0">7</span>   
            </div>
            }
        </div>
     );
}
 
export default Payment;