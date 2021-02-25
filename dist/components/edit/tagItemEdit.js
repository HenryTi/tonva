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
exports.TagMultiItemEdit = exports.TagSingleItemEdit = void 0;
var React = __importStar(require("react"));
var nav_1 = require("../nav");
var page_1 = require("../page/page");
var mobx_react_1 = require("mobx-react");
var itemEdit_1 = require("./itemEdit");
var TagItemEdit = /** @class */ (function (_super) {
    __extends(TagItemEdit, _super);
    function TagItemEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputs = {};
        _this.page = mobx_react_1.observer(function (props) {
            var resolve = props.resolve;
            var right = React.createElement("button", { className: "btn btn-sm btn-success align-self-center", disabled: !_this.isChanged, onClick: function () {
                    _this.verifyValue();
                    if (_this.error === undefined)
                        resolve(_this.newValue);
                } }, "\u4FDD\u5B58");
            /*
            let content = list?
                list.map((v, index:number) => {
                    let {name:itemName, id} = v;
                    return <div key={index} className="col"><label className="px-3 py-2 cursor-pointer">
                        <input ref={input=>this.inputs[id] = input} name={name} type={this.inputType} value={id}
                            onClick={(e)=>this.onChange(e.currentTarget.checked, id)}
                            defaultChecked={this.defaultChecked(id)} /> {itemName} &nbsp;
                    </label></div>;
                })
                :
                <>no list defined</>;
            */
            return React.createElement(page_1.Page, { header: '更改' + _this.label, right: right },
                React.createElement("div", { className: "p-3" }, _this.renderInputs()));
        });
        return _this;
    }
    Object.defineProperty(TagItemEdit.prototype, "uiItem", {
        get: function () { return this._uiItem; },
        enumerable: false,
        configurable: true
    });
    ;
    TagItemEdit.prototype.init = function () {
        if (this.value === undefined) {
            this.value = this._uiItem === undefined ? undefined : this._uiItem.defaultValue;
        }
    };
    TagItemEdit.prototype.internalStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var element = React.createElement(_this.page, { resolve: resolve, reject: reject });
                        nav_1.nav.push(element, reject);
                    })];
            });
        });
    };
    TagItemEdit.prototype.renderContent = function () {
        var valuesView = this.uiItem.valuesView;
        if (valuesView === undefined)
            return _super.prototype.renderContent.call(this);
        return valuesView.render(this.value);
    };
    return TagItemEdit;
}(itemEdit_1.ItemEdit));
var TagSingleItemEdit = /** @class */ (function (_super) {
    __extends(TagSingleItemEdit, _super);
    function TagSingleItemEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputType = 'radio';
        _this.onInputChange = function (evt) {
            var currentTarget = evt.currentTarget;
            if (currentTarget.checked === false)
                return;
            _this.newValue = Number(currentTarget.value);
            var preValue = _this.value;
            _this.isChanged = (_this.newValue !== preValue);
        };
        return _this;
    }
    TagSingleItemEdit.prototype.renderInputs = function () {
        var valuesView = this.uiItem.valuesView;
        var options = {
            inputs: this.inputs,
            onInputChange: this.onInputChange,
        };
        return valuesView.renderRadios(this.value, options);
    };
    return TagSingleItemEdit;
}(TagItemEdit));
exports.TagSingleItemEdit = TagSingleItemEdit;
var TagMultiItemEdit = /** @class */ (function (_super) {
    __extends(TagMultiItemEdit, _super);
    function TagMultiItemEdit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //private arr:number[];
        _this.inputType = 'checkbox';
        _this.onInputChange = function (evt) {
            var values = [];
            for (var i in _this.inputs) {
                var input = _this.inputs[i];
                if (input.checked === true)
                    values.push(input.value);
            }
            _this.newValue = values.join('|');
            //this.newValue = value;
            var preValue = _this.value;
            _this.isChanged = (_this.newValue !== preValue);
        };
        return _this;
    }
    TagMultiItemEdit.prototype.renderInputs = function () {
        var valuesView = this.uiItem.valuesView;
        var options = {
            inputs: this.inputs,
            onInputChange: this.onInputChange
        };
        return valuesView.renderChecks(this.value, options);
    };
    return TagMultiItemEdit;
}(TagItemEdit));
exports.TagMultiItemEdit = TagMultiItemEdit;
//# sourceMappingURL=tagItemEdit.js.map