import axios from 'axios';

const axiosInst = axios.create({
    baseURL: `http://localhost:9000`
});

export default axiosInst;