angular
    .module(MODULES.MAIN, [
        MODULES.THIRD_PARTY.BREADCRUMB,
        MODULES.THIRD_PARTY.ASIDE_MENU,
        MODULES.VIEWS.CONTACT,
        MODULES.VIEWS.ITEMS,
        MODULES.VIEWS.ITEM_DETAILS,
        MODULES.VIEWS.SHOP,
        MODULES.VIEWS.FAQ,
        MODULES.DIRECTIVES.HEADER,
        MODULES.SERVICES.USER_STORAGE,
        MODULES.SERVICES.API_INTERCEPTOR
    ])

    .constant("CONFIG", {
        API_PREFIX: "http://js.edu.pl/api/"
    })

    .config(function ($urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise('/items');
        $httpProvider.interceptors.push('apiInterceptor');
    })

    .run(function ($rootScope, userStorage) {
        $rootScope.$on('api:error', function () {
            userStorage.signOut();
        });
        $rootScope.userState = userStorage.state;
        userStorage.checkUser();
        $rootScope._ = _;
    });