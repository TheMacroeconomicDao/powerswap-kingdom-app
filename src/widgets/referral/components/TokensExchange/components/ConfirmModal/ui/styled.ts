import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
  z-index: 100;
`;

export const ModalContainer = styled(motion.div)`
  background-color: black;
  padding: 20px;
  border: 1px solid white;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 1.3rem;

  &:first-of-type {
    font-size: 1.35rem;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.625rem;
`;

export const Button = styled.button`
  margin-top: 20px;
  font-size: 1.5625rem;
`;
