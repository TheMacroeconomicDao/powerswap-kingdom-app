import { formatNumber } from '@/shared/utils/formatNumber';

import styles from './styles/TopLeaderboardUnit.module.css';

export const TopLeaderboardUnit = ({
  username = 'unknown',
  tokens = 999999999,
  place = 'first',
}: {
  username: string;
  tokens: number;
  place: 'first' | 'second' | 'third';
}) => {
  return (
    <div className="flex max-h-[30px] min-h-[30px] w-full items-center justify-between bg-[#1B1B1B] px-4">
      <h6 className={`${styles[place]} text-[12px] uppercase text-white`}>{username}</h6>
      <h6 className="text-[12px] uppercase text-green-400">
        {formatNumber(tokens)} <span className="text-yellow-300">24h</span>
      </h6>
    </div>
  );
};
