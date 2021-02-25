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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBoxWidget = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var CheckBoxWidget = /** @class */ (function (_super) {
    __extends(CheckBoxWidget, _super);
    function CheckBoxWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (evt) {
            var v = evt.target.checked === true ? _this.trueValue : _this.falseValue;
            _this.setDataValue(v);
        };
        _this.onClick = function () {
            _this.context.clearErrors();
        };
        return _this;
    }
    Object.defineProperty(CheckBoxWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    CheckBoxWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        if (this.ui !== undefined) {
            var _a = this.ui, trueValue = _a.trueValue, falseValue = _a.falseValue;
            if (trueValue === undefined)
                this.trueValue = true;
            else
                this.trueValue = trueValue;
            if (falseValue === undefined)
                this.falseValue = false;
            else
                this.falseValue = falseValue;
        }
        else {
            this.trueValue = true;
            this.falseValue = false;
        }
    };
    CheckBoxWidget.prototype.setElementValue = function (value) {
        this.input.checked = value === this.trueValue;
    };
    CheckBoxWidget.prototype.setReadOnly = function (value) { this.input.readOnly = this.readOnly = value; };
    CheckBoxWidget.prototype.setDisabled = function (value) { this.input.disabled = this.disabled = value; };
    CheckBoxWidget.prototype.render = function () {
        var _this = this;
        var cn = classnames_1.default(this.className, 'form-check-inline p-0');
        var input = React.createElement("input", { ref: function (input) { return _this.input = input; }, className: 'align-self-center', type: "checkbox", defaultChecked: this.defaultValue, onChange: this.onInputChange, onClick: this.onClick });
        if (this.context.inNode === true) {
            return React.createElement("label", { className: cn },
                input,
                " ",
                (this.ui && this.ui.label) || this.name);
        }
        else {
            return React.createElement("div", { className: cn },
                React.createElement("label", { className: "w-100 h-100 mb-0 d-flex justify-content-center" }, input));
        }
    };
    return CheckBoxWidget;
}(widget_1.Widget));
exports.CheckBoxWidget = CheckBoxWidget;
//# sourceMappingURL=checkBoxWidget.js.map