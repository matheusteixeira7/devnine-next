import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 7rem 2rem;
  max-width: 1120px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--primary);
  }
`;

export const SupportText = styled.div`
  width: 600px;
  margin-left: auto;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;

  div {
    padding: 2rem;
    background: var(--shape);
    border: 1px solid #29292e;

    img {
      margin-bottom: 2rem;
    }

    h4 {
      margin-bottom: 2rem;
    }
  }
`;

export const Dash = styled.div`
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
`;
