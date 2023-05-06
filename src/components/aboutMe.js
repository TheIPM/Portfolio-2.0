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
            <Row className="justify-content-center align-items-center min-vh-100">
              <Col md={6} className={isVisible ? 'animate__animated animate__fadeInRight text-center' : 'text-center'}>
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