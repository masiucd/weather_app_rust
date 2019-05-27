import React from 'react';
import { Link } from 'react-router-dom';
import logoWhite from '../sass/img/logo-white.png';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logoWhite} alt="white logo" className="header__logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>
        <Link to="/section-tours" class="btn btn--white btn--animated">
          Discover our tours
        </Link>
      </div>
    </header>
  );
}
