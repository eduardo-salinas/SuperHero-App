import axios from "axios";

export const GET_HEROES_BY_NAME = 'GET_HERO_BY_NAME';
export const GET_HERO_BY_ID = 'GET_HERO_BY_ID';
export const ADD_TO_TEAM = 'ADD_TO_TEAM';
export const REMOVE_FROM_TEAM = 'REMOVE_FROM_TEAM';
export const LOG_IN = "LOG_IN";
export const LOG_OFF = "LOG_OFF"
export const LOADING = 'LOADING';

const URL = process.env.REACT_APP_API_URL;
const URL_POST = process.env.REACT_APP_URL_ALKEMY;

export const addHeroTeam = (hero) => {
    return { type: ADD_TO_TEAM, payload: hero };
};

export const removeFromTeam = (hero) => {
    return { type: REMOVE_FROM_TEAM, payload: hero };
};

export const getHeroByName = (name) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const heroes = await axios.get(`${URL}/search/${name}`);
            console.log("response ----------try-------", heroes.data)
            if (heroes.data.response === "success") {
                return dispatch({ type: GET_HEROES_BY_NAME, payload: heroes.data.results });
            } else if (heroes.data.response === "error") {
                return dispatch({ type: GET_HEROES_BY_NAME, payload: [{ err: true }] });
            };
        } catch (e) {
            console.log(e);
        };
    };
};


export const getHeroById = (id) => {
    return async (dispatch) => {
        dispatch({ type: LOADING });
        try {
            const hero = await axios.get(`${URL}/${id}`);
            if (hero.data.response === "success") {
                return dispatch({ type: GET_HERO_BY_ID, payload: hero.data });
            } else if (hero.data.response === "error") {
                return dispatch({ type: GET_HERO_BY_ID, payload: { err: true } });
            };
        } catch (e) {
            console.log(e);
        };
    };
};

export const logIn = (user) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(URL_POST, user);
            window.localStorage.setItem('superHero', res.data.token);
            dispatch({ type: LOG_IN, payload: { loged: "on" } });
        } catch (err) {
            dispatch({ type: LOG_IN, payload: err.response.data });
        };
    };
};

export const logOff = () => {
    window.localStorage.removeItem("superHero");
    return { type: LOG_OFF, payload: { loged: "off" } };
}