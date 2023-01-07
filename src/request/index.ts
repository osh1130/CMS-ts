import axios from "axios"
// create the axios instance
const instance = axios.create({
    baseURL:"/api",
    timeout:20000
})
// request interceptor
instance.interceptors.request.use(config=>{
    let token = localStorage.getItem('cms-token')
    if(token){
        config.headers = {
        'cms-token': token
        }
    }
    return config
},err=>{
    return Promise.reject(err)
});

// response interceptor
instance.interceptors.response.use(res=>{
    return res.data
},err=>{
    return Promise.reject(err)
})

export default instance