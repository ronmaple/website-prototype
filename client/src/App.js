import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home.jsx';

import ProjectSection from './components/ProjectsComponents/ProjectSection';
import Experience from './pages/Experience';
import Aboutme from './pages/Aboutme';

import Acme from './components/ExpComponents/list/Acme';
import Maxxam from './components/ExpComponents/list/Maxxam';
import Cs from './components/ExpComponents/list/Cs';
import Volunteer from './components/ExpComponents/list/Volunteer';
import Navbar from './components/Navbar';
// import Summary from './components/ExpComponents/list/Summary';

class App extends Component {

  render() {
    return (
        <Router>
          <div>
              <Navbar />
              <Route exact path="/" component={ Home } />
              <Route path='/projects' component={ ProjectSection } />
              <Route path='/aboutme' component={ Aboutme } />

              <Route exact path='/experiences' component={ Experience } />
              <Route path='/experiences/ACME' component={ Acme } />
              <Route path='/experiences/Maxxam' component={ Maxxam } />
              <Route path='/experiences/CS' component={ Cs } />
              <Route path='/experiences/Voluteer' component={ Volunteer } />

          </div>
        </Router>
    );
  }
}

export default App;
