import {
    ADD_TO_TEAM,
    GET_HERO_BY_ID,
    GET_HEROES_BY_NAME,
    LOADING,
    LOG_IN,
    REMOVE_FROM_TEAM
} from "../actions";

const initialState = {
    heroes: [],
    heroDetail: {},
    user: {},
    team: [],
    loading: false
};

const reducer = (state = initialState, { payload, type }) => {
    switch (type) {

        case ADD_TO_TEAM:
            return {
                ...state,
                team: state.team.concat(payload)
            };

        case REMOVE_FROM_TEAM:
            return {
                ...state,
                team: state.team.filter(hero => hero.id !== payload)
            };

        case GET_HEROES_BY_NAME:
            return {
                ...state,
                heroes: payload,
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
