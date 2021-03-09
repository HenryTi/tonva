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
exports.CLogin = void 0;
var components_1 = require("../components");
var vm_1 = require("../vm");
var VLogout_1 = require("./VLogout");
//import { Login as LoginPage } from './login';
var VLogin_1 = require("./VLogin");
var net_1 = require("../net");
var VChangePassword_1 = require("./VChangePassword");
var register_1 = require("./register");
var CLogin = /** @class */ (function (_super) {
    __extends(CLogin, _super);
    function CLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CLogin.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CLogin.prototype.showLogin = function (callback, withBack) {
        return __awaiter(this, void 0, void 0, function () {
            var onLogin;
            var _this = this;
            return __generator(this, function (_a) {
                onLogin = function (un, pwd) { return __awaiter(_this, void 0, void 0, function () {
                    var user;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, net_1.userApi.login({
                                    user: un,
                                    pwd: pwd,
                                    guest: components_1.nav.guest,
                                })];
                            case 1:
                                user = _a.sent();
                                if (user === undefined)
                                    return [2 /*return*/, false];
                                console.log("onLoginSubmit: user=%s pwd:%s", user.name, user.token);
                                return [4 /*yield*/, components_1.nav.userLogined(user, callback)];
                            case 2:
                                _a.sent();
                                return [2 /*return*/, true];
                        }
                    });
                }); };
                this.openVPage(VLogin_1.VLogin, { onLogin: onLogin, withBack: withBack });
                return [2 /*return*/];
            });
        });
    };
    CLogin.prototype.showLogout = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openVPage(VLogout_1.VLogout, function () {
                    components_1.nav.logout(callback);
                });
                return [2 /*return*/];
            });
        });
    };
    CLogin.prototype.showRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cRegister;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cRegister = new register_1.CRegister(this.res);
                        return [4 /*yield*/, cRegister.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CLogin.prototype.showForget = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cForget;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cForget = new register_1.CForget(this.res);
                        return [4 /*yield*/, cForget.start()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CLogin.prototype.getVChangePassword = function () {
        return VChangePassword_1.VChangePassword;
    };
    CLogin.prototype.showChangePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vPage;
            var _this = this;
            return __generator(this, function (_a) {
                vPage = this.getVChangePassword();
                this.openVPage(vPage, function (orgPassword, newPassword) { return __awaiter(_this, void 0, void 0, function () {
                    var centerAppApi, ret;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                centerAppApi = new net_1.CenterAppApi('tv/', undefined);
                                return [4 /*yield*/, centerAppApi.changePassword({ orgPassword: orgPassword, newPassword: newPassword })];
                            case 1:
                                ret = _a.sent();
                                return [2 /*return*/, ret];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    return CLogin;
}(vm_1.Controller));
exports.CLogin = CLogin;
//# sourceMappingURL=CLogin.js.map