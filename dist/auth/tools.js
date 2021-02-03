"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSender = exports.tonvaTop = void 0;
var React = __importStar(require("react"));
var components_1 = require("../components");
var tool_1 = require("../tool");
var logo_svg_1 = __importDefault(require("../img/logo.svg"));
function tonvaTop() {
    return components_1.nav.loginTop(React.createElement("div", { className: "d-flex align-items-center position-relative" },
        React.createElement("img", { className: "App-logo h-3c position-absolute", src: logo_svg_1.default, alt: "img" }),
        React.createElement("div", { className: "h3 flex-fill text-center" },
            React.createElement("span", { className: "text-primary mr-3" }, "\u540C"),
            React.createElement("span", { className: "text-danger" }, "\u82B1"))));
}
exports.tonvaTop = tonvaTop;
var senders = [
    { type: 'mobile', caption: '手机号', regex: tool_1.mobileRegex },
    { type: 'email', caption: '邮箱', regex: tool_1.emailRegex }
];
function getSender(un) {
    var sender = senders.find(function (v) { return v.regex.test(un) === true; });
    return sender;
}
exports.getSender = getSender;
//# sourceMappingURL=tools.js.map