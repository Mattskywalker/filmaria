import axios from "axios";

const instance = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default instance;