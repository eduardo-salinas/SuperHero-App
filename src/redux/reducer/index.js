import {
    GET_HERO_BY_ID,
    GET_HERO_BY_NAME,
    LOADING,
    LOG_IN
} from "../actions";

const initialState = {
    hero: [],
    heroDetail: {},
    user: {},
    loading: false
};

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {

        case GET_HERO_BY_NAME:
            return {
                ...state,
                hero: payload,
                loading: false,
            };

        case GET_HERO_BY_ID:
            return {
                ...state,
                heroDetail: payload,
                loading: false,
            };
        case LOG_IN:
            return {
                ...state,
                loading: false,
                user: payload
            };
        case LOADING:
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    };
};

export default reducer;
