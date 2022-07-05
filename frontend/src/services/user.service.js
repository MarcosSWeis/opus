import axios from "axios";
import authHeader from "./auth-header";

const URL_API = process.env.API_SERVER;

const getUserBoard = async () => {

    return await axios.get(URL_API + 'users', {

        headers: authHeader()

    })
}

const getAdminBoard = async () => {

    return await axios.get(URL_API + 'admin', {
        headers: authHeader()

    })
}


export default {


    getAdminBoard,
    getUserBoard
}

