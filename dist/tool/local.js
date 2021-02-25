"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalData = void 0;
var env_1 = require("./env");
var LocalData = /** @class */ (function () {
    function LocalData() {
        this.user = env_1.env.localDb.child('user');
        this.guest = env_1.env.localDb.child('guest');
        this.unit = env_1.env.localDb.child('unit');
    }
    LocalData.prototype.readToMemory = function () {
        this._user = this.user.get();
        this._guest = this.guest.get();
        this._unit = this.unit.get();
    };
    LocalData.prototype.saveToLocalStorage = function () {
        this.user.set(this._user);
        this.guest.set(this._guest);
        this.unit.set(this._unit);
    };
    LocalData.prototype.logoutClear = function () {
        [
            this.user,
            this.unit,
        ].forEach(function (d) { return d.remove(); });
    };
    return LocalData;
}());
exports.LocalData = LocalData;
//# sourceMappingURL=local.js.map