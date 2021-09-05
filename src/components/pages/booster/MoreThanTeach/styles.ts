import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1120px;
  margin: 7rem auto;
  padding: 0 2rem;
`;

export const Header = styled.header`
  margin-bottom: 4rem;

  h3 {
    text-align: center;
    margin-bottom: 2rem;

    span {
      background: linear-gradient(to right, #61dcfb, #619ffb);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
  }

  p {
    text-align: center;
    color: white;
    font-size: 1.5rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Card = styled.div`
  padding: 3rem 2rem;
  border-radius: 0.25rem;
  background: var(--shape);
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  img {
    margin-bottom: 2rem;
  }

  h4 {
    margin-bottom: 1rem;
  }
`;

export const Dash = styled.div`
  width: 100%;
  background: linear-gradient(90deg, #61dcfb 0%, #61a1fb 94.41%);
  border-radius: 5px 5px 1px 1px;
  height: 8px;

  position: absolute;
  top: 0;
  left: 0;
`;
