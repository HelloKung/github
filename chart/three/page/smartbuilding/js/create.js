

let floor_0 = createBasicCuboid({
        
    size:{a:300,b:200,c:0.1},
    position:{x:0,y:0,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:true,
    materials:Array.from({length:6},(v,i)=>{ return {color:"#72e4fd",opacity:0.2,transparent:true}}),
    //remove:true
})




camera.position.z = 300;    // 200


scene.rotateX(Math.PI/6);   // 200


var render = function() {

    
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    threeOnEvent.update(); 
};

render();