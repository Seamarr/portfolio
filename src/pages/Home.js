import React from 'react';
// components
import AboutSection from '../components/AboutSection';
import MyDescription from '../components/MyDescription';
import MyWork from '../components/MyWork';
import ScrollTop from '../components/ScrollTop';
import ContactMe from '../components/ContactMe';
// animations
import {motion} from 'framer-motion';
import {homeAnim} from '../animations';

const Home = () => {
  return (
    <motion.div variants={homeAnim} initial="hidden" animate="show" exit="exit">
      <ScrollTop/>
      <AboutSection />
      <MyDescription />
      <MyWork />
      <ContactMe />
    </motion.div>
  );
};

export default Home;
