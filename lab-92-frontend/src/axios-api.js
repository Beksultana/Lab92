import axios from 'axios';
import {URLapi} from "./constants";

const instance = axios.create({
    baseURL: URLapi
});

export default instance;