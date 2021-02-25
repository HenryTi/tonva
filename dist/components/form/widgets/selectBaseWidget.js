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
exports.SelectBaseWidget = void 0;
var widget_1 = require("./widget");
var SelectBaseWidget = /** @class */ (function (_super) {
    __extends(SelectBaseWidget, _super);
    function SelectBaseWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectBaseWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    return SelectBaseWidget;
}(widget_1.Widget));
exports.SelectBaseWidget = SelectBaseWidget;
//# sourceMappingURL=selectBaseWidget.js.map