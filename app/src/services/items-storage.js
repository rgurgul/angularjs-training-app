angular
    .module(MODULES.SERVICES.ITEMS_STORAGE, [
        MODULES.THIRD_PARTY.NG_RESOURCE,
        MODULES.SERVICES.MODAL_GENERATOR
    ])
    .service('itemsStorage', function ($rootScope, $resource, modalGenerator, CONFIG) {

        var api = $resource(CONFIG.API_PREFIX + 'items/:id', {id: "@id"}, {
            update: {
                method: 'PUT'
            }
        });

        var itemsStorage = {
            items: [],
            fetch: function () {
                api
                    .get(function (responseData) {
                        itemsStorage.items.length = 0;
                        angular.extend(itemsStorage.items, responseData.data);
                    });
            },

            get: function (item) {
                api
                    .get(item, function (responseData) {
                        itemsStorage.item = responseData.data;
                    });
            },

            add: function () {
                modalGenerator
                    .open(TEMPLATES.MODALS.ADD_ITEM, 'lm')
                    .then(function (modalData) {
                        api
                            .save(modalData, function (responseData) {
                                itemsStorage.fetch();
                            });
                    });
            },

            update: function (item) {
                $rootScope.userState.unsavedData = true;
                api
                    .update(item, function () {
                        $rootScope.userState.unsavedData = false;
                    });
            },

            delete: function (item) {
                modalGenerator
                    .open(TEMPLATES.MODALS.DELETE_ITEM, 'lm', item)
                    .then(function (modalData) {
                        api
                            .delete({id: item.id}, function () {
                                itemsStorage.fetch();
                                alert('element: ' + item.title + ' został usunięty z powodu:\n' + modalData.reason);
                            });
                    });
            }
        };

        return itemsStorage;

    });
