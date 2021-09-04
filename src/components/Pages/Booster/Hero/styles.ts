import styled from 'styled-components';

export const Section = styled.section`
  padding: 7rem 0 3.5rem;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0rem 2rem;

  header {
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;

    span {
      background: linear-gradient(to right, #61dcfb, #619ffb);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  h2 {
    text-align: center;
    margin: 0 auto;
    max-width: 54rem;
  }
`;

export const HeroImg = styled.img`
  margin-left: -2rem;
  width: 1120px;
  height: auto;
  padding: 0 2rem;
`;

export const SupportText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 4rem;

  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--title);
    margin-left: 1rem;
  }
`;

export const BoosterHeaderButtons = styled.div`
  margin: 2rem 0 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
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
  transition: all 200ms ease;

  &:hover {
    background: var(--blue-500);
    border: 1px solid transparent;
    color: var(--background);
    filter: brightness(0.8);
  }
`;
