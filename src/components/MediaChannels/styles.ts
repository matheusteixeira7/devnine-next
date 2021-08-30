import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;
export const Container = styled.section`
  max-width: 1120px;
  margin: 7rem auto;
  padding: 0 2rem;

  h3 {
    margin-bottom: 3rem;
  }
`;

export const Table = styled.ul`
  list-style-type: none;
  padding-bottom: 2rem;
  margin-bottom: 2rem;

  &:not(:last-child) {
    border-bottom: 1px solid #29292e;
  }
`;

export const TableRow = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: 700;
    color: var(--primary);
  }
`;

export const TableContent = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  p {
    margin-left: 6rem;
    color: white;
    font-weight: 700;
    display: block;
  }

  img {
    margin-right: 3rem;
  }

  span {
    margin-left: auto;
  }
`;
