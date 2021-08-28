import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 1px solid #29292e;
  height: calc(100vh - 5rem);

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1120px;
`;

export const Content = styled.div`
  max-width: 520px;

  span,
  h1 {
    margin-bottom: 2rem;
  }

  span.support-text {
    display: block;
    color: var(--title);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  span {
    color: var(--primary);
  }
`;
