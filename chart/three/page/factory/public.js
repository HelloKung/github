
///创建一个场景
var scene = new THREE.Scene();   

///创建一个正交摄像机
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var controls = new THREE.OrbitControls(camera);
controls.target.set(0,0,0);
controls.update();

///创建一个加载器
var renderer = new THREE.WebGLRenderer({

    antialias:true,
    alpha:true
});
renderer.setSize(window.innerWidth , window.innerHeight);
renderer.setClearColor('#160212',1.0);///背景

///创建一个坐标系

var axesHelper = new THREE.AxesHelper();
    scene.add(axesHelper);
    document.body.appendChild(renderer.domElement);

///创建一个光源

   
scene.add(new THREE.AmbientLight(0x444444));
let light = new THREE.SpotLight(0xffffff);

light.position.set(100,100,0);
//告诉平行光需要开启阴影投射

light.castShadow = true;
scene.add(light);


////鼠标移动变色
var highlightBox;

//创建事件

let objectEvent = {

}

let mouseoverEvent = []; //{uuid,hoverColor,color,object}

// option = {
 
//      size:{a:"",b:"",c:""},     长宽高
//      postion:{x:"",y:"",z:""},  位置
//      rotate:{x:0,y:0,z:0},      旋转
//      border:true,               是否有边框
//      color:""                   背景颜色

// }




let tips = document.createElement("div");
tips.className = "tooltip";

$(tips).append( `
    <div class="tooltip-container">物品数量：100</div> 
    <div class="oblique-line"></div>
    <div class="line"></div>
    <div class="bottom-icon"></div>
`);

var tooltip = new THREE.CSS3DObject( tips );


tooltip.position.set(15,56,-7);

tooltip.scale.x=0.5;
tooltip.scale.y=0.5;

scene.add(tooltip);


// var labelRenderer = new THREE.CSS2DRenderer();
// labelRenderer.setSize( window.innerWidth, window.innerHeight );
// labelRenderer.domElement.style.position = 'absolute';
// labelRenderer.domElement.style.top = 0;
// document.body.appendChild( labelRenderer.domElement );

var CSS3Drenderer = new THREE.CSS3DRenderer();
CSS3Drenderer.setSize( window.innerWidth, window.innerHeight );
CSS3Drenderer.domElement.style.position = 'absolute';
CSS3Drenderer.domElement.style.top = 0;
document.body.appendChild( CSS3Drenderer.domElement );


function HandClickObject(e) {
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

addEventListener('click',HandClickObject);// 监听窗口鼠标单击事件



function HandHoverObject(e) {

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

   
    if (intersects.length > 0) {
        
        let object = intersects[0].object;
   
      
            for(const [i,v] of mouseoverEvent.entries()){
                
                let {hoverColor,color} = v; 

                if(object.uuid == v.uuid)
                   v.object.material.color.setStyle(hoverColor);
                else
                   v.object.material.color.setStyle(color);   

            }       
     


        
     
    }
}


addEventListener("mousemove",HandHoverObject);


function createCuboid({size,position,rotate,border,materials,remove}){ ///a => x 长,b => z 宽,h => y高
   
    


    let object = new THREE.BoxGeometry(size.a, size.c , size.b);
    
    let material = new THREE.MeshBasicMaterial(materials);

    let cube = new THREE.Mesh(object, material); 
    
    // ///设置边框
    if(border){
    
        let cubeEdges = new THREE.EdgesGeometry(object, 1);

        let edgesMtl =  new THREE.LineBasicMaterial({color: 0xffffff,opacity:0.8,transparent:true});
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


function createObjectA({x,y,z}){

    
    let top_box = createCuboid({

        size:{a:14,b:14,c:14},
        position:{x:0,y:11.5,z:0},
        border:true,
        materials:{color:"#55a9d7",opacity:0.8,transparent:true}
    })

    let bottom_box = createCuboid({

        size:{a:14,b:14,c:4},
        position:{x:0,y:2.6,z:0},
        border:true,
        materials:{color:"#FFE643",opacity:0.8,transparent:true}
    })

    let box = new THREE.Group();

    box.add(top_box);
    box.add(bottom_box);
 
    scene.add(box)

    box.position.set(x,y,z);
    

    mouseoverEvent.push({
        uuid:top_box.uuid,
        object:top_box,
        hoverColor:"#fcaf41",
        color:"#55a9d7"
    })
     
    objectEvent[box.uuid]=function(){

        console.log("点击了盒子") 
        showTooltip();
        //box.children[0].material.color.setStyle("#fcaf41")
    }

}       
        

function createWave({width,height,position,rotation}){

    let wave = document.createElement("div"); 
    wave.className = "wave-container";
    
    $(wave).append( `
       <div class="wave"></div> 
    `);

    wave.style.width = width + "px";
    wave.style.height = height + "px";
   
    var _wave = new THREE.CSS3DObject( wave );

    _wave.position.set(position.x||0,position.y||0,position.z||0);
    _wave.rotation.set(rotation.x||0,rotation.y||0,rotation.z||0)

    scene.add(_wave)

    return _wave;
}
 
