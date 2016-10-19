describe('inputDctv', function () {
    beforeEach(module(MODULES.DIRECTIVES.INPUT));
    beforeEach(module('template-module'));

    var formScope,
        form,
        formTpl = "<form name='form'>" +
            "<input-dctv required='true' model='name' type='email'>Twoje imię</input-dctv>" +
            "</form>";

    beforeEach(inject(function ($compile, $rootScope) {
        formScope = $rootScope.$new();
        form = angular.element(formTpl);
        $compile(form)(formScope);
        formScope.$digest();
    }));

    it('should has email type', function () {
        expect(form.find('input').attr('type')).toEqual('email');
    });

    it('should set transclude', function () {
        expect(form.find('div[ng-transclude] > span').html().trim()).toEqual('Twoje imię');
    });

    it('shouldn\'t display error initially', function () {
        expect(form.find('small').length).toEqual(0);
    });

    it('should display error when form is submitted', function () {
        formScope.form.$submitted = true;
        formScope.$digest();
        expect(form.find('.text-danger').length).toEqual(1);
    });

    it('should display error when email is not valid', function () {
        formScope.form.$submitted = true;
        var value = 'not-valid-email';
        form.find('input').val(value).change();
        expect(form.find('.text-danger').length).toEqual(1);
    });

    it('model value should be the same as scope.name', function () {
        var value = 'joe@doe.pl';
        form.find('input').val(value).change();
        var inputDctvScope = form.find('div').scope();
        expect(formScope.name).toEqual(value);
        expect(inputDctvScope.model).toEqual(value);
    });
});