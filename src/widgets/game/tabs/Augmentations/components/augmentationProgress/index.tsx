'use client'
import { StyledContainer, StyledProgress } from "../../styles/styled"

export const AugmentationProgress = () => {
    return(
        <>
            <StyledContainer>
                <div className="w-full h-full">
                    <StyledProgress />
                </div>
            </StyledContainer>
        </>
    )
}