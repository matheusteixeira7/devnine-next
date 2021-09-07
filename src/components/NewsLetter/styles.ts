import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 7rem 2rem;
`;

export const NewsletterContainer = styled.div`
  background: var(--shape);
  padding: 2rem;
  border-radius: 0.25rem;
  margin-top: 2rem;

  form {
    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 100%;
    }

    div {
      position: relative;
      display: flex;
      align-items: center;

      input.email {
        width: 100%;

        @media (min-width: 1024px) {
          width: auto;
        }
      }

      &:nth-child(2) {
        padding: 0;
        margin: 0;

        input {
          margin: 1rem 0;
        }

        span {
          margin-left: 1rem;
          color: #737380;
        }
      }
    }
  }

  button {
    background: var(--primary);
    color: var(--background);
    border: none;
    border-radius: 0.25rem;
    height: 3rem;
    padding: 0 4rem;
    transition: all 200ms ease;
    font-weight: 900;
    width: 100%;

    @media (min-width: 1024px) {
      margin-left: 2rem;
      width: auto;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  input {
    padding: 1rem 3.5rem;
    border-radius: 0.25rem;
    border: none;
    background: var(--background);
    color: #fff;

    &::placeholder {
      color: #737380;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  border-top: 1px solid #29292e;
  border-bottom: 1px solid #29292e;
`;
