'use client'
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface TapTapMeProps {
    onTap: () => void;
}

export const TapTapMe = ({ onTap }: TapTapMeProps) => {
  const [texts, setTexts] = useState<{ text: string; x: string; y: string; id: number }[]>([]);
  const [id, setId] = useState(0);
  
    const handleClick = () => {
        const randomX = Math.random() * 70 + 15;
        const randomY = Math.random() * 70 + 15; 
    
        setTexts((prevTexts) => [
          ...prevTexts,
          { text: "tap tap me!", x: `${randomX}%`, y: `${randomY}%`, id: id }
        ]);
    
        setId((prevId) => prevId + 1);
      };
    
      useEffect(() => {
        if (texts.length > 0) {
          const lastText = texts[texts.length - 1]; 
    
          const timer = setTimeout(() => {
            setTexts((prevTexts) =>
              prevTexts.filter((text) => text.id !== lastText.id) 
            );
          }, 1500);
    
          return () => clearTimeout(timer);
        } 
      }, [texts]);

    useEffect(() => {
        handleClick();
    }, [onTap]);

    return(
        <div className='absolute z-[-1] w-full h-[160px]'>
            {texts.map((showText, index) => (
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