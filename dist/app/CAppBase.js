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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CAppBase = void 0;
var components_1 = require("../components");
var vm_1 = require("../vm");
var uq_1 = require("../uq");
var net_1 = require("../net");
var centerApi_1 = require("./centerApi");
var vMain_1 = require("./vMain");
var CAppBase = /** @class */ (function (_super) {
    __extends(CAppBase, _super);
    function CAppBase(config) {
        var _this = _super.call(this, undefined) || this;
        _this.appConfig = config || components_1.nav.navSettings;
        if (_this.appConfig) {
            var _a = _this.appConfig, appName = _a.appName, noUnit = _a.noUnit;
            _this.name = appName;
            if (appName === undefined) {
                throw new Error('appName like "owner/app" must be defined in MainConfig');
            }
            _this.noUnit = noUnit;
        }
        return _this;
    }
    Object.defineProperty(CAppBase.prototype, "uqs", {
        get: function () { return this._uqs; },
        enumerable: false,
        configurable: true
    });
    CAppBase.prototype.internalT = function (str) {
        return components_1.t(str);
    };
    CAppBase.prototype.setRes = function (res) {
        components_1.setGlobalRes(res);
    };
    CAppBase.prototype.hasRole = function (role) {
        var nRole;
        if (typeof role === 'string') {
            if (role.length === 0)
                return false;
            var index = this.roleDefines.findIndex(function (v) { return v === role; });
            if (index < 0)
                return false;
            nRole = 1 << index;
        }
        else {
            nRole = role;
        }
        return (this.appUnit.roles & nRole) !== 0;
    };
    CAppBase.prototype.setAppUnit = function (appUnit) {
        this.appUnit = appUnit;
        var roleDefs = appUnit.roleDefs;
        if (roleDefs) {
            this.roleDefines = roleDefs.split('\t');
        }
        else {
            this.roleDefines = [];
        }
    };
    CAppBase.prototype.beforeStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, appName, version, tvs, retErrors, predefinedUnit_1, user, result, appUnit, id, appUnitId, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        this.onNavRoutes();
                        if (!this.appConfig)
                            return [2 /*return*/, true];
                        _a = this.appConfig, appName = _a.appName, version = _a.version, tvs = _a.tvs;
                        return [4 /*yield*/, uq_1.UQsMan.load(appName, version, tvs)];
                    case 1:
                        _b.sent();
                        this._uqs = uq_1.UQsMan._uqs;
                        retErrors = uq_1.UQsMan.errors;
                        predefinedUnit_1 = net_1.appInFrame.predefinedUnit;
                        user = components_1.nav.user;
                        if (!(user !== undefined && user.id > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, centerApi_1.centerApi.userAppUnits(uq_1.UQsMan.value.id)];
                    case 2:
                        result = _b.sent();
                        this.appUnits = result;
                        /*
                        // 老版本，只返回一个数组。新版本，返回两个数组。下面做两个数组的判断
                        if (result.length === 0) {
                            this.appUnits = result;
                        }
                        else {
                            if (Array.isArray(result[0]) === true) {
                                this.appUnits = result[0];
                                let result1 = result[1];
                                if (Array.isArray(result1) === true) {
                                    this.roleDefines = result1[0]?.roles?.split('\t');
                                    if (this.roleDefines === undefined) this.roleDefines = [];
                                }
                            }
                            else {
                                this.appUnits = result;
                            }
                        }
                        */
                        if (this.noUnit === true)
                            return [2 /*return*/, true];
                        switch (this.appUnits.length) {
                            case 0:
                                this.showUnsupport(predefinedUnit_1);
                                return [2 /*return*/, false];
                            case 1:
                                appUnit = this.appUnits[0];
                                this.setAppUnit(appUnit);
                                id = appUnit.id;
                                appUnitId = id;
                                if (appUnitId === undefined || appUnitId < 0 ||
                                    (predefinedUnit_1 !== undefined && appUnitId !== predefinedUnit_1)) {
                                    this.showUnsupport(predefinedUnit_1);
                                    return [2 /*return*/, false];
                                }
                                net_1.appInFrame.unit = appUnitId;
                                break;
                            default:
                                if (predefinedUnit_1 > 0 && this.appUnits.find(function (v) { return v.id === predefinedUnit_1; }) !== undefined) {
                                    net_1.appInFrame.unit = predefinedUnit_1;
                                    break;
                                }
                                this.openVPage(vMain_1.VUnitSelect);
                                return [2 /*return*/, false];
                        }
                        _b.label = 3;
                    case 3:
                        if (retErrors !== undefined) {
                            this.openVPage(vMain_1.VErrorsPage, retErrors);
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/, true];
                    case 4:
                        err_1 = _b.sent();
                        this.openVPage(vMain_1.VStartError, err_1);
                        return [2 /*return*/, false];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    CAppBase.prototype.afterStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                components_1.nav.resolveRoute();
                return [2 /*return*/];
            });
        });
    };
    CAppBase.prototype.userFromId = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, centerApi_1.centerApi.userFromId(userId)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CAppBase.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return components_1.nav.on(args[0], args[1], args[2]);
    };
    CAppBase.prototype.onNavRoutes = function () { return; };
    CAppBase.prototype.showUnsupport = function (predefinedUnit) {
        components_1.nav.clear();
        this.openVPage(vMain_1.VUnsupportedUnit, predefinedUnit);
    };
    return CAppBase;
}(vm_1.Controller));
exports.CAppBase = CAppBase;
//# sourceMappingURL=CAppBase.js.map