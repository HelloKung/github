import request from "@/utils/request"

const queryApi = {};

queryApi.getListData = () => {

   
   return  request.post("/node/practice/table/node/querylist");

}

queryApi.fileUpload = (formData) => {

   
    return  request.post("/node/practice/table/node/fileUpload",formData,{ headers: { 'Content-Type': 'multipart/form-data' }});
 
 }
 
 


export default queryApi;