import React from 'react';
import Buttons from './Buttons';
import Name from './Name';
import StudentInfo from './StudentInfo';

class App extends React.Component {
    render(){
        return (
            <div style={ {textAlign: 'center'} }>
                <Name/>
                <Buttons/>
                <StudentInfo/>
            </div>
        );
    }
}

export default App;