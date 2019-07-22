
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
renderer.setClearColor('rgb(135,206,250)',1.0);///背景

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



function createCuboid({size,position,rotate,border,materials,remove,mapScene}){ ///a => x 长,b => z 宽,h => y高
   
    


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

    cube.castShadow = true; 
 
    //if(!remove)  scene.add(cube);
   
    if(!mapScene)  
    
       scene.add(cube);

    else

       mapScene.add(cube);
       

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


function createFloor({position,rotate,scale,border,materials,h,mapScene}){
 
    
    let points = [];

    let radius_h = 5;//弧度与平边的高度
 
    let radius = (Math.pow(50,2) + Math.pow(radius_h,2)) / (2.0 * radius_h) ; ///半径

    let angle =  Math.asin(50.0 / radius);  ///角度

    let radius_num = 10; ///弧分为多少段,针对半圆

    
    for(let i = 0; i < 20 ;i++ ){

        points.push([50 - 5 * i, 50 , 1]);

        if(i == 20 - 1)  points.push([50 - 5 * (i + 1), 50 , 1]);
    
    }

    for(let i = 0; i < radius_num * 2 ;i++ ){

        let angle_s =  angle * 1.0 / radius_num  //划分角度

        if(i < radius_num){
 

            let l = Math.sin(angle * 1.0 - angle_s * i) * radius;

            let w = Math.cos(angle * 1.0 - angle_s * i) * radius - Math.cos(angle) * radius;

            let x = -50.0 - w;
            
            let y = l;

            points.push([x,y])

        
        }else{

            let l = Math.sin(angle_s * i - angle * 1.0) * radius;

            let w = Math.cos( angle_s * i - angle * 1.0) * radius - Math.cos( angle) * radius;

            let x = -50.0 - w;
            
            let y = -l; 
             
            points.push([x,y])

        }


       

    }
    
    for(let i = 0; i < 20 ;i++ ){

        points.push([-50 + 5 * i, -50  , 1]);

        if(i == 20 - 1)  points.push([-50 + 5 * ( i + 1 ), -50  , 1]);
    
    }
  
    for(let i = 0; i < radius_num * 2 + 1 ;i++ ){

        let angle_s =  angle * 1.0 / radius_num  //划分角度

        if(i < radius_num){
 

            let l = Math.sin(angle * 1.0 - angle_s * i) * radius;

            let w = Math.cos(angle * 1.0 - angle_s * i) * radius - Math.cos(angle) * radius;

            let x = 50.0 - w;
            
            let y = -l;

            points.push([x,y])

        
        }else{

            let l = Math.sin(angle_s * i - angle * 1.0) * radius;

            let w = Math.cos( angle_s * i - angle * 1.0) * radius - Math.cos( angle) * radius;

            let x = 50.0 - w;
            
            let y = l; 
             
            points.push([x,y])

        }

    }
    
    

    //let h = 10;


    let vertices = [];

    let faces = [];
    
    //console.log(points)


    for(let i = 0;i<points.length;i++){  ///侧面

        if(i != points.length - 1){

            vertices.push(

                new THREE.Vector3(points[i][0] + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001 ,0,points[i][1]),
                new THREE.Vector3(points[i][0]  + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001 ,h,points[i][1]),
                new THREE.Vector3(points[i + 1][0]  + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001 ,0,points[i + 1][1]),
                
                new THREE.Vector3(points[i + 1][0]  + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001 ,0,points[i + 1][1]),
                new THREE.Vector3(points[i + 1][0]  + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001 ,h,points[i + 1][1]),
                new THREE.Vector3(points[i][0]  + (border ? 1 : 0 ) * (points[i][2]||0) * i * 0.0001,h,points[i][1]),

            )

            faces.push(

                new THREE.Face3(i * 6,i * 6 + 1,i * 6+ 2),
                new THREE.Face3(i * 6 + 2,i * 6 + 1,i * 6), 
                new THREE.Face3(i * 6 + 3,i * 6 + 3 + 1,i * 6 + 3 + 2),
                new THREE.Face3(i * 6 + 3 + 2,i * 6 + 3 + 1,i * 6 + 3), 
            )

        }


    }

    let facesBottom = [];

    for(let i = 0;i<radius_num* 2;i++){

        facesBottom.push(

            new THREE.Face3(0,126 + i * 6,132 + i * 6),
            new THREE.Face3(132 + i * 6 ,126 + i * 6 ,0),
        )

        if(i == 0){

            facesBottom.push(

            
                new THREE.Face3(246,366,374),
                new THREE.Face3(374,366 ,246),
            
            )


        }else{


            facesBottom.push(

                
                new THREE.Face3(246,374 + 6 * (i - 1),380  + 6 * (i - 1)),
                new THREE.Face3(380  + 6 * (i - 1) ,374 + 6 * (i - 1) ,246),
            
            )

        }

    }
    
    for(let i = 0; i < radius_num * 2 ;i++ ){

        let angle_s =  angle * 1.0 / radius_num  //划分角度

        if(i < radius_num){
 

            let l = Math.sin(angle * 1.0 - angle_s * i) * radius;

            let w = Math.cos(angle * 1.0 - angle_s * i) * radius - Math.cos(angle) * radius;

            let x = -50.0 - w;
            
            let y = l;

            points.push([x,y])

        
        }else{

            let l = Math.sin(angle_s * i - angle * 1.0) * radius;

            let w = Math.cos( angle_s * i - angle * 1.0) * radius - Math.cos( angle) * radius;

            let x = -50.0 - w;
            
            let y = -l; 
             
            points.push([x,y])

        }


       

    }
    

    
                     
        
    var geometry = new THREE.Geometry();
   
    geometry.vertices = vertices;

    geometry.faces = faces;

    geometry.computeBoundingSphere();

    var cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(materials));


    let geometryTop = new THREE.Geometry();
    
    geometryTop.vertices = vertices;

    geometryTop.faces = facesBottom;

    var cubeTop = new THREE.Mesh( geometryTop, new THREE.MeshBasicMaterial(materials));



    let geometryBottom = new THREE.Geometry();
    
    geometryBottom.vertices = vertices;

    geometryBottom.faces = facesBottom;

    var cubeBottom = new THREE.Mesh( geometryBottom, new THREE.MeshBasicMaterial(materials));


    let cubeEdges = new THREE.EdgesGeometry(geometry, border ? 1 : 2);

    let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        //edgesMtl.depthTest = false; //深度测试，若开启则是边框透明的效果
    let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

    cube.add(cubeLine);

    cube.position.set(position.x,position.y,position.z);

    cubeTop.position.set(position.x,position.y + h,position.z);

    cubeBottom.position.set(position.x,position.y,position.z);

    if(rotate){

        cube.rotation.set(rotate.x,rotate.y,rotate.z);

        cubeTop.rotation.set(rotate.x,rotate.y,rotate.z);

        cubeBottom.rotation.set(rotate.x,rotate.y,rotate.z);

    }

    cube.scale.set(scale,1,scale);
    cubeTop.scale.set(scale,1,scale);
    cubeBottom.scale.set(scale,1,scale);
 

    if(!mapScene){

        scene.add(cube); 

        scene.add(cubeTop);

        scene.add(cubeBottom);

    }else{

        mapScene.add(cube); 

        mapScene.add(cubeTop);

        mapScene.add(cubeBottom);

    }
    
    var group = new THREE.Group;

    group.add( cube );
    group.add( cubeTop );
    group.add( cubeBottom );
    

    if(!mapScene){

       scene.add(group)

    }

    return group
}



function createRoof({position,rotate,scale,border,materials,h,mapScene}){
 
    
    let points = [];

    let radius_h = 5;//弧度与平边的高度
 
    let radius = (Math.pow(50,2) + Math.pow(radius_h,2)) / (2.0 * radius_h) ; ///半径

    let angle =  Math.asin(50.0 / radius);  ///角度

    let radius_num = 10; ///弧分为多少段,针对半圆

    
    for(let i = 0; i < radius_num * 2 + 1 ;i++ ){

        let angle_s =  angle * 1.0 / radius_num  //划分角度

        if(i < radius_num){
 

            let l = Math.sin(angle * 1.0 - angle_s * i) * radius;

            let w = Math.cos(angle * 1.0 - angle_s * i) * radius - Math.cos(angle) * radius;

            let x = 50.0 - w;
            
            let y = -l;

            points.push([x,y])

        
        }else{

            let l = Math.sin(angle_s * i - angle * 1.0) * radius;

            let w = Math.cos( angle_s * i - angle * 1.0) * radius - Math.cos( angle) * radius;

            let x = 50.0 - w;
            
            let y = l; 
             
            points.push([x,y])

        }

    }
    
    

    //let h = 10;


    let vertices = [];

    let faces = [];
    
    //console.log(points)


    for(let i = 0;i<points.length;i++){  ///侧面
        
        if(i == 0){


            vertices.push(

                new THREE.Vector3(points[0][0]  ,0 ,points[0][1]),
                new THREE.Vector3(points[1][0]  , h / (radius_num * 2.0) ,points[1][1]),
                new THREE.Vector3(points[1][0]  ,0 ,points[1][1]),
               
            )

            faces.push(

                new THREE.Face3(0 , 1 , 2),
                new THREE.Face3(2 , 1 , 0),
                new THREE.Face3(0 , 1 , 120),
                new THREE.Face3(120 , 1 , 0),
                
            )



        }else if(i != points.length - 1){

            vertices.push(

                new THREE.Vector3(points[i][0]  ,0, points[i][1]),
                new THREE.Vector3(points[i + 1][0]  ,h * (i + 1)/ (radius_num * 2.0) ,points[i + 1][1]),
                new THREE.Vector3(points[i + 1][0]  ,0 ,points[i + 1][1]),
                
                new THREE.Vector3(points[i][0]  ,0, points[i][1]),
                new THREE.Vector3(points[i][0]  ,h * i / (radius_num * 2.0) ,points[i][1]),
                new THREE.Vector3(points[i + 1][0] ,h * (i + 1)/ (radius_num * 2.0),points[i + 1][1]),

            )

            faces.push(

                new THREE.Face3(i * 6 - 3,i * 6 + 1 - 3,i * 6 + 2 - 3),
                new THREE.Face3(i * 6 + 2 - 3,i * 6 + 1 - 3,i * 6 - 3), 
                new THREE.Face3(i * 6 + 3 - 3,i * 6 + 3 + 1 - 3,i * 6 + 3 + 2 - 3),
                new THREE.Face3(i * 6 + 3 + 2 - 3,i * 6 + 3 + 1 - 3,i * 6 + 3 - 3), 

                new THREE.Face3(i * 6 + 1 - 3 , i * 6 + 3 + 1 - 3 , 120), //顶部
                new THREE.Face3(120 ,i * 6 + 3 + 1 - 3, i * 6 + 1 - 3),
            )

        }


    }
    
    

    vertices.push(

        new THREE.Vector3(50 ,0 ,50),
        new THREE.Vector3(50  , h , 50),
        new THREE.Vector3(-50 , 0 ,50),
        new THREE.Vector3(-50 , 0 , -50),
    )

    faces.push(

        new THREE.Face3(117 , 118 , 119 ),
        new THREE.Face3(119 , 118 , 117 ),

        new THREE.Face3(118 , 120 , 139 ),
        new THREE.Face3(139 , 120 , 118 ),
    )



    /////// -50,50 --> -50,-50  那条边的点


    for(let i = 0; i < radius_num * 2 ;i++ ){

        let angle_s =  angle * 1.0 / radius_num  //划分角度

        if(i < radius_num){
 

            let l = Math.sin(angle * 1.0 - angle_s * i) * radius;

            let w = Math.cos(angle * 1.0 - angle_s * i) * radius - Math.cos(angle) * radius;

            let x = -50.0 - w;
            
            let y = l;

            //points.push([x,y])
            
            vertices.push(
                
                new THREE.Vector3(x ,0 ,y),
            
            )
        
        }else{

            let l = Math.sin(angle_s * i - angle * 1.0) * radius;

            let w = Math.cos( angle_s * i - angle * 1.0) * radius - Math.cos( angle) * radius;

            let x = -50.0 - w;
            
            let y = -l; 
             
            vertices.push(
                
                new THREE.Vector3(x ,0 ,y),
            
            )

        }


       

    }
    
   
    ///// 根据 -50,50 --> -50,-50  那条边的点加面

    for(let i = 0; i < radius_num * 2 - 1  ;i++ ){

        

        faces.push(

            new THREE.Face3(118 , 121 + i , 122 + i ),
            new THREE.Face3(122 + i  , 121 + i  , 118 ),
    
        )


    }





    
                     
        
    var geometry = new THREE.Geometry();
   
    geometry.vertices = vertices;

    geometry.faces = faces;

    geometry.computeBoundingSphere();

    var cube = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial(materials));


    // let geometryTop = new THREE.Geometry();
    
    // geometryTop.vertices = vertices;

    // geometryTop.faces = facesBottom;

    // var cubeTop = new THREE.Mesh( geometryTop, new THREE.MeshBasicMaterial(materials));



    // let geometryBottom = new THREE.Geometry();
    
    // geometryBottom.vertices = vertices;

    // geometryBottom.faces = facesBottom;

    // var cubeBottom = new THREE.Mesh( geometryBottom, new THREE.MeshBasicMaterial(materials));


    let cubeEdges = new THREE.EdgesGeometry(geometry, 0);

    let edgesMtl =  new THREE.LineBasicMaterial({color: 0x000000});
        //edgesMtl.depthTest = false; //深度测试，若开启则是边框透明的效果
    let cubeLine = new THREE.LineSegments(cubeEdges, edgesMtl);

    cube.add(cubeLine);

    cube.position.set(position.x,position.y,position.z);

    // cubeTop.position.set(position.x,position.y + h,position.z);

    // cubeBottom.position.set(position.x,position.y,position.z);

     cube.scale.set(scale,1,scale);
    // cubeTop.scale.set(scale,1,scale);
    //cubeBottom.scale.set(scale,1,scale);
 
    if(!mapScene){

        scene.add(cube); 

    }else{

        mapScene.add(cube)

    }

    

    // scene.add(cubeTop);

    // scene.add(cubeBottom);

}


