import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Button = styled(motion.button)`
  display: flex;
  height: 55px;
  width: 55px;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  padding: 0.25rem;
`;
