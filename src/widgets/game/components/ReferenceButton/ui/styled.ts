import { motion } from 'framer-motion';
import styled from 'styled-components';
interface BlockProps {
  direction: 'fromLeft' | 'fromRight';
}
export const Wrapper = styled.section`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid white;
  padding: 0.25rem;
  > svg{
    scale: 1.3;
  }
`;

export const Block = styled(motion.div)<BlockProps>`
  position: absolute;
  /* left:  -15rem; */
  left: ${({ direction }) => (direction === 'fromLeft' ? '-0.7rem;' : '-15rem')};
  top: 2.2rem;
  z-index: 100;
`;

export const Text = styled.p`
  position: absolute;
  left: 0;
  overflow: scroll;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  overflow-wrap: break-word;
  font-size: 13px;
`;
