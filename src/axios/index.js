import axios from "axios";

const jobincast = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});
jobincast.interceptors.response.use(
    response => { return response; },
    error => {
        if (
            error.request.responseType === 'blob' &&
            error.response.data instanceof Blob &&
            error.response.data.type &&
            error.response.data.type.toLowerCase().indexOf('json') != -1
        ) {
            return new Promise((resolve, reject) => {
                let reader = new FileReader();
                reader.onload = () => {
                    error.response.data = JSON.parse(reader.result);
                    resolve(Promise.reject(error));
                };

                reader.onerror = () => {
                    reject(error);
                };

                reader.readAsText(error.response.data);
            });
        };

        return Promise.reject(error);
    }
);
const setDefaultBearer = (token = false) => {
    jobincast.defaults.headers.common['Authorization'] = token;
}

export { setDefaultBearer }
export default jobincast;