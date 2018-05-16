import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import InfoBox from '../components/InfoBox.jsx';

class Home extends Component {
    render() {
        const loremipsum ='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        return (
            <div>
                <Navbar />
                <InfoBox />

                <div className="container">

                    {/*<h2>Welcome</h2>*/}
                    {/*<p>*/}
                        {/*{ loremipsum }*/}
                    {/*</p>*/}
                </div>
            </div>
        );
    }
}

export default Home;