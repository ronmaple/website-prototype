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
                        <img id="projectsicon" src={ this.props.image } style={{ height: 150, width: 150 }} />
                    </div>
                    <div className="col-xs-8">
                        <div className="proj-caption">
                            <h4>{ this.props.title }</h4>
                            <h4 id='#lorem'>{ this.props.desc }</h4>
                            <h4>{ this.props.stack }</h4>
                        </div>
                    </div>
                </div>
           </div>
           )
    }
}

export default ProjectBox;