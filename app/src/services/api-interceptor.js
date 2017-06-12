angular
    .module(MODULES.SERVICES.API_INTERCEPTOR, [])
    .service('apiInterceptor', function ($q, $cookies, $rootScope) {
        function errInfo(msg) {
            console.warn(angular.toJson(msg));
            $rootScope.$broadcast('api:error');
        }

        return {
            'response': function (response) {
                var defer = $q.defer();
                var isObj = angular.isObject(response.data);
                if (isObj && response.data.status !== 'OK') {
                    errInfo(response);
                    defer.reject(response);
                } else {
                    defer.resolve(response);
                }
                return defer.promise;
            },
            'responseError': function (rejection) {
                errInfo(rejection);
                var defer = $q.defer();
                defer.reject(rejection);
                return defer.promise;
            }
        };
    });