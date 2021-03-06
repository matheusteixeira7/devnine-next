import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 7rem 2rem;

  header {
    text-align: left;

    @media (min-width: 1024px) {
      text-align: center;
    }

    span {
      color: var(--primary);
      font-weight: 700;
    }

    h3 {
      padding: 1rem 0;
      span {
        color: var(--primary);
      }
    }

    p {
      font-size: 1.25rem;
      max-width: 44rem;
      margin: 0 auto;
      color: white;
    }
  }
`;

export const ButtonsContainer = styled.div`
  max-width: 32rem;
  margin: 2rem auto;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ButtonPrimary = styled.button`
  background: var(--primary);
  border-radius: 0.4rem;
  border: none;
  color: var(--background);
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  width: 100%;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonSecondary = styled.button`
  background: transparent;
  border-radius: 0.25rem;
  border: 1px solid white;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  width: 100%;
  margin-top: 1rem;
  transition: all 200ms ease;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  &:hover {
    background: var(--primary);
    border: 1px solid transparent;
    color: var(--background);
  }
`;
