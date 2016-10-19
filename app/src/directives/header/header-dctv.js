angular
    .module(MODULES.DIRECTIVES.HEADER, [
        MODULES.SERVICES.ITEMS_STORAGE,
        MODULES.SERVICES.USER_STORAGE
    ])
    .directive('headerDctv', function (itemsStorage, userStorage) {
        return {
            transclude: true,
            scope: true,
            templateUrl: TEMPLATES.DIRECTIVES.HEADER,
            controller: function () {
                this.signIn = userStorage.signIn;
                this.signOut = userStorage.signOut;
                this.addItem = itemsStorage.add;
            },
            controllerAs: "vm"
        }
    });