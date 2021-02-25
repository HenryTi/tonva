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
exports.VLogout = void 0;
var react_1 = __importDefault(require("react"));
var components_1 = require("../components");
var vm_1 = require("../vm");
var VLogout = /** @class */ (function (_super) {
    __extends(VLogout, _super);
    function VLogout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VLogout.prototype.init = function (param) {
        this.onLogout = param;
    };
    VLogout.prototype.header = function () { return this.isWebNav === true ? false : '安全退出'; };
    VLogout.prototype.footer = function () {
        return react_1.default.createElement("div", { className: "mt-5 text-center justify-content-center" },
            react_1.default.createElement("button", { className: "btn btn-outline-warning", onClick: components_1.nav.resetAll }, "\u5347\u7EA7\u8F6F\u4EF6"));
    };
    Object.defineProperty(VLogout.prototype, "back", {
        get: function () { return 'close'; },
        enumerable: false,
        configurable: true
    });
    VLogout.prototype.content = function () {
        return react_1.default.createElement("div", { className: "m-5 border border-info bg-white rounded-3 p-5 text-center" },
            react_1.default.createElement("div", null, "\u9000\u51FA\u5F53\u524D\u8D26\u53F7\u4E0D\u4F1A\u5220\u9664\u4EFB\u4F55\u5386\u53F2\u6570\u636E\uFF0C\u4E0B\u6B21\u767B\u5F55\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528\u672C\u8D26\u53F7"),
            react_1.default.createElement("div", { className: "mt-5 text-center" },
                react_1.default.createElement("button", { className: "btn btn-danger", onClick: this.onLogout }, "\u5B89\u5168\u9000\u51FA")));
    };
    return VLogout;
}(vm_1.VPage));
exports.VLogout = VLogout;
//# sourceMappingURL=VLogout.js.map