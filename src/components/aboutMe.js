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
                  Im an aspiring Web Developer, ive created a number of web applications and am looking to improve my skills. I also have a goal of trying to improve myself and learn as much as I can and develop an array of skills. When it comes to work I can do anything since I enjoy doing anything
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