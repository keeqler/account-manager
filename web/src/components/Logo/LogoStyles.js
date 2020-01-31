import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  img {
    height: 46px;
    margin-right: 10px;
  }

  div {
    font-size: 20px;

    span {
      font-weight: 300;
      color: var(--neutral-2);
    }
  }
`;
