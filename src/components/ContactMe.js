import React from "react";
// style and animations
import { motion } from "framer-motion";
import styled from "styled-components";
import { Title } from "../styles";
import { expandAnim } from "../animations";
// components
import useScroll from "./useScroll";

const ContactMe = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div variants={expandAnim} ref={element} animate={controls}>
      <Title>Contact Me</Title>
      <SocialContainer>
        <a href="https://www.instagram.com/slay.carlos/">
          <i className="fab fa-instagram-square"></i>
        </a>
        <a href="https://github.com/Seamarr">
        <i class="fa fa-github-square"></i>
        </a>
        <a href="https://www.linkedin.com/in/carlosmartinez-cs/">
        <i class="fa fa-linkedin-square"></i>
        </a>
      </SocialContainer>
      <Email>seamar@ucla.edu</Email>
    </motion.div>
  );
};

const SocialContainer = styled(motion.div)`
  justify-content: center;
  min-height: 10vh;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: 3.5rem;
  i {
    font-size: 5rem;
    color: #ff7676;
  }
  a {
    text-decoration: none;
  }
`;

const Email = styled(motion.h1)`
  text-align: center;
  padding: 1rem 0rem;
  padding-bottom: 5rem;
`;

export default ContactMe;
