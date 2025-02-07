'use client'
import { ReferenceButton } from "@/widgets"
import { Button } from "@/features/augmentationBuy"
import { AugmentationDescription, AugmentationTokens, AugmentationProgress, AugmentationImage } from "@/widgets"

export const Augmentation = ({isLocked}: {isLocked: boolean}) => {
    return(
    <div className="w-full">
        <div className="relative top-[3px]">
            <ReferenceButton
                direction="fromLeft"
                reference="These are augmentations. They can quickly increase your mining speed. You can buy them once you have enough coins."
            /> 
        </div>
        <div className="relative border-[4px] border-white before:absolute before:top-[-8px] before:border-[4px] before:border-white before:w-[19vw] before:left-[20vw] after:absolute after:top-[-8px] after:border-[4px] after:border-white after:w-[19vw] after:left-[52vw]">
            <div className="pr-[8px] pl-[12px] pt-[6px] justify-between pb-[4px] flex items-center gap-[5vw]">
                <AugmentationImage isLocked={isLocked} />
                <AugmentationProgress isLocked={isLocked} />
                <Button isLocked={isLocked} />
            </div>
        </div>
        <div className="flex justify-between">
            <AugmentationDescription />
            <AugmentationTokens isLocked={isLocked} />
        </div>
    </div>
)
}