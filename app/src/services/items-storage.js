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
            fetch: function (filters) {
                return api.get(filters).$promise;
            },

            get: function (item) {
                return api.get(item).$promise;
            },

            add: function (data) {
                return api.save(data).$promise;
            },

            update: function (item) {
                $rootScope.userState.unsavedData = true;
                api
                    .update(item, function () {
                        $rootScope.userState.unsavedData = false;
                    });
            },

            delete: function (item) {
                return api.delete({id: item.id}).$promise;
            }
        };

        return itemsStorage;

    });
