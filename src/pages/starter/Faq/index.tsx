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
                <li>O que é o Starter?</li>
                <li className={faq1}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq1}>
                <p>
                  O Starter é um programa gratuito de formação de devs, feito
                  para você aprender do zero programação com foco em
                  desenvolvimento web. O principal objetivo do programa é te
                  ajudar a conquistar sua primeira oportunidade profissional
                  nessa área. Na plataforma você terá acesso a mais de 500 aulas
                  — e crescendo — para você ir desde a sua primeira linha de
                  código a preparação para desafios maiores. Você vai aprender
                  através de uma metodologia mão na massa, com apoio da
                  comunidade e dos nossos instrutores, em aulas guiadas por
                  educadores dedicados ao programa.
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
                <li>Quanto custa?</li>
                <li className={faq2}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq2}>
                <p>
                  O Starter é totalmente gratuito para toda comunidade, do
                  início ao fim. Esse é o tamanho do nosso compromisso em dar
                  oportunidade para todas as pessoas que queiram entrar nessa
                  área. Para entrar no Starter e se juntar a comunidade você só
                  precisa criar seu cadastro gratuito na plataforma Rocketseat
                  clicando aqui.
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
                <li>Preciso ter conhecimentos prévios para participar?</li>
                <li className={faq3}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq3}>
                <p>
                  Não é necessário, o Starter é justamente para quem quer
                  iniciar na programação. No curso você vai construir uma base
                  sólida na programação, do zero.
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
                <li>Como faço para participar do Starter?</li>
                <li className={faq4}>
                  <FaChevronDown />
                </li>
              </ul>

              <FaqResponse className={faq4}>
                <p>
                  Para acessar o Starter e começar a aprender programação você
                  só precisa se cadastrar gratuitamente na nossa plataforma
                  clicando aqui. Lembre-se de entrar na comunidade para ficar
                  por dentro das novidades sobre o Starter e para impulsionar
                  sua evolução através da troca de conhecimento com milhares de
                  devs.
                </p>
              </FaqResponse>
            </FaqQuestion>
          </FaqContainer>
        </Content>
      </Container>
    </Section>
  );
}
