import styled from 'styled-components';

import { FadeIn, FadeOut } from '~/components/Animations';

export default styled.div`
  margin: 6px auto;

  .message {
    color: ${({ isError }) => (isError ? 'var(--error)' : 'var(--success)')};

    &-enter-active {
      animation: ${FadeIn} 300ms ease;
    }

    &-exit-active {
      animation: ${FadeOut} 300ms ease;
    }
  }
`;
