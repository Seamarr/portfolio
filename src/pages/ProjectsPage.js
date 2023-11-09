import React, {useState} from 'react';
// style and animations
import {Projects, ProjectList, Title, ButtonPlace} from '../styles';
import {expandAnim} from '../animations';
// projects data
import {projects} from '../projects';
// components
import Project from '../components/Project';
import ScrollTop from '../components/ScrollTop';
// router
import {Link} from 'react-router-dom';


const ProjectsPage = () => {
  const [projectList, setProjectList] = useState(projects());
  return(
    <ProjectList variants={expandAnim} initial="hidden" animate="show" exit="exit">
      <ScrollTop />
      <Title>My Work</Title>
      <ButtonPlace>
        <Link to="/">
          <button>Home</button>
        </Link>
      </ButtonPlace>
      <button></button>
      <Projects>
        {projectList.map((proj) => (
          <Project data={proj} />
        ))}
      </Projects>
    </ProjectList>
  );
};


export default ProjectsPage;
