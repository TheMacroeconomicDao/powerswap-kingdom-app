'use client'
import { StyledContainer, StyledProgress } from "../../styles/styled"

export const AugmentationProgress = ({isLocked}: {isLocked: boolean}) => {
    return(
        <div className="relative overflow-hidden h-[13px] w-full ">
            <StyledContainer>
                <div className="w-full h-full">
                    <StyledProgress isLocked={isLocked} />
                </div>
            </StyledContainer>
        </div>
    )
}