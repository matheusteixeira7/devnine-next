import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
  background: var(--background-linear);
`;

export const Container = styled.div`
  height: calc(100vh - 5rem);

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1120px;
`;

export const Content = styled.div`
  max-width: 520px;

  h3 {
    margin-bottom: 2rem;
    text-align: right;
  }

  p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2.25rem;
    color: white;
    text-align: right;
  }

  button {
    float: right;
  }

  span {
    color: var(--primary);
  }
`;
