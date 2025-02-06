'use client'
import Coin from '@/shared/assets/coin.svg';

export const AugmentationBalance = () => {
    return(
    <div className="justify-self-center gap-[10vw] mt-[10px] border font-normal flex items-center justify-around px-[20px] h-[40px]">
        <div className="flex gap-[3vw]">
            <span>BALANCE</span>
            <span>10 000 000</span>
        </div>
        <div className='scale-150'>
            <Coin />
        </div>
    </div>
)
}