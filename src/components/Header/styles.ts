import styled from 'styled-components';

export const Container = styled.header`
  height: 5rem;
  border: 1px solid var(--gray-700);
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  img {
    height: 2rem;
    cursor: pointer;
  }

  nav {
    margin-left: 5rem;
    height: 5rem;

    ul {
      li {
        display: inline-block;
        position: relative;
        padding: 0 0.5rem;
        height: 5rem;
        line-height: 5rem;
        color: var(--gray-300);
        cursor: pointer;

        transition: color 200ms ease;

        & + li {
          margin-left: 2rem;
        }

        &:hover {
          color: var(--white);
        }

        &.active {
          color: white;
          font-weight: bold;
        }

        &.active::after {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: var(--primary);
        }
      }
    }
  }

  button {
    margin-left: auto;
  }
`;
