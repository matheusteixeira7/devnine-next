import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #29292e;
  position: relative;
  background: var(--background-linear);
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  height: 35rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  margin-left: 1rem;

  height: 30rem;
  width: 40rem;

  position: absolute;
  bottom: 0rem;
  right: 0rem;

  background: blue;
  border-radius: 0.25rem;
  background-image: url('/images/vscode9.png');
`;

export const Content = styled.div`
  max-width: 32rem;

  h3,
  p {
    margin-bottom: 2rem;
  }

  h3 {
    line-height: 4rem;

    span {
      color: var(--primary);
    }
  }

  p {
    font-size: 1.25rem;
    color: white;
  }

  button:nth-child(2) {
    &:hover {
      background: var(--primary);
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
