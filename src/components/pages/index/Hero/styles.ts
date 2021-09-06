import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  padding: 3.5rem 2rem;

  @media (min-width: 768px) {
    height: calc(100vh - 5rem);

    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1120px;
    margin: 0 auto;
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

    width: 32rem;
  }

  button:nth-child(2) {
    &:hover {
      background: var(--primary);
    }
  }
`;

export const ImgDesktop = styled.img`
  @media (max-width: 767px) {
    display: none;
  }
`;
