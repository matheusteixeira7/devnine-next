import React from 'react';

import { ButtonPrimary } from '../../../ButtonPrimary/styles';
import {
  ButtonContainer,
  Container,
  Content,
  Section,
  SupportText,
} from './styles';

export default function Hero() {
  return (
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
            construindo uma base sólida para construir suas primeiras
            aplicações.
          </h2>
          <ButtonContainer>
            <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
            <p>
              HTML, CSS, Sass,
              <br /> JavaScript, Git e muito mais.
            </p>
          </ButtonContainer>
        </Content>

        <img src="/images/coding_1.svg" alt="Rapaz programando" />
      </Container>
    </Section>
  );
}
