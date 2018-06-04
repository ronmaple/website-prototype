import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div>

                <div className='sidenav'>
                    <Link to='/experiences/experience'>Exp 1</Link>
                    <Link to='/experiences/experience2'>Exp 2</Link>
                    <Link to='/experiences/experience3'>Exp 3</Link>
                </div>

                {/* <div class='main'>
                    <h2>Auto Sidebar</h2>
                </div> */}
            </div>
        );
    }
}
export default SideNav;