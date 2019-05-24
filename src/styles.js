import styled, { keyframes, css } from 'styled-components';

export const Button = styled.button`
  /*  */
`;

export const moveLeft = keyframes`

0%{
  opacity: 0;
  transfrom: translateX(-10rem);
  margin-left: -10rem;
}

80%{
  transfrom: translateX(1rem);
  margin-left: 1rem;
}

100%{
  opacity: 1;
  transfrom: translate(0);
}
`;

export const moveRight = keyframes`

0%{
  opacity: 0;
  transfrom: translateX(20rem);
  margin-right: -10rem;
}

80%{
  transfrom: translateX(2rem);
  margin-right: 2rem;
}

100%{
  opacity: 1;
  transfrom: translate(0);
}
`;
export const bottomUpp = keyframes`

0%{
  opacity: 0;
  transfrom: translateY(3rem);
  margin-bottom: 20rem;
}



100%{
  opacity: 1;
  transfrom: translate(0);
}
`;

const sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
export const mediaMin = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
