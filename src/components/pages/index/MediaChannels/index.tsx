import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import {
  Container,
  Section,
  Content,
  TableContent,
  Headline,
  Label,
} from './styles';

export default function MediaChannels() {
  return (
    <Section>
      <Container>
        <Content>
          <h3>
            Conteúdo para
            <br /> <span>nunca parar de aprender</span>
          </h3>

          <ul>
            <li>
              <TableContent>
                <img src="/images/comunidade.svg" alt="Comunidade" />
                <Headline>
                  <h4>Comunidade</h4>
                  <p>Crie conexões e evolua junto com milhares de devs</p>
                </Headline>
              </TableContent>
              <Label>
                <p>PARTICIPAR AGORA</p>
                <IoIosArrowForward
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    color: '#bef264',
                  }}
                />
              </Label>
            </li>
          </ul>

          <ul>
            <li>
              <TableContent>
                <img src="/images/youtube.svg" alt="Youtube" />
                <Headline>
                  <h4>Canal Devnine</h4>
                  <p>Assista vídeos sobre programação e tecnologia</p>
                </Headline>
              </TableContent>
              <Label>
                <p>ACESSAR CANAL</p>
                <IoIosArrowForward
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    color: '#bef264',
                  }}
                />
              </Label>
            </li>
          </ul>

          <ul>
            <li>
              <TableContent>
                <img src="/images/instagram.svg" alt="Instagram" />
                <Headline>
                  <h4>Instagram</h4>
                  <p>
                    Atualizações da Devnine e ainda mais conhecimento para você
                  </p>
                </Headline>
              </TableContent>
              <Label>
                <p>SEGUIR A DEVNINE</p>
                <IoIosArrowForward
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    color: '#bef264',
                  }}
                />
              </Label>
            </li>
          </ul>

          <ul>
            <li>
              <TableContent>
                <img src="/images/blog.svg" alt="Blog" />
                <Headline>
                  <h4>Blog</h4>
                  <p>Artigos e tutoriais sobre ReactJS</p>
                </Headline>
              </TableContent>
              <Label>
                <p>ACESSAR BLOG</p>
                <IoIosArrowForward
                  style={{
                    height: '1.5rem',
                    width: '1.5rem',
                    color: '#bef264',
                  }}
                />
              </Label>
            </li>
          </ul>
        </Content>
      </Container>
    </Section>
  );
}
