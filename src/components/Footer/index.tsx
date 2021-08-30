import React from 'react';

import { SocialMediaFooter } from '../SocialMediaFooter';
import { Branding, Container, Section } from './styles';

export const Footer = () => {
  return (
    <>
      <Section>
        <Container>
          <Branding>
            <img src="/images/logo-horizontal.svg" alt="Devnine Logo" />
            <span>Devnine 2021</span>
            <span>Todos os direitos reservados</span>
          </Branding>

          <nav>
            <ul>
              <li>Programas</li>
              <li>Starter</li>
              <li>Booster</li>
            </ul>

            <ul>
              <li>Sobre</li>
              <li>A Devnine</li>
              <li>Direitos autorais</li>
              <li>Termos de uso</li>
              <li>Políticas de privacidade</li>
            </ul>

            <ul>
              <li>Dúvidas</li>
              <li>Comunidade</li>
              <li>Central de ajuda</li>
            </ul>
          </nav>
        </Container>
      </Section>
    </>
  );
};
