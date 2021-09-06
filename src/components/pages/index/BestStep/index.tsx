import React, { useState } from 'react';

import {
  Container,
  Content,
  Section,
  Card,
  SelectCourse,
  Starter,
  StarterContent,
  StarterFooter,
  ButtonSelectCourse,
  Booster,
  BoosterContent,
  BoosterFooter,
  ButtonPrimary,
} from './styles';

export default function BestStep() {
  // const [hovered, setHovered] = useState(false);
  const [activeStep, setActiveStep] = useState('starter');

  return (
    <Section>
      <Container>
        <Content>
          <h3>Encontre a melhor etapa para você estudar programação</h3>
          <Card>
            <SelectCourse>
              <ButtonSelectCourse
                type="button"
                onClick={() => setActiveStep('starter')}
                isActive={activeStep === 'starter'}
                activeColor="primary"
              >
                Para você começar
              </ButtonSelectCourse>

              <ButtonSelectCourse
                type="button"
                onClick={() => setActiveStep('booster')}
                isActive={activeStep === 'booster'}
                activeColor="accent"
              >
                Para você se aperfeiçoar
              </ButtonSelectCourse>
            </SelectCourse>
            <Starter isActive={activeStep === 'starter'}>
              <img src="/images/rocket.svg" alt="Foguete" />
              <StarterContent>
                <img src="/images/starterLogo.svg" alt="Starter Logo" />
                <h4>
                  Crie uma base sólida na programação para decolar rumo a
                  desafios maiores.
                </h4>
                <p>
                  São mais de 500 aulas gratuitas para você aprender programação
                  do zero, com foco em desenvolvimento web. Você vai encontrar
                  aulas para dominar HTML, CSS, JavaScript, HTTP, Forms,
                  Ferramentas, DOM e muito mais.
                </p>
                <StarterFooter>
                  <ButtonPrimary type="button">Criar conta</ButtonPrimary>
                  <p>O Starter é 100% gratuito e você pode começar agora</p>
                </StarterFooter>
              </StarterContent>
            </Starter>

            <Booster isActive={activeStep === 'booster'}>
              <img src="/images/booster.svg" alt="Foguete" />
              <BoosterContent>
                <img src="/images/boosterLogo.svg" alt="Booster Logo" />
                <h4>
                  Acelere na carreira através de uma tecnologia específica.
                </h4>
                <p>
                  O Ignite é um programa de aceleração profissional com
                  treinamentos certificados e reconhecidos pelo mercado. Domine
                  Elixir, Flutter, Node.js, React ou React Native e prepare-se
                  para as melhores oportunidades.
                </p>
                <BoosterFooter>
                  <ButtonPrimary type="button">Criar conta</ButtonPrimary>
                  <p>
                    <strong>Pré-requisito</strong>: ter uma base sólida no
                    desenvolvimento web.
                  </p>
                </BoosterFooter>
              </BoosterContent>
            </Booster>
          </Card>
        </Content>
      </Container>
    </Section>
  );
}
