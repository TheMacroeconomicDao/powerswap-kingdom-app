import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 15px;
  position: relative;
  border: 2px solid white;
  background-color: #0e0e0e;
`;

export const Corner = styled.div`
  position: absolute;
  width: 10px;
  height: 5px;
  background-color: #0e0e0e;
  z-index: 10;

  &:nth-child(1) {
    top: -1.9px;
    left: -1.9px;
    border-bottom:2px solid white;  
    border-right:2px solid white; 
  }

  &:nth-child(2) {
    top: -1.9px;
    right: -1.9px;
    border-bottom:2px solid white; 
    border-left:2px solid white;
  }

  &:nth-child(3) {
    bottom: -1.9px;
    left: -1.9px;
    border-top:2px solid white;
    border-right:2px solid white;
  }

  &:nth-child(4) {
    bottom: -1.9px;
    right: -1.9px;
    border-left:2px solid white;
    border-top:2px solid white;
  }
`;

export const StyledProgress = styled.div`
    width: calc(33%);
    border-right: 8px solid #0e0e0e;
    border-top: 12px solid #acff85;
`;
