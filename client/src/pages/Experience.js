import React, { Component } from 'react';

import ExpSection from '../components/ExpComponents/ExpSection';
import SideNav from '../components/ExpComponents/SideNav';

class Experience extends Component {
    render() {
        return (
            <div>
                <SideNav />
                <ExpSection />
            </div>
        )
    }
}

export default Experience;