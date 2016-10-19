angular
    .module(MODULES.VIEWS.SHOP, [
        MODULES.THIRD_PARTY.UI_ROUTER, 
        MODULES.THIRD_PARTY.UI_BOOTSTRAP, 
        MODULES.THIRD_PARTY.NG_MAP
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('shops', {
                url: '/shops/:id',
                templateUrl: TEMPLATES.VIEWS.SHOP,
                controller: "ShopCtrl",
                ncyBreadcrumb: {
                    label: '{{shopName}}'
                }
            });
    })
    .controller('ShopCtrl', function ($scope, $state, $http, CONFIG) {

        $scope.$on('mapInitialized', function (evt, evtMap) {
            $http
                .get(CONFIG.API_PREFIX + "shop" + $state.params.id + '.json')
                .success(function (responseData) {
                    $scope.shopName = responseData.data.name;
                    $scope.data = responseData.data;
                    $scope.map.setZoom(6);
                    $scope.map.setOptions({
                        draggable: false,
                        zoomControl: true,
                        scrollwheel: true,
                        disableDoubleClickZoom: true
                    });
                    setMarker($scope.data);
                });

        });

        function setMarker(data) {
            var marker = new google.maps.Marker();
            $scope.$on("$destroy", function () {
                marker.setMap(null);
            });
            // długość i szerokość geograficzna
            var lat = data.position.lat;
            var lng = data.position.lng;
            var loc = new google.maps.LatLng(lat, lng);
            marker.setPosition(loc);
            marker.setMap($scope.map);
        }

    });