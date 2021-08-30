import React from 'react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaYoutube, FaFacebook } from 'react-icons/fa';

import { Container, Content, Section } from './styles';

export const SocialMediaFooter = () => {
  return (
    <Section>
      <Container>
        <a href="/">
          <Content>
            <FaYoutube
              style={{ color: '#bef264', height: '1.8rem', width: 'auto' }}
            />
          </Content>
        </a>
        <a href="/">
          <Content>
            <AiFillInstagram
              style={{ color: '#bef264', height: '1.8rem', width: 'auto' }}
            />
          </Content>
        </a>
        <a href="/">
          <Content>
            <FaFacebook
              style={{ color: '#bef264', height: '1.8rem', width: 'auto' }}
            />
          </Content>
        </a>
      </Container>
    </Section>
  );
};
