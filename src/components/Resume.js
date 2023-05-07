import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ResumeFile from '../assets/Islam M Resume 2023.pdf';


const Resume = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express',
    'MongoDB',
    'Git',
    'Responsive Web Design',
    'RESTful APIs',
  ];

  return (
    <section className="resume" id="resume">
      <Container>
        <TrackVisibility>
          {({ isVisible }) => (
            <Row className={`resume-row ${isVisible ? 'animate__animated animate__fadeInUp' : ''}`}>
              <Col>
                <h2>Skills</h2>
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                <h3>Download Resume</h3>
                <a href={ResumeFile} download="Islam_M_Resume_2023.pdf">
                <button type="button" style={{ color: 'white' }}>Click Here</button>
                </a>
              </Col>
            </Row>
          )}
        </TrackVisibility>
      </Container>
    </section>
  );
};

export { Resume };