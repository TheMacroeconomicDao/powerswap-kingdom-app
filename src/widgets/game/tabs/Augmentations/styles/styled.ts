import styled from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border: 2px solid white;
  background-color: #0e0e0e;

  & > div::before,
  & > div::after,
  &::after,
  &::before{
    content:"";
    position:absolute;
    width:10px;
    height:6px ;
    background-color:red;
    z-index:4;
    background-color: #0e0e0e;
    
  }
  &::before{
    top: -2.5px;
    left: -2.5px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    /* border-top: 0.1px solid #0e0e0e; */
    /* border-left: 0.1px solid #0e0e0e; */
  }
  &::after{
    top: -2.5px;
    right: -2.5px;
    border-bottom: 2px solid white;
    /* border-right: 0.1px solid #0e0e0e; */
    /* border-top: 0.1px solid #0e0e0e; */
    border-left: 2px solid white;
  }
  & > div::before{
    bottom: -2.5px;
    left: -2.5px;
    /* border-bottom: 0.1px solid #0e0e0e; */
    border-right: 2px solid white;
    border-top: 2px solid white;
    /* border-left: 0.1px solid #0e0e0e; */
  }
  & > div::after{
    bottom: -2.5px;
    right: -2.5px;
    /* border-bottom: 0.1px solid #0e0e0e; */
    /* border-right: 0.1px solid #0e0e0e; */
    border-top: 2px solid white;
    border-left: 2px solid white;
  }`;

export const StyledProgress = styled.div`
  height:100%;
  width: 100%;
  display: flex;
  align-items:center;
  overflow: hidden;
  position: relative;
  &::before{
    content: "" ;
    background-color: #ACFF85;
    justify-content: flex-end;
    align-items: center;
    border-right: 3px solid #0e0e0e;
    width: 100%;
    height: 100%;
  }
  &::after{
    content: "";
    margin-left: -5px;
    background-color: #0e0e0e;
    height: 100px;
    width: 11px;
    border-left: 2px solid white;
    border-right: 2px solid #0e0e0e;
    transform: rotate(23deg);  
  }`
