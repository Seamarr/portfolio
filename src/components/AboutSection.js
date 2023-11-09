import React from "react";
// styles and anomation
import { motion } from "framer-motion";
import styled from "styled-components";
import { nameAnim, photoAnim } from "../animations";
// imports
import homeImg from "../img/homeImg.png";
import trioImg from "../img/trioImg.jpg";
import trioResizedImg from "../img/trioPicResized.jpg";
import royceResizedImg from "../img/royceResized.jpg";

const AboutSection = () => {
  return (
    <About>
      <Name>
        <motion.h2 variants={nameAnim}>Carlos</motion.h2>
        <LastName variants={nameAnim}>Martinez</LastName>
      </Name>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={royceResizedImg}
          alt="picture of me"
        />
      </Image>
    </About>
  );
};

const About = styled(motion.div)`
  min-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: spcae-between;
  padding: 5rem 10rem;
  color: #ff7676;
  @media (max-width: 800px) {
    padding: 5rem 6rem;
  }
`;

const Name = styled(motion.div)`
  flex: 0.75;
  padding-left: 15rem;
  z-index: 2;
  color: black;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding-left: 0rem;
  }
`;

const Image = styled(motion.div)`
  flex: 1;
  overflow: hidden;
  z-index: 2;
  padding-right: 13rem;
  padding-bottom: 6rem;
  img {
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    img {
      display: none;
    }
  }
`;

const LastName = styled(motion.h2)`
  padding-left: 3rem;
  color: #ff7676;
  @media (max-width: 1300px) {
    padding-left: 0rem;
  }
`;

export default AboutSection;
