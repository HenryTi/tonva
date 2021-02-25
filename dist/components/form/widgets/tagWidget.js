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
exports.TagMultiWidget = exports.TagSingleWidget = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var TagWidget = /** @class */ (function (_super) {
    __extends(TagWidget, _super);
    function TagWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = {};
        return _this;
    }
    Object.defineProperty(TagWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    TagWidget.prototype.setElementValue = function (value) {
        for (var i in this.inputs) {
            var input = this.inputs[i];
            input.checked = value === input.value;
        }
    };
    TagWidget.prototype.setReadOnly = function (value) {
        this.readOnly = value;
        for (var i in this.inputs)
            this.inputs[i].readOnly = value;
    };
    TagWidget.prototype.setDisabled = function (value) {
        this.disabled = value;
        for (var i in this.inputs)
            this.inputs[i].disabled = value;
    };
    return TagWidget;
}(widget_1.Widget));
var TagSingleWidget = /** @class */ (function (_super) {
    __extends(TagSingleWidget, _super);
    function TagSingleWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagSingleWidget.prototype.render = function () {
        var _a = this.ui, valuesView = _a.valuesView, wrapClassName = _a.wrapClassName;
        if (valuesView === undefined)
            return React.createElement(React.Fragment, null, "valuesView must be defined");
        var isRow = this.context.isRow;
        var rowKey;
        if (isRow === true) {
            rowKey = this.context.rowKey;
        }
        var cn = classnames_1.default(this.className, 'py-0');
        var name = this.name;
        if (rowKey !== undefined)
            name += '-' + rowKey;
        var options = {
            className: cn,
            inputName: name,
            wrapClassName: wrapClassName,
            onInputChange: this.onInputChange
        };
        return valuesView.renderRadios(this.defaultValue, options);
    };
    return TagSingleWidget;
}(TagWidget));
exports.TagSingleWidget = TagSingleWidget;
var TagMultiWidget = /** @class */ (function (_super) {
    __extends(TagMultiWidget, _super);
    function TagMultiWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (evt) {
            var values = [];
            for (var i in _this.inputs) {
                var input = _this.inputs[i];
                if (input.checked === true)
                    values.push(input.value);
            }
            _this.changeValue(values.join('|'), true);
        };
        return _this;
    }
    TagMultiWidget.prototype.init = function () {
        _super.prototype.init.call(this);
        var def = this.defaultValue;
        switch (typeof def) {
            default:
                this.defaultArr = [];
                break;
            case 'string':
                this.defaultArr = def.split('|').map(function (v) { return Number(v); });
                break;
        }
    };
    TagMultiWidget.prototype.render = function () {
        var _a = this.ui, valuesView = _a.valuesView, wrapClassName = _a.wrapClassName;
        if (valuesView === undefined)
            return React.createElement(React.Fragment, null, "valuesView must be defined");
        var cn = classnames_1.default(this.className, 'py-0');
        var options = {
            className: cn,
            inputs: this.inputs,
            wrapClassName: wrapClassName,
            onInputChange: this.onInputChange
        };
        return valuesView.renderChecks(this.defaultValue, options);
    };
    return TagMultiWidget;
}(TagWidget));
exports.TagMultiWidget = TagMultiWidget;
//# sourceMappingURL=tagWidget.js.map