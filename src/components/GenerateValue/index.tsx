import React from 'react';

import { ButtonPrimary } from '../ButtonPrimary/styles';
import { Container, Content, Section } from './styles';

export const GenerateValue = () => {
  return (
    <Section>
      <Container>
        <img src="/images/homem.svg" alt="Garoto programando" />

        <Content>
          <h3>
            <span>Milhares</span> de devs já se conectaram.
          </h3>
          <p>
            Aprenda desenvolvimento web criando projetos reais e se mantenha
            relevante no mercado.
          </p>
          <ButtonPrimary type="button">Criar minha conta</ButtonPrimary>
        </Content>
      </Container>
    </Section>
  );
};
