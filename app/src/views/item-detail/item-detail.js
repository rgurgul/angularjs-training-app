angular
    .module(MODULES.VIEWS.ITEM_DETAILS, [
        MODULES.THIRD_PARTY.UI_ROUTER, 
        MODULES.SERVICES.ITEMS_STORAGE,
        MODULES.DIRECTIVES.UPLOAD
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('item-details', {
                url: '/item-details',
                template: '<ui-view></ui-view>',
                ncyBreadcrumb: {
                    label: "produkt"
                }
            })
            .state('item-details.item', {
                url: '/:id',
                templateUrl: TEMPLATES.VIEWS.ITEM_DETAIL,
                controller: 'ItemDetailCtrl',
                ncyBreadcrumb: {
                    label: "{{data.title | limitTo : 50}}{{(data.title.length > 50) && '...' || ''}}"
                },
                resolve: {
                    responseData: function (itemsStorage, $stateParams) {
                        itemsStorage.get({id: $stateParams.id});
                    }
                }
            });
    })
    .controller('ItemDetailCtrl', function ($scope, itemsStorage) {
        $scope.itemsStorage = itemsStorage;
        $scope.update = function () {
            itemsStorage.update($scope.itemsStorage.item);
        }
    });