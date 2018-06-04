import React, { Component } from 'react';

import Navbar from '../components/Navbar';
import ExperiencesSection from '../components/ExperienceComponents/ExperiencesSection';

class Experiences extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <ExperiencesSection />
            </div>
        )
    }
}

export default Experiences;