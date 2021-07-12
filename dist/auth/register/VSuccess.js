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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VForgetSuccess = exports.VRegisterSuccess = exports.VSuccess = void 0;
var react_1 = __importDefault(require("react"));
var vm_1 = require("../../vm");
var VSuccess = /** @class */ (function (_super) {
    __extends(VSuccess, _super);
    function VSuccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VSuccess.prototype.header = function () { return false; };
    return VSuccess;
}(vm_1.VPage));
exports.VSuccess = VSuccess;
var VRegisterSuccess = /** @class */ (function (_super) {
    __extends(VRegisterSuccess, _super);
    function VRegisterSuccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VRegisterSuccess.prototype.content = function () {
        var _a = this.controller, account = _a.account, login = _a.login;
        return react_1.default.createElement("div", { className: "container w-max-30c" },
            react_1.default.createElement("div", { className: "my-5" },
                react_1.default.createElement("div", { className: "py-5 text-center" },
                    "\u8D26\u53F7 ",
                    react_1.default.createElement("strong", { className: "text-primary" },
                        account,
                        " "),
                    " \u6CE8\u518C\u6210\u529F\uFF01"),
                react_1.default.createElement("button", { className: "btn btn-success btn-block", type: "button", onClick: function () { return login(undefined); } }, "\u76F4\u63A5\u767B\u5F55")));
    };
    return VRegisterSuccess;
}(VSuccess));
exports.VRegisterSuccess = VRegisterSuccess;
var VForgetSuccess = /** @class */ (function (_super) {
    __extends(VForgetSuccess, _super);
    function VForgetSuccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VForgetSuccess.prototype.content = function () {
        var login = this.controller.login;
        return react_1.default.createElement("div", { className: "container w-max-30c" },
            react_1.default.createElement("div", { className: "my-5" },
                react_1.default.createElement("div", { className: "py-5 text-center text-success" }, "\u6210\u529F\u4FEE\u6539\u5BC6\u7801"),
                react_1.default.createElement("button", { className: "btn btn-primary btn-block", onClick: function () { return login(); } }, "\u767B\u5F55\u8D26\u53F7")));
    };
    return VForgetSuccess;
}(VSuccess));
exports.VForgetSuccess = VForgetSuccess;
//# sourceMappingURL=VSuccess.js.map