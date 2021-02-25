"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUiSelectItems = void 0;
function toUiSelectItems(items) {
    if (items === undefined)
        return;
    var ret = [];
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        var pos = item.indexOf(':');
        var val = void 0;
        var title = void 0;
        if (pos < 0) {
            val = Number(item);
        }
        else {
            val = Number(item.substr(0, pos));
            title = item.substr(pos + 1);
        }
        ret.push({ value: val, title: title });
    }
    return ret;
}
exports.toUiSelectItems = toUiSelectItems;
//# sourceMappingURL=toUiSelectItems.js.map