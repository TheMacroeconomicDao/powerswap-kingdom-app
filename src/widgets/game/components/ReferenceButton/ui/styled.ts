import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled.section`
  position: relative;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  padding: 0.25rem;
`;

export const Block = styled(motion.div)`
  position: absolute;
  left: -15rem;
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
`;
