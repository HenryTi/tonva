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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.SelectWidget = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var mobx_1 = require("mobx");
var widget_1 = require("./widget");
var SelectWidget = /** @class */ (function (_super) {
    __extends(SelectWidget, _super);
    function SelectWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onInputChange = function (evt) {
            _this.setDataValue(evt.target.value);
        };
        return _this;
    }
    Object.defineProperty(SelectWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    SelectWidget.prototype.setElementValue = function (value) { this.select.value = value; };
    SelectWidget.prototype.setReadOnly = function (value) { this.select.disabled = this.readOnly = !value; };
    SelectWidget.prototype.setDisabled = function (value) { this.select.disabled = this.disabled = value; };
    SelectWidget.prototype.render = function () {
        var _this = this;
        if (this.readOnly === true) {
            var option = this.ui.list.find(function (v) { return v.value === _this.value; });
            var title = (option === undefined) ? '(???)' : option.title;
            return React.createElement("span", { className: "form-control w-min-6c" }, title);
        }
        return React.createElement("select", { ref: function (select) { return _this.select = select; }, className: classnames_1.default(this.className, 'form-control'), defaultValue: this.defaultValue, onChange: this.onInputChange }, this.ui.list.map(function (v, index) {
            var title = v.title, value = v.value;
            var cn;
            //if (value === undefined || value === null) cn = 'text-light small';
            //else cn = 'text-danger';
            return React.createElement("option", { className: cn, key: index, value: value }, title || value);
        }));
    };
    __decorate([
        mobx_1.observable
    ], SelectWidget.prototype, "readOnly", void 0);
    return SelectWidget;
}(widget_1.Widget));
exports.SelectWidget = SelectWidget;
//# sourceMappingURL=selectWidget.js.map