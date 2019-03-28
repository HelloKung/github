
import queryApi from "@/api/login";
import {getToken,setToken,removeToken,removeAllSession} from "@/utils/session"


const store = {

    state:{

       token:getToken()

    },
    mutations:{

        SET_TOKEN:(state,token) => {

            state.token = token;
        }
         

    },
    actions:{

       LoginByUserName({commit},userInfo){

           return new Promise((resolve,reject) => {

            queryApi.LoginByUserName(userInfo).then(res => {

                  if(res.data.success){

                      let token = res.data.data.token;

                      commit("SET_TOKEN",token); 
                       
                      setToken(token);

                      resolve();

                  }else{

                     this.$message({

                         message:res.data.message,
                         type:"danger"
                     });
                  }


             }) 


           }).catch(err => {

               reject(err);
           })
           
           console.log(userInfo);

       },
       Logout({commit,userInfo}){

       
           return new Promise((resolve,reject) => {


                queryApi.Logout().then(res => {
                   
                     

                     if(res.data.success){

                         removeToken();
                         
                         removeAllSession();

                         resolve();
                     }


                }).catch(err => {

                      reject();
                })
                



           })




       }



    }


};




export default store
