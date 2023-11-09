import React from 'react';
// style and anomations
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {expandAnim} from '../animations';
// router
import {Link} from 'react-router-dom';


const Project = ({data}) => {
  return (
    <StyledProject variants={expandAnim}>
      <Link to={data.url}>
        <h1>{data.name}</h1>
        <img src={data.mainImg} alt='pic' />
      </Link>
    </StyledProject>
  );
};

const StyledProject= styled(motion.div)`
  min-height: 30vh;
  max-width: 60vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  h1{
    text-decoration: none;
  }
  img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  @media (max-width: 550px){
    max-width: 40vh;
  }
`;

export default Project;
