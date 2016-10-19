module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'app/libs/jquery/dist/jquery.js',
            'app/libs/angular/angular.js',
            'app/libs/angular-ui-router/release/angular-ui-router.js',
            'app/libs/angular-sanitize/angular-sanitize.js',
            'app/libs/angular-resource/angular-resource.js',
            'app/libs/angular-bootstrap/ui-bootstrap.js',
            'app/libs/angular-mocks/angular-mocks.js',
            'app/libs/angular-cookies/angular-cookies.min.js',
            'app/libs/angular-messages/angular-messages.js',
            'app/libs/ngmap/build/scripts/ng-map.min.js',
            'app/libs/ng-file-upload/ng-file-upload.js',
            'app/libs/angular-breadcrumb/dist/angular-breadcrumb.js',
            'app/libs/json-menu/src/json-menu.js',
            'app/libs/underscore/underscore.js',
            'app/src/names.js',
            'app/src/app.js',
            'app/src/**/*.js',
            'app/src/directives/input/input-tpl.html',
            'app/src/views/items/items.html'
        ],

        preprocessors: {
            'app/**/*.html': ['ng-html2js']
        },

        ngHtml2JsPreprocessor: {
            stripPrefix: "app/",
            moduleName: "template-module"
        },

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-ng-html2js-preprocessor'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        chromeOnly: true

    });
};
