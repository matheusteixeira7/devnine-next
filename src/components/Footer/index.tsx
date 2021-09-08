import Image from 'next/image';
import React from 'react';

import { SocialMediaFooter } from '../SocialMediaFooter';
import { Branding, Container, Section } from './styles';

export default function Footer() {
  return (
    <>
      <Section>
        <Container>
          <Branding>
            <Image
              src="/images/logo-horizontal.svg"
              alt="Devnine Logo"
              width={300}
              height={82}
            />
            <div>
              <p>Devnine 2021</p>
              <p>Todos os direitos reservados</p>
            </div>
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
      <SocialMediaFooter />
    </>
  );
}
