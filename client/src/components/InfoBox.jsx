import React, { Component } from 'react';
import img from '../images/photo.jpg';
import './InfoBox.css';
import Jumbotron from './Jumbotron';

class InfoBox extends Component {
    render() {
        // const img = '../images/randomavatar.png';
        // const textStyle = {
        //     fontfamily: '"Playfair Display", serif'
        // };
        return (
            <div className="container">
                <div className='jumbotron-fluid'>

                <h4 style={{
                    fontSize: 20
                }}>{this.props.heading}</h4>
                <h4>
                    {this.props.entry}
                </h4>

                </div>
            </div>
        );
    }
}

export default InfoBox;