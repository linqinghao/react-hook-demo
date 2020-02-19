import React from 'react';
import './App.css';
import { GlobalStyle } from './style';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router/index';

function App() {
  return (
    <HashRouter>
      <GlobalStyle></GlobalStyle>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
