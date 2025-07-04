import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import Header from './componentes/Header';
import { StyledEngineProvider } from '@mui/material';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  
  .body {
    margin: 0;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StyledEngineProvider injectFirst>
    {/* <React.StrictMode> */}
      <GlobalStyle/>
        <App />
    {/* </React.StrictMode> */}
  </StyledEngineProvider>
);
