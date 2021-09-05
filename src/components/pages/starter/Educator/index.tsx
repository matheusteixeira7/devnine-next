import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaGithub, FaYoutube } from 'react-icons/fa';

import {
  Section,
  Container,
  Content,
  Dash,
  Card,
  Profile,
  ProfilePic,
  CardContent,
  ButtonsContainer,
  ButtonsSection,
  ButtonsContent,
} from './styles';

export default function Educator() {
  return (
    <Section>
      <Container>
        <Content>
          <header>
            <div>
              <Dash />
              <p>Conheça o Matheus, educador que vai te guiar nessa trilha.</p>
            </div>
            <h3>Com quem você vai aprender</h3>
          </header>

          <Card>
            <Profile>
              <ProfilePic>
                <img src="/images/matheus.png" alt="Foto do educador" />
              </ProfilePic>
              <div>
                <h4>Matheus Teixeira</h4>
                <p>Educador</p>
              </div>
            </Profile>

            <CardContent>
              <p>
                Apaixonado por ajudar quem está dando os primeiros passos nesse
                universo. Vem transformando milhares de devs através dos seus
                conteúdos e cursos.
                <br />
                <br /> Com uma linguagem fácil de assimilar e simpatia que é
                marca registrada do educador, ele vai te guiar pela jornada do
                Discover e te ajudar a avançar para o próximo nível.
              </p>

              <ButtonsSection>
                <ButtonsContainer>
                  <a href="/">
                    <ButtonsContent>
                      <FaYoutube
                        style={{
                          color: '#bef264',
                          height: '1.8rem',
                          width: 'auto',
                        }}
                      />
                    </ButtonsContent>
                  </a>
                  <a href="/">
                    <ButtonsContent>
                      <AiFillInstagram
                        style={{
                          color: '#bef264',
                          height: '1.8rem',
                          width: 'auto',
                        }}
                      />
                    </ButtonsContent>
                  </a>
                  <a href="/">
                    <ButtonsContent>
                      <FaGithub
                        style={{
                          color: '#bef264',
                          height: '1.8rem',
                          width: 'auto',
                        }}
                      />
                    </ButtonsContent>
                  </a>
                </ButtonsContainer>
              </ButtonsSection>
            </CardContent>
          </Card>
        </Content>
      </Container>
    </Section>
  );
}
