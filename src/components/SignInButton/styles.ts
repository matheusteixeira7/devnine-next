import styled from 'styled-components';

export const Container = styled.button`
  height: 3rem;
  border-radius: 3rem;
  background: var(--gray-850);
  border: 0;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-weight: bold;

  transition: filter 200ms ease;

  svg {
    height: 20px;
    width: 20px;
  }

  svg.closeIcon {
    margin-left: 1rem;
  }

  svg:first-child {
    margin-right: 1rem;
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
