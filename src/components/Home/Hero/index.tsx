import React from 'react';

import { Container, Content } from './styles';

export const Hero = () => {
  return (
    <Container>
      <Content>
        <span className="support-text">👏 Bem vindo(a) ao futuro</span>
        <h1>
          Aprenda a programar - <span>de graça</span>.
        </h1>
        <h2>
          Aprenda desenvolvimento web criando projetos reais e se mantenha
          relevante no mercado.
        </h2>
      </Content>

      <img src="/images/mulher.svg" alt="Garota programando" />
    </Container>
  );
};
