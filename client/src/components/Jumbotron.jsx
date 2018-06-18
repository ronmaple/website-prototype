import React, { Component } from 'react';
import './Jumbotron.css';

class Jumbotron extends Component {

    render() {
        return (
            <div className="jumbotron jumbotron-fluid" style={{ marginTop: 0}}>
                <div className="container j-container text-center">
                    <h1 className="display-3" style={{ color: '#1789fb' }}>{this.props.title}</h1>
                    <h1 style={{
                        fontWeight: 200,
                        fontSize: 20,
                        marginTop: 0,
                        color: '#1789fb'
                    }}>{this.props.subtitle}</h1>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
