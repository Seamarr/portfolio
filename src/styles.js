// animation and styles
import {motion} from 'framer-motion';
import styled from 'styled-components';

export const Projects = styled(motion.div)`
  min-height: 10vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 5rem;
`;

export const ProjectList = styled(motion.div)`
  padding: 5rem 5rem;
  h2{
    padding-bottom: 5rem;
    text-align: center;
  }
`;

export const Title = styled(motion.h3)`
  text-align: center;
  font-size: 3rem;
  font-weight: lighter;
  padding-bottom: 3rem;
`;

export const ButtonPlace = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;
  button{
    font-size: 1rem;
    padding: 0.5rem 2rem;
    border: none;
    cursor: pointer;
    background: #ff7676;
    color: white;
  }
`;
