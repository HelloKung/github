
///创建一个场景
var scene = new THREE.Scene();   

///创建一个正交摄像机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var controls = new THREE.OrbitControls(camera);
controls.target.set(0,0,0);
controls.update();

///创建一个加载器
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setClearColor('rgb(135,206,250)',1.0);///背景

///创建一个坐标系

var axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);
    document.body.appendChild(renderer.domElement);

///创建一个光源

   
    // let pointColor="#000000";
    // let pointLight =new THREE.PointLight(pointColor);
    // pointLight.distance = 100;
    // pointLight.intensity = 200; //光强度的倍数,设为0则无灯光
    // scene.add(pointLight)




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
    
    let material = new THREE.MeshBasicMaterial(materials);

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


