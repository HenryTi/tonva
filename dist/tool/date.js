"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toLocaleDateString = void 0;
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
function toLocaleDateString(date) {
    if (!date)
        return '';
    return date.toLocaleDateString('zh-cn', options);
}
exports.toLocaleDateString = toLocaleDateString;
//# sourceMappingURL=date.js.map