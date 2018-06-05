import React, { Component } from 'react';

import './MainSummary.css';

class MainSummary extends Component {
    render() {
        return (
            <div>
                <h3 style={{
                    textAlign: "center",
                    fontWeight: 400,
                    fontSize: 30
                }}> Experiences </h3>
            <div id='mainSummary' className="container">

                <h4> {this.props.header} </h4>
                <p> {this.props.entry}</p>
            </div>
            </div>
        );
    }
}

export default MainSummary;