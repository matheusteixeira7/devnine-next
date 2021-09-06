import styled from 'styled-components';

export const Section = styled.section`
  padding: 2rem;

  @media (min-width: 1024px) {
    padding: 7rem 0;
  }
`;

export const Container = styled.div`
  @media (min-width: 1024px) {
    padding: 0rem 2rem;
    margin: 0 auto;
    max-width: 1024px;
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;

    span {
      background: var(--terciary-gradient);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  h2 {
    text-align: center;
    margin: 0 auto;

    @media (min-width: 1024px) {
      max-width: 54rem;
    }
  }
`;

export const HeroImg = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
    }
  }
`;

export const SupportText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--title);
    margin-left: 1rem;
  }
`;

export const BoosterHeaderButtons = styled.div`
  margin: 2rem auto;

  @media (min-width: 768px) {
    width: 32rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 40rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonPrimary = styled.button`
  background: var(--blue-500);
  border-radius: 0.25rem;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  width: 100%;
  transition: all 200ms ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
