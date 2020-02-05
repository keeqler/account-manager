import styled from 'styled-components';

export default styled.div`
  width: 100%;
  min-height: 64px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
  }

  .input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-radius: 7px;
    font-size: 16px;
    background: var(--background-2);
    transition: background 300ms;

    ::placeholder {
      opacity: 0;
    }
    :focus,
    :not(:placeholder-shown) {
      background: #2f2f38;
    }
  }

  span {
    margin-top: 5px;
    /* font-weight: 700; */
    font-size: 14px;
    color: var(--error);
    transition: 300ms;
  }
`;
