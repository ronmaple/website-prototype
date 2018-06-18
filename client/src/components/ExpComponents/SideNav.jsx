import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './SideNav.css';

class SideNav extends Component {
    render() {
        return (
            <div>

                <div className='sidenav'>
                    <Link to='/experiences'>Summary</Link>
                    <Link to='/experiences/ACME'>Exp 1</Link>
                    <Link to='/experiences/Maxxam'>Exp 2</Link>
                    <Link to='/experiences/CS'>Exp 3</Link>
                </div>
            </div>
        );
    }
}
export default SideNav;