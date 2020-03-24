import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 7px;
  font-size: 18px;
  font-weight: 700;
  color: var(--neutral-1);
  background: ${({ noBackground }) => !noBackground && 'var(--brand-gradient)'};
  background-size: 100%;
  cursor: pointer;
  transition: background-size 300ms;

  :hover {
    background-size: 200%;
  }
`;
