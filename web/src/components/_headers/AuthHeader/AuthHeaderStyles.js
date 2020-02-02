import styled from 'styled-components';

export default styled.header`
  height: 58px;
  padding: 6px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .desktop-rightside-container {
    display: flex;
    flex-direction: row;
    align-items: center;

    .welcome {
      display: none;
    }

    .button-container {
      display: flex;
      align-items: center;

      .link {
        width: 32px;
        height: 32px;
        opacity: 0.9;
        transition: opacity 300ms;

        :hover {
          opacity: 0.7;
        }
      }

      .link:first-child {
        margin-right: 16px;
      }
    }
  }

  @media only screen and (min-width: 540px) {
    padding: 6px 60px;
  }

  @media only screen and (min-width: 770px) {
    .desktop-rightside-container {
      .welcome {
        margin-right: 34px;
        display: block;
        font-size: 16px;
        color: var(--neutral-2);
      }
    }
  }
`;
