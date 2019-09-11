
///创建一个场景
var scene = new THREE.Scene();   

///创建一个正交摄像机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);


var threeOnEvent = new THREE.onEvent(scene,camera);

var controls = new THREE.OrbitControls(camera);
controls.target.set(0,0,0);
controls.update();

///创建一个加载器
var renderer = new THREE.WebGLRenderer({
    antialias:true,
    alpha:true
});
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setClearColor('rgb(255,255,255)',1.0);///背景

///创建一个坐标系

var axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);
    document.body.appendChild(renderer.domElement);

///创建一个光源

   
scene.add(new THREE.AmbientLight(0x444444));
let light = new THREE.SpotLight(0xffffff);

light.position.set(0,100,100);
//告诉平行光需要开启阴影投射

light.castShadow = true;
scene.add(light);



//创建事件

let objectEvent = {

}


// option = {
 
//      size:{a:"",b:"",c:""},     长宽高
//      postion:{x:"",y:"",z:""},  位置
//      rotate:{x:0,y:0,z:0},      旋转
//      border:true,               是否有边框
//      color:""                   背景颜色

// }

function ray() {
    var Sx = event.clientX;//鼠标单击位置横坐标
    var Sy = event.clientY;//鼠标单击位置纵坐标
    //屏幕坐标转标准设备坐标
    var x = ( Sx / window.innerWidth ) * 2 - 1;//标准设备横坐标
    var y = -( Sy / window.innerHeight ) * 2 + 1;//标准设备纵坐标
    var standardVector  = new THREE.Vector3(x, y, 0.5);//标准设备坐标
    
    //console.log(Sx,Sy,x,y)
    
    //标准设备坐标转世界坐标
    var worldVector = standardVector.unproject(camera);
    //射线投射方向单位向量(worldVector坐标减相机位置坐标)
    var ray = worldVector.sub(camera.position).normalize();
    //创建射线投射器对象
    var raycaster = new THREE.Raycaster(camera.position, ray);
    //返回射线选中的对象

    //console.log(scene)
    var intersects = raycaster.intersectObjects(scene.children,true);

    //console.log(intersects);
    if (intersects.length > 0) {
        
        let object = intersects[0].object;

        if(object.parent.type=="Group"){
        
            if(objectEvent[object.parent.uuid]) objectEvent[object.parent.uuid]();
        
        }else 
           
            if(objectEvent[object.uuid]) objectEvent[object.uuid]();
            
     
    }
}
addEventListener('click',ray);// 监听窗口鼠标单击事件



function createCuboid({size,position,rotate,border,materials,remove}){ ///a => x 长,b => z 宽,h => y高
   
    


    let object = new THREE.BoxGeometry(size.a, size.c , size.b);
    
    let material = [];
    
    if(materials.length == 6)

       material = materials.map(item => new THREE.MeshPhongMaterial(item));
    
    else 
    
       material = new THREE.MeshPhongMaterial(materials[0]);

    let cube = new THREE.Mesh(object, material); 
    
   

    // ///设置边框
    if(border){
    
        let cubeEdges = new THREE.EdgesGeometry(object, 1);

        let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        // edgesMtl.depthTest = false; 深度测试，若开启则是边框透明的效果
        let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

        cube.add(cubeLine);
    
    }

    if(!position){

        cube.position.set(0,0,0);

    }else{
        
        position.x = position.x||0;
        position.y = position.y||0;
        position.z = position.z||0;
      
        cube.position.set(position.x,position.y,position.z);
    }

    if(!rotate){

        cube.rotation.set(0,0,0);

    }else{
        
        rotate.x = rotate.x||0;
        rotate.y = rotate.y||0;
        rotate.z = rotate.z||0;
      
        cube.rotation.set(rotate.x,rotate.y,rotate.z);
    }

    cube.castShadow = true; 
 
    if(!remove)  scene.add(cube);
   
    

    return cube; 
}


function setThreeBsp(modelA,modelB,remove){

    //console.log(scene,modelA);

    scene.children = scene.children.filter(item =>item.uuid != modelA.uuid);
    scene.children = scene.children.filter(item =>item.uuid != modelB.uuid);
    

    let modelA_BSP = new ThreeBSP(modelA);
    let modelB_BSP = new ThreeBSP(modelB);

    let resultBSP = modelA_BSP.subtract(modelB_BSP);
    
    let result = resultBSP.toMesh(modelA.material);
    
    
   //重新赋值一个纹理


    
    result.geometry.computeFaceNormals();
    result.geometry.computeVertexNormals();
    result.material.needsUpdate = true;
    result.geometry.buffersNeedUpdate = true;
    result.geometry.uvsNeedUpdate = true;

    
    
    if(!remove)  scene.add(result);


    return result;

}


function createWindow_t1(wall_out,direction){

    let {x,y,z} = wall_out.position;
  
    let dx = 1,dy = 1,dz = 1; 
  
    let walldirection = {

        "x":()=>dx=1,
        "-x":()=>dx=-1,
        "y":()=>dy=1,
        "-y":()=>dy=-1,
        "z":()=>dz=1,
        "-z":()=>dz=1,
        
    }
    

    walldirection[direction]();
  
    //{x:75,y:16.5,z:-2}
    let wall_c1_1_in = createCuboid({
           
        size:{a:2.4,b:9,c:16},
        position:{x:x,y:y,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:0x956e4d},
        remove:true
    })
    
  


    
    let bsp = setThreeBsp(wall_out,wall_c1_1_in);

    scene.add(bsp); 

    let window_up = createCuboid({
           
        size:{a:0.8,b:9,c:8.5},
        position:{x:x-0.2,y:y+3.7,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff
        },
        remove:true
    })

    let window_up_in = createCuboid({
           
        size:{a:0.8,b:6,c:6},
        position:{x:x-0.2,y:y+3.7,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff
        },
        remove:true
    })

    let window_up_glass = createCuboid({
           
        size:{a:0.2,b:6,c:6},
        position:{x:x-0.2,y:y+3.7,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff,
            opacity:0.3,
            transparent:true
        },
        remove:true
    })

    let window_up_bsp = setThreeBsp(window_up,window_up_in);

    window_up_bsp.position.set(0,0,0);
    window_up_glass.position.set(0,0,0);
    


    let window_up_group = new THREE.Group();

        window_up_group.add( window_up_bsp );
        window_up_group.add( window_up_glass );

        scene.add( window_up_group );
        
        // window_up_group.position.set(74.8,20.2,-2);

        //console.log(window_up_group); 
        

    let window_down = createCuboid({
           
        size:{a:0.8,b:9,c:8.5},
        position:{x:x-0.4,y:y-4.3,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
           color:0xffffff
        },
        //remove:true
    })

    let window_down_in = createCuboid({
           
        size:{a:0.8,b:6,c:6},
        position:{x:x-0.4,y:y-4.3,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
           color:0xffffff
        },
        remove:true
    })

    let window_down_glass = createCuboid({
           
        size:{a:0.2,b:6,c:6},
        position:{x:x-0.4,y:y-4.3,z:z},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff,
            opacity:0.3,
            transparent:true
        },
        remove:true
    })

    let window_down_bsp = setThreeBsp(window_down,window_down_in,true);
    
    window_down_bsp.position.set(0,0,0);
    window_down_glass.position.set(0,0,0);
    
    
    let window_down_group = new THREE.Group();

        window_down_group.add( window_down_bsp );
        window_down_group.add( window_down_glass );

        scene.add( window_down_group );
    
        //console.log("window_down_group",window_down_group);
        //window_down_group.position.set(74.6,12.2,-2);    

        //console.log(dx,dy,dz);

        window_up_group.position.set(x-0.3+dx*0.1,y-0.3+4*dy,z);
        window_down_group.position.set(x-0.3-dx*0.1,y-0.3-4*dy,z);  


    // console.log("window_down_group",window_down_group,window_up_group);

    // console.log("Scene",scene);

    objectEvent[window_up_group.uuid]=function(){
        
        let timer;

      
        if(window_down_group.position.y-12.2>=8){

          timer = setInterval(function(){
    
                window_down_group.position.y-=0.05
                
                if(window_down_group.position.y-12.2<=0)
                
                clearInterval(timer)
            })

        }else if(window_down_group.position.y-12.2<=0){

            timer = setInterval(function(){
    
                window_down_group.position.y+=0.05
                
                if(window_down_group.position.y-12.2>=8)
                
                clearInterval(timer)
            })

        } 
    }

    objectEvent[window_down_group.uuid]=function(){
        
        let timer;

        clearInterval(timer);
        if(window_down_group.position.y-12.2>=8){

          timer = setInterval(function(){
    
                window_down_group.position.y-=0.05
                
                if(window_down_group.position.y-12.2<=0)
                
                clearInterval(timer)
            })

        }else if(window_down_group.position.y-12.2<=0){

            timer = setInterval(function(){
    
                window_down_group.position.y+=0.05
                
                if(window_down_group.position.y-12.2>=8)
                
                clearInterval(timer)

            })

        }  
            
        
                
    }

}

function createDoor_t1(){

    let wall = createCuboid({

        size:{a:25,b:2.4,c:33},
        position:{x:25.3,y:16.5,z:34.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0x956e4d
        },
        remove:true

    })

    let wall_in = createCuboid({

        size:{a:18,b:2.4,c:26},
        position:{x:25.3,y:13,z:34.1},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff
        },
        remove:true 

    })

    let wall_bsp =  setThreeBsp(wall,wall_in);

    let door_left_show = createCuboid({

        size:{a:9,b:2.4,c:26},
        position:{x:4.5,y:0,z:0},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0x7b1f12,
        },
        remove:true

    })

    let door_left_hide = createCuboid({

        size:{a:9,b:2.4,c:26},
        position:{x:-4.5,y:0,z:0},
        //rotate:{x:0,y:0,z:0},
        border:false,
        materials:{
            color:0x7b1f12,
            transparent : true,
			opacity : 0
        },
        remove:true,

    })

    let door_left = new THREE.Group();

        door_left.add(door_left_show);
        door_left.add(door_left_hide);
    
           

    scene.add(door_left);    
    


    let door_right_show = createCuboid({

        size:{a:9,b:2.4,c:26},
        position:{x:-4.5,y:0,z:0},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0x7b1f12,
        },
        remove:true
    })

    let door_right_hide = createCuboid({

        size:{a:9,b:2.4,c:26},
        position:{x:4.5,y:0,z:0},
        //rotate:{x:0,y:0,z:0},
        border:false,
        materials:{
            color:0x7b1f12,
            transparent : true,
			opacity : 0
        },
        remove:true,

    })

    let door_right = new THREE.Group();

    door_right.add(door_right_show);
    door_right.add(door_right_hide);
    
    scene.add(door_right); 
    
    door_left.position.set(16.3, 13, 34.1)
    door_right.position.set(34.3, 13, 34.1)
    
    
    objectEvent[door_left.uuid] = function(){

       
        door_left.rotation.y=door_left.rotation.y==0?Math.PI/3:0;
        

    }
    objectEvent[door_right.uuid] = function(){

       
        door_right.rotation.y=door_right.rotation.y==0?-Math.PI/3:0;
        

    }


}



function createWindow_t2(wall_out,direction){


     let {x,y,z} = wall_out.position;
     
     let size = wall_out.geometry.parameters;

     let wa = 18, wc = 16;

     let wall_in = createCuboid({

        size:{a:wa,b:2.4,c:wc},
        position:{x:x,y:y,z:z},
        border:true,
        materials:{color:0xffffff},
        
     })

     let wall = setThreeBsp(wall_out,wall_in);
     
     

     let fwidth = 1 * 2; //边框宽度 *2

     let fx=0,fy=0,fz=0;

     let fposition = {

         "x":()=>fx+=1.45,
         "-x":()=>fx-=1.45,
         "y":()=>fy+=1.45,
         "-y":()=>fy-=1.45,
         "z":()=>fz+=1.45,
         "-z":()=>fz-=1.45,
         
     }
     
     fposition[direction]();
      
     

     let frame_out = createCuboid({

        size:{a:wa+fwidth,b:0.5,c:wc+fwidth},
        position:{x:x+fx,y:y+fy,z:z+fz},
        border:true,
        materials:{color:0xffffff},
        remove:true
        
     })

     let frame_in = createCuboid({

        size:{a:wa,b:0.5,c:wc},
        position:{x:x+fx,y:y+fy,z:z+fz},
        border:true,
        materials:{color:0xffffff},
        remove:true
        
     })

     

     let frame = setThreeBsp(frame_out,frame_in); 

     
     scene.add(wall);
     
     scene.add(frame);
     



     let window = createCuboid({

        size:{a:wa,b:0.05,c:wc},
        position:{x:x,y:y,z:z},
        border:true,
        materials:{
            color:0xffffff,
            transparent:true,
            opacity:0.3
        },
        
     })

     let line1 = createCuboid({

        size:{a:0.5,b:0.1,c:wc},
        position:{x:x-wa/6,y:y,z:z},
        border:true,
        materials:{color:0xffffff} 
     })

     let line2 = createCuboid({

        size:{a:0.5,b:0.1,c:wc},
        position:{x:x+wa/6+1,y:y,z:z},
        border:true,
        materials:{color:0xffffff} 
     })

     let line3 = createCuboid({

        size:{a:wa,b:0.1,c:0.5},
        position:{x:x,y:y+wa/6,z:z},
        border:true,
        materials:{color:0xffffff} 
     })

     
     


}


function createWindow_t3(wall_out,direction){


    let {x,y,z} = wall_out.position;
    
    let size = wall_out.geometry.parameters;

    let wa = 14, wc = 16;

    let wall_in = createCuboid({

       size:{a:wa,b:2.4,c:wc},
       position:{x:x,y:y,z:z},
       border:true,
       materials:{color:0xffffff},
       
    })

    let wall = setThreeBsp(wall_out,wall_in);
    
    

    let fwidth = 1 * 2; //边框宽度 *2

    let fx=0,fy=0,fz=0;

    let fposition = {

        "x":()=>fx+=1.45,
        "-x":()=>fx-=1.45,
        "y":()=>fy+=1.45,
        "-y":()=>fy-=1.45,
        "z":()=>fz+=1.45,
        "-z":()=>fz-=1.45,
        
    }
    
    fposition[direction]();
     
    

    let frame_out = createCuboid({

       size:{a:wa+fwidth,b:0.5,c:wc+fwidth},
       position:{x:x+fx,y:y+fy,z:z+fz},
       border:true,
       materials:{color:0xffffff},
       remove:true
       
    })

    let frame_in = createCuboid({

       size:{a:wa,b:0.5,c:wc},
       position:{x:x+fx,y:y+fy,z:z+fz},
       border:true,
       materials:{color:0xffffff},
       remove:true
       
    })

    

    let frame = setThreeBsp(frame_out,frame_in); 

    
    scene.add(wall);
    
    scene.add(frame);
    



    let window = createCuboid({

       size:{a:wa,b:0.05,c:wc},
       position:{x:x,y:y,z:z},
       border:true,
       materials:{
           color:0xffffff,
           transparent:true,
           opacity:0.3
       },
       
    })

    let line1 = createCuboid({

       size:{a:0.5,b:0.1,c:wc},
       position:{x:x,y:y,z:z},
       border:true,
       materials:{color:0xffffff} 
    })

    

    let line3 = createCuboid({

       size:{a:wa,b:0.1,c:0.5},
       position:{x:x,y:y+3,z:z},
       border:true,
       materials:{color:0xffffff} 
    })

    
    


}

function createWindow_t4(wall_out,direction){


    let {x,y,z} = wall_out.position;
    
    let size = wall_out.geometry.parameters;

    let wa = 14.0, wc = 10.0;

    let wall_in = createCuboid({

       size:{a:wa,b:2.4,c:wc},
       position:{x:x,y:y,z:z},
       border:true,
       materials:{color:0xffffff},
       
    })

    let wall = setThreeBsp(wall_out,wall_in);

    let fwidth = 1 * 2; //边框宽度 *2

    let fx=0,fy=0,fz=0;

    let fposition = {

        "x":()=>fx+=1.45,
        "-x":()=>fx-=1.45,
        "y":()=>fy+=1.45,
        "-y":()=>fy-=1.45,
        "z":()=>fz+=1.45,
        "-z":()=>fz-=1.45,
        
    }
    
    fposition[direction]();
     
    

    let frame_out = createCuboid({

       size:{a:wa+fwidth,b:0.5,c:wc+fwidth},
       position:{x:x+fx,y:y+fy,z:z+fz},
       border:true,
       materials:{color:0xffffff},
       remove:true
       
    })

    let frame_in = createCuboid({

       size:{a:wa,b:0.5,c:wc},
       position:{x:x+fx,y:y+fy,z:z+fz},
       border:true,
       materials:{color:0xffffff},
       remove:true
       
    })

    let frame = setThreeBsp(frame_out,frame_in); 

    scene.add(frame);

    
    let window_left = createCuboid({
           
        size:{a:wa/2+1,b:1.0,c:wc},
        position:{x:x-wa/4,y:y,z:z-0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff
        },
        remove:true
    })

    let window_left_in = createCuboid({
           
        size:{a:wa/2-1,b:1.0,c:wc-2},
        position:{x:x-wa/4,y:y,z:z-0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff
        },
        remove:true
    })

    let window_left_glass = createCuboid({
           
        size:{a:wa/2-1,b:0.2,c:wc-2},
        position:{x:x-wa/4,y:y,z:z-0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff,
            opacity:0.3,
            transparent:true
        },
        remove:true
    })

    let window_left_bsp = setThreeBsp(window_left,window_left_in);

    scene.add(window_left_bsp);

    window_left_bsp.position.set(0,0,0);
    window_left_glass.position.set(0,0,0);
    


    let window_left_group = new THREE.Group();

        window_left_group.add( window_left_bsp );
        window_left_group.add( window_left_glass );

        scene.add( window_left_group );
        
        
        

    let window_right = createCuboid({
           
        size:{a:wa/2+1,b:1.0,c:wc},
        position:{x:x+wa/4,y:y,z:z+0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
           color:0xffffff
        },
        //remove:true
    })

    let window_right_in = createCuboid({
           
        size:{a:wa/2-1,b:1.0,c:wc-2},
        position:{x:x+wa/4,y:y,z:z+0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
           color:0xffffff
        },
        remove:true
    })

    let window_right_glass = createCuboid({
           
        size:{a:wa/2-1,b:0.2,c:wc-2},
        position:{x:x+wa/4,y:y,z:z+0.6},
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{
            color:0xffffff,
            opacity:0.3,
            transparent:true
        },
        remove:true
    })

    let window_right_bsp = setThreeBsp(window_right,window_right_in,true);
    
    window_right_bsp.position.set(0,0,0);
    window_right_glass.position.set(0,0,0);
    
    
    let window_right_group = new THREE.Group();

        window_right_group.add( window_right_bsp );
        window_right_group.add( window_right_glass );

        scene.add( window_right_group );
    
        //console.log("window_down_group",window_down_group);
        //window_down_group.position.set(74.6,12.2,-2);    

        //console.log(dx,dy,dz);

        window_left_group.position.set(x-wa/4+0.5,y,z-0.5);
        window_right_group.position.set(x+wa/4-0.5,y,z+0.5);  
    
    
        objectEvent[window_left_group.uuid]=function(){
        
            let timer;
    
          
            if(window_right_group.position.x>=x+wa/4-0.5){
    
              timer = setInterval(function(){
        
                     window_right_group.position.x-=0.05
                    
                    if(window_right_group.position.x<=x-wa/4+0.5)
                    
                    clearInterval(timer)
                })
    
            }else if(window_right_group.position.x<=x-wa/4+0.5){
    
                timer = setInterval(function(){
        
                    window_right_group.position.x+=0.05
                    
                    if(window_right_group.position.x>=x+wa/4-0.5)
                    
                    clearInterval(timer)
                })
    
            } 
        }
    
        objectEvent[window_right_group.uuid]=function(){
            
            let timer;
    
            clearInterval(timer);
            if(window_right_group.position.x>=x+wa/4-0.5){
    
              timer = setInterval(function(){
        
                window_right_group.position.x-=0.05
                    
                    if(window_right_group.position.x<=x-wa/4+0.5)
                    
                    clearInterval(timer)
                })
    
            }else if(window_right_group.position.x<=x-wa/4+0.5){
    
                timer = setInterval(function(){
        
                    window_right_group.position.x+=0.05
                    
                    if(window_right_group.position.x>=x+wa/4-0.5)
                    
                    clearInterval(timer)
    
                })
    
            }  
                    
        }

        scene.add(wall) 

    return wall;
}




function createFloor(){

      let floor_left = createCuboid({

            size:{a:64,b:80,c:2},
            position:{x:7,y:33,z:-6},
            border:true,
            materials:{
                color:0x70829a
            },
            remove:true

      })

      let floor_right = createCuboid({

        size:{a:36,b:92,c:2},
        position:{x:57,y:33,z:0},
        border:true,
        materials:{
            color:0x70829a
        },
        remove:true

      })


      let floor = new THREE.Group();

      floor.add(floor_left);
      floor.add(floor_right);
      
      floor.children.forEach(item => {item.material.opacity = 0.8;item.material.transparent = true;})

      scene.add(floor);


      


}



function createShape({points,depth=0,position,rotate,border,materials,remove}){

    var shape = new THREE.Shape();
    shape.moveTo( 0, 0 );
    
    points.forEach(item =>{

        shape.lineTo( item.x, item.y ); 

    })

    shape.lineTo( 0, 0 ); // close path
    
    var extrudeSettings = { depth: depth, bevelEnabled: true, bevelSegments: 1, steps: 0, bevelSize: 0, bevelThickness: 0 };

    var geometry = new THREE.ExtrudeBufferGeometry( shape, extrudeSettings );

	var cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(materials) );

    
    if(border){
    
        let cubeEdges = new THREE.EdgesGeometry(geometry, 1);

        let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        // edgesMtl.depthTest = false; 深度测试，若开启则是边框透明的效果
        let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

        cube.add(cubeLine);
    
    }

    if(!position){

        cube.position.set(0,0,0);

    }else{
        
        position.x = position.x||0;
        position.y = position.y||0;
        position.z = position.z||0;
      
        cube.position.set(position.x,position.y,position.z);
    }

    if(!rotate){

        cube.rotation.set(0,0,0);

    }else{
        
        rotate.x = rotate.x||0;
        rotate.y = rotate.y||0;
        rotate.z = rotate.z||0;
      
        cube.rotation.set(rotate.x,rotate.y,rotate.z);
    }
 
    if(!remove)  scene.add(cube);


    //scene.add(cube);   

    return cube;

    // let wall_c2_1 = createShape({

    //     points:[{x:94.4,y:0},{x:94.4,y:4},{x:47.2,y:28},{x:14,y:15},{x:0,y:15}],
    //     depth:2.4,
    //     position:{x:73.8,y:33,z:47.2},
    //     rotate:{x:0,y:Math.PI/2,z:0},
    //     border:true,
    //     materials:{color:0x956e4d} 

    // });



   
                 
}


function createCube({points,center,direction,depth,position}){


        var geometry = new THREE.Geometry();

        let fx=0,fy=0,fz=0;

        let fdepth = {

            "x":()=>{fx = depth},
            "-x":()=>{fx = -depth},
            "y":()=>{fy = depth},
            "-y":()=>{fy = -depth},
            "z":()=>{fz = depth},
            "-z":()=>{fz = -depth},
        }

        fdepth[direction]();

        let vertices = [];

        for(let i = 0;i< points.length;i++ ){

            vertices.push(new THREE.Vector3(points[i][0] - center[0],points[i][1] - center[1],points[i][2] - center[2]));

        }

        for( i = 0;i< points.length;i++ ){

            vertices.push(new THREE.Vector3(points[i][0] - center[0] + fx,points[i][1] - center[1] + fy,points[i][2] - center[2]+ fz));

        }

        //console.log(vertices);
        
        geometry.vertices = vertices;

        let faces = [];

        ////前面
        for(i = 0;i<points.length-2;i++){

            faces.push( new THREE.Face3( i + 2, i + 1, 0 ));
            
        }
        ////背面
        for(i = 0;i<points.length-2;i++){

            faces.push( new THREE.Face3( points.length, i + points.length + 1, i + points.length + 2 ));
            
        }
        
        ////侧面
        for(i = 0;i<points.length;i++){

            faces.push( new THREE.Face3( points.length + i, i == 0? points.length * 2 - 1:points.length + i - 1, (i + points.length - 1) % points.length ));
            faces.push( new THREE.Face3( points.length + i, (i + points.length - 1) % points.length, i ));
            
        }

        //console.log(faces);

        geometry.faces = faces;


        // geometry.vertices.push(
            
        //     new THREE.Vector3( 0 - 19.2,  0 -10, 0 -1.2 ),
        //     new THREE.Vector3( 38.4 - 19.2,  0 -10, 0 -1.2 ),
        //     new THREE.Vector3( 38.4 - 19.2, 15 -10, 0 -1.2 ),
        //     new THREE.Vector3( 19.2 - 19.2, 24 -10, 0 -1.2 ),
        //     new THREE.Vector3( 0 - 19.2,  15 -10, 0 -1.2 ),
 
        //     new THREE.Vector3( 0 - 19.2,  0 -10, 1.2 ),   
        //     new THREE.Vector3( 38.4 - 19.2,  0 -10,1.2 ),
        //     new THREE.Vector3( 38.4 - 19.2, 15 -10, 1.2 ),
        //     new THREE.Vector3( 19.2 - 19.2, 24 -10, 1.2 ),
        //     new THREE.Vector3( 0 - 19.2,  15 -10, 1.2 ),

           
        // );

        // geometry.faces.push( new THREE.Face3( 2, 1, 0 ) );                 
        // geometry.faces.push( new THREE.Face3( 3, 2, 0 ) );                 
        // geometry.faces.push( new THREE.Face3( 4, 3, 0 ) );  

        // geometry.faces.push( new THREE.Face3( 5, 6, 7 ) );                 
        // geometry.faces.push( new THREE.Face3( 5, 7, 8 ) );                 
        // geometry.faces.push( new THREE.Face3( 5, 8, 9 ) );                 
                         
        // geometry.faces.push( new THREE.Face3( 7, 6, 1 ) );                 
        // geometry.faces.push( new THREE.Face3( 7, 1, 2 ) );                 
               
        // geometry.faces.push( new THREE.Face3( 8, 7, 2 ) );                 
        // geometry.faces.push( new THREE.Face3( 8, 2, 3 ) );                 
        
        // geometry.faces.push( new THREE.Face3( 9, 8, 3 ) );                 
        // geometry.faces.push( new THREE.Face3( 9, 3, 4 ) );                 
        
        // geometry.faces.push( new THREE.Face3( 5, 9, 4 ) );                 
        // geometry.faces.push( new THREE.Face3( 5, 4, 0 ) );                 
        
        // geometry.faces.push( new THREE.Face3( 6, 5, 0 ) );                 
        // geometry.faces.push( new THREE.Face3( 6, 0, 1 ) );                 
        


        // geometry.vertices = vertices;
        
        geometry.computeBoundingSphere();

        var cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial({color:0x956e4d}) );

        let cubeEdges = new THREE.EdgesGeometry(geometry, 1);

        let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        // edgesMtl.depthTest = false; 深度测试，若开启则是边框透明的效果
        let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

        cube.add(cubeLine);

        cube.position.set(position.x,position.y,position.z);

        scene.add(cube); 
        //createWindow_t2(cube,"x")

        return cube;
   

}


function createRoof(){


    var geometry = new THREE.Geometry();
    var points = new THREE.Geometry();
    
    
    geometry.vertices.push(
          //new THREE.Vector3(0, 0, 0),
          new THREE.Vector3(0, 80, 0),
          new THREE.Vector3(-30.2, 37, 43.3),  //1
          new THREE.Vector3(-30.2, 48, 35.2),
          new THREE.Vector3(-30.2, 61, 0),
          new THREE.Vector3(-30.2, 37, -47.2),
          new THREE.Vector3(80.2, 37, -47.2),
          new THREE.Vector3(80.2, 61, 0),
          new THREE.Vector3(80.2, 48, 23.2),
          new THREE.Vector3(76.2, 48, 23.2),
          new THREE.Vector3(76.2, 48, 51.2),
          new THREE.Vector3(57, 57, 51.2),
          new THREE.Vector3(37.8, 48, 51.2),
          new THREE.Vector3(37.8, 48, 23.2),

          new THREE.Vector3(37.8, 37, 43.3), //1
          new THREE.Vector3(37.8, 61, 0), ///1
          new THREE.Vector3(57, 57, 7.6), ///1
          ///15///
          new THREE.Vector3(-30.2, 43.2, 56),
          new THREE.Vector3(-30.2, 41.2, 56),
          new THREE.Vector3(-30.2, 41.2, 43.3),  //1 
          new THREE.Vector3(-30.2, 63, 0),

          
    );
    
    let top_list = geometry.vertices.map(item => {

        return new THREE.Vector3(item.x, item.y*1 + 2, item.z)
    });

    geometry.vertices = geometry.vertices.concat(top_list);

    let num = geometry.vertices.length/2;

    points.vertices = geometry.vertices;
    
    
 
    for(let i=0;i<geometry.vertices.length-1;i++){
       
        points.faces.push(
            new THREE.Face3( 0, i + 1, i + 2 ))

    } 
 
    geometry.faces.push(
        new THREE.Face3(1, 3, 13),
        new THREE.Face3(14, 13, 3),
        new THREE.Face3(3, 4, 5),
        new THREE.Face3(3, 5, 6),
        new THREE.Face3(6, 7, 12),
        new THREE.Face3(6, 12, 14),
        new THREE.Face3(10, 12, 15),
        new THREE.Face3(8, 10 , 15),
        new THREE.Face3(8, 9 , 10),
        new THREE.Face3(10, 11 , 12),
        
    ) 


    geometry.faces = geometry.faces.concat(
        geometry.faces.map(item => {
            return new THREE.Face3(item.c + num,item.b + num, item.a + num)
        })
    )
  
    geometry.faces.push(

        new THREE.Face3(21, 3 , 1),
        new THREE.Face3(3, 21 , 23),
        new THREE.Face3(23, 4 , 3),
        new THREE.Face3(4, 23 , 24),
        new THREE.Face3(24, 5 , 4),
        new THREE.Face3(5, 24 , 25),
        new THREE.Face3(25, 6 , 5),
        new THREE.Face3(6, 25 , 26),
        new THREE.Face3(26, 7 , 6),
        new THREE.Face3(7, 26 , 27),
        new THREE.Face3(27, 8 , 7),
        new THREE.Face3(8, 27 , 28),
        new THREE.Face3(28, 9 , 8),
        new THREE.Face3(9, 28 , 29),
        new THREE.Face3(29, 10 , 9),
        new THREE.Face3(10, 29 , 30),
        new THREE.Face3(30, 11 , 10),
        new THREE.Face3(11, 30 , 31),
        new THREE.Face3(31, 12 , 11),
        new THREE.Face3(12, 31 , 32),
        new THREE.Face3(32, 13 , 12),
        new THREE.Face3(13, 32 , 33),
        new THREE.Face3(33, 14 , 13),
        new THREE.Face3(14, 33 , 34),
        
        new THREE.Face3(33, 21 , 1),
        new THREE.Face3(1, 13 , 33),
        
        

    )
    
    
   
    var loader = new THREE.TextureLoader();

    var texture = loader.load( 'textures/roof2.png' );

    
    console.log(texture);

    var material2 = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
    });


    var material = new THREE.MeshBasicMaterial({
        //color: 0xff0000,
        map:texture,
        //wireframe: true
    });

    material.side=THREE.DoubleSide;
    
    var mesh = new THREE.Mesh(geometry, material);
    
   
        let cubeEdges = new THREE.EdgesGeometry(geometry, 1);

        let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        // edgesMtl.depthTest = false; 深度测试，若开启则是边框透明的效果
        let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

        mesh.add(cubeLine);


    var mesh2 = new THREE.Mesh(points, material2);
    
    scene.add(mesh);
    //scene.add(mesh2);

}  
         
       
        


 
