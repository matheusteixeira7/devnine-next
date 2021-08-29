import React from 'react';

import { Card, Container, Dash, Header, SupportText } from './styles';

export const Method = () => {
  return (
    <Container>
      <Header>
        <h3>
          Método desenhado para <span>acelerar</span> sua evolução.
        </h3>
        <SupportText>
          <Dash />
          <p>
            Combinamos 3 pilares para você conquistar experiência, dominar as
            ferramentas e saber se posicionar profissionalmente.
          </p>
        </SupportText>
      </Header>

      <Card>
        <div>
          <img src="/images/methodIcon.svg" alt="ícone" />
          <h4>Foco</h4>
          <p>
            Programação é um universo infinito, logo ter foco é essencial. Nós
            vamos direto ao ponto no que realmente importa para você dominar as
            ferramentas, não apenas conhecê-las.
          </p>
        </div>
        <div>
          <img src="/images/methodIcon.svg" alt="ícone" />
          <h4>Prática</h4>
          <p>
            A programação é uma disciplina prática. São as horas de código que
            vão te preparar e dar a experiência necessária para tomar as
            melhores decisões no mundo real.
          </p>
        </div>
        <div>
          <img src="/images/methodIcon.svg" alt="ícone" />
          <h4>Grupo</h4>
          <p>
            A conexão entre Devs impulsiona seu repertório técnico, suas
            habilidades comportamentais e sua rede de contatos. Além de ajudar a
            assimilar e fixar todo aprendizado.
          </p>
        </div>
      </Card>
    </Container>
  );
};
