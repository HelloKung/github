

const option = {
    
    maptalks3D: {
        boxHeight: 50,
        // altitudeScale: 1e2,
        postEffect: {
            enable: true,
            screenSpaceAmbientOcclusion: {
                enable: true,
                radius: 2
            }
        },
        light: {
            main: {
                intensity: 2,
                shadow: true,
                shadowQuality: 'high'
            },
            ambient: {
                intensity: 0.
            }
        }
    },
    series: [{
        type: 'lines3D',
        coordinateSystem: 'maptalks3D',
        effect: {
            show: true,
            constantSpeed: 5,
            trailWidth: 2,
            trailLength: 0.8,
            trailOpacity: 1,
            spotIntensity: 10
        },
        blendMode: 'lighter',
        polyline: true,
        lineStyle: {
            width: 0.1,
            color: 'rgb(200, 40, 0)',
            opacity: 0.
        },
        data: [{
            coords:[
                [123.439475,41.818535],
                [123.440696,41.81051],
                [123.438145,41.805429],
                [123.438469,41.802068],
                [123.439331,41.798304]

            ]
        }]
    }]
};

//var e4Layer = new maptalks.E4Layer('e4', option, { hideOnZooming: false, hideOnRotating: false, hideOnMoving: false , removeBaseLayer:true }).addTo(map);