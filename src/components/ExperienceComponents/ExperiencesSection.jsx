import React, { Component } from 'react';

import Block from './sub/Block';
import SideNav from '../SideNav.jsx';
import MainSummary from './MainSummary.jsx';

class ExperiencesSection extends Component {

    render() {
        const header = 'Main Summary';
        const lorem = 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.';
        
        return (
            <div>
                <MainSummary 
                    header={header}
                    entry={lorem}/>
                <SideNav />
            </div>
        );
    }
}

export default ExperiencesSection;