import styled from 'styled-components';

export const Section = styled.section`
  border: 1px solid #29292e;
`;
export const Container = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 7rem 0;
`;
export const Content = styled.div`
  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    div {
      margin-top: 1.5rem;

      div {
        margin-bottom: 1.5rem;
      }
    }

    h3 {
      text-align: right;
      /* width: 500px; */
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

export const Card = styled.div`
  height: 24rem;
  width: 50rem;
  background: linear-gradient(
    103.19deg,
    #403c52 -24.23%,
    rgba(30, 28, 39, 0) 55.65%
  );
  border-radius: 0.25rem;
  border: 1px solid rgb(190, 242, 100, 0.5);
  position: relative;
  margin: 5rem auto;
`;

export const Profile = styled.div`
  position: absolute;
  top: -5rem;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
  }

  p {
    font-size: 1.25rem;
  }
`;

export const ProfilePic = styled.div`
  align-items: center;
  background: linear-gradient(
    138.52deg,
    #bef264 13.28%,
    rgba(190, 242, 100, 0) 86.43%
  );
  border-radius: 50%;
  display: flex;
  height: 19.3rem;
  justify-content: center;
  width: 19.3rem;
  margin-bottom: 2rem;

  img {
    border-radius: 50%;
  }
`;

export const CardContent = styled.div`
  width: 23.75rem;
  position: absolute;
  top: 2rem;
  right: 2rem;

  p {
    font-weight: 700;
    color: var(--title);
  }
`;

export const ButtonsSection = styled.section`
  /* background: var(--background-linear); */
`;

export const ButtonsContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 2rem 0;

  a:not(:first-child) {
    margin-left: 1rem;
  }
`;

export const ButtonsContent = styled.div`
  background: #2a2836;
  height: 3.5rem;
  width: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0.25rem;
  border: none;

  transition: all 200ms ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
