import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --gray-100: #e1e1e6; 
  --gray-300: #a8a8b3;
  --gray-700: #29292e;
  --gray-850: #1f2729;
  --gray-900: #121214;

  --blue-500: #61dafb;

  --primary: #bef264;
  --accent: #eba417;

  --title: #e1e1e6;
  --body-text: #A8A8B3;

  --shape: #1E1C27;
  --background: #181620;
  --background-linear: linear-gradient(to right, #1f1d26, #181620);
}

html {
  font-family: "Roboto", sans-serif;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: var(--white);
}

body {
  input, textarea, select, button, a {
    font: 400 1rem "Roboto", sans-serif;
  }
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}

h1 {
  font-size: 4rem;
  line-height: 5rem;
  font-weight: 700;
}

h2 {
  font-size: 1.5rem;
  line-height: 2.25rem;
  font-weight: 400;
}

h3 {
  font-size: 3.75rem;
  line-height: 5.25rem;
  font-weight: 900;
}

h4 {
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 700;
}

p {
  font-size: 1rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: var(--body-text)
}
`;
