import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './sass/main.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Feauture from './components/Feauture';
import Tours from './components/Tours';
import Stories from './components/Stories';
import Booking from './components/Booking';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Header />
        <About />
        <Feauture />
        <Tours />
        <Stories />
        <Booking />
        <Footer />
      </BrowserRouter>
    </>
  );
}
