"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Callbacks = void 0;
var Callbacks = /** @class */ (function () {
    function Callbacks() {
    }
    Object.defineProperty(Callbacks.prototype, "has", {
        get: function () { return this.list !== undefined && this.list.length > 0; },
        enumerable: false,
        configurable: true
    });
    Callbacks.prototype.register = function (callback) {
        if (this.list === undefined)
            this.list = [];
        var index = this.list.findIndex(function (v) { return v === callback; });
        if (index < 0)
            this.list.push(callback);
    };
    Callbacks.prototype.unregister = function (callback) {
        if (this.list === undefined)
            return;
        var index = this.list.findIndex(function (v) { return v === callback; });
        if (index >= 0)
            this.list.splice(index);
    };
    Callbacks.prototype.call = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        if (this.list === undefined)
            return;
        for (var _a = 0, _b = this.list; _a < _b.length; _a++) {
            var callback = _b[_a];
            callback(params);
        }
    };
    return Callbacks;
}());
exports.Callbacks = Callbacks;
//# sourceMappingURL=callbacks.js.map