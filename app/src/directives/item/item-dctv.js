angular
    .module(MODULES.DIRECTIVES.ITEM, [])
    .component('itemCmp', {

        bindings: {
            model: "<",
            delete: "&",
            update: "&"
        },

        templateUrl: TEMPLATES.DIRECTIVES.ITEM

    });