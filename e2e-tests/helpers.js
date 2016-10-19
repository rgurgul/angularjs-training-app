function Helpers() {

    browser.driver.manage().window().maximize();

    this.config = {
        login: 'admin',
        pass: 'admin',
        timeOut: 10000
    };

    this.get = function (name) {
        browser.get(browser.baseUrl + name);
        this.checkUserAccess();
    };

    this.waitForAlert = function () {
        browser.wait(function () {
            return browser.switchTo().alert().then(
                function (alert) {
                    alert.accept();
                    return true;
                },
                function () {
                    return false;
                }
            );
        }, this.config.timeOut);
    };

    this.checkUserAccess = function () {
        var self = this;
        var loginForm = element(by.name('loginForm'));
        browser.isElementPresent(loginForm)
            .then(function (present) {
                if (present) {
                    var login = loginForm.$('input[type=text]');
                    var pass = loginForm.$('input[type=password]');
                    var loginBtn = loginForm.$('.btn-primary');
                    login.clear();
                    pass.clear();
                    login.sendKeys(self.config.login);
                    pass.sendKeys(self.config.pass);
                    loginBtn.click();
                    self.waitForAlert();
                }
            })
    }
}

module.exports = Helpers;