let point_center = [123.429096,41.796767];

let maxlng = 0,minlng = 0,maxlat = 0,minlat = 0;


let pathX = liaoning_json.features[0].geometry.coordinates[9].map((item,index) =>item[0]);

let pathY = liaoning_json.features[0].geometry.coordinates[9].map((item,index) =>item[1]);

let cw = 600,ch = 400;

maxlng = Math.max(...pathX);
minlng = Math.min(...pathX);
maxlat = Math.max(...pathY);
minlat = Math.min(...pathY);



let path = liaoning_json.features[0].geometry.coordinates[9].map((item,index) =>{

    let percentX =  cw * 0.2 + ( item[0] - minlng ) * 1.0 /( maxlng - minlng ) * cw * 0.6 ;
    let percentY =  ch * 0.1 + ( 1 - ( item[1] - minlat ) * 1.0 /( maxlat - minlat ) ) * ch * 0.8;


    return ` ${percentX},${percentY} `
}).join(" ");

let path1 = liaoning_json.features[0].geometry.coordinates[9].map((item,index) =>{

    let percentX =  cw * 0.2 + ( item[0] - minlng ) * 1.0 /( maxlng - minlng ) * cw * 0.6 + 2;
    let percentY =  ch * 0.1 + ( 1 - ( item[1] - minlat ) * 1.0 /( maxlat - minlat ) ) * ch * 0.8 + 8;


    return ` ${percentX},${percentY} `
}).join(" ");

// let path2 = liaoning_json.features[0].geometry.coordinates[9].map((item,index) =>{

//     let percentX =  cw * 0.2 + ( item[0] - minlng ) * 1.0 /( maxlng - minlng ) * cw * 0.6 + 4;
//     let percentY =  ch * 0.1 + ( 1 - ( item[1] - minlat ) * 1.0 /( maxlat - minlat ) ) * ch * 0.8 + 16;


//     return ` ${percentX},${percentY} `
// }).join(" ");

console.log("path",path)

let clipPath_polygon = document.getElementById("clipPath_polygon");
let clipPath_polygon_out = document.getElementById("clipPath_polygon_out");
let clipPath_polygon_out_y1 = document.getElementById("clipPath_polygon_out_y1");
// let clipPath_polygon_out_y2 = document.getElementById("clipPath_polygon_out_y2");


clipPath_polygon.setAttribute("points",path);
clipPath_polygon_out.setAttribute("points",path);

clipPath_polygon_out_y1.setAttribute("points",path1);
// clipPath_polygon_out_y2.setAttribute("points",path2);

let bg_line = document.getElementById("bg_line");

bg_line.innerHTML = "";

for(let i = 0 ; i < 1200/20 ;i++){

    bg_line.innerHTML += `<line x1="${i * 20 - 400}" y1="0" x2="${i * 20}" y2="400" style="stroke:#0e0c0b;stroke-width:1"/>`
    bg_line.innerHTML += `<line x1="${i * 20}" y1="0" x2="${i * 20 - 400}" y2="400" style="stroke:#0e0c0b;stroke-width:1"/>`
    
}

for(let i = 0 ; i < 600/20 ; i++){

    bg_line.innerHTML += `<line x1="${10 + i * 20}" y1="0" x2="${10 + i * 20}" y2="400" style="stroke:#0e0c0b;stroke-width:1"/>`

}

for(let i = 0 ; i < 400/20 ; i++){

    bg_line.innerHTML += `<line x1="0" y1="${10 + i * 20}" x2="600" y2="${10 + i * 20}" style="stroke:#0e0c0b;stroke-width:1"/>`

}

for(let i = 0 ; i < 600/20 ; i++){

    
    for(let j = 0 ; j < 400/20 ; j++){

        bg_line.innerHTML += `<circle cx="${10 + i * 20}" cy="${10 + j * 20}" r="1.5" style="fill:#101012"/>`
      
    }

    
}

 





let points_box = document.getElementById("points_box");

let points = [{
    position:[123.429096,41.796767],color:"#ff0000"
}].concat(Array.from({length:20},(v,i)=>{

   let arr = {};

   let t1 = Math.random() < 0.5 ? 1 : -1;
   let t2 = Math.random() < 0.5 ? 1 : -1;
   
   
   arr.position = [123.429096 + t1 * ( Math.random() * 3  ),41.796767 + t2 * ( Math.random() * 2  )]
 
   arr.color = t1 * t2 == 1 ? "#2338d2":"#77efe0"

   

   return arr;

}))

points_box.innerHTML = "";

points.forEach((item,index) => {

    let percentX =  cw * 0.2 + ( item.position[0] - minlng ) * 1.0 /( maxlng - minlng ) * cw * 0.6 ;
    let percentY =  ch * 0.1 + ( 1 - ( item.position[1] - minlat ) * 1.0 /( maxlat - minlat ) ) * ch * 0.8;

    points_box.innerHTML+=`<circle cx="${percentX}" cy="${percentY}"  r="4" fill="${item.color}" onclick="alert(1)" >`;

})

