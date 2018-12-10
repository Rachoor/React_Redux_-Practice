import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';


axios.defaults.baseURL = '';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.defaults.headers.post['content-type'] = 'application/json';


axios.interceptors.request.use(req=>{
    console.log(req );
    return req;
}, error=>{
    console.log(error);
    return Promise.reject(error);
})

axios.interceptors.response.use(req=>{
    console.log(req);
    return req;
}, (error)=>{
    return Promise.reject(error);
})

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
