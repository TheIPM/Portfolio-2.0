import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const AboutMe = () => {
  return (
    <section className="about-me main-content" id="about-me">
      <Container className="h-100">
        <div className="d-flex h-100 align-items-center">
          <TrackVisibility>
            {({ isVisible }) => (
              <Row className="w-100 justify-content-center">
                <Col md={12} className={isVisible ? 'animate__animated animate__fadeInRight text-center' : 'text-center'}>
                  <h2>About Me</h2>
                  <p>
                    Hi, I'm Islam.
                  </p>
                  <p>
                    something something lorem something about me something something lorem something about me something something lorem something about mesomething something lorem something about mesomething something lorem something about mesomething something lorem something about mesomething something lorem something about me.
                  </p>
                </Col>
              </Row>
            )}
          </TrackVisibility>
        </div>
      </Container>
    </section>
  );
};

export { AboutMe };