import React from 'react';
import { MainWrapper } from '../styles/main';
import { Row, ColOneOfTwo } from '../globals/grid';
import { Button } from '../../styles';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <MainWrapper>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for advature people
          </h2>
        </div>

        <Row>
          <ColOneOfTwo>
            <h3 className="heading-teritary u-margin-bottom-small">
              You going to love the nature
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam at deleniti laudantium quo optio qui dolor quibusdam
              provident cumque beatae!
            </p>

            <h3 className="heading-teritary u-margin-bottom-small">
              Live and explore the nature like never before
            </h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam at deleniti laudantium quo optio qui dolor quibusdam
              provident cumque beatae!
            </p>

            <Link to="/" className="btn-text">
              Learn more &rarr;
            </Link>
          </ColOneOfTwo>

          <ColOneOfTwo>for the images</ColOneOfTwo>
        </Row>
      </section>
    </MainWrapper>
  );
}
