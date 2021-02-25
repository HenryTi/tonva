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
exports.NumberWidget = void 0;
//import * as React from 'react';
var textWidget_1 = require("./textWidget");
var rules_1 = require("../rules");
var NumberWidget = /** @class */ (function (_super) {
    __extends(NumberWidget, _super);
    function NumberWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'number';
        return _this;
    }
    Object.defineProperty(NumberWidget.prototype, "itemSchema", {
        get: function () { return this._itemSchema; },
        enumerable: false,
        configurable: true
    });
    ;
    NumberWidget.prototype.buildRules = function () {
        _super.prototype.buildRules.call(this);
        var res = this.context.form.res;
        var _a = this.itemSchema, min = _a.min, max = _a.max;
        this.rules.push(this.itemSchema.type === 'integer' ?
            new rules_1.RuleNum(res, min, max) :
            new rules_1.RuleInt(res, min, max));
        /*
        if (this.itemSchema.type === 'integer') {
            this.rules.push(new RuleInt);
        }
        let {min, max} = this.itemSchema;
        if (min !== undefined) this.rules.push(new RuleMin(min));
        if (max !== undefined) this.rules.push(new RuleMax(max));
        */
    };
    NumberWidget.prototype.parse = function (value) {
        if (value === undefined || value === null)
            return;
        return Number(value);
    };
    return NumberWidget;
}(textWidget_1.TextWidget));
exports.NumberWidget = NumberWidget;
//# sourceMappingURL=numberWidget.js.map