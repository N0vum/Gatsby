import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const theme = {
  blue: '#6699FF',
  green: '#00B377',
  red: '#B3003B',
  lightgreen: '#E6FFF7',
  black: '#00160F',
};
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <GlobalStyles />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;800&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </StyledPage>
    </ThemeProvider>
  );
}
const StyledPage = styled.div`
  background: #eee;
  color: ${props => props.theme.black};
`;
const Content = styled.div`
  max-width: 900px;
  min-height: 40vw;
  padding: 6rem 1rem;
  margin: 0 auto;
`;
