angular
    .module(MODULES.SERVICES.MODAL_GENERATOR, [
        MODULES.THIRD_PARTY.UI_BOOTSTRAP, 
        MODULES.DIRECTIVES.INPUT, 
        MODULES.DIRECTIVES.UPLOAD
    ])
    .service('modalGenerator', function ($uibModal) {
        return {
            open: function (tplUrl, size, model) {
                var myModal = $uibModal.open({
                    templateUrl: tplUrl,
                    size: size,
                    controller: function ($scope) {
                        $scope.model = model || {};
                        $scope.ok = function (valid) {
                            if (valid) {
                                myModal.close($scope.model);
                            }
                        };
                        $scope.cancel = function () {
                            myModal.dismiss('cancel');
                        };
                    }
                });
                return myModal.result;
            }
        };
    });
