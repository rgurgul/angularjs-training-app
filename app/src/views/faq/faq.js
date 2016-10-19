angular
    .module(MODULES.VIEWS.FAQ, [
        MODULES.THIRD_PARTY.UI_ROUTER,
        MODULES.THIRD_PARTY.SANITIZE,
        MODULES.DIRECTIVES.LIST_DROP_DOWN
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('faq', {
                url: '/faq',
                templateUrl: TEMPLATES.VIEWS.FAQ,
                controller: 'FaqCtrl',
                ncyBreadcrumb: {
                    label: 'Faq'
                }
            });
    })
    .controller('FaqCtrl', function ($scope, $http, CONFIG) {
        $http.get(CONFIG.API_PREFIX + 'faq.json')
            .success(function (data) {
                $scope.items = data.responseData.feed.entries;
                $scope.currentPage = 1;
                $scope.itemsPerPage = 10;
                $scope.maxSize = 5;
            });
    });