'use client'
import { StyledContainer, StyledProgress } from "../../styles/styled"

export const AugmentationProgress = () => {
    return(
        <div className="relative overflow-hidden h-[15px] w-full ">
            <StyledContainer>
                <div className="w-full h-full">
                    <StyledProgress />
                </div>
            </StyledContainer>
        </div>
    )
}