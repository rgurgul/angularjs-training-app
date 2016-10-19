angular.module(MODULES.DIRECTIVES.SORT, [])

    .directive('sortDctv', function () {
        return {
            restrict: "A",
            transclude: true,
            scope: {
                sortSettings: "=",
                sortCallback: "&"
            },
            templateUrl: TEMPLATES.DIRECTIVES.SORT,

            link: function (scope, el, attrs) {
                scope.sortName = attrs.sortDctv;
                scope.sortSettings.sortName === scope.sortName && (scope.sortSettings.sortBy = scope.sortName);
                scope.sorting = function () {
                    scope.sortSettings.sortBy = scope.sortName;
                    scope.sortSettings.desc = scope.sortSettings.sortBy === scope.sortName && !scope.sortSettings.desc;
                    scope.sortSettings.sortBy = scope.sortName;
                    scope.sortCallback && scope.sortCallback();
                }
            }
        }
    })