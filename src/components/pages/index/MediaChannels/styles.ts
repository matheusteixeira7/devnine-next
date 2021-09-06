import styled from 'styled-components';

export const Section = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
`;

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-bottom: 2rem;
  margin: 2rem 0;
  border-bottom: 1px solid #29292e;
`;

export const Titles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-left: 3rem;
`;

export const Cta = styled.div`
  cursor: pointer;
  margin-left: auto;

  display: flex;
  align-items: center;

  p {
    color: var(--primary);
    margin-right: 1rem;
    white-space: nowrap;
  }
`;
