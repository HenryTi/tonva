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
exports.ButtonWidget = void 0;
var React = __importStar(require("react"));
var unknown_1 = require("./unknown");
var widget_1 = require("./widget");
var mobx_react_1 = require("mobx-react");
var ButtonWidget = /** @class */ (function (_super) {
    __extends(ButtonWidget, _super);
    function ButtonWidget() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, name, type;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.clearError();
                        this.clearContextError();
                        _a = this.itemSchema, name = _a.name, type = _a.type;
                        if (!(type === 'submit')) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.context.submit(name)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        _this.observerRender = mobx_react_1.observer(function () {
            var _a = _this.itemSchema, name = _a.name, type = _a.type;
            var Templet, cn, caption;
            if (_this.ui !== undefined) {
                var widgetType = _this.ui.widget;
                if (widgetType !== 'button')
                    return unknown_1.Unknown(type, widgetType, ['button']);
                Templet = _this.ui.Templet;
                cn = _this.ui.className;
                caption = _this.ui.label;
            }
            var _b = _this.context, form = _b.form, hasError = _b.hasError;
            var context = _this.context;
            var disabled = type === 'submit' && hasError;
            var content;
            if (_this.children !== undefined)
                content = _this.children;
            else if (typeof Templet === 'function')
                content = Templet();
            else if (Templet !== undefined)
                content = Templet;
            else
                content = caption;
            var button = React.createElement("button", { className: cn, type: "button", disabled: disabled, onClick: _this.onClick }, content || name);
            if (context.inNode === true)
                return React.createElement(React.Fragment, null,
                    button,
                    _this.renderErrors());
            return React.createElement("div", { className: form.ButtonClass },
                React.createElement("div", null, _this.renderErrors()),
                button);
        });
        return _this;
    }
    Object.defineProperty(ButtonWidget.prototype, "ui", {
        get: function () { return this._ui; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(ButtonWidget.prototype, "label", {
        get: function () { return null; },
        enumerable: false,
        configurable: true
    });
    ButtonWidget.prototype.render = function () {
        return React.createElement(this.observerRender);
    };
    return ButtonWidget;
}(widget_1.Widget));
exports.ButtonWidget = ButtonWidget;
//# sourceMappingURL=buttonWidget.js.map