import styled from 'styled-components';

export const Circle = styled.img`
  width: ${({ width }) => width};
  animation: spin 1s infinite linear;

  @keyframes spin {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(360deg);
    }
  }
`;
