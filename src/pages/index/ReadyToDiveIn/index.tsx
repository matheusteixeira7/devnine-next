import React from 'react';

import { ButtonPrimary } from '../../../components/ButtonPrimary/styles';
import { ButtonSecondary } from '../../../components/ButtonSecondary/styles';
import {
  Section,
  Container,
  Content,
  ImgContainer,
  ButtonsContainer,
} from './styles';

export const ReadyToDiveIn = () => {
  return (
    <Section>
      <Container>
        <Content>
          <h3>
            Junte-se a <span>milhares de devs</span>.
          </h3>
          <p>
            Aprenda a programar hoje e torne-se um profissional de alto impacto.
          </p>

          <ButtonsContainer>
            <ButtonPrimary>Criar conta de graça</ButtonPrimary>
            <ButtonSecondary>Entrar</ButtonSecondary>
          </ButtonsContainer>
        </Content>
        <ImgContainer />
      </Container>
    </Section>
  );
};
