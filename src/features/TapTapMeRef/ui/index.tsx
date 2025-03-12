'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TapTapMeProps {
    onTap: number;
}

export const TapTapMeRef = ({ onTap }: TapTapMeProps) => {
  const [texts, setTexts] = useState<{ text: string; x: string; y: string; id: number }[]>([]);
  const [id, setId] = useState(0);

  const getRandomPosition = () => {
    const getRandomEdgeValue = () =>
      Math.random() < 0.5 ? Math.random() * 30 : Math.random() * 30 + 70;
  
    return { randomX: getRandomEdgeValue(), randomY: getRandomEdgeValue() };
  };

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

    const { randomX, randomY } = getRandomPosition();

    setTexts((prevTexts) => [
      ...prevTexts,
      {
        text: "+100", 
        x: `${randomX}%`,
        y: `${randomY}%`,
        id: id,
      },
    ]);

    setId((prevId) => prevId + 1);
  }, [onTap]);

  return (
    <div className='absolute z-[-1] w-[60%] ml-[-40px] h-[160px] top-0'>
      {(onTap === 0 ? texts.slice(1) : texts).map((showText, index) => (
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
            position: 'absolute',
            left: showText.x,
            top: showText.y,
            pointerEvents: 'none',
            color: 'white',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          {showText.text}
        </motion.div>
      ))}
    </div>
  );
};
