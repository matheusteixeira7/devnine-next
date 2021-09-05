import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

import {
  Section,
  Container,
  Content,
  FaqContainer,
  FaqQuestion,
  FaqResponse,
} from './styles';

export default function Faq() {
  const [faq1, setFaq1] = useState('');
  const [faq2, setFaq2] = useState('');
  const [faq3, setFaq3] = useState('');
  const [faq4, setFaq4] = useState('');

  return (
    <Section>
      <Container>
        <Content>
          <h3>
            Perguntas e respostas
            <br /> frequentes
          </h3>

          <FaqContainer>
            <FaqQuestion
              onClick={() =>
                faq1 === 'expanded' ? setFaq1('') : setFaq1('expanded')
              }
              className={faq1}
            >
              <ul>
                <li>1</li>
                <li>O que é o Booster?</li>
                <li className={faq1}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq1}>
                <p>
                  O Booster é um programa para quem já domina os fundamentos da
                  programação. Nós vamos a fundo em uma tecnologia, através de
                  um currículo desenhado para ser muito prático, aplicando uma
                  metodologia que vai te preparar para os desafios do mundo
                  real. Além disso, o programa também conta com uma trilha para
                  você desenvolver habilidades comportamentais, para te ajudar a
                  se destacar no mercado.
                </p>
              </FaqResponse>
            </FaqQuestion>

            <FaqQuestion
              onClick={() =>
                faq2 === 'expanded' ? setFaq2('') : setFaq2('expanded')
              }
              className={faq2}
            >
              <ul>
                <li>2</li>
                <li>O Booster oferece certificado?</li>
                <li className={faq2}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq2}>
                <p>
                  Sim, o certificado é entregue após o cumprimento de todas as
                  atividades. Esse não é um certificado de participação, e sim
                  uma certificação de que você dominou a tecnologia abordada na
                  trilha.
                </p>
              </FaqResponse>
            </FaqQuestion>

            <FaqQuestion
              onClick={() =>
                faq3 === 'expanded' ? setFaq3('') : setFaq3('expanded')
              }
              className={faq3}
            >
              <ul>
                <li>3</li>
                <li>Como faço para me matricular no Booster?</li>
                <li className={faq3}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq3}>
                <p>
                  Para fazer parte do Booster você deve aguardar a abertura de
                  uma nova turma. Normalmente as matriculas são abertas após uma
                  edição do evento NLW (Next Level Week). O período das
                  matrículas — abertura e encerramento — é limitado, assim como
                  o número de lugares no foguete. Por isso você deve se atentar
                  ao período de abertura para não ficar de fora e garantir sua
                  vaga. Você pode reservar sua vaga clicando aqui. Para receber
                  avisos sobre novas edições do NLW inscreva-se no formulário de
                  eventos disponível no site.
                </p>
              </FaqResponse>
            </FaqQuestion>

            <FaqQuestion
              onClick={() =>
                faq4 === 'expanded' ? setFaq4('') : setFaq4('expanded')
              }
              className={faq4}
            >
              <ul>
                <li>4</li>
                <li>Qual a duração do Booster?</li>
                <li className={faq4}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq4}>
                <p>
                  O Booster é um programa de 6 semanas, mas sabemos que cada
                  pessoa tem seu próprio ritmo. Por isso, o acesso aos conteúdos
                  é estendido por 2 anos. Esse tempo de acesso é mais do que
                  suficiente pra você ter concluído todo o programa e já estar
                  no próximo nível. Nós esperamos que em 2 anos esse conteúdo já
                  tenha lhe dado resultado e acelerado sua carreira.
                </p>
              </FaqResponse>
            </FaqQuestion>
          </FaqContainer>
        </Content>
      </Container>
    </Section>
  );
}
