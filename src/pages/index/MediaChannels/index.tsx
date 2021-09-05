import React from 'react';

import { Container, Section, Table, TableContent, TableRow } from './styles';

export default function MediaChannels() {
  return (
    <Section>
      <Container>
        <h3>
          Conteúdo para
          <br /> nunca parar de aprender
        </h3>
        <Table>
          <TableRow>
            <TableContent>
              <div>
                <img src="/images/comunidade.svg" alt="" />
                <h4>Comunidade</h4>
              </div>
              <p>Crie conexões e evolua junto com milhares de devs</p>
              <span>
                <a href="/">ACESSAR COMUNIDADE</a>
              </span>
            </TableContent>
          </TableRow>
        </Table>

        <Table>
          <TableRow>
            <TableContent>
              <div>
                <img src="/images/mediaChannel-yt.svg" alt="" />
                <h4>Canal Devnine</h4>
              </div>
              <p>
                Assista quadros especiais, encontros ao vivo e conversas com
                convidados
              </p>
              <span>
                <a href="/">ACESSAR CANAL</a>
              </span>
            </TableContent>
          </TableRow>
        </Table>

        <Table>
          <TableRow>
            <TableContent>
              <div>
                <img src="/images/instagram.svg" alt="" />
                <h4>Instagram</h4>
              </div>
              <p>Atualizações do foguete e drops de conhecimento</p>
              <span>
                <a href="/">SEGUIR A DEVNINE</a>
              </span>
            </TableContent>
          </TableRow>
        </Table>

        <Table>
          <TableRow>
            <TableContent>
              <div>
                <img src="/images/blog.svg" alt="" />
                <h4>Blog</h4>
              </div>
              <p>Artigos e tutoriais sobre Back-end, Front-end e Mobile</p>

              <span>
                <a href="/">ACESSAR BLOG</a>
              </span>
            </TableContent>
          </TableRow>
        </Table>
      </Container>
    </Section>
  );
}
