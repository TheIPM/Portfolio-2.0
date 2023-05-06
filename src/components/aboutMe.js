import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <Row>
              <Col md={6} className={isVisible ? 'animate__animated animate__fadeInRight' : ''}>
                <h2>About Me</h2>
                <p>
                  Hi, I'm Islam.
                </p>
                <p>
                  something something lorem something about me.
                </p>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

export { AboutMe };
