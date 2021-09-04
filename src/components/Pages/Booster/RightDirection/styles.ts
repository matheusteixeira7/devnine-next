import styled from 'styled-components';

export const Section = styled.section`
  border-top: 1px solid #29292e;
  border-bottom: 1px solid #29292e;
  background: #1a1822;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 6.8rem 2rem;

  h3 {
    span {
      background: linear-gradient(to right, #61dcfb, #619ffb);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }

    margin-bottom: 2rem;
  }

  p {
    color: white;
    font-size: 1.25rem;
  }
`;

export const BoosterHeaderButtons = styled.div`
  margin: 2rem 0 4.5rem;
`;

export const ButtonPrimary = styled.button`
  background: var(--blue-500);
  border-radius: 0.25rem;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  padding: 0 4rem;
  transition: all 200ms ease;

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
  padding: 0 4rem;
  margin-left: 1rem;

  &:hover {
    background: var(--blue-500);
    border-radius: 0.25rem;
    border: 1px solid transparent;
    color: var(--background);
    font-size: 1.25rem;
    font-weight: 700;
    height: 4rem;
    padding: 0 4rem;
    transition: all 200ms ease;

    filter: brightness(0.8);
  }
`;
