"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchBox = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var SearchBox = /** @class */ (function (_super) {
    __extends(SearchBox, _super);
    function SearchBox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.key = null;
        _this.onChange = function (evt) {
            _this.key = evt.target.value;
            if (_this.key !== undefined) {
                _this.key = _this.key.trim();
                if (_this.key === '')
                    _this.key = undefined;
            }
            if (_this.props.allowEmptySearch !== true) {
                _this.input.disabled = !_this.key;
            }
        };
        _this.onSubmit = function (evt) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        evt.preventDefault();
                        if (this.key === null)
                            this.key = this.props.initKey || '';
                        if (this.props.allowEmptySearch !== true) {
                            if (!this.key)
                                return [2 /*return*/];
                            if (this.input)
                                this.input.disabled = true;
                        }
                        return [4 /*yield*/, this.props.onSearch(this.key)];
                    case 1:
                        _a.sent();
                        if (this.input)
                            this.input.disabled = false;
                        return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    SearchBox.prototype.clear = function () {
        if (this.input)
            this.input.value = '';
    };
    SearchBox.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, inputClassName = _a.inputClassName, onFocus = _a.onFocus, label = _a.label, placeholder = _a.placeholder, buttonText = _a.buttonText, maxLength = _a.maxLength, size = _a.size;
        var inputSize;
        switch (size) {
            default:
            case 'sm':
                inputSize = 'input-group-sm';
                break;
            case 'md':
                inputSize = 'input-group-md';
                break;
            case 'lg':
                inputSize = 'input-group-lg';
                break;
        }
        return React.createElement("form", { className: className, onSubmit: this.onSubmit },
            React.createElement("div", { className: classnames_1.default("input-group", inputSize) },
                label && React.createElement("div", { className: "input-group-addon align-self-center mr-2" }, label),
                React.createElement("input", { ref: function (v) { return _this.input = v; }, onChange: this.onChange, type: "text", name: "key", onFocus: onFocus, className: classnames_1.default('form-control', inputClassName || 'border-primary'), placeholder: placeholder, defaultValue: this.props.initKey, maxLength: maxLength }),
                React.createElement("div", { className: "input-group-append" },
                    React.createElement("button", { className: "btn btn-primary", type: "submit", disabled: this.props.allowEmptySearch !== true },
                        React.createElement("i", { className: 'fa fa-search' }),
                        React.createElement("i", { className: "fa" }),
                        buttonText))));
    };
    return SearchBox;
}(React.Component));
exports.SearchBox = SearchBox;
//# sourceMappingURL=searchBox.js.map