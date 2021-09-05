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
  height: 4rem;
  width: 100%;
  margin-left: 1rem;
  transition: all 200ms ease;

  &:hover {
    background: var(--blue-500);
    border: 1px solid transparent;
    color: var(--background);
  }
`;
