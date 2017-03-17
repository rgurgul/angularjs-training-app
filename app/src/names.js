const MODULES = {
    MAIN: 'myApp',
    THIRD_PARTY: {
        UI_ROUTER: 'ui.router',
        UI_BOOTSTRAP: 'ui.bootstrap',
        NG_RESOURCE: 'ngResource',
        NG_COOKIES: 'ngCookies',
        NG_FILE_UPLOAD: 'ngFileUpload',
        NG_MESSAGES: 'ngMessages',
        BREADCRUMB: 'ncy-angular-breadcrumb',
        ASIDE_MENU: 'jsonMenu',
        SANITIZE: 'ngSanitize',
        NG_MAP: 'ngMap'
    },
    VIEWS: {
        CONTACT: 'myApp.contact',
        ITEMS: 'myApp.items',
        ITEM_DETAILS: 'myApp.itemDetails',
        SHOP: 'myApp.shop'
    },
    DIRECTIVES: {
        HEADER: 'myApp.headerDctv',
        INPUT: 'myApp.inputDctv',
        ITEM: 'myApp.itemCmp',
        UPLOAD: 'myApp.uploadDctv',
        SEARCH: 'myApp.searchDctv',
        LIST_DROP_DOWN: 'myApp.listDropDownDctv'
    },
    SERVICES: {
        ITEMS_STORAGE: 'myApp.itemsStorage',
        USER_STORAGE: 'myApp.userStorage',
        MODAL_GENERATOR: 'myApp.modalGenerator',
        API_INTERCEPTOR: 'myApp.apiInterceptor'
    },
    FILTERS: {
        START_FROM: 'myApp.filters'
    }
};

const TEMPLATES = {
    VIEWS: {
        CONTACT: 'src/views/contact/contact.html',
        ITEM_DETAIL: 'src/views/item-detail/item-detail.html',
        ITEMS: 'src/views/items/items.html',
        SHOP: "src/views/shop/shop.html"
    },
    DIRECTIVES: {
        HEADER: "src/directives/header/header-tpl.html",
        INPUT: 'src/directives/input/input-tpl.html',
        ITEM: "src/directives/item/item-tpl.html",
        UPLOAD: "src/directives/upload/upload-tpl.html",
        SEARCH: "src/directives/search/search.html"
    },
    MODALS: {
        ADD_ITEM: 'src/services/modal-tpls/modal-add-item.html',
        DELETE_ITEM: 'src/services/modal-tpls/modal-delete-item.html',
        LOGIN: 'src/services/modal-tpls/modal-login.html'
    }
};