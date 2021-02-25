"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var rules_1 = require("../rules");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var Widget = /** @class */ (function () {
    function Widget(context, itemSchema, fieldProps, children) {
        var _this = this;
        this.errors = [];
        this.contextErrors = [];
        this.onInputChange = function (evt) {
            _this.changeValue(evt.target.value, true);
        };
        this.container = mobx_react_1.observer(function () {
            if (_this.visible === false)
                return null;
            var _a = _this.context, form = _a.form, inNode = _a.inNode;
            if (inNode === true)
                return _this.render();
            var label = _this.label;
            if (_this.itemSchema.required === true && form.props.requiredFlag !== false) {
                if (label !== null)
                    label = React.createElement(React.Fragment, null,
                        label,
                        "\u00A0",
                        React.createElement("span", { className: "text-danger" }, "*"));
            }
            return form.FieldContainer(label, _this.renderBody());
        });
        this.context = context;
        var name = itemSchema.name;
        this.name = name;
        this._itemSchema = itemSchema;
        this.fieldProps = fieldProps;
        this.children = children;
        this._ui = context.getUiItem(name);
        if (this.ui === undefined) {
            this.readOnly = false;
            this.disabled = false;
            this.visible = true;
        }
        else {
            var _a = this.ui, readOnly = _a.readOnly, disabled = _a.disabled, visible = _a.visible;
            this.readOnly = (readOnly === true);
            this.disabled = (disabled === true);
            this.visible = !(visible === false);
        }
        this.value = this.defaultValue = context.getValue(name); //defaultValue;
        // this.init();
    }
    Object.defineProperty(Widget.prototype, "hasError", {
        get: function () { return (this.errors.length + this.contextErrors.length) > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Widget.prototype, "itemSchema", {
        get: function () { return this._itemSchema; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(Widget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    Widget.prototype.init = function () {
        this.rules = [];
        if (this.itemSchema.required === true) {
            this.rules.push(new rules_1.RuleRequired(this.context.form.res));
        }
        this.buildRules();
        if (this.ui === undefined)
            return;
        var rules = this.ui.rules;
        if (rules === undefined)
            return;
        if (Array.isArray(rules) === false) {
            this.rules.push(new rules_1.RuleCustom(rules));
            return;
        }
        for (var _i = 0, _a = rules; _i < _a.length; _i++) {
            var rule = _a[_i];
            this.rules.push(new rules_1.RuleCustom(rule));
        }
    };
    Widget.prototype.buildRules = function () {
    };
    Widget.prototype.checkRules = function () {
        var _a;
        var defy = [];
        for (var _i = 0, _b = this.rules; _i < _b.length; _i++) {
            var r = _b[_i];
            r.check(defy, this.value);
        }
        if (defy.length === 0) {
            this.context.removeErrorWidget(this);
        }
        else {
            this.context.addErrorWidget(this);
            (_a = this.errors).push.apply(_a, defy);
        }
    };
    Object.defineProperty(Widget.prototype, "isOk", {
        get: function () {
            return this.errors.length === 0;
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.setError = function (err) {
        var _a;
        if (err === undefined)
            return;
        if (typeof err === 'string')
            this.errors.push(err);
        else
            (_a = this.errors).push.apply(_a, err);
    };
    Widget.prototype.setContextError = function (err) {
        var _a;
        if (err === undefined)
            return;
        if (typeof err === 'string')
            this.contextErrors.push(err);
        else
            (_a = this.contextErrors).push.apply(_a, err);
    };
    Widget.prototype.clearError = function () {
        this.errors.splice(0);
    };
    Widget.prototype.clearContextError = function () {
        this.contextErrors.splice(0);
    };
    Widget.prototype.parse = function (value) { return value; };
    Widget.prototype.setElementValue = function (value) { };
    Widget.prototype.setDataValue = function (value) {
        if (this.isChanging === true)
            return;
        this.context.initData[this.name] = this.value = this.parse(value);
    };
    Widget.prototype.setValue = function (value) {
        if (this.isChanging === true)
            return;
        //this.setDataValue(value);
        //this.setElementValue(value);
        this.changeValue(value, false);
    };
    Widget.prototype.getValue = function () {
        return this.context.getValue(this.name);
    };
    Widget.prototype.getReadOnly = function () { return this.readOnly; };
    Widget.prototype.getDisabled = function () { return this.disabled; };
    Widget.prototype.getVisible = function () { return this.visible; };
    Widget.prototype.setReadOnly = function (value) { this.readOnly = value; };
    Widget.prototype.setDisabled = function (value) { this.disabled = value; };
    Widget.prototype.setVisible = function (value) { this.visible = value; };
    Widget.prototype.changeValue = function (newValue, fromElement) {
        var prev = this.value;
        var onChanging;
        var onChanged;
        if (this.ui !== undefined) {
            onChanging = this.ui.onChanging;
            onChanged = this.ui.onChanged;
        }
        var allowChange = true;
        if (onChanging !== undefined) {
            this.isChanging = true;
            allowChange = onChanging(this.context, this.value, prev);
            this.isChanging = false;
        }
        if (allowChange === true) {
            this.setDataValue(newValue);
            if (fromElement !== true)
                this.setElementValue(newValue);
            if (onChanged !== undefined) {
                this.isChanging = true;
                onChanged(this.context, this.value, prev);
                this.isChanging = false;
            }
        }
    };
    Object.defineProperty(Widget.prototype, "className", {
        get: function () {
            var fieldClass;
            if (this.context.inNode === false)
                fieldClass = 'form-control';
            return classnames_1.default(fieldClass, this.context.form.FieldClass, this.ui && this.ui.className);
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.renderBody = function () {
        var elDiscription;
        if (this.hasError === false && this.ui) {
            var _a = this.ui, discription = _a.discription, discriptionClassName = _a.discriptionClassName;
            if (discriptionClassName === undefined)
                discriptionClassName = 'small text-muted';
            elDiscription = React.createElement("span", { className: discriptionClassName }, discription);
        }
        return React.createElement(React.Fragment, null,
            this.render(),
            elDiscription);
    };
    Object.defineProperty(Widget.prototype, "label", {
        get: function () {
            var label;
            if (this.ui === undefined) {
                label = this.name;
            }
            else {
                var uiLabel = this.ui.label;
                if (uiLabel === null)
                    label = null;
                else
                    label = uiLabel || this.name;
            }
            return label;
        },
        enumerable: false,
        configurable: true
    });
    Widget.prototype.renderTemplet = function () {
        if (this.children !== undefined) {
            return React.createElement(React.Fragment, null, this.children);
        }
        if (this.ui === undefined)
            return undefined;
        var Templet = this.ui.Templet;
        if (typeof Templet === 'function')
            return Templet(this.value);
        return Templet;
    };
    Widget.prototype.renderErrors = function () {
        var errorList = __spreadArrays(this.errors, this.contextErrors);
        if (errorList.length === 0)
            return null;
        var inNode = this.context.inNode;
        var tag = inNode === true ? 'span' : 'div';
        return errorList.map(function (err) { return React.createElement(tag, {
            key: err,
            className: 'text-danger d-inline-block my-2 ml-3'
        }, React.createElement(React.Fragment, null,
            React.createElement("i", { className: "fa fa-exclamation-circle" }),
            " \u00A0",
            err)); });
    };
    __decorate([
        mobx_1.observable
    ], Widget.prototype, "errors", void 0);
    __decorate([
        mobx_1.observable
    ], Widget.prototype, "contextErrors", void 0);
    __decorate([
        mobx_1.computed
    ], Widget.prototype, "hasError", null);
    __decorate([
        mobx_1.observable
    ], Widget.prototype, "visible", void 0);
    __decorate([
        mobx_1.computed
    ], Widget.prototype, "isOk", null);
    return Widget;
}());
exports.Widget = Widget;
//# sourceMappingURL=widget.js.map