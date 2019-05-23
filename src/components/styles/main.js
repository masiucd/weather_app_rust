import styled from 'styled-components';
import { colours } from '../globals/globalstyles';

export const MainWrapper = styled.main`
  /* background-color: ${colours.colourGrey1}; */
  background-color: ${colours.colourGrey1};
  padding: 25rem 0;
  margin-top: -20vh;

  .heading-secondary {
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    background-image: linear-gradient(to right, ${colours.light_green}, ${
  colours.dark_green
});
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2rem;
  transition: all .2s;
  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: .5rem 1rem 2rem ${colours.transparentColour1};
  }
  }
`;
