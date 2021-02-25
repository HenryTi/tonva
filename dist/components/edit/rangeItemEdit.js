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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeItemEdit = void 0;
var stringItemEdit_1 = require("./stringItemEdit");
var RangeItemEdit = /** @class */ (function (_super) {
    __extends(RangeItemEdit, _super);
    function RangeItemEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeItemEdit.prototype.inputOptions = function () {
        var min, max, step;
        if (this._uiItem) {
            min = this._uiItem.min;
            max = this._uiItem.max;
            step = this._uiItem.step;
        }
        return {
            type: 'range',
            min: min, max: max, step: step
        };
    };
    return RangeItemEdit;
}(stringItemEdit_1.StringItemEdit));
exports.RangeItemEdit = RangeItemEdit;
//# sourceMappingURL=rangeItemEdit.js.map