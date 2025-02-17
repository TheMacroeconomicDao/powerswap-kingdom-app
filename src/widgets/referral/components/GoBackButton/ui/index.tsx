'use client';

import GoBack from './assets/go-back.svg';
import { setTab } from '@/entities';

export const GoBackButton = () => {
  const handleClick = () => {
    setTab('none');
  };

  return (
    <button
      className="transition-transform duration-75 ease-in-out active:scale-95"
      onClick={handleClick}
    >
      <GoBack />
    </button>
  );
};
