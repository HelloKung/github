<template>
   <div class="caption">
     <div class = "title">
             <div class="title-icon" ></div>
             <div class="title-text" >{{title1data.title}}</div>
             <div class="title-select">
               <el-select  v-for="(items,index) in title1data.options" :key="index" v-model="items.value" :placeholder="items.placeholder" size = "mini" @change="selectchange" > 
                <el-option  v-for="item in items.data" :key="item.value" :label="item.label" :value="item.value"> </el-option>
               </el-select>
             </div>
     </div>
   </div>  
</template>



<script>





export default{

     data(){

         let data = {


         }

         return data;
     },
     props:["title1data"],
     methods:{

         selectchange(){
         
             this.$emit("selectchange",this.title1data);

         }


     }
    



}

</script>


<style>

  .caption {

      position: relative;

      width: 100%;
  }

  .caption > .title{
      
     
      margin-top: 5px;
      height: 30px;
  }

  .caption > .title > .title-select >.el-select {

    width:100px; margin-top:-4px; margin-right: 10px;

  }
  
  .caption > .title > .title-select >.el-select:last-child {

    margin-right: 0px;

  }


  .title-icon {

    position:absolute; width:5px; height:20px; background:#36e8c4; display:inline-block; 
    border-radius: 30%; box-shadow: 0px 0px 13px 0px rgba(54,232,196,0.2); left: 5px;

  }
  .title-text {

    position:absolute;  display:inline-block; line-height:20px; height:20px; left:30px;
    font-size:15px; color: #000; font-weight: block;margin-top: 1px;

  }
  .title-select {
    position:absolute;  display:inline-block; line-height:20px; height:20px; right:25px;
   
  }


</style>