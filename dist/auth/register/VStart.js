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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VForgetStart = exports.VRegisterStart = exports.VStart = void 0;
var react_1 = __importDefault(require("react"));
var vm_1 = require("../../vm");
var tools_1 = require("../tools");
var components_1 = require("../../components");
var VStart = /** @class */ (function (_super) {
    __extends(VStart, _super);
    function VStart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = [
            { name: 'user', type: 'string', required: true, maxLength: 100 },
            { name: 'verify', type: 'submit' },
        ];
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
    VStart.prototype.init = function () {
        this.uiSchema = {
            items: {
                user: {
                    widget: 'text',
                    label: this.accountLable,
                    placeholder: '手机号或邮箱',
                },
                verify: { widget: 'button', className: 'btn btn-primary btn-block mt-3', label: '发送验证码' },
            }
        };
    };
    VStart.prototype.header = function () { return this.pageCaption; };
    VStart.prototype.content = function () {
        return react_1.default.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
            tools_1.tonvaTop(),
            react_1.default.createElement("div", { className: "h-3c" }),
            react_1.default.createElement(components_1.Form, { schema: this.schema, uiSchema: this.uiSchema, onButtonClick: this.onSubmit, onEnter: this.onEnter, requiredFlag: false }),
            react_1.default.createElement("div", { className: "text-center" },
                react_1.default.createElement(components_1.Ax, { href: "/login", className: "btn btn-link" }, "\u5DF2\u6709\u8D26\u53F7\uFF0C\u76F4\u63A5\u767B\u5F55")),
            components_1.nav.privacyEntry());
    };
    return VStart;
}(vm_1.VPage));
exports.VStart = VStart;
var VRegisterStart = /** @class */ (function (_super) {
    __extends(VRegisterStart, _super);
    function VRegisterStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VRegisterStart.prototype, "accountLable", {
        get: function () { return '账号'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRegisterStart.prototype, "pageCaption", {
        get: function () { return '注册账号'; },
        enumerable: false,
        configurable: true
    });
    return VRegisterStart;
}(VStart));
exports.VRegisterStart = VRegisterStart;
var VForgetStart = /** @class */ (function (_super) {
    __extends(VForgetStart, _super);
    function VForgetStart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VForgetStart.prototype.footer = function () { return null; };
    Object.defineProperty(VForgetStart.prototype, "accountLable", {
        get: function () { return '账号'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VForgetStart.prototype, "pageCaption", {
        get: function () { return '密码找回'; },
        enumerable: false,
        configurable: true
    });
    return VForgetStart;
}(VStart));
exports.VForgetStart = VForgetStart;
//# sourceMappingURL=VStart.js.map