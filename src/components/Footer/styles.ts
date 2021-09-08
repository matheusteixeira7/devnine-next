import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
  background: var(--background-linear);
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  nav {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 2rem;

    ul {
      list-style-type: none;

      li {
        color: var(--body-text);
        padding-bottom: 1rem;

        &:first-child {
          color: var(--title);
        }
      }
    }
  }
`;

export const Branding = styled.div`
  margin-bottom: 5rem;
  align-self: flex-start;

  div {
    p {
      display: block;
      color: white;
    }

    p:first-child {
      margin-top: 1rem;
    }
  }
`;
