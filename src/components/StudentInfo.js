import React from 'react';
import { connect } from 'react-redux';

class StudentInfo extends React.Component {
    render() {
        return (
            <div id="studentArea">

            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        value: state.counter.value
    };
}

//connect: react-redux의 내장 API로 react component를 redux store에 연결해줌
StudentInfo = connect(mapStateToProps)(StudentInfo);

export default StudentInfo;
