import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #29292e;
  background: #1a1822;
  padding: 7rem 0;
`;

export const Container = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
`;

export const List = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 2rem;

      p {
        font-size: 1.25rem;
        color: white;
        margin-left: 2rem;
      }
    }
  }
`;

export const Dash = styled.div`
  width: 25rem;
  height: 1.5px;
  background: linear-gradient(90deg, #313b40 0%, rgba(49, 59, 64, 0) 100%);
  margin-left: 2rem;
  margin-top: 1rem;
`;
