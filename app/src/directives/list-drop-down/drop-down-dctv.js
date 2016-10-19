angular
    .module(MODULES.DIRECTIVES.LIST_DROP_DOWN, [])
    .directive('listDropDownDctv', function () {
        return {
            controller: function () {
                this.current = undefined;
            }
        }
    })
    .directive('itemDropDownDctv', function () {
        return {
            scope: true,
            require: "^listDropDownDctv",
            link: function ($scope, element, attrs, listDropDownCtrl) {
                $scope.setActive = function (item) {
                    if (listDropDownCtrl.current) {
                        if (listDropDownCtrl.current === item) {
                            item.active = !item.active;
                        } else {
                            listDropDownCtrl.current.active = false;
                            item.active = true;
                            listDropDownCtrl.current = item;
                        }
                    } else {
                        item.active = true;
                        listDropDownCtrl.current = item;
                    }
                }
            }
        }
    });