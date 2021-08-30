import React from 'react';

import { SignInButton } from '../SignInButton';
import { Container, Content } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src="/images/logo-horizontal.svg" alt="Devnine Logo" />
        <nav>
          <a href="/" className="active">
            Home
          </a>
          <a href="/">Posts</a>
          <a href="/">Vídeos</a>
          <a href="/">Starter</a>
          <a href="/">Booster</a>
        </nav>

        <SignInButton />
      </Content>
    </Container>
  );
};
