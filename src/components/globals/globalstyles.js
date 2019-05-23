import styled, { createGlobalStyle } from 'styled-components';

export const colours = {
  light_green: '#7ed56f',
  medium_green: '#55c57a',
  dark_green: '#28b485',
  greenrgba1: 'rgba(126, 213, 111, 0.8)',
  greenrgba2: ' rgba(40, 180, 131, 0.8)',
  greenrgba3: ' rgba(116, 313, 111, 0.8)',
  transparentColour1: 'rgba(0,0,0,.2)',
  colourGrey1: '#f7f7f7',
  white: '#fff'
};

export const grid = {
  width: `114rem`,
  gutterV: `8rem`,
  gutterH: `2rem`
};

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
html{
  font-size: 62.5%
}
body {
  @import url('https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i,900,900i');
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #777;
  line-height: 1.7;
  padding: 30px;
  box-sizing: border-box;
}

.u-center-text{
  text-align: center;
}
.u-margin-bottom-small{
 margin-bottom: 1.5rem;
}
.u-margin-bottom-medium{
 margin-bottom: 4rem;
}
.u-margin-bottom-big{
 margin-bottom: 8rem;
}

.heading-teritary{
  font-size: 1.6rem;
  font-weight: 700;
  text-transfom: uppercase;
}

.paragraph{
  font-size: 1.6rem;

  ${'' /* select everythin except the last child */}
  &:not(:last-child){
    margin-bottom: 3rem;
  }
}

 .btn-text {
   font-size: 1.6rem;
  &:link,
  &:visited {
    color: ${colours.dark_green};
    display: inline-block;
    text-decoration: none;
     border-bottom:  1px solid ${colours.dark_green};
     padding: .3rem;
    transition: .3s linear;
  }
  &:hover{
    background-color: ${colours.dark_green};
    color: ${colours.white};
    box-shadow: 0 1rem 2rem rgba(${colours.transparentColour1});
    transition: all .3s ease-in-out;
    transform: translateY(-2px);
  }
  &:active{
    box-shadow: 0 .5rem 2rem rgba(${colours.transparentColour1});
    transform: translateY(0);
  }
}

`;
