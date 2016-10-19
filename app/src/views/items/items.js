angular
    .module(MODULES.VIEWS.ITEMS, [
        MODULES.THIRD_PARTY.UI_ROUTER, 
        MODULES.DIRECTIVES.SORT, 
        MODULES.DIRECTIVES.ITEM, 
        MODULES.SERVICES.ITEMS_STORAGE,
        MODULES.FILTERS.START_FROM,
        MODULES.DIRECTIVES.SEARCH
    ])
    .config(function ($stateProvider) {
        $stateProvider
            .state('items', {
                url: '/items',
                templateUrl: TEMPLATES.VIEWS.ITEMS,
                controller: 'ItemsCtrl',
                controllerAs: 'vm',
                ncyBreadcrumb: {
                    label: 'Produkty'
                }
            });
    })
    .controller('ItemsCtrl', function (itemsStorage) {
        itemsStorage.fetch();
        this.items = itemsStorage.items;
        this.delete = itemsStorage.delete;
        this.update = itemsStorage.update;
        this.itemsControl = {
            currentPage: 1,
            itemsPerPage: 5
        };
    });