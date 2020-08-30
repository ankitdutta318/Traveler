import {
    TOGGLE_THEME
} from '../constants/themeConstants';

const initialState = 'light';

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;