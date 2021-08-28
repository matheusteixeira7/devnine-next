import React from 'react';

import { ButtonPrimary } from '../ButtonPrimary/styles';
import { Container, Content, Section } from './styles';

export const Hero = () => (
  <Section>
    <Container>
      <Content>
        <span className="support-text">👏 Bem vindo(a) ao futuro</span>
        <h1>
          Aprenda a programar -<br /> <span>de graça</span>.
        </h1>
        <h2>
          Aprenda desenvolvimento web criando projetos reais e se mantenha
          relevante no mercado.
        </h2>
        <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
      </Content>

      <img src="/images/mulher.svg" alt="Garota programando" />
    </Container>
  </Section>
);
