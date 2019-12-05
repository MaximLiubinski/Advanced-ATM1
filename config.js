const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    framework: 'jasmine',
    // framework: 'custom',
    // frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'https://web.demo.reportportal.io/ui/',

    specs: [
        // 'feature/**/*.feature' // accepts a glob
        'specs/**/*.specs.js'
    ],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ['--window-size=1920,1080', '--disable-notifications', '--disable-infobars']
        }
    },
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },

    // cucumberOpts: {
    //     // require step definitions
    //     require: [
    //         'step_definitions/**/*.steps.js' // accepts a glob
    //     ]
    // }
};