describe('ItemsCtrl', function () {
    var scope,
        httpBackend,
        ctrl,
        $state,
        responseData = {status: "OK", data: [1, 2, 3]};

    beforeEach(module(MODULES.MAIN, function ($provide) {
        $provide.service('userStorage', function () {
            return {
                checkUser: function () {
                }
            }
        })
    }));

    beforeEach(module('template-module'));

    beforeEach(inject(function (_$httpBackend_, $rootScope, $controller, CONFIG, _$state_) {
        httpBackend = _$httpBackend_;
        httpBackend.expectGET(CONFIG.API_PREFIX + 'items').respond(responseData);
        scope = $rootScope.$new();
        $state = _$state_;
        ctrl = $controller('ItemsCtrl', {$scope: scope});
    }));

    it('should respond to URL', function () {
        expect($state.href('items')).toEqual('#!/items');
    });

    it('should open add modal', inject(function (itemsStorage, CONFIG, modalGenerator, $q) {
        var modalPromise = $q.defer();
        spyOn(modalGenerator, 'open').and.returnValue(modalPromise.promise);
        ctrl.addItem();
        expect(modalGenerator.open).toHaveBeenCalledWith(TEMPLATES.MODALS.ADD_ITEM, 'lm');
    }));

});