angular
    .module(MODULES.VIEWS.CONTACT, [
        MODULES.THIRD_PARTY.UI_ROUTER,
        MODULES.DIRECTIVES.INPUT
    ])
    .config(function ($stateProvider) {
        $stateProvider.state('contact', {
            url: '/contact',
            templateUrl: TEMPLATES.VIEWS.CONTACT,
            controller: 'ContactCtrl',
            ncyBreadcrumb: {
                label: 'Kontakt'
            }
        });
    })
    .controller('ContactCtrl', function ($scope) {
        $scope.sendForm = function () {
            if ($scope.contactForm.$valid) {
                $scope.formSent = true;
                $scope.contactForm.$setPristine();
                $scope.user = {};
            }
        };
    });