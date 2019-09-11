

let top_panel = createCuboid({
        
    size:{a:60,b:60,c:2},
    position:{x:0,y:60,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ return {color:i!= 3?"#35363a":"#ccc"}}),
    //remove:true
})



let bottom_panel = createCuboid({
        
    size:{a:60,b:60,c:2},
    position:{x:0,y:-60,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ return {color:i!= 2?"#35363a":"#ccc"}}),
    //remove:true
})


let back_panel = createCuboid({
        
    size:{a:60,b:2,c:120},
    position:{x:0,y:0,z:-29},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ return {color:i!= 4?"#35363a":"#ccc"}}),
    //remove:true
})

let left_panel = createCuboid({
        
    size:{a:2,b:60,c:120},
    position:{x:-29,y:0,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ return {color:i!= 0?"#35363a":"#ccc"}}),
    //remove:true
})

let right_panel = createCuboid({
        
    size:{a:2,b:60,c:120},
    position:{x:29,y:0,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ return {color:i!= 1?"#35363a":"#ccc"}}),
    //remove:true
})


let cell_1 = createCuboid({
        
    size:{a:56,b:56,c:12},
    position:{x:0,y:48,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ 
    
       if(i == 4) return { map: THREE.ImageUtils.loadTexture('./image/bg1.gif') }
    
       else  return {color:"#fff"}
    
    }),
    //remove:true
})

let cell_2 = createCuboid({
        
    size:{a:56,b:56,c:12},
    position:{x:0,y:28,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ 
    
       if(i == 4) return { map: THREE.ImageUtils.loadTexture('./image/bg1.gif') }
    
       else  return {color:"#fff"}
    
    }),
    //remove:true
})

let cell_3 = createCuboid({
        
    size:{a:56,b:56,c:12},
    position:{x:0,y:8,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ 
    
       if(i == 4) return { map: THREE.ImageUtils.loadTexture('./image/bg1.gif') }
    
       else  return {color:"#fff"}
    
    }),
    //remove:true
})

let cell_4 = createCuboid({
        
    size:{a:56,b:56,c:12},
    position:{x:0,y:-12,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ 
    
       if(i == 4) return { map: THREE.ImageUtils.loadTexture('./image/bg1.gif') }
    
       else  return {color:"#fff"}
    
    }),
    //remove:true
})


let cell_5 = createCuboid({
        
    size:{a:56,b:56,c:12},
    position:{x:0,y:-32,z:0},//36.2/2-47.2
    //rotate:{x:0,y:0,z:0},
    border:false,
    materials:Array.from({length:6},(v,i)=>{ 
    
       if(i == 4) return { map: THREE.ImageUtils.loadTexture('./image/bg1.gif') }
    
       else  return {color:"#fff"}
    
    }),
    //remove:true
})






objectEvent[cell_1.uuid]=function(){

    document.querySelector("#content").innerHTML="你点击了第一层"
  
}

objectEvent[cell_2.uuid]=function(){

    document.querySelector("#content").innerHTML="你点击了第二层"
    
}


camera.position.z = 160;    // 200


var render = function() {

    
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    threeOnEvent.update(); 
};

render();