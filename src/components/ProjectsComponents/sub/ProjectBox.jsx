import React, { Component } from 'react';
import proj from '../placeholder.png';

import './ProjectBox.css'

class ProjectBox extends Component {
    
    render() {
        let lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua';
        return (
           <div id="proj-container">
                <div className="row">
                    <div className="col-xs-4">
                        <img id="projectsicon" src={ proj } />
                    </div>
                    <div className="col-xs-8">
                        <div className="proj-caption">
                            <h4>Lorem Ipsum</h4>
                            <h4 id='#lorem'>{ lorem }</h4>
                        </div>
                    </div>
                </div>
           </div>
           )
    }
}

export default ProjectBox;