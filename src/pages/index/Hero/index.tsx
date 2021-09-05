import React from 'react';

import { ButtonPrimary } from '../../../components/ButtonPrimary/styles';
import { ButtonSecondary } from '../../../components/ButtonSecondary/styles';
import { ButtonsContainer, Container, Content, Section } from './styles';

export default function Hero() {
  return (
    <Section>
      <Container>
        <Content>
          <span className="support-text">👏 Bem vindo(a) à Devnine</span>
          <h1>
            Aprenda a <span>programar do zero</span>.
          </h1>
          <h2>
            Torne-se um profissional de alto impacto com capacidade para criar,
            resolver, ajudar, liderar e continuar evoluindo sempre.
          </h2>
          <ButtonsContainer>
            <ButtonPrimary type="button">Criar conta de graça</ButtonPrimary>
            <ButtonSecondary>Entrar</ButtonSecondary>
          </ButtonsContainer>
        </Content>

        <img src="/images/mulher.svg" alt="Garota programando" />
      </Container>
    </Section>
  );
}
