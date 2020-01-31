import styled from 'styled-components';

export default styled.header`
  height: 58px;
  padding: 6px 30px;
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 540px) {
    justify-content: unset;
  }
`;
