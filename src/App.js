import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from './components/globals/globalstyles';
import Header from './components/globals/Header';
import Main from './components/sections/Main';
import Feautures from './components/sections/Feautures';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main />
        <Feautures />
      </BrowserRouter>
    </>
  );
}
