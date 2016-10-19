angular
    .module(MODULES.SERVICES.USER_STORAGE, [
        MODULES.THIRD_PARTY.NG_COOKIES,
        MODULES.SERVICES.MODAL_GENERATOR
    ])
    .service('userStorage', function ($cookies, $http, modalGenerator, CONFIG) {
        var userStorage = {
            state: {
                access: false,
                userName: false,
                unsavedData: false,
            },
            setUserAccess: function (access, msg) {
                this.state.access = access;
                access
                    ? $cookies.put('logged', access)
                    : $cookies.remove('logged');
                msg && alert(msg);
            },
            signIn: function () {
                modalGenerator
                    .open(TEMPLATES.MODALS.LOGIN, 'md')
                    .then(function (modalData) {
                        $http
                            .post(CONFIG.API_PREFIX + 'login/', modalData)
                            .then(function () {
                                userStorage.setUserAccess(true, 'zalogowano pomyślnie');
                            });
                    });
            },
            signOut: function () {
                $http
                    .get(CONFIG.API_PREFIX + 'logout/')
                    .then(function () {
                        userStorage.setUserAccess(false);
                    });
            },
            checkUser: function () {
                $cookies.get('logged')
                    ? userStorage.setUserAccess(true)
                    : userStorage.signIn();
            }
        };
        return userStorage;
    });