import React from 'react';

import { Section, Container, Card, WarningCard, Starter } from './styles';

export default function DontJumpThisStep() {
  return (
    <Section>
      <Container>
        <Card>
          <h4>Não pule essa etapa</h4>
          <p>
            <strong>Para avançar você precisa de uma base sólida.</strong>
            <br /> O Starter é um programa gratuito para você dominar os
            fundamentos do desenvolvimento web e se preparar para o próximo
            nível.
          </p>

          <WarningCard>
            <img src="/images/warning.svg" alt="Warning" />
          </WarningCard>

          <Starter>
            <div>
              <img src="/images/starter-logo.svg" alt="Starter" />
            </div>

            <p>
              <strong>+500 aulas disponíveis</strong> que vão colocar você na
              trilha certa do mercado de trabalho
              <button type="button">COMEÇAR AGORA MESMO</button>
            </p>
          </Starter>
        </Card>
      </Container>
    </Section>
  );
}
