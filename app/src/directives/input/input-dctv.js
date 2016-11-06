angular
    .module(MODULES.DIRECTIVES.INPUT, [MODULES.THIRD_PARTY.NG_MESSAGES])
    .directive('inputDctv', function () {
        return {
            transclude: true,
            scope: {
                model: "=",
                options: "="
            },
            require: "^form", // formularz w którym jest dyrektywa
            templateUrl: TEMPLATES.DIRECTIVES.INPUT,
            compile: function (el, attrs) {
                var tpl;

                switch (attrs.type) {
                    case "multiline":
                        tpl = angular.element('<textarea>').attr('rows', 4);
                        break;
                    case "select":
                        tpl = angular.element('<select ng-options="opt for opt in options">');
                        break;
                    default:
                        tpl = angular.element('<input>').attr('type', attrs.type || 'text');
                        break;
                }

                tpl.attr({
                    'ng-required': attrs.required,
                    'ng-minlength': attrs.minlength || 3,
                    'ng-model': 'model'
                });

                tpl.addClass('form-control');

                var inputContent = el[0].querySelector(".input-content");
                angular.element(inputContent).append(tpl);

                return {
                    post: function (scope, el, attrs, form) {
                        scope.form = form;
                    }
                }
            }
        }
    });