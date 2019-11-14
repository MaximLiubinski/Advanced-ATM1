exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    baseUrl: 'https://web.demo.reportportal.io/ui/',
    specs: [
        'feature/**/*.feature' // accepts a glob
    ],

    cucumberOpts: {
        // require step definitions
        require: [
            'step_definitions/**/*.steps.js' // accepts a glob
        ]
    }
};