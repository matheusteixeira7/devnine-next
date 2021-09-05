import styled from 'styled-components';

export const ButtonPrimary = styled.button`
  background: var(--primary);
  border-radius: 0.4rem;
  border: none;
  color: #121214;
  font-size: 1.25rem;
  font-weight: 700;
  height: 4rem;
  width: 100%;
  transition: filter 200ms ease;

  &:hover {
    filter: brightness(0.8);
  }
`;
