
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

// option = {
 
//      size:{a:"",b:"",c:""},     长宽高
//      postion:{x:"",y:"",z:""},  位置
//      rotate:{x:0,y:0,z:0},      旋转
//      border:true,               是否有边框
//      color:""                   背景颜色

// }

function createCuboid({size,position,rotate,border,color}){ ///a => x 长,b => z 宽,h => y高
   
    


    let object = new THREE.BoxGeometry(size.a, size.c , size.b);
    
    let material = new THREE.MeshBasicMaterial({
        color: color
    });

    let cube = new THREE.Mesh(object, material); 
    
    // ///设置边框
    let cubeEdges = new THREE.EdgesGeometry(object, 1);

    let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
    // edgesMtl.depthTest = false; 深度测试，若开启则是边框透明的效果
    let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

    cube.add(cubeLine);

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
 
    
 
    

     

    scene.add(cube);

    return cube; 
}