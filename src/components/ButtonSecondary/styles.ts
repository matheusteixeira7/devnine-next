import styled from 'styled-components';

export const ButtonSecondary = styled.button`
  background: transparent;
  border-radius: 0.25rem;
  border: 1px solid white;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 1rem;
  height: 4rem;
  width: 100%;
  transition: all 200ms ease;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 1rem;
  }

  &:hover {
    background: var(--blue-500);
    border: 1px solid transparent;
    color: var(--background);
  }
`;
