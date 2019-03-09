<template>
    <div class="login-background">
        <div class="landscape" :style="{backgroundImage:'url('+require('@/assets/img/login/xkbg.png')+')'}"></div>
        <div class="filter"></div>
		<canvas ref="canvas" style="width:100%;height:100%"></canvas>
    </div>
</template>


<script>

import Star from './Star.js'


export default {
    
    name:"loginParticle",
    data(){

        let data = {

			ctx:"",
			width:0,
         	height:0,
			stars:[],
	        initStarsPopulation:500


        }

        return data;
    },
    methods:{

       renderCanvas(){
		   
		   
	     	this.ctx.strokeStyle = "white";
			this.ctx.shadowColor = "white";
			for (let i = 0; i < this.initStarsPopulation; i++) {
				
				this.stars[i] = new Star(
					 this.ctx,
					 i, 
					 Math.floor(Math.random()*this.width), 
					 Math.floor(Math.random()*this.height),
					 this.width,
					 this.height
				);
				
				
				
			}
			this.ctx.shadowBlur = 0;
            this.animate();

	   },
	   animate(){

				
			this.ctx.clearRect(0, 0, this.width, this.height);

				for (let item of this.stars) {

                    item.move();

				}

			requestAnimationFrame(this.animate);
	   }



    },
    mounted(){


		// this.ctx = this.$refs.canvas.getContext('2d');
		// this.width = document.documentElement.clientWidth;
		// this.height = document.documentElement.clientHeight;
		
        

        //this.renderCanvas();

    }

}
</script>


<style scoped>

.login-background{
    
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
    z-index: -1;
    overflow:hidden;
	background:black;
	background:linear-gradient(to bottom,#000000 0%,#5788fe 100%);

}

.filter {
	width:100%;
	height:100%;
	position:absolute;
	top:0;
	left:0;
	background:#fe5757;
	animation:colorChange 30s ease-in-out infinite;
	animation-fill-mode:both;
	mix-blend-mode:overlay;
}
@keyframes colorChange {
	0%,100% {
	opacity:0;
}
50% {
	opacity:.9;
}
}

.landscape {
	position:absolute;
	bottom:0px;
	left:0;
	width:100%;
	height:100%;
	
  
	background-size:1000px 250px;
	background-repeat:repeat-x;
	background-position:center bottom;
}

</style>
