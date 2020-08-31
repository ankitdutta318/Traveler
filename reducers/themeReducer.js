import {
    TOGGLE_THEME
} from '../constants/themeConstants';
import {
    Appearance
} from "react-native-appearance";

const initialState = Appearance.getColorScheme();

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            return action.payload;
        default:
            return state;
    }
}

export default themeReducer;