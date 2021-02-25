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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContextContainer = exports.FormContext = exports.RowContext = exports.Context = void 0;
var React = __importStar(require("react"));
//import { ArrRow } from './arrRow';
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var Context = /** @class */ (function () {
    function Context(form, uiSchema, data, inNode, isRow) {
        var _a;
        var _this = this;
        this.widgets = {};
        this.errors = [];
        this.errorWidgets = [];
        this.renderErrors = mobx_react_1.observer(function () {
            var errors = _this.errors;
            if (errors.length === 0)
                return null;
            return React.createElement(React.Fragment, null, errors.map(function (err) { return React.createElement("span", { key: err, className: "text-danger inline-block my-1 ml-3" },
                React.createElement("i", { className: "fa fa-exclamation-circle" }),
                " \u00A0",
                err); }));
        });
        this.form = form;
        this.uiSchema = uiSchema;
        this.initData = data;
        this.inNode = inNode;
        this.isRow = isRow;
        if (uiSchema !== undefined) {
            var rules = uiSchema.rules;
            if (rules !== undefined) {
                this.rules = [];
                if (Array.isArray(rules) === false)
                    this.rules.push(rules);
                else
                    (_a = this.rules).push.apply(_a, rules);
            }
        }
    }
    Context.prototype.getArrRowContexts = function (arrName) {
        if (this.subContexts === undefined)
            this.subContexts = {};
        var arrRowContexts = this.subContexts[arrName];
        if (arrRowContexts === undefined)
            this.subContexts[arrName] = arrRowContexts = {};
        return arrRowContexts;
    };
    Object.defineProperty(Context.prototype, "arrName", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    Context.prototype.getValue = function (itemName) { return this.initData[itemName]; };
    Context.prototype.setValue = function (itemName, value) {
        this.initData[itemName] = value;
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.setValue(value);
    };
    Context.prototype.getDisabled = function (itemName) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            return widget.getDisabled();
        return undefined;
    };
    Context.prototype.setDisabled = function (itemName, value) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.setDisabled(value);
    };
    Context.prototype.getReadOnly = function (itemName) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.getReadOnly();
        return undefined;
    };
    Context.prototype.setReadOnly = function (itemName, value) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.setReadOnly(value);
    };
    Context.prototype.getVisible = function (itemName) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.getVisible();
        return undefined;
    };
    Context.prototype.setVisible = function (itemName, value) {
        var widget = this.widgets[itemName];
        if (widget !== undefined)
            widget.setVisible(value);
    };
    Context.prototype.submit = function (buttonName) {
        return __awaiter(this, void 0, void 0, function () {
            var err, _i, _a, ew, onButtonClick, ret;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.checkRules();
                        if (this.hasError === true) {
                            err = '';
                            for (_i = 0, _a = this.errorWidgets; _i < _a.length; _i++) {
                                ew = _a[_i];
                                err += ew.name + ':\n' + ew.errors.join('\n');
                            }
                            console.error(err);
                            return [2 /*return*/];
                        }
                        onButtonClick = this.form.props.onButtonClick;
                        if (onButtonClick === undefined) {
                            alert("button " + buttonName + " clicked. you should define form onButtonClick");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, onButtonClick(buttonName, this)];
                    case 1:
                        ret = _b.sent();
                        if (ret === undefined)
                            return [2 /*return*/];
                        this.setError(buttonName, ret);
                        return [2 /*return*/];
                }
            });
        });
    };
    Context.prototype.checkFieldRules = function () {
        for (var i in this.widgets) {
            this.widgets[i].checkRules();
        }
        if (this.subContexts === undefined)
            return;
        for (var i in this.subContexts) {
            var arrRowContexts = this.subContexts[i];
            for (var j in arrRowContexts) {
                arrRowContexts[j].checkFieldRules();
            }
        }
    };
    Context.prototype.checkContextRules = function () {
        var _a;
        this.clearErrors();
        if (this.rules === undefined)
            return;
        for (var _i = 0, _b = this.rules; _i < _b.length; _i++) {
            var rule = _b[_i];
            var ret = rule(this);
            if (ret === undefined)
                continue;
            if (Array.isArray(ret) === true) {
                (_a = this.errors).push.apply(_a, ret);
            }
            else if (typeof ret === 'string') {
                this.errors.push(ret);
            }
            else {
                for (var i in ret)
                    this.setError(i, ret[i]);
            }
        }
        if (this.subContexts === undefined)
            return;
        for (var i in this.subContexts) {
            var arrRowContexts = this.subContexts[i];
            for (var j in arrRowContexts) {
                var rowContext = arrRowContexts[j];
                rowContext.clearErrors();
                rowContext.checkContextRules();
            }
        }
    };
    Context.prototype.setError = function (itemName, error) {
        var widget = this.widgets[itemName];
        if (widget === undefined)
            return;
        widget.setContextError(error);
        this.addErrorWidget(widget);
    };
    Context.prototype.clearContextErrors = function () {
        for (var i in this.widgets) {
            var widget = this.widgets[i];
            if (widget === undefined)
                continue;
            widget.clearContextError();
        }
    };
    Context.prototype.clearWidgetsErrors = function () {
        for (var i in this.widgets) {
            var widget = this.widgets[i];
            if (widget === undefined)
                continue;
            widget.clearError();
        }
    };
    Context.prototype.checkRules = function () {
        this.clearErrors();
        this.clearWidgetsErrors();
        this.checkFieldRules();
        if (this.hasError === true)
            return;
        this.checkContextRules();
    };
    Context.prototype.addErrorWidget = function (widget) {
        var pos = this.errorWidgets.findIndex(function (v) { return v === widget; });
        if (pos < 0)
            this.errorWidgets.push(widget);
    };
    Context.prototype.removeErrorWidget = function (widget) {
        var pos = this.errorWidgets.findIndex(function (v) { return v === widget; });
        if (pos >= 0)
            this.errorWidgets.splice(pos, 1);
    };
    Context.prototype.checkHasError = function () {
        var ret = (this.errorWidgets.length + this.errors.length) > 0;
        if (ret === true)
            return true;
        if (this.subContexts === undefined)
            return false;
        for (var i in this.subContexts) {
            var arrRowContexts = this.subContexts[i];
            for (var j in arrRowContexts) {
                if (arrRowContexts[j].hasError === true)
                    return true;
            }
        }
        return false;
    };
    Object.defineProperty(Context.prototype, "hasError", {
        get: function () {
            return this.checkHasError();
        },
        enumerable: false,
        configurable: true
    });
    ;
    Context.prototype.clearErrors = function () {
        this.errors.splice(0);
        this.errorWidgets.splice(0);
        this.clearContextErrors();
    };
    __decorate([
        mobx_1.observable
    ], Context.prototype, "errors", void 0);
    __decorate([
        mobx_1.observable
    ], Context.prototype, "errorWidgets", void 0);
    __decorate([
        mobx_1.computed
    ], Context.prototype, "hasError", null);
    return Context;
}());
exports.Context = Context;
var rowKeySeed = 1;
var RowContext = /** @class */ (function (_super) {
    __extends(RowContext, _super);
    //readonly uiSchema: UiArr;
    function RowContext(parentContext, arrSchema, data, inNode) {
        var _this = this;
        var uiArr;
        var uiSchema = parentContext.uiSchema;
        if (uiSchema !== undefined) {
            var items = uiSchema.items;
            if (items !== undefined)
                uiArr = items[arrSchema.name];
        }
        _this = _super.call(this, parentContext.form, uiArr, data, inNode, true) || this;
        _this.parentContext = parentContext;
        _this.arrSchema = arrSchema;
        _this.rowKey = rowKeySeed++;
        _this.data = data;
        return _this;
    }
    RowContext.prototype.getItemSchema = function (itemName) { return this.arrSchema.itemSchemas[itemName]; };
    RowContext.prototype.getUiItem = function (itemName) {
        if (this.uiSchema === undefined)
            return undefined;
        var items = this.uiSchema.items;
        if (items === undefined)
            return undefined;
        return items[itemName];
    };
    Object.defineProperty(RowContext.prototype, "arrName", {
        get: function () { return this.arrSchema.name; },
        enumerable: false,
        configurable: true
    });
    RowContext.prototype.clearErrors = function () {
        _super.prototype.clearErrors.call(this);
        this.parentContext.clearErrors();
    };
    Object.defineProperty(RowContext.prototype, "parentData", {
        get: function () { return this.parentContext.data; },
        enumerable: false,
        configurable: true
    });
    return RowContext;
}(Context));
exports.RowContext = RowContext;
var FormContext = /** @class */ (function (_super) {
    __extends(FormContext, _super);
    function FormContext(form, inNode) {
        return _super.call(this, form, form.uiSchema, form.data, inNode, false) || this;
    }
    Object.defineProperty(FormContext.prototype, "data", {
        get: function () { return this.form.data; },
        enumerable: false,
        configurable: true
    });
    FormContext.prototype.getItemSchema = function (itemName) { return this.form.itemSchemas[itemName]; };
    FormContext.prototype.getUiItem = function (itemName) {
        var uiSchema = this.form.uiSchema;
        if (uiSchema === undefined)
            return undefined;
        var items = uiSchema.items;
        if (items === undefined)
            return undefined;
        return items[itemName];
    };
    return FormContext;
}(Context));
exports.FormContext = FormContext;
exports.ContextContainer = React.createContext({});
//# sourceMappingURL=context.js.map