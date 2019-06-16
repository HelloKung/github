<template>
    <div class="searchbar-container">
        <div class="search-input" :class="{'active':searchOpen}">
            <div class="icon-search icon" @click="searchOpen = !searchOpen;searchText=''"></div>
            <el-autocomplete  
                v-model="searchText" 
                placeholder="请输入内容" 
                clearable 
                :autofocus="searchOpen"
                :fetch-suggestions="querySearchAsync"      
                @select="handleSelect"      
            />
            
        </div>
    </div>
</template>


<script>

import siderConfig from "@/config/layout/siderConfig.js"

export default {
    
    data(){
        
        return {

            searchText:"",
            siderList:[],
            searchOpen:false,
            state: '',
            timeout:  null
        }

    },
    methods:{

        handleSelect(item){

            
            this.selectTag(item.id);

        },
        selectTag(id){
            
            this.$store.dispatch("selectTagView",id).then(res =>{
                
                return this.$store.dispatch("setSiderMenu",this.activefirstMenuId)
            
            }).then(res =>{

                this.$router.push(id);

            })

        },
        querySiderList(list){

            for(const [index,item] of list.entries()){

                   
                if(item.siderMenu){

                    this.querySiderList(item.siderMenu);
                    

                }else{

                    if(item.children){
                       
                        this.querySiderList(item.children);

                    }
                
                    if(!item.children){

                        this.siderList.push(item);
                        
                    }  
                
                }


            }

            
        }, 
        querySearchAsync(queryString, cb){


            let siderList = this.siderList;
            var results = queryString ? siderList.filter(item =>
                item.title.toLowerCase().indexOf(queryString.toLowerCase()) >= 0
            ) : siderList;

            results = results.map(item => { item.value = item.title; return item;})
 

            clearTimeout(this.timeout);
                
            this.timeout = setTimeout(() => {
               
               cb(results);

            }, 200);


        }


    }, 
    computed:{

        activefirstMenuId(){

           return this.$store.state.menu.activefirstMenuId;

        },
 

    },
    mounted(){

        this.querySiderList(siderConfig);

    }


}
</script>





<style>

.searchbar-container{

    /* width:200px; */
    height:100%;
    float:right;
    margin-right: 10px;
    padding: 10px 0px;
}  

.search-input{

    


}       


.searchbar-container .search-input .icon{

    float: left;
    margin-right:0;
    line-height: 30px;
    display: inline-block;
    height: 30px;
    width:30px;
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    text-align:center;
    background: #676b6f;
    border:1px solid rgba(204,204,204,.6);
    box-shadow: 0px 0px 1px #ccc;
    transition: ease-in-out 0.4s all; 

}

.searchbar-container .search-input .icon::before{

    margin-left: 1px;
    margin-bottom: 1px; 
}


.searchbar-container .search-input  .el-input__inner{

    float: right;
    height: 30px;
    line-height:30px;
    width:0px;
    padding:0;
    border-radius: 0; 
    border:none;
    color:#fff;
    background: #676b6f;
    padding-left: 0;
    transition: ease-in-out 0.4s all; 
}

      
.searchbar-container .active{
            
    height: 32px;
    border:1px solid #3e474e;
    box-shadow: 0px 0px 2px #3e474e;
    float: right;
    border-radius: 5px;
    transition: ease-in-out 0.4s all; 
}            
.searchbar-container .active .icon{

    float: left;
    line-height: 30px;
    height: 30px;
    width: 30px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background: #676b6f;
    border-radius: 0;
    border:none;
    box-shadow:none;
    transition: ease-in-out 0.4s all; 
}

.searchbar-container .active .el-input__inner{

    display: block;
    width:160px ;
    transition: ease-in-out 0.4s all; 
                
}
            


.searchbar-container .el-input__suffix-inner i{

    height: 30px;
    line-height: 30px;  

}

</style>
