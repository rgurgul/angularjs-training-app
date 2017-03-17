angular
    .module(MODULES.DIRECTIVES.HEADER, [
        MODULES.SERVICES.USER_STORAGE
    ])
    .directive('headerDctv', function (userStorage) {
        return {
            transclude: true,
            scope: true,
            templateUrl: TEMPLATES.DIRECTIVES.HEADER,
            controller: function () {
                this.signIn = userStorage.signIn;
                this.signOut = userStorage.signOut;
            },
            controllerAs: "vm"
        }
    });