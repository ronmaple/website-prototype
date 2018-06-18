import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Jumbotron from '../components/Jumbotron.jsx';
import './Home.css';
import ProjectSection from '../components/ProjectsComponents/ProjectSection.jsx';
import InfoBox from '../components/InfoBox.jsx';

//import Skills from '../components/Skills';

class Home extends Component {


    render() {
        const InfoBox_header = 'Welcome to my website!';

        const loremipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return (
            <div>
                <Jumbotron title="lorem ipsum" subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed '/>
                
                <div className='container-whole'>
                    <InfoBox 
                        heading={InfoBox_header}
                        entry={loremipsum}/>
                    <ProjectSection />
                </div>
            </div>
        );
    }
}

export default Home;