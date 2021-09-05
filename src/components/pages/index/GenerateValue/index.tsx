import React from 'react';

import { ButtonPrimary } from '../../../components/ButtonPrimary/styles';
import { Container, Content, Section } from './styles';

export default function GenerateValue() {
  return (
    <Section>
      <Container>
        <img src="/images/homem.svg" alt="Garoto programando" />

        <Content>
          <h3>
            <span>Milhares</span> de devs já se conectaram.
          </h3>
          <p>
            Comece a avançar agora mesmo na direção dos seus objetivos e alcance
            o seu lugar como dev.
          </p>
          <ButtonPrimary type="button">Criar minha conta</ButtonPrimary>
        </Content>
      </Container>
    </Section>
  );
}
