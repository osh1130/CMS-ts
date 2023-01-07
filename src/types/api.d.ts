// Login request type
interface LoginAPIReq {
    username: string;
    password: string;
    }
// Login respons type
interface LoginAPIRes {
    errCode: number;
    message: string;
    data: object;
    }
    