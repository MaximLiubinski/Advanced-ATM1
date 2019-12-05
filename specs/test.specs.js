const query = require("../utils/query");
const state = require("../utils/state");
const EC = protractor.ExpectedConditions;
const logger = require('../utils/logger.conf');

describe('Report Portal positive', function() {
    it('Correct Title', function() {
        browser.get(browser.baseUrl);
        console.log("test");
        expect(browser.getTitle()).toEqual('Report Portal');
        logger.info("Report Portal positive end");
    });

    it('Login', function() {
        browser.get(browser.baseUrl);
        console.log("test");
        state.setState("Login");
        browser.wait(EC.visibilityOf(query.getProtractorElement("Right Block -> Login")), 5000).then(()=> {
            query.getProtractorElement("Right Block -> Login").clear().then(()=>{
                query.getProtractorElement("Right Block -> Login").sendKeys("default").then(()=>{
                    query.getProtractorElement("Right Block -> Password").clear().then(()=>{
                        query.getProtractorElement("Right Block -> Password").sendKeys("1q2w3e").then(()=>{
                            query.getProtractorElement("Right Block -> Login Button").click().then(()=>{
                                browser.wait(EC.urlContains('launches'), 5000).then(()=> {
                                    browser.getCurrentUrl().then((url)=> {
                                        expect(url.includes("launches")).toEqual(true);
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    });
});