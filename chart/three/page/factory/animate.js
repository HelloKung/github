
function startAnimate(){

     

    new TWEEN.Tween( floor_1.position )
        .to( { x: 0, y: 0, z: 0}, 2000 )
        .easing( TWEEN.Easing.Exponential.InOut )
        .start();
     
    new TWEEN.Tween( floor_2.position )
        .to( { x: 0, y: -20, z: 0 }, 2000 )
        .easing( TWEEN.Easing.Exponential.InOut )
        .delay(200)
        .start();

    new TWEEN.Tween( floor_3.position )
        .to( { x: 0, y: -40, z: 0 }, 2000 )
        .easing( TWEEN.Easing.Exponential.InOut )
        .delay(400)
        .start();    
     
}


function showTooltip(){


     

    $(".bottom-icon,.tooltip-container").hide();
    $(".line").css({height:0});
    $(".oblique-line").css({height:"0px",width:"0px"})

    $(".bottom-icon").fadeIn();
    $(".line").animate({height:"120px"},500,"swing",function(){

        $(".oblique-line").animate({height:"31px",width:"50px"},500,"swing",function(){

            $(".tooltip-container").fadeIn();

        })

    })
    




}