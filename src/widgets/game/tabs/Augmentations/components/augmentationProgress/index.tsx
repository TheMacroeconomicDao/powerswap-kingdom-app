'use client'
import { StyledContainer, Corner, StyledProgress } from "../../styles/styled"

export const AugmentationProgress = () => {
    return(
        <>
            <StyledContainer>
                <Corner />
                <Corner />
                <Corner />
                <Corner />
                <StyledProgress />
            </StyledContainer>
        </>
    )
}