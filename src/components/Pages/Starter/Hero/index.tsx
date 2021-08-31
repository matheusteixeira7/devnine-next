import React from 'react';

import { ButtonPrimary } from '../../../ButtonPrimary/styles';
import { Container, Content, Section, SupportText } from './styles';

export const Hero = () => (
  <Section>
    <Container>
      <Content>
        <SupportText>
          <img src="/images/logo.svg" alt="" />
          <strong>
            Comece a<br />
            programar do zero
          </strong>
        </SupportText>
        <h1>
          Aulas <span>gratuitas</span> para iniciantes.
        </h1>
        <h2>
          No programa de ensino você aprenderá a base da programação,
          construindo uma base sólida para construir suas primeiras aplicações.
        </h2>
        <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
      </Content>

      <img src="/images/coding_1.svg" alt="Rapaz programando" />
    </Container>
  </Section>
);
