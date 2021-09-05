import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai';

import { ButtonSecondary } from '../../../components/ButtonSecondary/styles';
import {
  Section,
  SupportText,
  Container,
  BoosterHeaderButtons,
  ButtonPrimary,
  HeroImg,
} from './styles';

export default function Hero() {
  return (
    <Section>
      <Container>
        <SupportText>
          <img src="/images/booster-logo.svg" alt="Booster Logo" />
          <p>Domine ReactJS</p>
        </SupportText>

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
            <ButtonSecondary type="button">
              <AiFillPlayCircle style={{ marginRight: '1rem' }} />
              Assistir vídeo
            </ButtonSecondary>
          </BoosterHeaderButtons>
        </header>

        <HeroImg src="/images/booster-hero-image.png" alt="React Site" />
      </Container>
    </Section>
  );
}
