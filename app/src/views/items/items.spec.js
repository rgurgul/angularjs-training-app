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
        expect($state.href('items')).toEqual('#/items');
    });

    it('should fetch items list', function () {
        expect(ctrl.items).toEqual([]);
        httpBackend.flush();
        expect(ctrl.items).toEqual(responseData.data);
    });
});