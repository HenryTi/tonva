"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSub = exports.CBase = void 0;
var lodash_1 = __importDefault(require("lodash"));
var vm_1 = require("../vm");
var CBase = /** @class */ (function (_super) {
    __extends(CBase, _super);
    function CBase(cApp) {
        var _this = _super.call(this, cApp.res) || this;
        _this._cApp = cApp;
        _this._uqs = cApp && cApp.uqs;
        return _this;
    }
    Object.defineProperty(CBase.prototype, "uqs", {
        get: function () { return this._uqs; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CBase.prototype, "cApp", {
        get: function () { return this._cApp; },
        enumerable: false,
        configurable: true
    });
    CBase.prototype.hasRole = function (role) {
        var _a;
        return (_a = this._cApp) === null || _a === void 0 ? void 0 : _a.hasRole(role);
    };
    CBase.prototype.internalT = function (str) {
        var r = _super.prototype.internalT.call(this, str);
        if (r !== undefined)
            return r;
        return this._cApp.internalT(str);
    };
    CBase.prototype.newC = function (type, param) {
        var c = new type(this.cApp);
        c.init(param);
        return c;
    };
    CBase.prototype.newSub = function (type, param) {
        var s = new type(this);
        s.init(param);
        return s;
    };
    CBase.prototype.getWebNav = function () {
        var _a;
        var wn = (_a = this._cApp) === null || _a === void 0 ? void 0 : _a.getWebNav();
        if (wn === undefined)
            return;
        var ret = lodash_1.default.clone(wn);
        lodash_1.default.merge(ret, this.webNav);
        return ret;
    };
    return CBase;
}(vm_1.Controller));
exports.CBase = CBase;
var CSub = /** @class */ (function (_super) {
    __extends(CSub, _super);
    function CSub(owner) {
        var _this = _super.call(this, owner.cApp) || this;
        _this._owner = owner;
        return _this;
    }
    CSub.prototype.internalT = function (str) {
        var r = _super.prototype.internalT.call(this, str);
        if (r !== undefined)
            return r;
        return this._owner.internalT(str);
    };
    Object.defineProperty(CSub.prototype, "owner", {
        get: function () { return this._owner; },
        enumerable: false,
        configurable: true
    });
    CSub.prototype.getWebNav = function () {
        var _a, _b;
        var wn = (_a = this._cApp) === null || _a === void 0 ? void 0 : _a.getWebNav();
        if (wn === undefined)
            return;
        var ownerWNs = [];
        for (var p = this.owner; p !== undefined; p = (_b = p) === null || _b === void 0 ? void 0 : _b.owner) {
            ownerWNs.push(p.webNav);
        }
        var ret = lodash_1.default.clone(wn);
        for (;;) {
            var own = ownerWNs.pop();
            if (own === undefined)
                break;
            lodash_1.default.merge(ret, own);
        }
        lodash_1.default.merge(ret, this.webNav);
        return ret;
    };
    return CSub;
}(CBase));
exports.CSub = CSub;
//# sourceMappingURL=CBase.js.map