import styled from 'styled-components';

import {
  FadeIn,
  FadeOut,
  ScaleFadeIn,
  ScaleFadeOut,
} from '~/components/Animations';
import Button from '~/components/Button';

export const Container = styled.div`
  .modal {
    &-enter {
      animation: ${ScaleFadeIn} 300ms ease;
    }

    &-exit {
      animation: ${ScaleFadeOut} 300ms ease;
    }
  }

  .overlay {
    &-enter {
      animation: ${FadeIn} 300ms ease;
    }

    &-exit {
      animation: ${FadeOut} 300ms ease;
    }
  }
`;

export const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  z-index: 2;
  pointer-events: none;
`;

export const Modal = styled.div`
  width: 100%;
  max-width: 460px;
  min-height: 550px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: var(--background-1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 1);
  z-index: 3;
  pointer-events: all;

  form {
    flex: 1;
    justify-content: center;
  }

  @media only screen and (max-width: 460px) {
    height: 100vh;
  }
`;

export const ModalCloseButtonWrapper = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  font-size: 36px;

  svg {
    float: right;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 300ms;

    :hover {
      opacity: 1;
    }
  }
`;

export const ShowSensitiveDataButton = styled(Button)`
  height: 26px;
  margin: 0 !important;
  font-size: 16px;
`;

export const DeleteButton = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: var(--error);
  cursor: pointer;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #00000090;
  z-index: 1;

  @media only screen and (max-width: 460px) {
    display: none;
  }
`;
