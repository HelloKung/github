

    let box = createCuboid({
           
        size:{a:100,b:100,c:100},
        position:{x:0,y:0,z:0},//36.2/2-47.2
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#37E8F6",opacity:0.8,transparent:true},
        remove:true
    })

    // let highlightBox = createCuboid({
           
    //     size:{a:100,b:100,c:100},
    //     position:{x:0,y:0,z:0},//36.2/2-47.2
    //     //rotate:{x:0,y:0,z:0},
    //     border:true,
    //     materials:{color:"#FFE643",opacity:0.8,transparent:true},
    //     remove:true
    // })
 
    let tips = document.createElement("div");
    tips.className = "tips";
    
    tips.textContent = 'Earth';
    
    var boxtips = new THREE.CSS2DObject( tips );
        boxtips.position.set( 0, 100, 0 );
	    boxtips.rotation.set(0,0,0)

    // scene.add(box);
    
    // scene.add( boxtips );
    //highlightBox.visible = false;
    //scene.add(highlightBox); 
    

    var labelRenderer = new THREE.CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = 0;
    document.body.appendChild( labelRenderer.domElement );


    objectEvent[box.uuid] = function(e){

        console.log(e);

      
      
    };


    // 实例化一个加载器
// var loader = new THREE.OBJLoader();

// // 加载一个资源
// loader.load(
// 	// 资源链接
// 	'../../model/test/test2.obj',
// 	// 资源加载完成后的回调函数
// 	function ( object ) {

//         object.position.set(0,0,0)
// 		scene.add( object );
// 	}
// );

var loader = new THREE.FBXLoader();
loader.load( '../../model/test/test3.fbx', function ( object ) {

    //object.mixer = new THREE.AnimationMixer( object );
   

    scene.add( object );

} );

// new THREE.MTLLoader()
//     .load( '../../model/test/test2.mtl', function ( materials ) {
  
//         console.log(materials)
//         materials.preload();

//         new THREE.OBJLoader()
//             .setMaterials( materials )
//             .load( '../../model/test/test2.obj', function ( object ) {

//                 scene.add( object );

//             });

//     } );

camera.position.z = 200;    // 200


var render = function() {

    
    requestAnimationFrame(render);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;  
    renderer.render(scene, camera);
    labelRenderer.render( scene, camera );
   
};

render();