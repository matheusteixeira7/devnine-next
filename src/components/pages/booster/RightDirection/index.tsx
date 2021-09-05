import React from 'react';

import {
  BoosterHeaderButtons,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Content,
  ImageContainer,
  Section,
} from './styles';

export default function RightDirection() {
  return (
    <Section>
      <Container>
        <Content>
          <h3>
            <span>Acelere na direção certa, </span>
            com foco no que importa para você.
          </h3>
          <p>
            O Booster é um programa para quem já domina os fundamentos da
            programação.
          </p>
          <BoosterHeaderButtons>
            <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
            <ButtonSecondary type="button">Saiba mais</ButtonSecondary>
          </BoosterHeaderButtons>
        </Content>

        <ImageContainer>
          <div />
        </ImageContainer>
      </Container>
    </Section>
  );
}
