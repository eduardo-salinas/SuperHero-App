import axios from "axios";

export const GET_HERO_BY_NAME = 'GET_HERO_BY_NAME';
export const GET_HERO_BY_ID = 'GET_HERO_BY_ID';
export const LOG_IN = "LOG_IN";
export const LOADING = 'LOADING';

const URL = process.env.REACT_APP_API_URL;
const URL_POST = process.env.REACT_APP_URL_ALKEMY;

export const getHeroByName = (name) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const heroes = await axios.get(`${URL}/search/${name}`);
            return dispatch({
                type: GET_HERO_BY_NAME,
                payload: heroes.data.results,
            });
        } catch (e) {
            console.log(e);
            return dispatch({ type: GET_HERO_BY_NAME, payload: [] });
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
        dispatch({ type: LOADING });
        try {
            const res = await axios.post(URL_POST, user);
            window.sessionStorage.setItem('code', res.data.token);
            dispatch({ type: LOG_IN, payload: { log: "on" } });
        } catch (err) {
            dispatch({ type: LOG_IN, payload: { error: "Please provide valid email and password" } });
        };
    };
};