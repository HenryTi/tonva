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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextWidget = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var widget_1 = require("./widget");
var mobx_1 = require("mobx");
var TextWidget = /** @class */ (function (_super) {
    __extends(TextWidget, _super);
    function TextWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'text';
        _this.onKeyDown = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            var onEnter, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.internalOnKeyDown(evt);
                        if (evt.keyCode !== 13)
                            return [2 /*return*/];
                        onEnter = this.context.form.props.onEnter;
                        if (onEnter === undefined)
                            return [2 /*return*/];
                        this.changeValue(evt.currentTarget.value, true);
                        //this.checkRules();
                        //this.context.checkContextRules();
                        this.input.blur();
                        return [4 /*yield*/, onEnter(this.name, this.context)];
                    case 1:
                        ret = _a.sent();
                        if (ret !== undefined) {
                            this.context.setError(this.name, ret);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onBlur = function (evt) {
            _this.onInputChange(evt);
            _this.checkRules();
            _this.context.checkContextRules();
            _this.hasFocus = false;
        };
        _this.onFocus = function (evt) {
            _this.clearError();
            _this.context.removeErrorWidget(_this);
            _this.context.clearErrors();
            _this.hasFocus = true;
        };
        return _this;
    }
    Object.defineProperty(TextWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    TextWidget.prototype.setElementValue = function (value) {
        if (this.input === null)
            return;
        this.input.value = value;
    };
    Object.defineProperty(TextWidget.prototype, "placeholder", {
        get: function () { return (this.ui && this.ui.placeholder) || this.name; },
        enumerable: false,
        configurable: true
    });
    TextWidget.prototype.internalOnKeyDown = function (evt) {
    };
    TextWidget.prototype.onChange = function (evt) {
    };
    TextWidget.prototype.setReadOnly = function (value) {
        if (this.input === null)
            return;
        this.input.readOnly = this.readOnly = value;
    };
    TextWidget.prototype.setDisabled = function (value) {
        if (this.input === null)
            return;
        this.input.disabled = this.disabled = value;
    };
    TextWidget.prototype.render = function () {
        var _this = this;
        var renderTemplet = this.renderTemplet();
        if (renderTemplet !== undefined)
            return renderTemplet;
        var cn = {
        //'form-control': true,
        };
        if (this.hasError === true) {
            cn['is-invalid'] = true;
        }
        else {
            cn['required-item'] = this.itemSchema.required === true;
        }
        return React.createElement(React.Fragment, null,
            React.createElement("input", { ref: function (input) { return _this.input = input; }, className: classnames_1.default(this.className, cn), type: this.inputType, defaultValue: this.value, onChange: function (evt) { return _this.onChange(evt); }, placeholder: this.placeholder, readOnly: this.readOnly, disabled: this.disabled, onKeyDown: this.onKeyDown, onFocus: this.onFocus, onBlur: this.onBlur, maxLength: this.itemSchema.maxLength }),
            this.renderErrors());
    };
    __decorate([
        mobx_1.observable
    ], TextWidget.prototype, "hasFocus", void 0);
    return TextWidget;
}(widget_1.Widget));
exports.TextWidget = TextWidget;
//# sourceMappingURL=textWidget.js.map