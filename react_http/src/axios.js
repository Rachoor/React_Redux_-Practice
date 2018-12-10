import axios from 'axios';

const instance = axios.create({
    baseURL:'',

});

instance.defaults.headers.common['Authorization']= 'Auth from INstance';

export default instance;