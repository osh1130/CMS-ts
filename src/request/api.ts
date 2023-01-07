// Unified management of all request path APIs in the project
import request from "./index"


export const LoginAPI = (params:LoginAPIReq) => request.post('/login', params);