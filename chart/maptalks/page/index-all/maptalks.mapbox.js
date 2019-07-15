

mapboxgl.accessToken = 'pk.eyJ1IjoieWl0aWFveGlhbnl1MDkyNyIsImEiOiJjanY0ZTY4cDYycHpmM3lzMHdhZXN3d3djIn0.V5DAb09ivNYmrQPfTDXMyQ';


var baseLayer = new maptalks.MapboxglLayer('tile',{
                   
        glOptions : {
                style: 'mapbox://styles/yitiaoxianyu0927/cjxpewciw0tzj1coc1nnp9vuj',
            
            }

        }).on('layerload', function () {
                    
});