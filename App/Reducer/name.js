import { combineReducers } from 'redux';

const INITIAL_STATE = {
    name: ""
};

const name = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "Save":
            return { ...state, [action.payload.prop]: action.payload.value }
        default:
            return state
    }
};

export default combineReducers({
    name: name
});