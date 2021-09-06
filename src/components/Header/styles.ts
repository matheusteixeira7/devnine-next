import styled from 'styled-components';

export const Section = styled.div`
  border-bottom: 1px solid #29292e;

  @media (min-width: 1024px) {
    height: 5rem;
  }
`;

export const Nav = styled.header`
  padding: 2rem;

  @media (min-width: 1024px) {
    padding: 0 2rem;
    max-width: 1120px;
    margin: 0 auto;

    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Mobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 2.5rem;
  }

  div {
    @media (min-width: 1024px) {
      display: none;
    }
  }
`;

export const Navlink = styled.div`
  width: 100%;

  div {
    display: none;

    @media (min-width: 1024px) {
      display: flex;
      align-items: center;
      margin-left: 5rem;
    }

    &.expanded {
      display: block;
    }

    button {
      margin-top: 2rem;

      @media (min-width: 1024px) {
        margin-top: 0;
        margin-left: auto;
      }
    }
  }

  ul {
    list-style-type: none;
    margin-top: 2rem;

    @media (min-width: 1024px) {
      margin-top: 0;
    }

    li {
      padding: 1rem;
      background: var(--background-linear);
      border-radius: 0.25rem;
      cursor: pointer;
      color: var(--body-text);

      @media (min-width: 1024px) {
        background: none;
        display: inline-block;
        position: relative;
        padding: 0 1.5rem;
        height: 5rem;
        line-height: 5rem;
        transition: all 200ms ease;
      }

      & + li {
        margin-top: 1rem;

        @media (min-width: 1024px) {
          margin-top: 0;
        }
      }

      &:hover {
        color: var(--white);
      }

      &.active {
        color: white;
        font-weight: 700;
        border-left: 2px solid #bef264;

        @media (min-width: 1024px) {
          border-left: none;
        }
      }

      &.active::after {
        @media (min-width: 1024px) {
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

      &.active-booster {
        color: white;
        font-weight: 700;
        border-left: 2px solid #61dafb;

        @media (min-width: 1024px) {
          border-left: none;
        }
      }

      &.active-booster::after {
        @media (min-width: 1024px) {
          content: '';
          height: 3px;
          border-radius: 3px 3px 0 0;
          width: 100%;
          position: absolute;
          bottom: 1px;
          left: 0;
          background: var(--blue-500);
        }
      }
    }
  }
`;
