import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
`;

export const Content = styled.div`
  h3 {
    margin-bottom: 4rem;
  }

  span {
    color: var(--primary);
  }

  ul {
    list-style-type: none;
    border-bottom: 1px solid #29292e;
    padding: 2rem 0;

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media (min-width: 768px) {
      }
    }
  }
`;

export const TableContent = styled.div`
  img {
    height: 3rem;
    width: 3rem;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
  }
`;

export const Headline = styled.div`
  h4 {
    @media (min-width: 1024px) {
      min-width: 15rem;
    }
  }

  p {
    @media (min-width: 1024px) {
      max-width: 30rem;
    }
  }

  margin-left: 2rem;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
  }
`;

export const Label = styled.div`
  p {
    color: var(--primary);
    display: none;

    @media (min-width: 1024px) {
      display: block;
    }
  }
  svg {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;
