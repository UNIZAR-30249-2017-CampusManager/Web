(function() {
    'use strict';

    angular
        .module('app.buildings.betan')
        .controller('BetanController', BetanController);

    function BetanController($scope,leafletData,$compile,MapService) {
        //console.log("Invocado controlador del Betan");
        var currentFloor = 0;

        //Actualizando titulos del html
        $scope.vista={
            nombre : 'Edificio Betancourt'
        };
        $scope.edificio={
            nombre : 'Planta ' + currentFloor
        };

        //Arrays de capas
        $scope.definedLayers = {
            wms0 : MapService.crearCapa('Planta 0','labis:betanP00'),
            wms1 : MapService.crearCapa('Planta 1','labis:betanP01'),
            wms2 : MapService.crearCapa('Planta 2','labis:betanP02'),
            wms3 : MapService.crearCapa('Planta 3','labis:betanP03')
        };

        angular.extend($scope, {
            betan: {
                lat: 41.683422,
                lng: -0.884168,
                zoom: 18
            },
            events: {},
            layers: {
                baselayers: {
                    wms0: $scope.definedLayers['wms0']
                }
            },
            markers: [],
            controls:{
                bajarNivel:{
                    type: 'bajarPlanta'
                },
                subirNivel:{
                    type: 'subirPlanta'
                }
            }
        });

        leafletData.getMap().then(function() {
            var element = document.getElementById('botonSubir');
            var element2 = document.getElementById('botonBajar');
            $compile(element)($scope);
            $compile(element2)($scope);
        });

        $scope.$on('leafletDirectiveMap.click', function(event, args){
            var leafEvent = args.leafletEvent;

            var latitude = leafEvent.latlng.lat;
            var longitude = leafEvent.latlng.lng;

            $scope.markers=[];
            $scope.markers.push({
                lat: latitude,
                lng: longitude,
                message: "¡Estás aquí! </br> Lat: " + latitude.toString() + "</br> Long: " + longitude.toString(),
                focus: true,
                draggable: false
            });
        });

        $scope.subirPlanta = function(){
            if(currentFloor == 3){
                //console.log("Llegado al limite superior del Betancourt");
            } else{
                //console.log("Subiendo planta del Betancourt (Planta actual: " + parseInt(currentFloor+1) + ")");

                var baselayers = $scope.layers.baselayers;
                delete baselayers['wms' + currentFloor];

                currentFloor++;
                baselayers['wms' + currentFloor] = $scope.definedLayers['wms' + currentFloor];
                $scope.edificio={
                    nombre : 'Planta ' + currentFloor
                };
            }
        };

        $scope.bajarPlanta = function(){
            if(currentFloor == 0){
                //console.log("Llegado al limite inferior del Betancourt");
            } else{
                //console.log("Bajando planta del Betancourt (Planta actual: " + parseInt(currentFloor-1) + ")");

                var baselayers = $scope.layers.baselayers;
                delete baselayers['wms' + currentFloor];

                currentFloor--;
                baselayers['wms' + currentFloor] = $scope.definedLayers['wms' + currentFloor];
                $scope.edificio={
                    nombre : 'Planta ' + currentFloor
                };
            }
        };
    }
})();