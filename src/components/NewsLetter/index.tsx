import React, { useState } from 'react';
import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import { Section, Container, NewsletterContainer, Content } from './styles';

export const NewsLetter = () => {
  const [state, setState] = useState({ value: '' });
  const handleSubmit = (event) => {
    alert(`a name was submitted ${state.value}`);
    event.preventDefault();
  };

  const handleChange = (event) => {
    setState({ value: event.target.value });
  };

  return (
    <Section>
      <Container>
        <h4>
          Receba informações sobre programação
          <br /> e tecnologia em primeira mão
        </h4>
        <NewsletterContainer>
          <form onSubmit={handleSubmit}>
            <div>
              <MdEmail
                style={{
                  marginLeft: '1rem',
                  position: 'absolute',
                  color: '#737380',
                  height: '1.5rem',
                  width: '1.5rem',
                }}
              />
              <input
                type="email"
                name="newsletter"
                id="#email"
                placeholder="E-mail"
                value={state.value}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="notificacoes">
                <input type="checkbox" name="notificacoes" id="notificacoes" />
                <span>Concordo em receber notificações</span>
              </label>
            </div>
            <button type="submit" value="Submit">
              ME INSCREVER
            </button>
          </form>
        </NewsletterContainer>
      </Container>
    </Section>
  );
};
