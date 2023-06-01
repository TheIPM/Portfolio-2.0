import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/projpic.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
        title: "Metro Madness",
        description: "Chatroom, using adelaide metro API to track every metro service.",
        imgUrl: projImg1,
        link: "https://ancient-taiga-24963.herokuapp.com/login",
        repoLink: "https://github.com/TheIPM/MetroMadness",
      },
      {
        title: "5 minute Trivia",
        description: "A fun trivia game to pass the time!",
        imgUrl: projImg2,
        link: "https://theipm.github.io/Trivia-Games/",
        repoLink: "https://github.com/TheIPM/Trivia-Games",
      },
      {
        title: "Horiseon",
        description: "Refactoring of a website.",
        imgUrl: projImg3,
        link: "https://theipm.github.io/Horiseon-Webpage-Refactoring/",
        repoLink: "https://github.com/TheIPM/Horiseon-Webpage-Refactoring",
      },
      {
        title: "Weathercat",
        description: "A dashboard that gets weather forecasts from around the world, and has fun cat CSS animations.",
        imgUrl: projImg4,
        link: "https://theipm.github.io/WeatherCat-Dashboard/",
      },
      {
        title: "Just another text editor",
        description: "Using PWAs to have offline capabilities for a text editor.",
        imgUrl: projImg5,
        link: "https://immense-escarpment-06002.herokuapp.com",
        repoLink: "https://github.com/TheIPM/PWA-fying-the-text-editor"
      },
      {
        title: "Money Buddy",
        description: "A buddy for your Money",
        imgUrl: projImg7,
        link: "https://shielded-reaches-02791.herokuapp.com",
        repoLink: "https://github.com/TheIPM/Money-Buddy"
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