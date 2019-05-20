import styled from 'styled-components';
import { colours } from '../globals/globalstyles';
import { moveLeft, moveRight, bottomUpp } from '../../styles';
import hero from '../../img/hero.jpg';

export const HeaderWrap = styled.header`
  height: 95vh;
  background-image: linear-gradient(
      to right,
      ${colours.greenrgba1},
      ${colours.greenrgba2}
    ),
    url(${hero});
  background-size: cover;
  background-position: top;
  /* x y , x y, x y */
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  position: relative;
  .logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
    .logo {
      height: 3.5rem;
    }
  }
  .text-box {
    position: absolute;
    text-align: center;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    .heading-primary {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      backface-visibility: hidden;
      span:nth-child(1) {
        display: block;
        font-size: 3.8rem;
        font-weight: 400;
        letter-spacing: 3.5rem;
        animation-name: ${moveLeft};
        animation-duration: 1s;
        animation-timing-function: ease-out;
      }
      span:nth-child(2) {
        display: block;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1.8rem;
        animation-name: ${moveRight};
        animation-duration: 1s;
        animation-timing-function: ease-out;
      }
    }
  }

  .btn:link,
  .btn:visited {
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
  }
  .btn {
    margin-top: 2em;
    &::after {
      content: '';
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s;
    }
    &:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }
  .btn-white {
    background-color: #fff;
    color: #777;
    font-size: 1.5rem;
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 1rem 2rem ${colours.transparentColour1};
    }
    &:active {
      transform: translateY(-1px);
      box-shadow: 0 0.5rem 1rem ${colours.transparentColour1};
    }
    &::after {
      background-color: #fff;
    }
  }

  .animated {
    animation: ${bottomUpp} 0.5s ease-in-out 0.74s;
    animation-fill-mode: backwards;
  }
`;
