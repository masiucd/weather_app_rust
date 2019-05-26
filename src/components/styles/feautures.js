import styled from 'styled-components';
import nat4 from '../../img/nat-4.jpg';
import { colours } from '../globals/globalstyles';

export const Section = styled.div`
  padding: 20rem 0;
  background-image: linear-gradient(
      to right,
      ${colours.greenrgba1},
      ${colours.greenrgba2}
    ),
    url(${nat4});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-around;
  .feat-box {
    background-color: rgba(255, 255, 255, 0.7);
    font-size: 1.5rem;
    text-align: text-center;
    padding: 2.5rem;
    border-radius: 1.4rem;
    position: relative;
    left: 70px;
    box-shadow: -1.5rem 4rem rgba(${colours.black}, 0.15);
    width: 70%;
    transition: 0.4s all;
    svg {
      text-align: center;
      font-size: 6rem;
      margin-bottom: 0.5rem;
      display: inline-block;
      background-image: linear-gradient(
        to right,
        ${colours.light_green},
        ${colours.medium_green}
      );
      -webkit-background-clip: text;
      color: ${colours.light_green};
    }
    &:hover {
      transition: 0.4s ease-in-out;
      transform: scale(1.06) translateY(-2.5rem);
      box-shadow: 0.5rem 0.4rem 0.5rem 0.4rem ${colours.blackT};
    }
  }
  transform: skewY(-7deg);
  & > * {
    transform: skewY(7deg);
  }
  margin-top: -11rem;
`;
