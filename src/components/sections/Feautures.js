import React from 'react';
import { Globe } from 'styled-icons/fa-solid/Globe';
import { Compass } from 'styled-icons/fa-regular/Compass';
import { MapAlt } from 'styled-icons/boxicons-regular/MapAlt';
import { Heart } from 'styled-icons/fa-regular/Heart';
import { Container, Row, Col, Col3, Col4 } from '../globals/grid2';
import { Section } from '../styles/feautures';

export default function Feautures() {
  return (
    <Section>
      <Row>
        <Col3>
          <div className="feat-box">
            <Globe size="45" />
            <h4>Explore the World</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              ullam! Iste autem, sapiente minima ullam maiores reprehenderit
              labore repellendus, suscipit hic distinctio nulla esse officia
              architecto omnis ad, impedit aut ducimus? Nemo facilis neque
              explicabo, hic, maxime labore id nam repudiandae vero nihil autem
              dicta.
            </p>
          </div>
        </Col3>
        <Col3>
          <div className="feat-box">
            <Compass size="45" />
            <h4>Explore the World</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              ullam! Iste autem, sapiente minima ullam maiores reprehenderit
              labore repellendus, suscipit hic distinctio nulla esse officia
              architecto omnis ad, impedit aut ducimus? Nemo facilis neque
              explicabo, hic, maxime labore id nam repudiandae vero nihil autem
              dicta.
            </p>
          </div>
        </Col3>
        <Col3>
          <div className="feat-box">
            <MapAlt size="45" />
            <h4>Explore the World</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              ullam! Iste autem, sapiente minima ullam maiores reprehenderit
              labore repellendus, suscipit hic distinctio nulla esse officia
              architecto omnis ad, impedit aut ducimus? Nemo facilis neque
              explicabo, hic, maxime labore id nam repudiandae vero nihil autem
              dicta.
            </p>
          </div>
        </Col3>
        <Col3>
          <div className="feat-box">
            <span>
              <Heart size="45" />
            </span>
            <h4>Explore the World</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis,
              ullam! Iste autem, sapiente minima ullam maiores reprehenderit
              labore repellendus, suscipit hic distinctio nulla esse officia
              architecto omnis ad, impedit aut ducimus? Nemo facilis neque
              explicabo, hic, maxime labore id nam repudiandae vero nihil autem
              dicta.
            </p>
          </div>
        </Col3>
      </Row>
    </Section>
  );
}
