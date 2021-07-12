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
exports.VForgetPassword = exports.VRegisterPassword = exports.VPassword = void 0;
var react_1 = __importDefault(require("react"));
var vm_1 = require("../../vm");
var components_1 = require("../../components");
var VPassword = /** @class */ (function (_super) {
    __extends(VPassword, _super);
    function VPassword() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.schema = [
            { name: 'pwd', type: 'string', required: true, maxLength: 100 },
            { name: 'rePwd', type: 'string', required: true, maxLength: 100 },
            { name: 'submit', type: 'submit' },
        ];
        _this.onButtonSubmit = function (name, context) { return __awaiter(_this, void 0, void 0, function () {
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
                    case 1: return [4 /*yield*/, this.controller.onPasswordSubmit(pwd)];
                    case 2:
                        error = _a.sent();
                        if (error !== undefined) {
                            components_1.nav.push(react_1.default.createElement(components_1.Page, { header: "\u6CE8\u518C\u4E0D\u6210\u529F" },
                                react_1.default.createElement("div", { className: "p-5 text-danger" }, error)));
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
                        return [4 /*yield*/, this.onButtonSubmit('submit', context)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    Object.defineProperty(VPassword.prototype, "account", {
        get: function () { return this.controller.account; },
        enumerable: false,
        configurable: true
    });
    VPassword.prototype.header = function () {
        return this.pageCaption;
    };
    VPassword.prototype.content = function () {
        var uiSchema = {
            items: {
                pwd: { widget: 'password', placeholder: '密码', label: '密码' },
                rePwd: { widget: 'password', placeholder: '重复密码', label: '重复密码' },
                submit: { widget: 'button', className: 'btn btn-primary btn-block mt-3', label: this.submitCaption },
            }
        };
        return react_1.default.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
            "\u6CE8\u518C\u8D26\u53F7",
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { className: "py-2 px-3 my-2 text-primary bg-light" },
                react_1.default.createElement("b", null, this.account)),
            react_1.default.createElement("div", { className: "h-1c" }),
            react_1.default.createElement(components_1.Form, { schema: this.schema, uiSchema: uiSchema, onButtonClick: this.onButtonSubmit, onEnter: this.onEnter, requiredFlag: false }));
    };
    return VPassword;
}(vm_1.VPage));
exports.VPassword = VPassword;
var VRegisterPassword = /** @class */ (function (_super) {
    __extends(VRegisterPassword, _super);
    function VRegisterPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VRegisterPassword.prototype, "pageCaption", {
        get: function () { return '注册账号'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VRegisterPassword.prototype, "submitCaption", {
        get: function () { return '注册新账号'; },
        enumerable: false,
        configurable: true
    });
    return VRegisterPassword;
}(VPassword));
exports.VRegisterPassword = VRegisterPassword;
var VForgetPassword = /** @class */ (function (_super) {
    __extends(VForgetPassword, _super);
    function VForgetPassword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VForgetPassword.prototype, "pageCaption", {
        get: function () { return '账号密码'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VForgetPassword.prototype, "submitCaption", {
        get: function () { return '改密码'; },
        enumerable: false,
        configurable: true
    });
    return VForgetPassword;
}(VPassword));
exports.VForgetPassword = VForgetPassword;
//# sourceMappingURL=VPassword.js.map