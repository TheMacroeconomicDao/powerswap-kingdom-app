import Trophy from '../../assets/trophy.svg';
import UserRatingBorder from '../../assets/user-rating-border.svg';
import Coin from '@/shared/assets/coin.svg';

export const UserRating = ({ username, tokens }: { username: string; tokens: number }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="size-[26px]">
        <Trophy />
      </div>
      <div className="relative">
        <div className="h-[45px] w-[200px]">
          <UserRatingBorder />
        </div>
        <div className="absolute left-0 top-[8px] flex size-full flex-col items-center uppercase">
          <h6 className="max-w-[80%] overflow-clip text-center text-[13px]">
            {username && username.length > 0 ? username : 'UNKNOWN'}
          </h6>
          <div className="flex mt-[-3px] items-center gap-1">
            <p className="text-[13px] text-green-400">{tokens}</p>
            {/* <Coin className="mt-[-3px] scale-[0.8]" /> */}
            <p className="text-yellow-200">24h</p>
          </div>
        </div>
      </div>
    </div>
  );
};
