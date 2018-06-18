import React, { Component } from 'react';

import './MainSummary.css';
import SideNav from '../SideNav';
class MainSummary extends Component {
    render() {
        return (
            
            <div>
                <SideNav />
                <div id='mainSummary' className="container">

                    <h4> {this.props.header} </h4>
                    <p> {this.props.entry}</p>

                </div>
            </div>
        );
    }
}

export default MainSummary;