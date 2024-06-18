import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8000/api/v1/',
    headers: {
        'Accept': 'Application/json',
        'Content-type': 'Application/json'
    },
})

export { http };