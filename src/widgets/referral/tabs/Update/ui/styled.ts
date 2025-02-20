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
  max-width: 350px;
  width: 100%;
  height: 100dvh;
  margin: auto;
  backdrop-filter: blur(15px);
  padding: 10px;
`;

export const ModalContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
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

export const TextBox = styled.p`
  height: 80%;
  overflow-y: auto;
  line-height: 1.5;
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
