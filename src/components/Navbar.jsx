import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavBar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link className="navbar-brand" to="#">MyWebsite</Link>
                    </div>

                    <div id="myNavBar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/page1">Page 1</Link></li>
                            <li><Link to="/page2">Page 2</Link></li>
                            <li><Link to="/page3">Page 3</Link></li>
                        </ul>
                    </div>

                </div>
            </nav>
        );
    }
}

export default Navbar;