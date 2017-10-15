import React from 'react';
import { connect } from 'react-redux';
import { setName } from '../actions';

class Name extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        }

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    render() {
        return (
            <div>
                <h1>학생 이름을 추가하세요</h1>
                이름:
                <input type="text" onChange={this.onChangeDiff} required></input>
            </div>
        );
    }

    onChangeDiff(e) {

        // if(isNaN(e.target.value))
        //     return;

        this.setState({ name: e.target.value });

        if(e.target.value === '') {
            this.setState({ name: '' });
        }

        this.props.onUpdateName(e.target.value);

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateName: (value) => dispatch(setName(value))
    };
}

Name = connect(undefined, mapDispatchToProps)(Name);

export default Name;