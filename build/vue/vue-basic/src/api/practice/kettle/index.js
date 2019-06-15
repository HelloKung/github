import request from "@/utils/request"

const queryApi = {};

queryApi.HandleClickRunBat = () => {

   
   return  request.post("http://localhost:3000/practice/Integrate/node/runKtr");

}


export default queryApi