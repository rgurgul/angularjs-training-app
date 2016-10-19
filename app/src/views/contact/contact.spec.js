describe('Contact', function () {

    var scope;

    beforeEach(module(MODULES.VIEWS.CONTACT));

    beforeEach(inject(function ($rootScope, $controller, $timeout, $compile) {
        scope = $rootScope.$new();
        $controller('ContactCtrl', {$scope: scope});
        var contactForm = angular.element("<form name='contactForm'><input ng-model='user.name' required /></form>");
        $compile(contactForm)(scope);
        scope.$apply();
    }));

    describe('contactForm', function () {
        it('should be invalid initially', function () {
            expect(scope.contactForm.$invalid).toBeTruthy();
        });
        it('should be valid', function () {
            scope.user = {
                name: "John"
            };
            scope.$apply();
            expect(scope.contactForm.$valid).toBeTruthy();
        });
    });

    describe('scope.formSent variable', function () {
        it('should be undefined initially', function () {
            expect(scope.formSent).toBeUndefined();
        });
        it('should be true when form is valid and sent', function () {
            scope.user = {
                name: "John"
            };
            scope.$apply();
            scope.sendForm();
            expect(scope.formSent).toBeTruthy();
        });
    });

});