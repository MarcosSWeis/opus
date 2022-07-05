import axios from "axios";
import authServices from "../services/auth.services";
import authHeader from "../services/auth-header";

//actions
export const GET_APARTAMENTS_ONSALE = "GET_APARTAMENTS_ONSALE";
export const GET_IMAGE_CARROUSEL = "GET_IMAGE_CARROUSEL";
export const GET_IMAGE_BODY = "GET_IMAGE_BODY";
export const REGISTER_USER = "REGISTER_USER ";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSGE";
export const CLEAR_MESSGE = "CLEAR_MESSGE";

export const GET_BOOKINGS_FOR_THIS_DAY = "GET_BOOKINGS_FOR_THIS_DAY";
export const GET_SOCIAL_SPACES = "GET_SOCIAL_SPACES";
export const PUT_IMAGES_CARROUSEL = "PUT_IMAGES_CARROUSEL";
export const GET_DEPARTAMENT_ID = "GET_DEPARTAMENT_ID";
export const GET_HABITANTSFLOOR = "GET_HABITANTSFLOOR";
export const PUT_IMAGES_CARROUSEL_BODY = "PUT_IMAGES_CARROUSEL_BODY";
export const GET_SOCIAL = "GET_SOCIAL";
export const UPDATE_SOCIAL = "UPDATE_SOCIAL";
export const GET_USERS_BY_FLOOR = "GET_USERS_BY_FLOOR";
export const GET_SEARCH = "GET_SEARCH";
export const GET_TOWERS = "GET_TOWERS";
export const POST_CLIENT = "POST_CLIENT";
export const API_SERVER = process.env.API_SERVER
export const getSearch = (payload) => {
    try {
        console.log(payload);
        return async function (dispatch) {
            const search = await axios.get(`${API_SERVER}users/search`, {
                params: payload,
            });
            dispatch({
                type: GET_SEARCH,
                payload: search.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const getUserByFloor = (payload) => {
    try {
        // console.log(payload);
        return async function (dispatch) {
            const usersByFloor = await axios.get(
                `${API_SERVER}users/users_by_floor`,
                {
                    params: payload,
                }
            );
            dispatch({
                type: GET_USERS_BY_FLOOR,
                payload: usersByFloor.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const getApartament = (payload) => {
    try {
        // console.log(payload);
        return async function (dispatch) {
            const departa = await axios.get(`${API_SERVER}departs/filter`, {
                params: payload,
            });
            dispatch({
                type: GET_APARTAMENTS_ONSALE,
                payload: departa.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const register = (payload) => {
    try {
        // console.log(payload);
        return async function (dispatch) {
            const user = await axios.get(`${API_SERVER}users/create_user`, {
                params: payload,
            });
            dispatch({
                type: REGISTER_USER,
                payload: user.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const getImageCarrusel = (payload) => {
    try {
        return async function (dispatch) {
            const image = await axios.get(`${API_SERVER}carrousel`);
            dispatch({
                type: GET_IMAGE_CARROUSEL,
                payload: image.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const getImageBody = (payload) => {
    try {
        return async function (dispatch) {
            const image = await axios.get(`${API_SERVER}carrousel/body`);
            console.log(image.data);
            dispatch({
                type: GET_IMAGE_BODY,
                payload: image.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

//

export const setMessage = (message) => ({
    type: SET_MESSAGE,
    payload: message,
});

export const clearMessage = () => ({
    type: CLEAR_MESSGE,
});

export const login = (email, password) => (dispatch) => {
    return authServices.login(email, password).then(
        (data) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: data },
            });

            return Promise.resolve();
        },
        (error) => {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();

            dispatch({
                type: LOGIN_FAIL,
            });
            dispatch({
                type: SET_MESSAGE,
                payload: message,
            });

            return Promise.reject(error);
        }
    );
};

export const logout = () => (dispatch) => {
    authServices.logout();
    dispatch({
        type: LOGOUT,
    });
};
export const getBookingForThisDay = (payload) => {
    try {
        return async function (dispatch) {
            const bookingsDate = await axios.get(`${API_SERVER}bookings`, {
                params: payload,
            });
            dispatch({
                type: GET_BOOKINGS_FOR_THIS_DAY,
                payload: bookingsDate.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};
export const getDepartamentId = (payload) => {
    try {
        return async function (dispatch) {
            const departament = await axios.get(
                `${API_SERVER}departs/detail_departament`,
                {
                    params: payload,
                }
            );
            dispatch({
                type: GET_DEPARTAMENT_ID,
                payload: departament.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};
export const getSocialSpaces = (payload) => {
    try {
        return async function (dispatch) {
            const socialSpace = await axios.get(
                `${API_SERVER}bookings/social_space`
            );
            dispatch({
                type: GET_SOCIAL_SPACES,
                payload: socialSpace.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const putImagesCarrousel = (payload) => {
    try {
        return async function (dispatch) {
            console.log(payload);
            const image = await axios.put(`${API_SERVER}carrousel`, {
                images: payload,
            });
            console.log(image.data[1]);
        };
    } catch (err) {
        console.log(err);
    }
};
export const getHabitantsPerFloor = (payload) => {
    try {
        return async function (dispatch) {
            const habitantsFloor = await axios.get(
                `${API_SERVER}users/dashboard_habitants`
            );
            dispatch({
                type: GET_HABITANTSFLOOR,
                payload: habitantsFloor.data,
            });
        };
    } catch (err) {
        console.log(err);
    }
};

export const putImagesCarrouselBody = (payload) => {
    try {
        return async function (dispatch) {
            const image = await axios.put(
                `${API_SERVER}carrousel/body`,
                payload
            );
            console.log(image.data[1]);
        };
    } catch (err) {
        console.log(err);
    }
};

export function getSocial() {
    return async function (dispatch) {
        const social = await axios.get(`${API_SERVER}/redes`);
        dispatch({
            type: GET_SOCIAL,
            payload: social.data[0],
        });
    };
}

export function updateSocial(data) {
    return async function (dispatch) {
        const social = await axios.put(`${API_SERVER}/redes`, data);
        dispatch({
            type: UPDATE_SOCIAL,
            payload: data,
        });
    };
}

export function postClient(data) {
    return async function (dispatch) {
        try {
            const client = await axios.post(`${API_SERVER}/users/create`, data, {
                headers: authHeader()

            });
            return client.data;
        } catch (err) {
            return err.response;
        }
    }
}


export function getTowers() {
    return async function (dispatch) {
        const towers = await axios.get(`${API_SERVER}/departs/towers`);
        dispatch({
            type: GET_TOWERS,
            payload: towers.data,
        });
    }
}

export function EditUser(data) {
    return async function (dispatch) {
        try {
            const client = await axios.put(`${API_SERVER}/users/update/${data.id}`, data, {
                headers: authHeader()
            });
            return client.data;
        } catch (err) {
            return err.response;
        }
    }
}
