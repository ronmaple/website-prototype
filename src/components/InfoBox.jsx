import React, { Component } from 'react';
import img from '../images/randomavatar.png';

class InfoBox extends Component {
    render() {
        // const img = '../images/randomavatar.png';
        return (
            <div className="container">
                <div className="row">

                    <div className="col-sm-4">
                        <img src={img} width='200px;' height='200px' />
                    </div>

                    <div className="col-sm-8">
                        <h2 className="text-primary">Lorem ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                        <h2 className="text-primary">Lorem Ipsum</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>

                </div>
            </div>
        );
    }
}

export default InfoBox;