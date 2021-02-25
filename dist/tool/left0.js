"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.left0 = void 0;
var zero = '00000000000000';
function left0(num, fix) {
    if (num === undefined)
        return '';
    var r = num.toString();
    var len = fix - r.length;
    if (len <= 0)
        return r;
    return zero.substr(0, len) + r;
}
exports.left0 = left0;
//# sourceMappingURL=left0.js.map