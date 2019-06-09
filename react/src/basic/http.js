import axios from 'axios'; 
const init=function(){
    axios.interceptors.request.use(config => {
        const token = localStorage.getItem('token');
        console.log(token);
        config.headers.common['Authorization'] = 'Bearer ' + token;
        return config;
    })
}
export default {init}