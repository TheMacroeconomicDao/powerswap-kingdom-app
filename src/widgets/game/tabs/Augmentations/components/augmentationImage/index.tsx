'use client'
import Image from 'next/image'
import Fire from '@/shared/ui/icons/augmentation/fire.svg?url'
import Lock from '@/shared/assets/ResourceLock.svg?url';

export const AugmentationImage = ({isLocked}:{isLocked:boolean}) => {
    return(
        <div className="min-h-[42px] min-w-[42px] border-[4px] border-white flex items-center justify-center relative">
            <Image style={{filter: isLocked ? "brightness(0) saturate(100%) invert(34%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(89%) contrast(85%)" : "none"}} width={31} height={31} src={Fire} alt={'augmentation'} />
            {isLocked && <Image className='w-full h-full absolute p-[5px]' width={31} height={31} src={Lock} alt={'augmentation'} />}
        </div>
    )
}