export const ADDINFO = 'ADDINFO';
export const SET_NAME = 'SET_NAME';

export function addInfo(){
    return {
        type: ADDINFO
    };
}

export function setName(value){
    return{
        type: SET_NAME,
        name: value
    };
}