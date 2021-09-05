import styled from 'styled-components';

export const Section = styled.section`
  border-bottom: 1px solid #29292e;
`;

export const Container = styled.div`
  /* height: calc(100vh - 5rem); */

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 7rem 2rem;
  max-width: 1120px;
`;

export const Content = styled.div`
  h3 {
    text-align: center;
    margin-bottom: 3.25rem;
  }
`;

export const Card = styled.div``;

export const SelectCourse = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

interface IButtonSelectCourseProps {
  isActive: boolean;
  activeColor?: 'primary' | 'accent';
}
const colors = {
  primary: '1px solid #bef264',
  accent: '1px solid #61dcfb',
};

export const ButtonSelectCourse = styled.button<IButtonSelectCourseProps>`
  background: #16141d;
  border: 1px solid #29292e;
  color: var(--title);
  font-weight: 700;
  height: 3rem;
  transition: all 200ms ease;

  background: ${(props) => (props.isActive ? '#312d3f' : '#16141D')};
  border-top: ${(props) =>
    props.isActive ? colors[props.activeColor] : '#29292e'};

  &:hover {
    filter: brightness(1.2);
  }
`;

export const Starter = styled.div<IButtonSelectCourseProps>`
  align-items: center;
  background: var(--shape);
  border: 1px solid #29292e;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  justify-content: space-around;
  min-height: 28rem;

  img {
    /* margin-right: auto; */
  }
`;

export const StarterContent = styled.div`
  max-width: 32rem;
  padding: 2rem;
  align-self: flex-start;

  img {
    margin-bottom: 2rem;
  }

  h4 {
  }

  h4,
  p {
    margin-bottom: 1rem;
  }
`;

export const StarterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 0 0 1rem;
    color: white;
  }
`;

export const Booster = styled.div<IButtonSelectCourseProps>`
  align-items: center;
  background: var(--shape);
  border: 1px solid #29292e;
  display: ${(props) => (props.isActive ? 'flex' : 'none')};
  justify-content: space-around;
  min-height: 28rem;

  img {
    /* margin-right: auto; */
  }
`;

export const BoosterContent = styled.div`
  max-width: 32rem;
  padding: 2rem;
  align-self: flex-start;

  img {
    margin-bottom: 2rem;
  }

  h4 {
  }

  h4,
  p {
    margin-bottom: 1rem;
  }

  button {
    background: var(--terciary);

    &:hover {
      filter: brightness(0.8);
    }
  }
`;

export const BoosterFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0 0 0 1rem;
    color: white;
  }
`;
