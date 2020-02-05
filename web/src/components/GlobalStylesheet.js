import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

  :root {
    --brand-gradient: linear-gradient(to right, #ea3535, #232d45);
    --primary: #566da5;
    --success: #50fa7b;
    --error: #ff6060;
    --neutral-1: #fff;
    --neutral-2: #d8d8d8;
    --background-1: #0d0d11;
    --background-2: #1e1e23;
  }

  html, body, #root {
    height: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: var(--neutral-1);
    border: none;
    background: none;
  }

  body {
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    background: var(--background-1);
  }

  a {
    font-weight: 700;
    color: var(--primary);
    transition: color 300ms;

    :hover {
      color: #7fa2f3;
    }
  }
`;
