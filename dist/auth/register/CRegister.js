"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.CForget = exports.CRegister = exports.CRegBase = void 0;
var vm_1 = require("../../vm");
var components_1 = require("../../components");
var VStart_1 = require("./VStart");
var net_1 = require("../../net");
var VVerify_1 = require("./VVerify");
var VPassword_1 = require("./VPassword");
var VSuccess_1 = require("./VSuccess");
var CRegBase = /** @class */ (function (_super) {
    __extends(CRegBase, _super);
    function CRegBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.login = function (account) { return __awaiter(_this, void 0, void 0, function () {
            var retUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, net_1.userApi.login({ user: account || this.account, pwd: this.password, guest: components_1.nav.guest })];
                    case 1:
                        retUser = _a.sent();
                        if (retUser === undefined) {
                            alert('something wrong!');
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, components_1.nav.userLogined(retUser)];
                    case 2:
                        _a.sent();
                        //await nav.start();
                        if (this.isWebNav)
                            components_1.nav.navigate('/');
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    CRegBase.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openVPage(this.VStart);
                return [2 /*return*/];
            });
        });
    };
    Object.defineProperty(CRegBase.prototype, "VVerify", {
        get: function () { return VVerify_1.VVerify; },
        enumerable: false,
        configurable: true
    });
    ;
    CRegBase.prototype.toVerify = function () {
        var _this = this;
        //this.account = account;
        this.openVPage(this.VVerify, function (verify) { return __awaiter(_this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.verify = verify;
                        return [4 /*yield*/, net_1.userApi.checkVerify(this.account, verify)];
                    case 1:
                        ret = _a.sent();
                        if (ret === 0)
                            return [2 /*return*/, ret];
                        this.toPassword();
                        return [2 /*return*/];
                }
            });
        }); });
    };
    CRegBase.prototype.toPassword = function () {
        this.openVPage(this.VPassword);
    };
    CRegBase.prototype.toSuccess = function () {
        this.openVPage(this.VSuccess);
    };
    CRegBase.prototype.checkAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, net_1.userApi.isExists(this.account)];
                    case 1:
                        ret = _a.sent();
                        error = this.accountError(ret);
                        if (error !== undefined)
                            return [2 /*return*/, error];
                        return [4 /*yield*/, net_1.userApi.sendVerify(this.account, this.type, components_1.nav.oem)];
                    case 2:
                        ret = _a.sent();
                        this.toVerify();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CRegBase;
}(vm_1.Controller));
exports.CRegBase = CRegBase;
var CRegister = /** @class */ (function (_super) {
    __extends(CRegister, _super);
    function CRegister() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CRegister.prototype, "VStart", {
        get: function () { return VStart_1.VRegisterStart; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CRegister.prototype, "VPassword", {
        get: function () { return VPassword_1.VRegisterPassword; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CRegister.prototype, "VSuccess", {
        get: function () { return VSuccess_1.VRegisterSuccess; },
        enumerable: false,
        configurable: true
    });
    CRegister.prototype.accountError = function (isExists) {
        if (isExists > 0)
            return '已经被注册使用了';
    };
    CRegister.prototype.onPasswordSubmit = function (pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var params, ret, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.password = pwd;
                        params = {
                            nick: undefined,
                            user: this.account,
                            pwd: pwd,
                            country: undefined,
                            mobile: undefined,
                            mobileCountry: undefined,
                            email: undefined,
                            verify: this.verify
                        };
                        switch (this.type) {
                            case 'mobile':
                                params.mobile = Number(this.account);
                                params.mobileCountry = 86;
                                break;
                            case 'email':
                                params.email = this.account;
                                break;
                        }
                        return [4 /*yield*/, net_1.userApi.register(params)];
                    case 1:
                        ret = _a.sent();
                        if (ret === 0) {
                            components_1.nav.clear();
                            this.toSuccess();
                            return [2 /*return*/];
                        }
                        error = this.regReturn(ret);
                        return [2 /*return*/, error];
                }
            });
        });
    };
    CRegister.prototype.regReturn = function (registerReturn) {
        var msg;
        switch (registerReturn) {
            default: return '服务器发生错误';
            case 4: return '验证码错误';
            case 0: return;
            case 1:
                msg = '用户名 ' + this.account;
                break;
            case 2:
                msg = '手机号 +' + this.account;
                break;
            case 3:
                msg = '邮箱 ' + this.account;
                break;
        }
        return msg + ' 已经被注册过了';
    };
    return CRegister;
}(CRegBase));
exports.CRegister = CRegister;
var CForget = /** @class */ (function (_super) {
    __extends(CForget, _super);
    function CForget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CForget.prototype, "VStart", {
        get: function () { return VStart_1.VForgetStart; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CForget.prototype, "VPassword", {
        get: function () { return VPassword_1.VForgetPassword; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(CForget.prototype, "VSuccess", {
        get: function () { return VSuccess_1.VForgetSuccess; },
        enumerable: false,
        configurable: true
    });
    CForget.prototype.accountError = function (isExists) {
        if (isExists === 0)
            return '请输入正确的账号';
    };
    CForget.prototype.onPasswordSubmit = function (pwd) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.password = pwd;
                        return [4 /*yield*/, net_1.userApi.resetPassword(this.account, this.password, this.verify, this.type)];
                    case 1:
                        ret = _a.sent();
                        if (ret.length === 0) {
                            err = 'something wrong in reseting password';
                            console.log(err);
                            throw err;
                        }
                        components_1.nav.clear();
                        this.toSuccess();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CForget;
}(CRegBase));
exports.CForget = CForget;
//# sourceMappingURL=CRegister.js.map