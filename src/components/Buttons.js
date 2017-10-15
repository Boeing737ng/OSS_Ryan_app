import React from 'react';
import { connect } from 'react-redux';
import { addInfo} from "../actions/index";
import './Buttons.css';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <button className = "button" type="button" onClick={ this.props.addInfo }>
                    학생 추가
                </button>
                <hr/>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addInfo: () => {
            dispatch(addInfo());
        }
    }
}

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;