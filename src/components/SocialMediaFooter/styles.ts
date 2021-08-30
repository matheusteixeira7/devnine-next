import styled from 'styled-components';

export const Section = styled.section`
  background: var(--background-linear);
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 2rem;

  a:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const Content = styled.div`
  background: #2a2836;
  height: 3.5rem;
  width: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  border: none;
`;
