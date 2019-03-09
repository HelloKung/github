

export default class Star {

    constructor(ctx,id, x, y,height,width){

        this.height = height;
        this.width = width;
        this.id = id;
        this.x = x;
        this.y = y;
        this.r = Math.floor(Math.random()*1)+1;
        let alpha = (Math.floor(Math.random()*10)+1)/10/2;
        this.color = "rgba(255,255,255,"+alpha+")";
        this.ctx = ctx;
    }
    draw(){
       
        this.ctx.fillStyle = this.color;
        this.ctx.shadowBlur = this.r * 2;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        this.ctx.closePath();
        this.ctx.fill();

    } 
    move(){

        this.y -= .15;
        if (this.y <= -10) this.y = this.height + 10;
        this.draw();
    }
    die(){

        stars[this.id] = null;
        delete stars[this.id];
    }

  




}


