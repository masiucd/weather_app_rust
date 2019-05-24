import styled from 'styled-components';
import { colours } from '../globals/globalstyles';
import { mediaMax, mediaMin } from '../../styles';

export const TwoColWrappers = styled.div`
  display: flex;
  width: 80%;
  margin: 0 auto;

  /* ${mediaMax.phone`  flex-direction: column; align-items: center;`} */
  .composition {
    position: relative;
    ${mediaMax.phone`flex-direction: column;`}
  }
  .composition__photo {
    flex-wrap: wrap;
    margin: 1rem;
    width: 65%;

    transition: all 0.2s linear;
    box-shadow: 0 1.5rem 4rem ${colours.transparentColour1};
    &:hover {
      transition: all 0.5s linear;
      transform: scale(1.1) translateY(-5px);
      z-index: 1;
      box-shadow: 1rem 2rem 4rem ${colours.transparentColour1};
      border: 2px solid ${colours.dark_green};
      outline-offset: 2rem;
    }
    &:hover &.__photo:not(:hover){
      transform: scale(1);
    }
    ${mediaMax.phone`max-width: 10rem;  `}
    &:nth-child(1) {
      position: absolute;
      top: 1px;
      left: 200px;
      ${mediaMax.phone`top: 30px;
      left: 70px;  `}
    }
    &:nth-child(2) {
      position: absolute;
      top: 190px;
      left: 160px;
      ${mediaMax.phone`top: 57px;
      left: 50px;  `}
      ${mediaMax.tablet`
        ; top: 40px; right: 90px; `}
    }
    }
  
    &:nth-child(3) {
      position: absolute;
      top: 60px;
      left: 20px;
      ${mediaMax.phone`top: 50px;
      left: 10px;  `}
      ${mediaMax.tablet`
      top: 10px; right: 90px; `}
    }
    
  
  
`;
