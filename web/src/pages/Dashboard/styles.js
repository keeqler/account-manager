import styled from 'styled-components';

import StdButton from '~/components/Button';
import { Auth } from '~/components/LayoutMainStyles';

export const Button = styled(StdButton)`
  width: 100%;
  max-width: 160px;
  flex-shrink: 0;
`;

export const LoadingButton = styled(Button)`
  :hover {
    background-size: 100%;
  }
`;

export const NoAccountContainer = styled(Auth)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    font-size: 40px;
  }
`;

export const AccountContainer = styled(Auth)`
  display: flex;
  flex-direction: column;

  .button {
    margin-bottom: 20px;
    align-self: flex-end;
  }
`;

export const LoadingContainer = styled(Auth)`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: blink 0.8s infinite;

  .button {
    margin-bottom: 20px;
    align-self: flex-end;
    cursor: default;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0.4;
    }

    100% {
      opacity: 1;
    }
  }
`;
