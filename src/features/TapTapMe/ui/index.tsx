'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { $kingdom } from '@/entities';
import { useUnit } from 'effector-react';

interface TapTapMeProps {
    onTap: number;
}

export const TapTapMe = ({ onTap }: TapTapMeProps) => {
  const [texts, setTexts] = useState<{ text: string; x: string; y: string; id: number }[]>([]);
  const [id, setId] = useState(0);
  const [isTapTo, setIsTapTo] = useState(true); // Чередуем состояния
  const kingdom = useUnit($kingdom);

  const kingdomsTapTexts = {
    crypto: "mine!",
    heat: "generate!",
    energy: "produce!",
    food: "grow!",
  };

  const kingdomTapText = kingdom ? kingdomsTapTexts[kingdom] : "tap";

    useEffect(() => {
      if (texts.length > 0) {
        const timer = setTimeout(() => {
          setTexts([]);
        }, 1500);
        return () => clearTimeout(timer);
      } 
    }, [texts]);

    useEffect(() => {
      if (!onTap) return; 
    
      const randomX = Math.random() * 70 + 15;
      const randomY = Math.random() * 70 + 15;
    
      setTexts((prevTexts) => [
        ...prevTexts,
        {
          text: isTapTo ? "tap to" : kingdomTapText, // Чередуем текст
          x: `${randomX}%`,
          y: `${randomY}%`,
          id: id,
        },
      ]);
    
      setId((prevId) => prevId + 1);
      setIsTapTo((prev) => !prev); // Инвертируем флаг
    }, [onTap]);
    
    return(
      <div className='absolute z-[-1] w-full h-[160px]'>
          {(onTap === 1 ? texts.slice(1) : texts).map((showText, index) => (
            <motion.div
            key={`tap-tap-me-${index}`}
            initial={{ opacity: 1, y: 20 }}
            animate={{
                opacity: 0,
                y: -20,
                transition: { duration: 1.5, ease: 'easeOut' },
            }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.5 } }}
            style={{
                opacity:'1',
                position: 'absolute',
                left: showText.x,
                top: showText.y,
                pointerEvents: 'none',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
            }}
            >
            {showText.text}
            </motion.div>
          ))}
      </div>
    )
}