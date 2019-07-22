


var map = new maptalks.Map("map",{
    //limit max pitch to 60 as mapbox-gl-js required
        center: [123.428096,41.80551],
        zoom: 16,
        minZoom:1,
        maxZoom:16,
        pitch:45,
        baseLayer : baseLayer
});
