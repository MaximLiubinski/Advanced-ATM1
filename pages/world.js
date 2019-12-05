const LoginPage = require("./login.page.json");

class World {
    constructor() {
        this["Login"] = LoginPage;
    }
}

module.exports = new World();