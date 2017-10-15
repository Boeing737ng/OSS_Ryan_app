import { ADDINFO, SET_NAME } from "../actions/index";
import { combineReducers } from 'redux';

const counterInitialState = {
    value: '',
    name: '',
    position: ''
};

const counter = (state = counterInitialState, action) => {

    switch(action.type){

        case ADDINFO:
            var box = document.createElement('div');
            box.className = "studentBox";
            box.style.display = "inline-block";
            box.style.margin = "10px";
            box.style.width = "150px";
            box.style.height = "100px";
            box.style.borderRadius = "30px";
            box.style.fontSize = "30px";
            box.style.backgroundColor = "aquamarine";
            box.style.paddingTop = "50px";
            box.innerHTML = state.name;
            document.getElementById('studentArea').appendChild(box);

            return Object.assign({}, state, {
                value: state.name
            });
        case SET_NAME:
            return Object.assign({}, state, {
                name: action.name
            });
        default:
            return state;
    }
};

//combineReducers = 여러개의 reducer를 한개로 합칠때 사용되는 redux 내장 메소드
const counterApp = combineReducers({
    counter
});

export default counterApp;
