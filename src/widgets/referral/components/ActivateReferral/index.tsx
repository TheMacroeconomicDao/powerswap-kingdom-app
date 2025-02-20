'use client'
import { setLastOpenedPage } from "@/entities";
import { useUnit } from "effector-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const ActivateReferral = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [glitch, setGlitch] = useState(false);
    const router = useRouter();
    const setLastPage = useUnit(setLastOpenedPage);
  
    const handleClick = () => {
      router.push('/game');
      setLastPage('game');
    };
    
    useEffect(() => {
        if (!isVisible) {
          const interval = setInterval(() => {
            setGlitch((prev) => !prev);
          }, 1000);
    
          return () => clearInterval(interval);
        }
    }, [isVisible]);
      
    const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main.blockedPage',
    });

    return(
        <>
            <button onClick={handleClick} className='hover:cursor-auto absolute backdrop-blur-lg z-50 w-full h-full'> 
            </button>
            <motion.div
                key="activateui"
                initial={{ opacity: 0, scale: 0.95, translateY: 100 }}
                animate={{ opacity: 1, scale: 1, translateY: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='z-50 absolute top-[30%] h-[300px] flex flex-col justify-around items-center bg-black border p-10'>
                <h6 className='text-[#DE2B2B] justify-self-center text-[18px]'>{t('title')}</h6>
                <h5 className='text-[18px]'>{t('description')} </h5>
                <div className="h-5">
                    <AnimatePresence mode="wait">
                        {isVisible ? (
                            <motion.button
                            key="button"
                            className="bg-[#469C4E] border-r text-2xl p-2 text-[14px] px-4"
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => setIsVisible(false)}
                            >
                            {t('button')}
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
                                className="text-[#ffe350] text-[24px] font-bold"
                                >
                                {t('commingSoon')}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </>
    )
}