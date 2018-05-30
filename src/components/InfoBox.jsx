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

                <h4>
                const loremipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
                </h4>

                </div>
            </div>
        );
    }
}

export default InfoBox;