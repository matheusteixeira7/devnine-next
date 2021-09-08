import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  padding: 3.5rem 2rem;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1120px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    height: calc(100vh - 5rem);
    justify-content: space-between;
    padding: 0 2rem;
  }
`;

export const Content = styled.div`
  max-width: 600px;

  span,
  h1,
  h2 {
    margin-bottom: 2rem;
  }

  span.support-text {
    display: block;
    color: var(--title);
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  h1 {
    span {
      color: var(--primary);
    }
  }
`;

export const ButtonsContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
  }
  @media (min-width: 1024px) {
    width: 32rem;
    margin: 0;
  }

  button:nth-child(2) {
    &:hover {
      background: var(--primary);
    }
  }
`;

export const ButtonPrimary = styled.button`
  background: var(--primary);
  border-radius: 0.4rem;
  border: none;
  color: #121214;
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
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
  height: 4rem;
  width: 100%;
  transition: all 200ms ease;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  &:hover {
    background: var(--blue-500);
    border: 1px solid transparent;
    color: var(--background);
  }
`;

export const ImgDesktop = styled.img`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`;
