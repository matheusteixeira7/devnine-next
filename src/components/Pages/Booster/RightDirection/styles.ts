import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #29292e;
  padding: 3.5rem 0;
  background: #1a1822;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  max-width: 1120px;
`;

export const Content = styled.div`
  padding-left: 2rem;
  max-width: 530px;

  h3 {
    font-size: 3rem;
    line-height: 4rem;
    span {
      background: linear-gradient(to right, #61dcfb, #619ffb);
      background-clip: text;
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
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-top: 2rem;
  width: 100%;
`;

export const ButtonPrimary = styled.button`
  background: var(--blue-500);
  border-radius: 0.25rem;
  border: none;
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  padding: 0 3.5rem;
  transition: all 200ms ease;
  white-space: nowrap;

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
  margin-left: 1rem;
  padding: 0 3.5rem;
  transition: all 200ms ease;
  white-space: nowrap;

  &:hover {
    background: var(--blue-500);
    border: 1px solid transparent;
    color: var(--background);
    filter: brightness(0.8);
  }
`;

export const ImageContainer = styled.div`
  background: #29292e;
  height: 30rem;
  width: 32rem;
  margin-bottom: 3.5rem;

  position: relative;

  div {
    height: 32rem;
    width: 32rem;

    position: absolute;
    top: 1rem;
    left: 1rem;

    background-image: url('/images/rightDirection.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }
`;
