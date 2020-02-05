import styled from 'styled-components';

import { FadeIn, FadeOut } from '~/components/Animations';

export default styled.div`
  .message {
    color: var(--success);

    &.error {
      color: var(--error);
    }

    &-enter {
      animation: ${FadeIn} 300ms ease;
    }

    &-exit {
      animation: ${FadeOut} 300ms ease;
    }
  }
`;
