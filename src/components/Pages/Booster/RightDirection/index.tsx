import React from 'react';

import {
  BoosterHeaderButtons,
  ButtonPrimary,
  ButtonSecondary,
  Container,
  Section,
} from './styles';

export const RightDirection = () => {
  return (
    <Section>
      <Container>
        <h3>
          <span>
            Acelere na direção certa,
            <br />
          </span>
          com foco no que importa para você.
        </h3>
        <p>
          O Booster é um programa para quem já domina os fundamentos da
          programação.
          <br />
          <br />
          Nós vamos a fundo em ReactJS, através de um programa desenhado para
          ser muito prático, aplicando uma metodologia que vai te preparar para
          os desafios do mundo real.
          <br />
          <br />
          Além disso, o programa também conta com uma trilha para você
          desenvolver habilidades comportamentais, para te ajudar a se destacar
          no mercado.
          <br />
          <br />
        </p>

        <BoosterHeaderButtons>
          <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
          <ButtonSecondary type="button">Saiba mais</ButtonSecondary>
        </BoosterHeaderButtons>
      </Container>
    </Section>
  );
};
