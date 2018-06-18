import React, { Component } from 'react';
import ProjectBox from './sub/ProjectBox';

// import Navbar from './Navbar';

import './ProjectSection.css';

class ProjectSection extends Component {

    render() {
        const data = 
        [
            {
                _id: 0,
                title: 'Javascript Calculator',
                desc: 'A calculator app made purely with Javascript. Simple functions, and simple UI.',
                stack: 'HTML5, CSS3, Javascript',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/calculator.png'
            },
            {
                _id: 1,
                title: 'Simon',
                desc: 'A classic game of Simon, with a little UI twist. Complete with sounds on click. Currently in development - minor bug fixes, and ‘strict’ mode to be applied. The UI will get an update as I continue to develop my CSS skills',
                stack: 'HTML5, CSS3, Bootstrap 3, jQuery',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/simon.png'
            },
            {
                _id: 2,
                title: 'TicTacToe',
                desc: "A simple tic tac toe game where user competes against an AI. Completed but in the process of applying min-max algorithm, and UI bug fixes :). ",
                stack: 'HTML5, CSS3, Bootstrap 3, jQuery',
                image: 'https://s3.us-east-2.amazonaws.com/ronmapue/tictactoe.png'
            }
        ];

        const test = ['1', '2', '3', '4'];
        // const show = data.map(i => {
        //     <ProjectBox key={i} title={i.title} desc={i.desc} image={i.image} stack={i.stack} />
        // })
        return (

            <div>

                <div className="container-fluid">

                    <h3 id='projectsTitle'>Projects</h3>
                        
                        <div id='projsec-container' className='container'>
                        {/* <ProjectBox title="TicTacToe" desc="A simple tic tac toe game where user competes against an AI. Completed but in the process of applying min-max algorithm, and UI bug fixes :). " stack="Stacasdas" image="https://s3.us-east-2.amazonaws.com/ronmapue/tictactoe.png" /> */}
                        {
                            data.map(i => {
                                    return <ProjectBox key={i.toString()}title={i.title} desc={i.desc} image={i.image} stack={i.stack} />
                                })
                        }
                        </div>
                    <br />

                </div>

            </div>
        )
    }
}

export default ProjectSection;