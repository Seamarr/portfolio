import React, {useState} from 'react';
//styles and animation
import {Projects, ProjectList, Title, ButtonPlace} from '../styles';
import {fade} from '../animations';
// project data
import {projects} from '../projects';
import Project from './Project';
// router
import {Link} from 'react-router-dom';
// components
import useScroll from './useScroll';

const MyWork = () => {
  const [element, controls] = useScroll();
  const [projectData, setProjects] = useState(projects());
  return(
    <ProjectList variants={fade} ref={element} animate={controls}>
      <Title>My Work</Title>
      <Projects>
        <Project data={projectData[0]} />
        <Project data={projectData[1]} />
        <Project data={projectData[8]} />
      </Projects>
      <ButtonPlace>
        <Link to="/work">
          <button>View All</button>
        </Link>
      </ButtonPlace>
    </ProjectList>
  );
};

export default MyWork;
