import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7rem 2rem 0;
  margin: 0 auto;
  max-width: 1120px;

  div {
    max-width: 54rem;
    margin-left: 4rem;

    h3 {
      font-size: 3rem;
      line-height: 4rem;
      margin-bottom: 3rem;

      span {
        background: linear-gradient(to right, #61dcfb, #619ffb);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
      }
    }

    strong {
      display: block;
      margin-bottom: 3rem;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  margin: 3.5rem auto 7rem;
  max-width: 1120px;

  div {
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: white;
`;

export const ImgContainer = styled.div`
  height: 7.5rem;
  width: 7.5rem;

  border-radius: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(97, 220, 251, 0.3);
`;

export const FooterContent = styled.div`
  align-items: center;
  background: red;
  background: var(--shape);
  border-radius: 0.25rem;
  display: flex;
  height: 7.5rem;
  margin-left: 1rem;
  padding: 0 2rem;
  width: 100%;

  p {
    width: 25rem;

    strong {
      color: white;
    }
  }
`;
