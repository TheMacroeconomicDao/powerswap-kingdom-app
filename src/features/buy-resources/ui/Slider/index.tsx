'use client';

import { useUnit } from 'effector-react';
import { buyResourcesModelInputs, buyResourcesModelChosenResource } from '../../model';

import cls from './styles/sliderInput.module.css';
export const ResourceBuySlider = () => {
  const buyResourceAmount = useUnit(buyResourcesModelInputs.$buyResourceAmount);
  const setResourceBuyAmount = useUnit(buyResourcesModelInputs.setResourceBuyAmount);
  const maxBuyAmount = useUnit(buyResourcesModelChosenResource.$chosenResourceBuyMax);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setResourceBuyAmount(parseInt(e.target.value));
  };

  return (
    <div className="mx-auto min-h-fit w-full">
      <input
        className={cls.slider}
        onInput={handleInput}
        type="range"
        min={0}
        max={maxBuyAmount}
        disabled={!maxBuyAmount}
        value={buyResourceAmount}
        style={{
          appearance: 'none',
          WebkitAppearance: 'none',
        }}
      />
    </div>
  );
};
