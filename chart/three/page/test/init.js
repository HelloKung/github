

    let box = createCuboid({
           
        size:{a:100,b:100,c:100},
        position:{x:0,y:0,z:0},//36.2/2-47.2
        //rotate:{x:0,y:0,z:0},
        border:true,
        materials:{color:"#37E8F6",opacity:0.4,transparent:true},
        //remove:true
    })

  

camera.position.z = 200;    // 200


var render = function() {

    
    requestAnimationFrame(render);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;  
    renderer.render(scene, camera);
    labelRenderer.render( scene, camera );
   
};

render();