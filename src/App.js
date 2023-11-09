import React from 'react';
// pages
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
// router
import {Route, Switch, useLocation} from 'react-router-dom';
// global style
import GlobalStyle from './components/GlobalStyle';
// animation
import {AnimatePresence} from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/work' exact>
            <ProjectsPage />
          </Route>
          <Route path='/work/:id'>
            <ProjectDetail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
