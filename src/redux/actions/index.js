import axios from "axios";

export const GET_HEROES_BY_NAME = 'GET_HERO_BY_NAME';
export const GET_HERO_BY_ID = 'GET_HERO_BY_ID';
export const ADD_TO_TEAM = 'ADD_TO_TEAM';
export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM';
export const LOG_IN = "LOG_IN";
export const LOADING = 'LOADING';

const URL = process.env.REACT_APP_API_URL;
const URL_POST = process.env.REACT_APP_URL_ALKEMY;

export const addHeroTeam = (hero) => {
    return { type: ADD_TO_TEAM, payload: hero };
};

export const removeFromTeam = (id) => {
    return { type: REMOVE_FROM_TEAM, payload: id };
};

export const getHeroByName = (name) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const heroes = await axios.get(`${URL}/search/${name}`);
            return dispatch({
                type: GET_HEROES_BY_NAME,
                payload: heroes.data.results,
            });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_HEROES_BY_NAME, payload: [] });
        };
    };
};


export const getHeroById = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const hero = await axios.get(`${URL}/${id}`);
            return dispatch({
                type: GET_HERO_BY_ID,
                payload: hero.data,
            });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_HERO_BY_ID, payload: {} });
        };
    };
};

export const logIn = (user) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(URL_POST, user);
            window.localStorage.setItem('token', res.data.token);
            dispatch({ type: LOG_IN, payload: { loged: "on" } });
        } catch (err) {
            dispatch({ type: LOG_IN, payload: err.response.data });
        };
    };
};