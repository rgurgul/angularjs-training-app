angular
    .module(MODULES.DIRECTIVES.ITEM, [])
    .component('itemCmp', {

        bindings: {
            model: "<",
            delete: "&",
            update: "&"
        },

        templateUrl: TEMPLATES.DIRECTIVES.ITEM,
        controller: function ($scope, $timeout) {
            // przekazuję wartość
            this.price = this.model.price;

            $scope.$watch('$ctrl.price', function (newVal, oldVal) {
                if (!angular.equals(newVal, oldVal)) {
                    $scope.$root.userState.unsavedData = true;
                    $timeout.cancel(this.timeoutId);
                    this.timeoutId = $timeout(function () {
                        // aktualizuje model
                        this.model.price = this.price;
                        // wysyłam request
                        this.update(this.model);
                    }.bind(this), 1000);
                }
            }.bind(this));
        }

    });