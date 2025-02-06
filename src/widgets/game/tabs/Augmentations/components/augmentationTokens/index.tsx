'use client'
import Coin from '@/shared/assets/coin.svg';

export const AugmentationTokens = () => {
    return(
        <div className="border-white border-[4px] relative top-[-4px] px-[14px] h-[30px] items-center flex gap-[10px]">
            <span className="text-[#63FF2D] text-[15px] mt-1">12 903</span>
            <Coin />
        </div>
    )
}