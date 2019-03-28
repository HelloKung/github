import request from "@/utils/request"


const queryApi = {};


queryApi.LoginByUserName = ({username,password,checkcode}) => {

    const param = {
        username,
        password,
        checkcode
    }
     

    return request.post("https://www.easy-mock.com/mock/5c80cdfe761c94306e4ad8c6/github/vue/LoginByUserName",param);

}

queryApi.getUserInfo = (username,password) => {

    const param = {
        username,
        password
    }

    return request.post("https://www.easy-mock.com/mock/5c80cdfe761c94306e4ad8c6/github/vue/getUserInfo",param); 
}

queryApi.Logout = (username) => {

    const param = {
       username
    }

    return request.post("https://www.easy-mock.com/mock/5c80cdfe761c94306e4ad8c6/github/vue/Logout",param);

}


export default queryApi;