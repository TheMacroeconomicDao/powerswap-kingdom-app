import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Overlay = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 350px;
  height: 100dvh;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(15px);
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  gap: 4px;
  background-color: rgba(10, 0, 0, 0.8);
  border: 1px solid white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  padding: 20px;
  height: 65%;
  z-index: 1;

  button {
    margin-left: auto;
  }
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  text-align: center;
`;

export const Text = styled.p`
  font-size: 0.9375rem;
  font-weight: 400;
`;
