import React from 'react';
import footerLogo from '../sass/img/logo-green-small-2x.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img src={footerLogo} alt="logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact Us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carriers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{' '}
            <a
              href="https:/masiuciszek.io"
              target="_blank"
              className="footer__link"
            >
              {' '}
              Marcell Ciszek
            </a>{' '}
            Web developer{' '}
            <a href="#" className="footer__link">
              Specialize in Javascript, React , Node Js
            </a>
            Copyright &copy; by Marcell Ciszek
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
