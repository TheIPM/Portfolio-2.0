import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Metro Madness",
      description: "Chatroom, using adelaide metro API to track every metro service.",
      imgUrl: projImg1,
    },
    {
      title: "5 minute Trivia",
      description: "A fun trivia game to pass the time!",
      imgUrl: projImg2,
    },
    {
      title: "Horiseon",
      description: "Refactoring of a website.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>got some projects here</p>
                  <Row className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  
}