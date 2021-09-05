import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  height: calc(100vh - 5rem);

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 2rem;
  max-width: 1120px;

  img {
    height: 480px;
    width: auto;
  }
`;

export const Content = styled.div`
  max-width: 600px;

  span,
  h1,
  h2 {
    margin-bottom: 2rem;
  }

  span {
    color: var(--primary);
  }
`;

export const SupportText = styled.div`
  display: flex;
  align-items: center;

  color: var(--title);
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;

  img {
    height: 3.5rem;
    margin-right: 2rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  p {
    margin-left: 1rem;
  }

  button {
    width: 15.5rem;
  }
`;
