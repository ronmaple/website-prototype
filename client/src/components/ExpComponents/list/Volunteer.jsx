import React, { Component } from 'react';

import './Exp.css';
import SideNav from '../SideNav';

class Volunteer extends Component {
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
                }}>Volunteer</h4> <br />
                <h4><i>KAMP - Kababayan Mentorship Program | Peer Mentor </i></h4>
                <p style={{
                    textAlign: 'justify',
                    color: 'black'
                }}>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. 
                </p>
            </div>
            </div>
        );
    }
}

export default Volunteer;