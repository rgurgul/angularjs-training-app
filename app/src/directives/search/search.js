angular
    .module(MODULES.DIRECTIVES.SEARCH, [])
    .component('searchDctv', {
        templateUrl: TEMPLATES.DIRECTIVES.SEARCH,
        bindings: {
            control: "<"
        }
    });