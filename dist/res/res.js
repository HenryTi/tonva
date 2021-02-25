"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = exports.setGlobalRes = exports.setRes = exports.resLang = exports.setResOptions = exports.resOptions = void 0;
var lodash_1 = __importDefault(require("lodash"));
exports.resOptions = {
    lang: undefined,
    $lang: undefined,
    district: undefined,
    $district: undefined,
};
function setResOptions(lang, district) {
    exports.resOptions.lang = lang;
    exports.resOptions.$lang = '$' + lang;
    exports.resOptions.district = district;
    exports.resOptions.$district = '$' + district;
}
exports.setResOptions = setResOptions;
(function () {
    var lang, district;
    var language = (navigator.languages && navigator.languages[0]) // Chrome / Firefox
        || navigator.language; // ||   // All browsers
    //navigator.userLanguage; // IE <= 10
    if (!language) {
        lang = 'zh';
        district = 'CN';
    }
    else {
        var parts = language.split('-');
        lang = parts[0];
        if (parts.length > 1)
            district = parts[1].toUpperCase();
    }
    setResOptions(lang, district);
}());
function resLang(res) {
    var lang = exports.resOptions.lang, district = exports.resOptions.district;
    var ret = {};
    if (res === undefined)
        return ret;
    lodash_1.default.merge(ret, res._);
    var l = res[lang];
    if (l === undefined)
        return ret;
    lodash_1.default.merge(ret, l._);
    var d = l[district];
    if (d === undefined)
        return ret;
    lodash_1.default.merge(ret, d);
    var entity = ret.entity;
    if (entity !== undefined) {
        for (var i in entity) {
            entity[i.toLowerCase()] = entity[i];
        }
    }
    return ret;
}
exports.resLang = resLang;
var resGlobal = {};
function setRes(target, res) {
    if (res === undefined)
        return;
    var $lang = exports.resOptions.$lang, $district = exports.resOptions.$district;
    lodash_1.default.merge(target, res);
    if ($lang !== undefined) {
        var l = res[$lang];
        if (l !== undefined) {
            lodash_1.default.merge(target, l);
            var d = l[$district];
            if (d !== undefined) {
                lodash_1.default.merge(target, d);
            }
        }
    }
    return function (str) {
        return target[str] || str;
    };
}
exports.setRes = setRes;
function setGlobalRes(res) {
    setRes(resGlobal, res);
}
exports.setGlobalRes = setGlobalRes;
function t(str) {
    return resGlobal[str] || str;
}
exports.t = t;
//# sourceMappingURL=res.js.map