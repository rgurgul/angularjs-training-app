describe('items storage', function () {

    beforeEach(module(MODULES.SERVICES.ITEMS_STORAGE, function ($provide) {
        $provide
            .constant('CONFIG', {
                API_PREFIX: "http://js.edu.pl/api/"
            });
    }));

    it('fetch method should return promise', inject(function (itemsStorage) {
        var isPromise = itemsStorage.fetch();
        expect(isPromise.then).toBeTruthy();
    }));

});