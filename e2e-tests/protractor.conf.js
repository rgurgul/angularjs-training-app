exports.config = {
    allScriptsTimeout: 11000,

    specs: [
        'views/*.spec.js'
    ],

    capabilities: {
        'browserName': 'chrome'
    },

    baseUrl: 'http://localhost:8000/app/#/',
    //baseUrl: 'http://js.edu.pl/app/#/',

    directConnect: true,

    framework: 'jasmine',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    }
};
