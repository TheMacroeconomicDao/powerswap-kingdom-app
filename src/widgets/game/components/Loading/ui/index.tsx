import Spinner from './assets/Spinner.svg';
import { StyledWrapper, PulsatingWrapper, SpinWrapper } from './styled';

export const LoadingFallback = () => (
  <StyledWrapper>
    <PulsatingWrapper>
      <SpinWrapper>
        <Spinner />
      </SpinWrapper>
    </PulsatingWrapper>
  </StyledWrapper>
);
