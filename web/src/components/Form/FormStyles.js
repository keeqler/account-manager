import styled from 'styled-components';
import { Form } from '@rocketseat/unform';

export default styled(Form)`
  display: flex;
  flex-direction: column;

  h1 {
    margin-bottom: 40px;
    font-size: 50px;
    text-align: center;
  }

  button {
    margin-top: 10px;
  }

  .text-input {
    margin-bottom: 12px;
  }

  .last-link-container {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
  }
`;
