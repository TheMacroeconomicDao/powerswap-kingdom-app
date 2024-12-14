'use client';

import { useEffect } from 'react';

import { useUnit } from 'effector-react';
import { scaleModel } from './model';

export const Scaler = ({ children, height }: { children: React.ReactNode; height: number }) => {
  const appScale = useUnit(scaleModel.$appScale);
  const setAppScale = useUnit(scaleModel.setAppScale);

  useEffect(() => {
    const updateScale = () => {
      const viewportHeight = window.innerHeight;
      const baseHeight = height;
      const newScale = Math.min(
        viewportHeight / baseHeight,
        parseInt(`${process.env.NEXT_PUBLIC_MAX_APP_SCALING ?? '1'}`)
      );
      setAppScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);

    return () => window.removeEventListener('resize', updateScale);
  }, [height, setAppScale]);

  return (
    <div
      className="origin-top"
      style={{
        scale: appScale,
      }}
    >
      {children}
    </div>
  );
};
