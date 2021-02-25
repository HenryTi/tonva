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
exports.MonthWidget = exports.TimeWidget = exports.DateTimeWidget = exports.DateWidget = void 0;
//import * as React from 'react';
var textWidget_1 = require("./textWidget");
var DateWidget = /** @class */ (function (_super) {
    __extends(DateWidget, _super);
    function DateWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'date';
        return _this;
    }
    return DateWidget;
}(textWidget_1.TextWidget));
exports.DateWidget = DateWidget;
var DateTimeWidget = /** @class */ (function (_super) {
    __extends(DateTimeWidget, _super);
    function DateTimeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'datetime';
        return _this;
    }
    return DateTimeWidget;
}(textWidget_1.TextWidget));
exports.DateTimeWidget = DateTimeWidget;
var TimeWidget = /** @class */ (function (_super) {
    __extends(TimeWidget, _super);
    function TimeWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'time';
        return _this;
    }
    return TimeWidget;
}(textWidget_1.TextWidget));
exports.TimeWidget = TimeWidget;
var MonthWidget = /** @class */ (function (_super) {
    __extends(MonthWidget, _super);
    function MonthWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'month';
        return _this;
    }
    return MonthWidget;
}(textWidget_1.TextWidget));
exports.MonthWidget = MonthWidget;
//# sourceMappingURL=dateWidget.js.map