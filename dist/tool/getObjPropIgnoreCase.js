"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getObjPropIgnoreCase = void 0;
function getObjPropIgnoreCase(obj, prop) {
    if (!obj)
        return;
    if (!prop)
        return;
    var keys = Object.keys(obj);
    prop = prop.toLowerCase();
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (key.toLowerCase() === prop)
            return obj[key];
    }
    return;
}
exports.getObjPropIgnoreCase = getObjPropIgnoreCase;
//# sourceMappingURL=getObjPropIgnoreCase.js.map