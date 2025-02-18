'use client'
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


export const ActivateReferral = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [glitch, setGlitch] = useState(false);

    useEffect(() => {
      const interval = setInterval(() => {
        setGlitch((prev) => !prev);
      }, 1000); 
  
      return () => clearInterval(interval);
    }, []);
    return(
        <AnimatePresence mode="wait">
            <div className='absolute backdrop-blur-lg z-50 w-full h-full flex items-center justify-center flex-col p-1'> 
                <motion.div
                    key="activateui"
                    initial={{ opacity: 0, scale: 0.95, translateY: 100 }}
                    animate={{ opacity: 1, scale: 1, translateY: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className='h-[369px] bg-black border p-5 sm:p-10'>
                    <h6 className='text-red-500 justify-self-center'>РЕФЕРАЛЬНАЯ ПРОГРАММА ЗАБЛОКИРОВАНА!</h6>
                    <h5 className='mt-16'>для разблокировки нажмите ниже</h5>
                        {isVisible ? (
                            <motion.button
                            key="button"
                            className="bg-green-500 border-r text-2xl p-2 active:opacity-65 mt-20 text-[18px] px-4"
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsVisible(false)}
                            >
                            Активировать
                            </motion.button>
                        ) : (
                            <motion.p
                                key="text"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    textShadow: glitch
                                    ? "-2px 2px 0px rgba(255, 0, 0, 0.8), 2px -2px 0px rgba(0, 255, 0, 0.8), -2px -2px 0px rgba(0, 0, 255, 0.8)"
                                    : "none",
                                    x: glitch ? [0, 3, -3, 0] : 0, 
                                }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                    duration: glitch ? 0.2 : 0.5,
                                    ease: "easeInOut",
                                }}
                                className="mt-20 text-[#ffe350] text-[24px] font-bold"
                                >
                                comming soon
                            </motion.p>
                        )}
                </motion.div>
            </div>
        </AnimatePresence>
    )
}