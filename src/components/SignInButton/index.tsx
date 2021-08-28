import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { Container } from './styles';

export const SignInButton = () => {
  const isLogged = true;

  return isLogged ? (
    <Container type="button">
      <FaGithub color="#bef264" />
      Matheus Teixeira
      <FiX className="closeIcon" />
    </Container>
  ) : (
    <Container type="button">
      <FaGithub color="#eba417" />
      Entre com Github
    </Container>
  );
};
