import React from 'react';

import {
  Section,
  Container,
  Footer,
  Title,
  ImgContainer,
  FooterContent,
} from './styles';

export default function DevnineHigher() {
  return (
    <Section>
      <Container>
        <img src="/images/higher.png" alt="Higher" />

        <div>
          <h3>
            Programação vai <span>muito além do código</span>
          </h3>

          <strong>
            Nosso objetivo no Booster é formar profissionais de alto impacto,
            com habilidades que vão além do código.
          </strong>

          <p>
            Por isso, ao entrar no Booster você terá incluso a trilha Devnine
            Higher, com conteúdos voltados para o desenvolvimento de habilidades
            comportamentais (soft skills). No Higher você terá conteúdos
            teóricos semanais e desafios práticos para evoluir sua comunicação,
            organização, criatividade, foco e produtividade.
          </p>
        </div>
      </Container>

      <Footer>
        <ImgContainer>
          <img src="/images/higherLogo.svg" alt="Logo" />
        </ImgContainer>

        <FooterContent>
          <Title>Devnine Higher</Title>
          <p>
            <strong>Aprenda a aprender:</strong> conteúdo prático de soft skills
            que vão te ajudar a evoluir como profissional.
          </p>
        </FooterContent>
      </Footer>
    </Section>
  );
}
