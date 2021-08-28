import React from 'react';

import { ButtonPrimary } from '../ButtonPrimary/styles';
import { Container, Content, Section } from './styles';

export const Hero = () => (
  <Section>
    <Container>
      <Content>
        <span className="support-text">👏 Bem vindo(a) à Devnine</span>
        <h1>
          A plataforma que te ensina a programar - <span>de graça</span>.
        </h1>
        <h2>
          Aprenda desenvolvimento web criando projetos reais e torne-se mantenha
          relevante no mercado.
        </h2>
        <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
      </Content>

      <img src="/images/mulher.svg" alt="Garota programando" />
    </Container>
  </Section>
);
