import { Wrapper } from '@/shared';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHeader = styled(Wrapper)`
  position: sticky;
  z-index: 50;
  margin: 0 27px 15px 27px;
  left: 0px;
  gap: 5rem;
  width: auto;
  top: 0px;
`;

export const LinkButton = styled(motion.button)`
  display: flex;
  width: 100px;
  height: auto;
  justify-content: center;
`;

export const Text = styled.h6`
  height: 45px;
  text-align: end;
  font-size: 14px;
  text-transform: uppercase;
  color: #434343;
`;
