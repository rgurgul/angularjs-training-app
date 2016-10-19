describe('items storage', function () {

    var httpBackend,
        response = {status: "OK", data: [1, 2, 3]},
        newItem = {title: 'title form modal'};

    beforeEach(module(MODULES.SERVICES.ITEMS_STORAGE, function ($provide) {
        $provide
            .constant('CONFIG', {
                API_PREFIX: "http://js.edu.pl/api/"
            });
    }));

    beforeEach(inject(function (_$httpBackend_) {
        httpBackend = _$httpBackend_;
    }));

    it('should get items from request', inject(function (itemsStorage, CONFIG) {
        httpBackend
            .whenGET(CONFIG.API_PREFIX + "items")
            .respond(response);

        itemsStorage.fetch();
        expect(itemsStorage.items).toEqual([]);
        httpBackend.flush();
        expect(itemsStorage.items).toEqual(response.data);
    }));

    it('should open add modal', inject(function (itemsStorage, CONFIG, modalGenerator, $q) {
        httpBackend
            .whenPOST(CONFIG.API_PREFIX + "items")
            .respond(function () {
                return [200, {status: 'OK', data: JSON.parse(newItem)}];
            });

        var modalPromise = $q.defer();
        spyOn(modalGenerator, 'open').and.returnValue(modalPromise.promise);

        itemsStorage.add();
        expect(modalGenerator.open).toHaveBeenCalledWith(TEMPLATES.MODALS.ADD_ITEM, 'lm');
    }));

});