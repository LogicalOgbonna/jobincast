import axios from "axios";

const jobincast = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

const setDefaultBearer = (token = false) => {
    jobincast.defaults.headers.common['Authorization'] = token;
}

export { setDefaultBearer }
export default jobincast;