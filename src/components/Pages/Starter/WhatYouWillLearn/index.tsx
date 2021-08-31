import React from 'react';

import {
  BarBlue,
  BarGreen,
  BarYellow,
  Card,
  CardContainer,
  Classes,
  Container,
  Content,
  Section,
} from './styles';

export const WhatYouWillLearn = () => {
  return (
    <Section>
      <Container>
        <Content>
          <header>
            <h3>O que você vai aprender</h3>
            <p>
              Você vai aprender programação do zero através de uma metodologia
              mão na massa e com foco no desenvolvimento web.
              <br />
              São +500 aulas nessa jornada para te ajudar a construir uma base
              sólida em programação junto com milhares de outros devs.
            </p>
          </header>

          <CardContainer>
            <Card>
              <img src="/images/html.svg" alt="HTML Icon" />
              <h4>Estruturando sua página</h4>
              <p>
                A trilha para você aprender a como estruturar sua página HTML5 e
                organizar seu conteúdo para auxiliar na indexação por parte das
                ferramentas de busca como Google.
              </p>

              <Classes>
                <strong>Número de aulas</strong>
                <span>36 aulas</span>
                <strong>Duração</strong>
                <span>1 semana</span>
              </Classes>
              <BarGreen />
            </Card>

            <Card>
              <img src="/images/css2.svg" alt="CSS Icon" />
              <h4>Estilizando suas aplicações</h4>
              <p>
                A trilha perfeita para quem quer aprender a estilizar suas
                aplicações utilizando conceitos modernos, como Flexbox, Grid
                Layout e Sass.
              </p>

              <Classes>
                <strong>Número de aulas</strong>
                <span>87 aulas</span>
                <strong>Duração</strong>
                <span>2 semanas</span>
              </Classes>
              <BarBlue />
            </Card>

            <Card>
              <img src="/images/js.svg" alt="JavaScript Icon" />
              <h4>Construindo aplicações</h4>
              <p>
                A trilha para quem quer aprender os conceitos mais importantes
                de JavaScript que vão te possibilitar avançar para o próximo
                nível: aprender um framework como ReactJS, React Native, ou
                NodeJS.
              </p>

              <Classes>
                <strong>Número de aulas</strong>
                <span>226 aulas</span>
                <strong>Duração</strong>
                <span>6 semana</span>
              </Classes>
              <BarYellow />
            </Card>
          </CardContainer>
        </Content>
      </Container>
    </Section>
  );
};
