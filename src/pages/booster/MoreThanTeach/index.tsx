import React from 'react';

import {
  Section,
  Container,
  Header,
  CardContainer,
  Card,
  Dash,
} from './styles';

export const MoreThanTeach = () => {
  return (
    <Section>
      <Container>
        <Header>
          <h3>
            Fazemos{' '}
            <span>
              mais do que
              <br /> ensinar programação
            </span>
            .
          </h3>
          <p>
            Preparamos profissionais de alto impacto com capacidade para criar,
            resolver,
            <br /> ajudar, liderar e continuar evoluindo sempre.
          </p>
        </Header>

        <CardContainer>
          <Card>
            <img src="/images/method-icon.svg" alt="Método" />
            <h4>Método de aprendizado poderoso</h4>
            <p>
              O Booster te impulsiona através de uma metodologia de aprendizado
              eficiente baseada em Foco, Prática e Grupo. Você poderá aplicar o
              método sempre que quiser aprender algo novo, para você evoluir
              dentro e fora dos treinamentos.
            </p>
            <Dash />
          </Card>

          <Card>
            <img src="/images/devnine-icon.png" alt="Incentivos" />
            <h4>
              Incentivos
              <br /> para ir além
            </h4>
            <p>
              Para consolidar o que você aprendeu nas aulas e associar o
              conhecimento adquirido às necessidades ao mercado, preparamos:
              desafios, eventos, mentorias e outras atividades. Tudo para você
              aperfeiçoar suas habilidades profissionais cada vez mais.
            </p>
            <Dash />
          </Card>

          <Card>
            <img src="/images/group-icon.svg" alt="Método" />
            <h4>
              Juntos,
              <br /> sempre!
            </h4>
            <p>
              Você sempre terá com quem contar. Um time incrível de instrutores
              vai te acompanhar durante a jornada. Você também terá acesso ao
              grupo exclusivo de estudantes, e a comunidade vai fortalecer suas
              habilidades através da ajuda mútua.
            </p>
            <Dash />
          </Card>
        </CardContainer>
      </Container>
    </Section>
  );
};
