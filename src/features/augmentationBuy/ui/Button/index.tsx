import Image from "next/image"
import ButtonStones from './assets/buttonStones.svg?url'
import { useTranslation } from "react-i18next";

export const Button = ({isLocked}: {isLocked: boolean}) => {
    const { t } = useTranslation('translation', { keyPrefix: 'game.tabs.augmentations' });
    return(
        <button disabled={isLocked ? true : false} className={`${!isLocked ? 'active:opacity-60' : ''} disabled:bg-[#bbb] min-w-[80px] relative h-[24px] justify-center flex items-center bg-[#BFFF6E]`}>
            <Image src={ButtonStones} style={{filter: isLocked ? "brightness(0.4) saturate(100%) invert(34%) sepia(0%) saturate(0%) hue-rotate(0deg) contrast(85%)" : "none", position:"absolute", width:"100%", height:"100%"}} alt={"button-stones"}/>
            <span className="z-10 text-black text-lg mt-1">{t('buyButton.text')}</span> 
        </button>
    )
}