"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileFieldRule = exports.EmailFieldRule = exports.emailRegex = exports.mobileRegex = void 0;
exports.mobileRegex = /^[0-9]*$/;
exports.emailRegex = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
// /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
var EmailFieldRule = function (value) {
    if (exports.emailRegex.test(value) === false)
        return '电子邮件格式错误';
};
exports.EmailFieldRule = EmailFieldRule;
var MobileFieldRule = function (value) {
    if (exports.emailRegex.test(value) === false)
        return '手机格式错误';
};
exports.MobileFieldRule = MobileFieldRule;
//# sourceMappingURL=index.js.map