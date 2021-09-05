import React from 'react';

import { Container, Content, Dash, List, Section } from './styles';

export default function ResourcesList() {
  return (
    <Section>
      <Container>
        <h3>
          Todos os recursos
          <br /> que você terá direito
        </h3>
        <Content>
          <List>
            <ul>
              <li>
                <img src="/images/devnine-icon.png" alt="Devnine Higher" />
                <div>
                  <p>Acesso ao Devnine Higher</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/certificate-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Certificado de conclusão</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/support-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Suporte estendido por 2 anos</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/challenge-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Desafios a cada etapa</p>
                  <Dash />
                </div>
              </li>
            </ul>
          </List>
          <List>
            <ul>
              <li>
                <img src="/images/calender-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Eventos exclusivos para alunos e alunas</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/teacher-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Instrutores para te ajudar no que precisar</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/group-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Grupo privado</p>
                  <Dash />
                </div>
              </li>
              <li>
                <img src="/images/alumni-icon.svg" alt="Devnine Higher" />
                <div>
                  <p>Benefícios para ex-alunos e alunas</p>
                  <Dash />
                </div>
              </li>
            </ul>
          </List>
        </Content>
      </Container>
    </Section>
  );
}
