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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.ForgetController = exports.RegisterController = void 0;
var React = __importStar(require("react"));
var components_1 = require("../components");
var vm_1 = require("../vm");
var net_1 = require("../net");
require("../css/va-form.css");
var res_1 = require("../res");
var tools_1 = require("./tools");
var RegisterController = /** @class */ (function (_super) {
    __extends(RegisterController, _super);
    function RegisterController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountPageCaption = '注册账号';
        _this.accountLabel = '注册账号';
        _this.accountSubmitCaption = '注册新账号';
        _this.passwordPageCaption = '账号密码';
        _this.passwordSubmitCaption = '注册新账号';
        _this.successText = '注册成功';
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
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    RegisterController.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openVPage(VAccount);
                return [2 /*return*/];
            });
        });
    };
    RegisterController.prototype.toVerify = function (account) {
        this.account = account;
        this.openVPage(VerifyPage);
    };
    RegisterController.prototype.toPassword = function () {
        this.openVPage(PasswordPage);
    };
    RegisterController.prototype.toSuccess = function (accounts) {
        this.openVPage(RegSuccess, accounts);
    };
    RegisterController.prototype.regReturn = function (registerReturn) {
        var msg;
        switch (registerReturn) {
            default:
                return '服务器发生错误';
            case 4:
                return '验证码错误';
            case 0:
                return;
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
    RegisterController.prototype.checkAccount = function () {
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
                        this.toVerify(this.account);
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterController.prototype.accountError = function (isExists) {
        if (isExists > 0)
            return '已经被注册使用了';
    };
    RegisterController.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var params, ret, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = {
                            nick: undefined,
                            user: this.account,
                            pwd: this.password,
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
    return RegisterController;
}(vm_1.Controller));
exports.RegisterController = RegisterController;
var ForgetController = /** @class */ (function (_super) {
    __extends(ForgetController, _super);
    function ForgetController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountPageCaption = '密码找回';
        _this.accountLabel = '账号';
        _this.accountSubmitCaption = '注册新账号';
        _this.passwordPageCaption = '重置密码';
        _this.passwordSubmitCaption = '提交';
        _this.successText = '成功修改密码';
        return _this;
    }
    ForgetController.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, net_1.userApi.resetPassword(this.account, this.password, this.verify, this.type)];
                    case 1:
                        ret = _a.sent();
                        components_1.nav.clear();
                        this.toSuccess(ret);
                        return [2 /*return*/, undefined];
                }
            });
        });
    };
    ForgetController.prototype.accountError = function (isExists) {
        if (isExists === 0)
            return '请输入正确的账号';
    };
    return ForgetController;
}(RegisterController));
exports.ForgetController = ForgetController;
var VAccount = /** @class */ (function (_super) {
    __extends(VAccount, _super);
    function VAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = [
            { name: 'user', type: 'string', required: true, maxLength: 100 },
            { name: 'verify', type: 'submit' },
        ];
        _this.res = components_1.resLang(res_1.registerRes);
        _this.onSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            var user, value, sender, type, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        context.clearContextErrors();
                        user = 'user';
                        value = context.getValue(user);
                        sender = tools_1.getSender(value);
                        if (sender === undefined) {
                            context.setError(user, '必须是手机号或邮箱');
                            return [2 /*return*/];
                        }
                        type = sender.type;
                        if (type === 'mobile') {
                            if (value.length !== 11 || value[0] !== '1') {
                                context.setError(user, '请输入正确的手机号');
                                return [2 /*return*/];
                            }
                        }
                        this.controller.account = value;
                        this.controller.type = type;
                        return [4 /*yield*/, this.controller.checkAccount()];
                    case 1:
                        ret = _a.sent();
                        if (ret !== undefined)
                            context.setError(user, ret);
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onEnter = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name === 'user')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onSubmit('verify', context)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    VAccount.prototype.init = function () {
        this.uiSchema = {
            items: {
                user: {
                    widget: 'text',
                    label: this.controller.accountLabel,
                    placeholder: '手机号或邮箱',
                },
                verify: { widget: 'button', className: 'btn btn-primary btn-block mt-3', label: '发送验证码' },
            }
        };
    };
    VAccount.prototype.header = function () { return this.controller.accountPageCaption; };
    VAccount.prototype.footer = function () {
        return React.createElement(components_1.Ax, { href: "/login" }, "\u767B\u5F55");
    };
    VAccount.prototype.content = function () {
        return React.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
            tools_1.tonvaTop(),
            React.createElement("div", { className: "h-3c" }),
            React.createElement(components_1.Ax, { href: "/login" }, "\u767B\u5F55"),
            React.createElement(components_1.Form, { schema: this.schema, uiSchema: this.uiSchema, onButtonClick: this.onSubmit, onEnter: this.onEnter, requiredFlag: false }),
            components_1.nav.privacyEntry());
    };
    return VAccount;
}(vm_1.VPage));
var VerifyPage = /** @class */ (function (_super) {
    __extends(VerifyPage, _super);
    function VerifyPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = [
            { name: 'verify', type: 'number', required: true, maxLength: 6 },
            { name: 'submit', type: 'submit' },
        ];
        _this.onVerifyChanged = function (context, value, prev) {
            context.setDisabled('submit', !value || (value.length !== 6));
        };
        _this.uiSchema = {
            items: {
                verify: {
                    widget: 'text',
                    label: '验证码',
                    placeholder: '请输入验证码',
                    onChanged: _this.onVerifyChanged,
                },
                submit: {
                    widget: 'button',
                    className: 'btn btn-primary btn-block mt-3',
                    label: '下一步 >',
                    disabled: true
                },
            }
        };
        _this.onSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            var verify, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        verify = this.controller.verify = context.getValue('verify');
                        return [4 /*yield*/, net_1.userApi.checkVerify(this.controller.account, verify)];
                    case 1:
                        ret = _a.sent();
                        if (ret === 0) {
                            context.setError('verify', '验证码错误');
                            return [2 /*return*/];
                        }
                        this.controller.toPassword();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onEnter = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name === 'verify')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onSubmit('submit', context)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.page = function () {
            var typeText, extra;
            switch (_this.controller.type) {
                case 'mobile':
                    typeText = '手机号';
                    break;
                case 'email':
                    typeText = '邮箱';
                    extra = React.createElement(React.Fragment, null,
                        React.createElement("span", { className: "text-danger" }, "\u6CE8\u610F"),
                        ": \u6709\u53EF\u80FD\u8BEF\u4E3A\u5783\u573E\u90AE\u4EF6\uFF0C\u8BF7\u68C0\u67E5",
                        React.createElement("br", null));
                    break;
            }
            return React.createElement(components_1.Page, { header: "\u9A8C\u8BC1\u7801" },
                React.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
                    "\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u53D1\u9001\u5230",
                    typeText,
                    React.createElement("br", null),
                    React.createElement("div", { className: "py-2 px-3 my-2 text-primary bg-light" },
                        React.createElement("b", null, _this.controller.account)),
                    extra,
                    React.createElement("div", { className: "h-1c" }),
                    React.createElement(components_1.Form, { schema: _this.schema, uiSchema: _this.uiSchema, onButtonClick: _this.onSubmit, onEnter: _this.onEnter, requiredFlag: false })));
        };
        return _this;
    }
    VerifyPage.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openPage(this.page);
                return [2 /*return*/];
            });
        });
    };
    return VerifyPage;
}(vm_1.VPage));
var PasswordPage = /** @class */ (function (_super) {
    __extends(PasswordPage, _super);
    function PasswordPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = [
            { name: 'pwd', type: 'string', required: true, maxLength: 100 },
            { name: 'rePwd', type: 'string', required: true, maxLength: 100 },
            { name: 'submit', type: 'submit' },
        ];
        _this.onSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            var values, pwd, rePwd, error;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        values = context.form.data;
                        pwd = values.pwd, rePwd = values.rePwd;
                        if (!(!pwd || pwd !== rePwd)) return [3 /*break*/, 1];
                        context.setValue('pwd', '');
                        context.setValue('rePwd', '');
                        error = '密码错误，请重新输入密码！';
                        context.setError('pwd', error);
                        return [3 /*break*/, 3];
                    case 1:
                        this.controller.password = pwd;
                        return [4 /*yield*/, this.controller.execute()];
                    case 2:
                        error = _a.sent();
                        if (error !== undefined) {
                            components_1.nav.push(React.createElement(components_1.Page, { header: "\u6CE8\u518C\u4E0D\u6210\u529F" },
                                React.createElement("div", { className: "p-5 text-danger" }, error)));
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/, error];
                }
            });
        }); };
        _this.onEnter = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(name === 'rePwd')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.onSubmit('submit', context)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.page = function () {
            return React.createElement(components_1.Page, { header: _this.controller.passwordPageCaption },
                React.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
                    "\u6CE8\u518C\u8D26\u53F7",
                    React.createElement("br", null),
                    React.createElement("div", { className: "py-2 px-3 my-2 text-primary bg-light" },
                        React.createElement("b", null, _this.controller.account)),
                    React.createElement("div", { className: "h-1c" }),
                    React.createElement(components_1.Form, { schema: _this.schema, uiSchema: _this.uiSchema, onButtonClick: _this.onSubmit, onEnter: _this.onEnter, requiredFlag: false })));
        };
        return _this;
    }
    PasswordPage.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.uiSchema = {
                    items: {
                        pwd: { widget: 'password', placeholder: '密码', label: '密码' },
                        rePwd: { widget: 'password', placeholder: '重复密码', label: '重复密码' },
                        submit: { widget: 'button', className: 'btn btn-primary btn-block mt-3', label: this.controller.passwordSubmitCaption },
                    }
                };
                this.openPage(this.page);
                return [2 /*return*/];
            });
        });
    };
    return PasswordPage;
}(vm_1.VPage));
var RegSuccess = /** @class */ (function (_super) {
    __extends(RegSuccess, _super);
    function RegSuccess() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.page = function (_a) {
            var users = _a.users;
            var _b = _this.controller, account = _b.account, successText = _b.successText, login = _b.login;
            if (users === undefined) {
                return React.createElement(components_1.Page, { header: false },
                    React.createElement("div", { className: "container w-max-30c" },
                        React.createElement("div", { className: "my-5" },
                            React.createElement("div", { className: "py-5" },
                                "\u8D26\u53F7 ",
                                React.createElement("strong", { className: "text-primary" },
                                    account,
                                    " "),
                                " ",
                                successText,
                                "\uFF01"),
                            React.createElement("button", { className: "btn btn-success btn-block", type: "button", onClick: function () { return login(undefined); } }, "\u76F4\u63A5\u767B\u5F55"))));
            }
            else {
                return React.createElement(components_1.Page, { header: false },
                    React.createElement("div", { className: "container w-max-30c" },
                        React.createElement("div", { className: "my-5" },
                            React.createElement("div", { className: "py-5 text-success" }, successText),
                            users.map(function (v) {
                                var name = v.name;
                                return React.createElement("div", { className: "py-2 cursor-pointer", onClick: function () { return login(name); } },
                                    "\u767B\u5F55\u8D26\u53F7 ",
                                    React.createElement("strong", { className: "text-primary" },
                                        name,
                                        " "));
                            }))));
            }
        };
        return _this;
    }
    RegSuccess.prototype.open = function (users) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.openPage(this.page, { users: users });
                return [2 /*return*/];
            });
        });
    };
    return RegSuccess;
}(vm_1.VPage));
//# sourceMappingURL=register.js.map