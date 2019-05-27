import React from 'react';
import { Globe } from 'styled-icons/fa-solid/Globe';
import { Compass2 } from 'styled-icons/icomoon/Compass2';
import { Suitcase } from 'styled-icons/fa-solid/Suitcase';
import { Heart } from 'styled-icons/boxicons-regular/Heart';

export default function Feauture() {
  return (
    <div>
      <section className="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <span className="feature-box__icon icon-basic-world">
                {' '}
                <Globe size="34" style={{ color: '#444' }} />{' '}
              </span>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Explore the world
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <span className="feature-box__icon icon-basic-world">
                {' '}
                <Compass2 size="34" style={{ color: '#444' }} />{' '}
              </span>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Meet nature
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <span className="feature-box__icon icon-basic-world">
                {' '}
                <Suitcase size="34" style={{ color: '#444' }} />{' '}
              </span>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Find your way
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className="col-1-of-4">
            <div className="feature-box">
              <span className="feature-box__icon icon-basic-world">
                {' '}
                <Heart size="34" style={{ color: '#444' }} />{' '}
              </span>
              <h3 className="heading-tertiary u-margin-bottom-small">
                Live a healthier life
              </h3>
              <p className="feature-box__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
