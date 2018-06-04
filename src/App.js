import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home.jsx';

import ProjectSection from './components/ProjectsComponents/ProjectSection';
import Experiences from './pages/Experiences';
import Aboutme from './pages/Aboutme';

import Experience from './components/ExperienceComponents/ExperienceList/Experience';
import Experience2 from './components/ExperienceComponents/ExperienceList/Experience2';
import Experience3 from './components/ExperienceComponents/ExperienceList/Experience3';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={ Home } />
              <Route path='/projects' component={ ProjectSection } />
              <Route path='/experiences' component={ Experiences } />
              <Route path='/aboutme' component={ Aboutme } />

              <Route exact path="/experiences/experience" component={ Experience } />
              <Route path='/experiences/experience2' component={ Experience2 } />
              <Route path='/experiences/experience3' component={ Experience3 } />
          </div>
        </Router>
    );
  }
}

export default App;
