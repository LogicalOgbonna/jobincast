import axios from "axios";

const jobincast = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});


export default jobincast;