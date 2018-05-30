import React, { Component } from 'react';
import ProjectBox from './ProjectBox';

// import Navbar from './Navbar';

import './Projects.css';

class ProjectSection extends Component {
    contructor() {

    }

    render() {
        return (

            <div>

                <div className="container-fluid">

                    <h3>Projects</h3>
                    
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />
                    <ProjectBox />

                    <br />

                </div>

            </div>
        )
    }
}

export default ProjectSection;