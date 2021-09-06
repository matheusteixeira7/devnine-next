import Link from 'next/link';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

import { Section, Container, Content, Titles, Cta } from './styles';

export default function MediaChannels() {
  return (
    <Section>
      <Container>
        <Content>
          <img src="/images/comunidade.svg" alt="Comunidade" />

          <Titles>
            <h4>Comunidade</h4>
            <p>Crie conexões e evolua junto com milhares de devs</p>
          </Titles>

          <Link href="/posts">
            <Cta>
              <p>ACESSAR COMUNIDADE</p>
              <div>
                <IoIosArrowForward style={{ color: '#bef264' }} />
              </div>
            </Cta>
          </Link>
        </Content>

        <Content>
          <img src="/images/comunidade.svg" alt="Comunidade" />

          <Titles>
            <h4>Canal Devnine</h4>
            <p>
              Assista quadros especiais, encontros ao vivo e conversas com
              convidados
            </p>
          </Titles>

          <Link href="/posts">
            <Cta>
              <p>ACESSAR COMUNIDADE</p>
              <div>
                <IoIosArrowForward style={{ color: '#bef264' }} />
              </div>
            </Cta>
          </Link>
        </Content>

        <Content>
          <img src="/images/comunidade.svg" alt="Comunidade" />

          <Titles>
            <h4>Instagram</h4>
            <p>Crie conexões e evolua junto com milhares de devs</p>
          </Titles>

          <Link href="/posts">
            <Cta>
              <p>ACESSAR COMUNIDADE</p>
              <div>
                <IoIosArrowForward style={{ color: '#bef264' }} />
              </div>
            </Cta>
          </Link>
        </Content>

        <Content>
          <img src="/images/comunidade.svg" alt="Comunidade" />

          <Titles>
            <h4>Blog</h4>
            <p>Crie conexões e evolua junto com milhares de devs</p>
          </Titles>

          <Link href="/posts">
            <Cta>
              <p>ACESSAR COMUNIDADE</p>
              <div>
                <IoIosArrowForward style={{ color: '#bef264' }} />
              </div>
            </Cta>
          </Link>
        </Content>
      </Container>
    </Section>
  );
}
