import styled from 'styled-components';

export const Section = styled.section``;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const Content = styled.div`
  padding: 7rem 0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    p {
      max-width: 31.25rem;
    }
  }
`;

export const CardContainer = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Card = styled.div`
  background: var(--shape);
  padding: 2rem;
  height: 35rem;
  position: relative;
  border: 1px solid #29292e;

  img,
  h4,
  p,
  span {
    margin-bottom: 2rem;
  }

  strong,
  span {
    display: block;
  }

  span {
    color: var(--primary);
  }

  &:nth-child(2) {
    span {
      color: var(--blue-500);
    }
  }

  &:nth-child(3) {
    span {
      color: var(--accent);
    }
  }
`;

export const Classes = styled.div`
  position: absolute;
  bottom: 0;
  left: 2rem;
`;

export const BarGreen = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 1px 1px 5px 5px;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(90deg, #29292e 0%, #bef264 50%);
`;

export const BarBlue = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 1px 1px 5px 5px;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(90deg, #121214 0%, #61dcfb 50%);
`;

export const BarYellow = styled.div`
  position: absolute;
  bottom: 0;
  border-radius: 1px 1px 5px 5px;
  left: 0;
  height: 8px;
  width: 100%;
  background: linear-gradient(90deg, #29292e 0%, #eba417 50%);
`;
