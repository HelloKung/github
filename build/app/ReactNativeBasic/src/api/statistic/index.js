import request from "../../public/request"

const instance = {};

instance.getListData = (name) => {

    let url = "https://api.github.com/search/repositories?q=";


    return request.get(url+name);
}


export default instance;