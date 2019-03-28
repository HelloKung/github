const tokenkey = "base_token";

//activefirstMenuId  当前选择一级菜单
const sessionlist = [];


export function setSession(key,value){

    sessionlist.push(key); 

    sessionStorage.setItem(key,value);

}

export function getSession(key){

    return sessionStorage.getItem(key);

}

export function removeSession(key){

    sessionStorage.removeItem(key);

}

export function removeAllSession(){

    sessionlist.forEach(item => {

        sessionStorage.removeItem(item);

    })

}


export function setToken(token){

    sessionStorage.setItem(tokenkey,token);

}

export function getToken(){

    return sessionStorage.getItem(tokenkey);
}


export function removeToken(){

    return sessionStorage.removeItem(tokenkey);
}


