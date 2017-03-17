angular
    .module(MODULES.VIEWS.ITEMS, [
        MODULES.THIRD_PARTY.UI_ROUTER,
        MODULES.DIRECTIVES.ITEM,
        MODULES.SERVICES.ITEMS_STORAGE,
        MODULES.FILTERS.START_FROM,
        MODULES.DIRECTIVES.SEARCH,
        MODULES.SERVICES.MODAL_GENERATOR
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
    .controller('ItemsCtrl', function (itemsStorage, modalGenerator, $scope) {

        this.itemsControl = new FiltersModel('', '', 1, 5);

        this.getItems = function () {
            itemsStorage
                .fetch(this.itemsControl)
                .then(function (response) {
                    this.items = response.data;
                    this.total = response.total;
                }.bind(this));
        };

        this.addItem = function () {
            modalGenerator
                .open(TEMPLATES.MODALS.ADD_ITEM, 'lm')
                .then(function (data) {
                    itemsStorage.add(data);
                });
        };

        this.delete = function (item) {
            modalGenerator
                .open(TEMPLATES.MODALS.DELETE_ITEM, 'lm')
                .then(function (modalData) {
                    itemsStorage
                        .delete(item)
                        .then(function () {
                            this.getItems();
                            alert('element: ' + item.title + ' został usunięty z powodu:\n' + modalData.reason);
                        }.bind(this));
                }.bind(this));
        };
        this.update = function (item) {
            itemsStorage.update(item);
        };

        this.getItems();

        $scope.$watch(function () {
            return this.itemsControl
        }.bind(this), function () {
            this.getItems();
        }.bind(this), true);

    });