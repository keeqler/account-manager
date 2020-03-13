import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 8px 16px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--background-2);
  transition: 300ms background ease;

  :hover {
    background: ${({ loading }) => !loading && 'var(--background-3)'};
    cursor: ${({ loading }) => !loading && 'pointer'};
  }
`;

export const LoadingDetail = styled.div`
  width: ${({ width_ }) => width_};
  height: 16px;
  background: var(--background-3);
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  font-style: ${({ emptyLabel }) => emptyLabel && 'italic'};

  .icon {
    margin-right: 10px;
    font-size: 20px;
    opacity: 0.6;
  }

  span {
    opacity: ${({ emptyLabel }) => emptyLabel && '0.4'};
  }
`;
