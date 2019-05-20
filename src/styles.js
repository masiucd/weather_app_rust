import styled, { keyframes } from 'styled-components';

export const Button = styled.button``;

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
