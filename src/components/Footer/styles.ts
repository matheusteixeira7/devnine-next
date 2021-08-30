import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 3.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: grid;
    align-items: flex-start;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 4rem;

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
  img {
    height: 5rem;
    margin-bottom: 3rem;
  }

  span {
    display: block;
  }
`;
