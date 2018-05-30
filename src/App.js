import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home.jsx';

import ProjectSection from './components/Projects';
import Experiences from './pages/Experiences';
import Aboutme from './pages/Aboutme';


class App extends Component {
  render() {
    return (
        <Router>
          <div>
              <Route exact path="/" component={ Home } />
              <Route path='/projects' component={ ProjectSection } />
              <Route path='/experiences' component={ Experiences } />
              <Route path='/aboutme' component={ Aboutme } />
          </div>
        </Router>
    );
  }
}

export default App;
