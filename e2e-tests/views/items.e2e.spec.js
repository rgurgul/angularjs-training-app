var Helpers = require('../helpers');

describe('items page', function () {
    var helpers = new Helpers();
    var path = require('path');
    var itemTitle = 'title' + Date.now();

    beforeEach(function () {
        helpers.get('items');
    });

    function getitemsCount() {
        return element.all(by.repeater('item in vm.items'))
            .then(function (items) {
                return items.length;
            })
    }

    it('should display proper items amount', function () {

        // the default state
        var itemsPerPage = element(by.model('$ctrl.control.itemsPerPage'));

        itemsPerPage.$('option:checked').getText()
            .then(function (checkedValue) {
                expect(getitemsCount()).toBeLessThan(+checkedValue + 1);
            });

        // changing itemPerPage select option
        var newOptionValue = 2;
        itemsPerPage.element(by.cssContainingText('option', newOptionValue)).click();

        itemsPerPage.$('option:checked').getText()
            .then(function (checkedValue) {
                expect(+checkedValue).toBe(newOptionValue);
                expect(getitemsCount()).toBeLessThan(newOptionValue + 1);
            });
    });

    it('should add item', function () {
        // adding a new item
        var btnAdditem = element(by.css('a[ng-click="vm.addItem()"]'));
        btnAdditem.click();

        var itemForm = element(by.name('itemForm'));
        var modalCategory = itemForm.element(by.css('select'));
        var modalTitle = itemForm.element(by.css('input[type=text]'));
        var modalDesc = itemForm.element(by.css('textarea'));
        var modalPrice = itemForm.element(by.css('input[type=number]'));
        var modalFile = itemForm.element(by.css('input[type=file]'));
        var modalBtnOk = itemForm.element(by.buttonText("OK"));

        modalCategory.element(by.cssContainingText('option', 'food')).click();
        modalTitle.sendKeys(itemTitle);
        modalDesc.sendKeys('desc');
        modalPrice.sendKeys(123);
        var fileToUpload = 'image.jpg';
        var absolutePath = path.resolve(__dirname + '/assets/', fileToUpload);
        modalFile.sendKeys(absolutePath);
        modalBtnOk.click();

        // item searching
        var search = element(by.model('$ctrl.control.title'));
        search.sendKeys(itemTitle);
        expect(getitemsCount()).toBe(1);
    });

    it('should find item and remove it', function () {
        // item searching
        var search = element(by.model('$ctrl.control.title'));
        search.sendKeys(itemTitle);
        expect(getitemsCount()).toBe(1);

        // remove item
        var btnDelete = element(by.css("button.btn-danger"));
        btnDelete.click();
        var deleteForm = element(by.name('deleteForm'));
        var modalDeleteBtnOk = deleteForm.element(by.buttonText("OK"));
        var modalReason = deleteForm.element(by.css('textarea'));
        modalReason.sendKeys('przyczyna');
        modalDeleteBtnOk.click();
        helpers.waitForAlert();
        expect(getitemsCount()).toBe(0);
    });

});