import React, { Component } from 'react';
import ProjectBox from './sub/ProjectBox';

// import Navbar from './Navbar';

import './ProjectSection.css';

class ProjectSection extends Component {
    contructor() {

    }

    render() {

        return (

            <div>

                <div className="container-fluid">

                    <h3 id='projectsTitle'>Projects</h3>
                        
                        <div id='projsec-container' className='container'>
                            <ProjectBox />
                            <ProjectBox />
                            <ProjectBox />
                            <ProjectBox />
                        </div>
                    <br />

                </div>

            </div>
        )
    }
}

export default ProjectSection;