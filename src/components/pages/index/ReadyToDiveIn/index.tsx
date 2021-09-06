import React from 'react';

import {
  ButtonPrimary,
  ButtonsContainer,
  ButtonSecondary,
  Container,
  Section,
} from './styles';

export default function ReadyToDiveIn() {
  return (
    <Section>
      <Container>
        <header>
          <span>
            Aprenda a programar hoje e torne-se um profissional de alto impacto.
          </span>
          <h3>
            Junte-se a <span>milhares de devs</span>.
          </h3>
          <p>
            Você vai aprender programação do zero através de uma metodologia mão
            na massa e com foco no desenvolvimento web.
          </p>
        </header>

        <ButtonsContainer>
          <ButtonPrimary type="button">Criar conta de graça</ButtonPrimary>
          <ButtonSecondary type="button">Entrar</ButtonSecondary>
        </ButtonsContainer>
      </Container>
    </Section>
  );
}
