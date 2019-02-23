<template>
    <div>这是test1页

        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path id="path1" d="M100,100 a1,1 0 0,0 100,0 Z" />
            </defs>
            <text x="10" y="100" style="fill:red;" >
                <textPath xlink:href="#path1" >svg 11111111111</textPath>
            </text>
            <text x="10" y="100" style="fill:red;" transform="rotate(-20)">
                <textPath xlink:href="#path1" >svg 11111111111</textPath>
            </text>
        </svg>
       
       <!-- <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink">             <defs>               <path id="path1" d="M0,48 C209.6666,12 299.3333,17 479,53" />             </defs>             <text  style="fill:red;">               <textPath xlink:href="#path1"> 活动时间：2018年2月9日-2018年2月14日</textPath>             </text>           </svg>  -->

    </div>
</template>
<script>
export default {
    
}
</script>
