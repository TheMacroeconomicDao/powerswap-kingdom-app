'use client';

import GoBack from './assets/go-back.svg';
import { setTab } from '@/entities';
import { setRefTab } from '@/entities';

export const GoBackButton = () => {
  const handleClick = () => {
    setTab('none');
    setRefTab('none')
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
