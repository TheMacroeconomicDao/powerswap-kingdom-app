import { formatNumber } from '@/shared/utils/formatNumber';
export const LeaderboardUnit = ({
  username = 'unknown',
  tokens = 999999999,
}: {
  username: string;
  tokens: number;
}) => {
  return (
    <div className="flex max-h-[20px] min-h-[20px] w-full items-center justify-between bg-[#1B1B1B] px-4">
      <h6 className="text-[10px] uppercase text-white mb-[-4px]">{username}</h6>
      <h6 className="text-[10px] uppercase text-green-400">
        {formatNumber(tokens)} <span className="text-yellow-300">24h</span>
      </h6>
    </div>
  );
};
