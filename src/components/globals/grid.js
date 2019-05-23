import { grid } from './globalstyles';
import styled, { keyframes } from 'styled-components';

export const Row = styled.div`
  max-width: 114rem;
  background-color: $white;
  margin: 0 auto;
  /* select evrything except the last child */
  &:not(:last-child) {
    margin-bottom: ${grid.gutterV};
  }

  &::after {
    content: '';
    display: table;
    clear: both;
  }

  [class^='col-'] {
    background: orange;
    float: left;

    &:not(:last-child) {
      margin-right: ${grid.gutterH};
    }
  }
`;

export const ColOneOfTwo = styled.div`
  width: calc((100% - ${grid.gutterH}) / 2);
`;
