import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

const createAPI = axios.create({
    baseURL: BASE_URL
});

axios.interceptors.request.use(function (config) {
    return config
});

createAPI.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export async function GET(url:string, config:any) {
    return await createAPI
    .get(url, {
        ...config
    })
    .catch(err => {
        if(err.code = "ERR_NETWORK"){
            alert("Please Please check your internet connection")
        }
    })
}

