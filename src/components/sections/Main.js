import React from 'react';
import { MainWrapper } from '../styles/main';
import { Row, ColOneOfTwo } from '../globals/grid';
import { Button } from '../../styles';
import { TwoColWrappers } from '../styles/composision';
import { Link } from 'react-router-dom';
import nat1 from '../../img/nat-1-large.jpg';
import nat2 from '../../img/nat-2-large.jpg';
import nat3 from '../../img/nat-3-large.jpg';

export default function Main() {
  return (
    <MainWrapper>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exciting tours for advature people
          </h2>
        </div>

        <TwoColWrappers>
          {/* <Row> */}
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

          <ColOneOfTwo>
            <div className="composition">
              <img
                src={nat1}
                alt="nature"
                className="composition__photo composition__photo--p1 __photo"
              />
              <img
                src={nat2}
                alt="nature2"
                className="composition__photo composition__photo--p1 __photo"
              />
              <img
                src={nat3}
                alt="nature3"
                className="composition__photo composition__photo--p1 __photo"
              />
            </div>
          </ColOneOfTwo>
          {/* </Row> */}
        </TwoColWrappers>
      </section>
    </MainWrapper>
  );
}
