"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.appName = exports.log = void 0;
function log(message) {
    console.log(message);
}
exports.log = log;
exports.appName = "demo";
class User {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.User = User;
