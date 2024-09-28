import React, { useState, useEffect } from "react";
// animations and style
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageFade } from "../animations";
// history
import { useHistory } from "react-router-dom";
// data
import { projects } from "../projects";
// image
import django from "../img/Django-Logo.png";
// route link
import { Link } from "react-router-dom";
// components
import ScrollTop from "../components/ScrollTop";

const ProjectDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projectList, setProjectList] = useState(projects);
  const [project, setProject] = useState(null);

  // scroll to top function
  const scrollTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  // get image for framework and language
  const getIcon = (iconName) => {
    switch (iconName) {
      case "React JS":
        return <i class="fab fa-react"></i>;
      case "Django":
        return <img src={django} alt="" />;
      case "JavaScript":
        return <i class="fab fa-js-square"></i>;
      case "Python":
        return <i class="fab fa-python"></i>;
      case "CSS":
        return <i class="fab fa-css3-alt"></i>;
      case "HTML5":
        return <i class="fab fa-html5"></i>;
      default:
        return <TechStack>{iconName},</TechStack>;
    }
  };

  useEffect(() => {
    const currentProject = projectList.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
  }, [projectList, url]);

  return (
    <motion.div variants={pageFade} initial="hidden" animate="show" exit="exit">
      <ScrollTop />
      {project && (
        <Detail>
          <TopName>{project.name}</TopName>
          <Info>
            <Block>
              <FrameTitle>Framework(s)</FrameTitle>
              <Tech>{project.technology.map((frame) => getIcon(frame))}</Tech>
            </Block>
            <Block2>
              <FrameTitle>Language(s)</FrameTitle>
              <Tech>
                {project.languages.map((language) => getIcon(language))}
              </Tech>
            </Block2>
          </Info>
          <Block>
            <RepoTitle>Repository</RepoTitle>
            <ReposLink href={project.repo}>{project.repo}</ReposLink>
          </Block>
          <ButtonPlace>
            <Link to="/">
              <button>Home</button>
            </Link>
          </ButtonPlace>
          <ButtonPlace>
            <Link to="/work">
              <button>All Projects</button>
            </Link>
          </ButtonPlace>
          <Media>
            <motion.img src={project.mainImg} alt="project" />
          </Media>
          <DescTitle>Description</DescTitle>
          <Description>
            <p>{project.description}</p>
          </Description>
          <Gallery>
            {project.images.map((image) => (
              <img src={image} alt="project" />
            ))}
          </Gallery>
          <ScrollButton>
            <button onClick={scrollTop}>Scroll Top</button>
          </ScrollButton>
        </Detail>
      )}
    </motion.div>
  );
};

// styling

const Detail = styled(motion.div)`
  width: 80%;
  background: white;
  left: 10%;
  color: black;
  img {
    width: 100%;
  }
`;

const Gallery = styled(motion.div)`
  img {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: 7rem;
    border: 3px solid #ff7676;
  }
  @media (max-width: 500px) {
    padding-left: 9rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 75%;
    display: block;
    margin-left: 22rem;
    margin-right: auto;
    border: 3px solid #ff7676;
    @media (max-width: 1000px) {
      margin-left: 8rem;
    }
    @media (max-width: 500px) {
      margin-left: 9rem;
    }
  }
`;

const Tech = styled(motion.div)`
  padding: 1rem 20vh;
  display: flex;
  @media (max-width: 1000px) {
    padding: 0rem 2vh;
  }
  @media (max-width: 500px) {
    padding: 0rem 0vh;
  }
`;

const Description = styled(motion.div)`
  margin: 1rem 0rem;
  text-align: center;
  padding-left: 20rem;
  font-size: 1.3rem;
  @media (max-width: 1000px) {
    padding-left: 9rem;
  }
`;

export const DescTitle = styled(motion.h3)`
  text-align: center;
  font-size: 3rem;
  font-weight: lighter;
  padding-top: 2rem;
  padding-left: 20rem;
  @media (max-width: 1000px) {
    padding-left: 9rem;
  }
`;

const ButtonPlace = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 2rem 0rem 0rem 20rem;
  button {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media (max-width: 1000px) {
    padding: 1rem 10vh 0rem 10vh;
  }
  @media (max-width: 500px) {
    padding-left: 17rem;
  }
`;
const ScrollButton = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 2rem 0rem 5rem 20rem;
  button {
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  align-items: center;
  text-align: center;
  i {
    font-size: 5rem;
    color: #ff7676;
    padding: 0rem 2rem;
  }
  img {
    height: 6rem;
    width: 10rem;
  }
`;

const Block = styled(motion.div)`
  text-align: center;
`;

const Block2 = styled(motion.div)`
  text-align: center;
  padding-left: 10rem;
  @media (max-width: 1000px) {
    padding-left: 2rem;
  }
  @media (max-width: 500px) {
    padding-left: 0rem;
  }
`;

const FrameTitle = styled(motion.div)`
  padding: 5rem 25vh;
  font-size: 3rem;
  font-weight: lighter;
  padding-bottom: 1rem;
  padding-top: 7rem;
  @media (max-width: 1000px) {
    padding: 5rem 8vh;
  }
  @media (max-width: 500px) {
    padding: 2rem 0vh;
  }
`;
const RepoTitle = styled(motion.div)`
  font-size: 3rem;
  font-weight: lighter;
  padding-left: 20rem;
  @media (max-width: 1000px) {
    padding: 0rem 10vh 0rem 10vh;
  }
  @media (max-width: 500px) {
    padding-left: 12rem;
  }
`;

const ReposLink = styled.a`
  font-size: 2rem;
  padding: 1rem 0rem 0rem 20rem;
  color: #ff7676;
  @media (max-width: 1000px) {
    padding: 1rem 0rem 0rem 6rem;
  }
  @media (max-width: 500px) {
    padding-left: 2rem;
  }
`;

const TechStack = styled.h5`
  font-size: 2rem;
  color: #ff7676;
  @media (max-width: 1000px) {
    padding: 1rem 0rem 0rem 6rem;
  }
  @media (max-width: 500px) {
    padding-left: 2rem;
  }
`;

const TopName = styled(motion.div)`
  text-align: center;
  font-size: 5rem;
  font-weight: lighter;
  padding: 5rem 0rem 0rem 18rem;
  @media (max-width: 1300px) {
    padding: 5rem 0rem 0rem 9rem;
  }
`;

export default ProjectDetail;
