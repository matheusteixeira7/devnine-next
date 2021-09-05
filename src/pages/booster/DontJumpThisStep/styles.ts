import styled from 'styled-components';

export const Section = styled.section`
  background: linear-gradient(90deg, #eba417 -196.74%, #181620 61.49%);
  border: 1px solid #29292e;
`;

export const Container = styled.div`
  margin: 7rem auto;
  max-width: 1120px;
  padding: 0 2rem;
`;

export const Card = styled.div`
  background: linear-gradient(90deg, #eba417 -196.74%, #181620 61.49%);
  border-radius: 0.25rem;
  border: 2px solid #29292e;
  padding: 2.2rem 12rem;
  position: relative;

  h4 {
    margin-bottom: 1.25rem;
  }

  p {
    color: white;
    max-width: 28rem;
  }
`;

export const WarningCard = styled.div`
  align-items: center;
  background: rgba(164, 119, 43, 0.4);
  border-right: 2px solid #29292e;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 10rem;
`;

export const Starter = styled.div`
  align-items: center;
  background: linear-gradient(
    90deg,
    #29292e -2.6%,
    rgba(24, 22, 32, 1) 151.95%
  );
  border-radius: 1rem;

  display: flex;
  height: 17rem;
  justify-content: center;
  position: absolute;
  right: -2rem;
  top: -1.5rem;
  width: 28rem;

  div {
    border-radius: 1rem;
    border-right: 1px solid #29292e;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      padding: 2rem;
    }
  }

  p {
    padding: 2rem;
    text-align: center;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    position: relative;

    button {
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;

      height: 2.75rem;

      background: linear-gradient(
        90deg,
        rgba(190, 242, 100, 0.3) 0%,
        rgba(138, 174, 74, 0.3) 100%
      );
      border-radius: 0px 0px 10px 0px;

      border: none;
      color: var(--primary);
    }
  }
`;
