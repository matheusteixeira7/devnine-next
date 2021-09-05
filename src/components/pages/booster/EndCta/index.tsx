import React from 'react';

import {
  Section,
  Container,
  BoosterHeaderButtons,
  ButtonPrimary,
} from './styles';

export default function EndCta() {
  return (
    <Section>
      <Container>
        <header>
          <h1>
            Acelere sua carreira como <span>desenvolvedor Front-end</span>
          </h1>
          <h2>
            Desenvolvido para te preparar para o mercado, desenvolvendo skills
            técnicas e comportamentais. Evolua e certifique-se em ReactJS.
          </h2>

          <BoosterHeaderButtons>
            <ButtonPrimary type="button">Inscreva-se</ButtonPrimary>
          </BoosterHeaderButtons>
        </header>
      </Container>
    </Section>
  );
}
