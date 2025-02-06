'use client'
import { ReferenceButton } from "@/widgets"
import Image from "next/image"
import Fire from '@/shared/ui/icons/augmentation/fire.svg?url'
import { Button } from "@/features/augmentationBuy"
import { AugmentationDescription, AugmentationTokens, AugmentationProgress } from "@/widgets"

export const Augmentation = () => {
    return(
    <div className="w-full">
        <div className="relative top-[3px]">
            <ReferenceButton
                direction="fromLeft"
                reference="These are augmentations. They can quickly increase your mining speed. You can buy them once you have enough coins."
            /> 
        </div>
        <div className="border-[4px] border-white relative">
            <div className="absolute top-[-8px] border-[4px] border-white w-[19vw] left-[20vw]"></div>
            <div className="absolute top-[-8px] border-[4px] border-white w-[19vw] left-[52vw]"></div>
            <div className="pr-[8px] pl-[12px] pt-[6px] justify-between pb-[4px] flex items-center gap-[5vw]">
                <div className="min-h-[42px] min-w-[42px] border-[4px] border-white flex items-center justify-center">
                    <Image width={31} height={31} src={Fire} alt={'augmentation'} />
                </div>
                    <AugmentationProgress />
                    <Button />
            </div>
        </div>
        <div className="flex justify-between">
            <AugmentationDescription />
            <AugmentationTokens/>
        </div>
    </div>
)
}