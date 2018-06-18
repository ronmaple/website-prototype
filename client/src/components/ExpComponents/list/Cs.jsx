import React, { Component } from 'react';

import './Exp.css';
import SideNav from '../SideNav';

class Cs extends Component {
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
                    }}>Customer Service - various</h4> <br />
                    <h4><i>Starbucks|Barista, Real Canadian Superstore|Clerk, StudentWorks Painting|Painter and Cold caller </i></h4>
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

export default Cs;