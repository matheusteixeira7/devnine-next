import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  margin: 0 auto;
  padding: 3.5rem 2rem;
  max-width: 1120px;

  @media (min-width: 768px) {
    padding: 7rem 2rem;
  }
`;

export const Header = styled.header`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  span {
    color: var(--primary);
  }
`;

export const SupportText = styled.div`
  @media (min-width: 768px) {
    width: 600px;
    margin-left: auto;
  }

  p {
    margin: 1rem 0 2rem;

    @media (min-width: 768px) {
      margin: 0;
    }
  }
`;

export const Card = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    margin-top: 2rem;
  }

  div {
    padding: 2rem;
    background: var(--shape);
    border: 1px solid #29292e;

    margin-top: 2rem;

    @media (min-width: 768px) {
      margin-top: 0;
    }

    img {
      margin: 0 0 0 -1rem;

      @media (min-width: 768px) {
        margin-bottom: 2rem;
      }
    }

    h4 {
      margin-bottom: 2rem;
    }
  }
`;

export const Dash = styled.div`
  @media (min-width: 768px) {
    color: white;
    font-weight: bold;
    position: relative;

    &::after {
      background: var(--body-text);
      border-radius: 3px 3px 0 0;
      bottom: 1px;
      content: '';
      height: 2px;
      left: 0;
      position: absolute;
      width: 3rem;
      margin-bottom: 1rem;
    }
  }
`;
