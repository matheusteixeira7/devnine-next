import styled from 'styled-components';

export const Section = styled.section`
  background: var(--background-linear);
  border: 1px solid #29292e;
  h3 {
    margin-bottom: 2rem;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style-type: none;
    border-top: 1px solid #29292e;
    border-bottom: 1px solid #29292e;
    cursor: pointer;

    li {
      padding: 2rem;
    }

    li:last-child {
      margin-left: auto;
      color: var(--body-text);
    }

    li:nth-child(2) {
      font-weight: 900;
      font-size: 1.25rem;
      margin-left: 2rem;
    }

    li:last-child {
      transform: rotate(180deg);
      transition: all 100ms ease;

      &.expanded {
        transform: rotate(0);
      }
    }
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  padding: 7rem 0;
  margin: 0 auto;
`;

export const Content = styled.div``;

export const FaqContainer = styled.div`
  margin-top: 6rem;
`;

export const FaqQuestion = styled.div`
  &:nth-child(4) {
    ul {
      border-bottom: none;
    }
  }
`;

export const FaqResponse = styled.div`
  background: var(--background);
  border-radius: 0.25rem;
  transition: all 100ms ease;
  display: none;

  &.expanded {
    display: block;
    padding: 2rem 4rem;
  }
`;
