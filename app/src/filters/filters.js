angular
    .module(MODULES.FILTERS.START_FROM, [])
    .filter('startFromFtr', function () {
        return function (expression, currentPage, itemsPerPage) {
            if (expression) {
                var start = (currentPage - 1) * itemsPerPage;
                return expression.slice(start);
            }
        }
    });