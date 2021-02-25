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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
exports.CStringEdit = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var components_1 = require("../../components");
var controller_1 = require("../controller");
var mobx_1 = require("mobx");
var mobx_react_1 = require("mobx-react");
var CStringEdit = /** @class */ (function (_super) {
    __extends(CStringEdit, _super);
    function CStringEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.props = {
            label: '编辑'
        };
        _this.onChange = function (evt) {
            _this.newValue = evt.target.value;
            var preValue = _this.value;
            _this.isChanged = (_this.newValue !== preValue);
        };
        _this.onBlur = function (evt) {
            _this.verifyValue();
        };
        _this.onFocus = function () {
            _this.error = undefined;
        };
        _this.onEdit = function () {
            var _a = _this.props, label = _a.label, maxLength = _a.maxLength, placeholder = _a.placeholder, onValueChange = _a.onValueChange;
            var onSave = function () {
                _this.verifyValue();
                if (_this.error === undefined) {
                    _this.value = _this.newValue;
                    _this.closePage();
                    if (onValueChange)
                        onValueChange(_this.value);
                }
            };
            var right = react_1.default.createElement(mobx_react_1.observer(function () { return react_1.default.createElement("button", { className: "btn btn-sm btn-success align-self-center mr-2", disabled: !_this.isChanged, onClick: onSave }, "\u4FDD\u5B58"); }));
            var onKeyDown = function (evt) {
                if (evt.keyCode === 13)
                    onSave();
            };
            _this.openPage(react_1.default.createElement(components_1.Page, { header: label, right: right },
                react_1.default.createElement("div", { className: "m-3" },
                    react_1.default.createElement("input", { type: "text", onChange: _this.onChange, onKeyDown: onKeyDown, onBlur: _this.onBlur, onFocus: _this.onFocus, className: "form-control", defaultValue: _this.value, maxLength: maxLength }),
                    react_1.default.createElement(mobx_react_1.observer(function () { return placeholder && react_1.default.createElement("div", { className: "small muted m-2" }, placeholder); })),
                    _this.error && react_1.default.createElement("div", { className: "text-danger" }, _this.error))));
        };
        return _this;
    }
    CStringEdit.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    CStringEdit.prototype.render = function (value, props) {
        var _this = this;
        this.value = value;
        if (props)
            lodash_1.default.merge(this.props, props);
        return react_1.default.createElement(mobx_react_1.observer(function () { return react_1.default.createElement(react_1.default.Fragment, null,
            _this.renderValue(),
            _this.renderPencil()); }));
    };
    CStringEdit.prototype.renderValue = function () { return react_1.default.createElement(react_1.default.Fragment, null, this.value); };
    CStringEdit.prototype.renderPencil = function () {
        return react_1.default.createElement("span", { onClick: this.onEdit, className: "cursor-pointer" },
            "\u00A0 ",
            react_1.default.createElement(components_1.FA, { className: "text-info", name: "pencil-square-o" }),
            " \u00A0");
    };
    CStringEdit.prototype.verifyValue = function () { };
    __decorate([
        mobx_1.observable
    ], CStringEdit.prototype, "value", void 0);
    __decorate([
        mobx_1.observable
    ], CStringEdit.prototype, "newValue", void 0);
    __decorate([
        mobx_1.observable
    ], CStringEdit.prototype, "isChanged", void 0);
    __decorate([
        mobx_1.observable
    ], CStringEdit.prototype, "error", void 0);
    return CStringEdit;
}(controller_1.Controller));
exports.CStringEdit = CStringEdit;
//# sourceMappingURL=CStringEdit.js.map