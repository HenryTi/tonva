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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VVerify = void 0;
var react_1 = __importDefault(require("react"));
var vm_1 = require("../../vm");
var components_1 = require("../../components");
var VVerify = /** @class */ (function (_super) {
    __extends(VVerify, _super);
    function VVerify() {
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
                        verify = context.getValue('verify');
                        return [4 /*yield*/, this.onVerify(verify)];
                    case 1:
                        ret = _a.sent();
                        if (ret === 0) {
                            context.setError('verify', '验证码错误');
                            return [2 /*return*/];
                        }
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
        return _this;
    }
    VVerify.prototype.init = function (onVerify) {
        this.onVerify = onVerify;
    };
    VVerify.prototype.header = function () { return '验证码'; };
    VVerify.prototype.content = function () {
        var typeText, extra;
        switch (this.controller.type) {
            case 'mobile':
                typeText = '手机号';
                break;
            case 'email':
                typeText = '邮箱';
                extra = react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("span", { className: "text-danger" }, "\u6CE8\u610F"),
                    ": \u6709\u53EF\u80FD\u8BEF\u4E3A\u5783\u573E\u90AE\u4EF6\uFF0C\u8BF7\u68C0\u67E5",
                    react_1.default.createElement("br", null));
                break;
        }
        return react_1.default.createElement("div", { className: "w-max-20c my-5 py-5", style: { marginLeft: 'auto', marginRight: 'auto' } },
            "\u9A8C\u8BC1\u7801\u5DF2\u7ECF\u53D1\u9001\u5230",
            typeText,
            react_1.default.createElement("br", null),
            react_1.default.createElement("div", { className: "py-2 px-3 my-2 text-primary bg-light" },
                react_1.default.createElement("b", null, this.controller.account)),
            extra,
            react_1.default.createElement("div", { className: "h-1c" }),
            react_1.default.createElement(components_1.Form, { schema: this.schema, uiSchema: this.uiSchema, onButtonClick: this.onSubmit, onEnter: this.onEnter, requiredFlag: false }));
    };
    return VVerify;
}(vm_1.VPage));
exports.VVerify = VVerify;
//# sourceMappingURL=VVerify.js.map