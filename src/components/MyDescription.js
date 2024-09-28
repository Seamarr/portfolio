import React from "react";
// animation and styles
import { motion } from "framer-motion";
import styled from "styled-components";
import { titleAnim, fade } from "../animations";

const MyDescription = () => {
  return (
    <div className="desc">
      <Title variants={titleAnim}>About Me</Title>
      <Description variants={fade}>
        Hey! I'm Carlos Martinez. I'm currently a fourth-year Computer Science
        student at UCLA, graduating Spring 2025.
        <br />
        I'm also a previous software engineer intern @ LinkedIn, NASA JPL and
        Qualcomm.
        <br /> I am looking for a full-time SWE role in backend development,
        tool development, distributed systems, ML/AI, cloud computing, and
        infrastructure.
        <br /> You can check some of my personal projects down below.
      </Description>
    </div>
  );
};

const Title = styled(motion.h3)`
  text-align: center;
  font-size: 3rem;
  font-weight: lighter;
`;

const Description = styled(motion.p)`
  text-align: center;
  color: #ff7676;
  font-size: 1.5rem;
  padding: 2rem 5rem;
`;

export default MyDescription;
