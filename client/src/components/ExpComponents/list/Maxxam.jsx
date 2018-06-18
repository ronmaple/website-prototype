import React, { Component } from 'react';

import './Exp.css';
import SideNav from '../SideNav';
class Maxxam extends Component {
    render() {
        return (
            <div>
                <SideNav />
            <div className='experience-box container container-exp'>
                <h4 style={{
                    fontWeight: 400,
                    fontSize: 40,
                    textAlign: 'center',
                    color: '#074e71'
                }}>Maxxam Analytics</h4> <br />
                <h4><i>Sample Logistics technician - 16 months</i></h4>
                <p style={{
                    textAlign: 'justify',
                    color: 'black'
                }}>
                    A role involving many aspects in laboratory management. The typical daily tasks included client support, paperwork validation, communication with internal, and external to diagnose sample problems, and a strong understanding of their Laboratory management system (LIMS). 
                </p>
            </div>
            </div>
        );
    }
}

export default Maxxam;