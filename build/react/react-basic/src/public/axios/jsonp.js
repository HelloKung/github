
import JsonP from 'jsonp';

export default class JSONP {

    static jsonp(options) {

        return new Promise((resolve,reject)=>{
   
            JsonP(options.url,{

                param:'callback'
            
            },function (err,response){

                if(response.status == 'success'){
                    resolve(response);
                }else{
                    reject(response.message)
                } 


            })

        })

        //url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent("沈阳")+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
       

    }


}