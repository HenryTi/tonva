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
exports.Edit = void 0;
var React = __importStar(require("react"));
//import _ from 'lodash';
var mobx_react_1 = require("mobx-react");
var stringItemEdit_1 = require("./stringItemEdit");
var imageItemEdit_1 = require("./imageItemEdit");
var radioItemEdit_1 = require("./radioItemEdit");
var selectItemEdit_1 = require("./selectItemEdit");
var idItemEdit_1 = require("./idItemEdit");
var tagItemEdit_1 = require("./tagItemEdit");
var textAreaItemEdit_1 = require("./textAreaItemEdit");
var checkBoxItemEdit_1 = require("./checkBoxItemEdit");
var rangeItemEdit_1 = require("./rangeItemEdit");
var numberItemEdit_1 = require("./numberItemEdit");
var Edit = /** @class */ (function (_super) {
    __extends(Edit, _super);
    function Edit(props) {
        var _this = _super.call(this, props) || this;
        _this.defaultSepClassName = 'border-top edit-sep-light-gray';
        _this.defaultRowContainerClassName = 'd-flex px-3 py-2 bg-white align-items-center';
        _this.rowClick = function (itemEdit) { return __awaiter(_this, void 0, void 0, function () {
            var itemSchema, uiItem, value, editInRow, _a, onItemChanged, onItemClick, stopEdit, changeValue, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (itemEdit === undefined) {
                            alert('item has no edit');
                            return [2 /*return*/];
                        }
                        itemSchema = itemEdit.itemSchema, uiItem = itemEdit.uiItem, value = itemEdit.value, editInRow = itemEdit.editInRow;
                        if (editInRow === true)
                            return [2 /*return*/];
                        _a = this.props, onItemChanged = _a.onItemChanged, onItemClick = _a.onItemClick, stopEdit = _a.stopEdit;
                        if (stopEdit === true)
                            return [2 /*return*/];
                        if ((uiItem === null || uiItem === void 0 ? void 0 : uiItem.readOnly) === true)
                            return [2 /*return*/];
                        if (!(onItemClick !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, onItemClick(itemSchema, uiItem, value)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                    case 2:
                        //let itemEdit:ItemEdit = createItemEdit(itemSchema, uiItem, label, value);
                        if (itemEdit === undefined) {
                            alert('undefined: let itemEdit:ItemEdit = createItemEdit(itemSchema, uiItem, label, value);');
                            return [2 /*return*/];
                        }
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 9, , 10]);
                        return [4 /*yield*/, itemEdit.start()];
                    case 4:
                        changeValue = _b.sent();
                        if (!(changeValue !== value)) return [3 /*break*/, 7];
                        // 2020-04-15：改值之后，应该赋值吧。所以移到这里来
                        this.props.data[itemSchema.name] = changeValue;
                        if (!(onItemChanged === undefined)) return [3 /*break*/, 5];
                        alert(itemSchema.name + " value changed, new: " + changeValue + ", pre: " + value);
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, onItemChanged(itemSchema, changeValue, value)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [4 /*yield*/, itemEdit.end()];
                    case 8:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        err_1 = _b.sent();
                        // 如果直接back，会触发reject，就到这里了
                        console.log('no value changed');
                        console.error(err_1);
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); };
        var topBorderClassName = props.topBorderClassName, bottomBorderClassName = props.bottomBorderClassName, sepClassName = props.sepClassName, rowContainerClassName = props.rowContainerClassName, uiSchema = props.uiSchema;
        _this.topBorder = React.createElement("div", { className: topBorderClassName || _this.defaultSepClassName });
        _this.bottomBorder = React.createElement("div", { className: bottomBorderClassName || _this.defaultSepClassName });
        _this.rowContainerClassName = rowContainerClassName || _this.defaultRowContainerClassName;
        //if (stopEdit !== true) this.rowContainerClassName += ' cursor-pointer';
        _this.sep = React.createElement("div", { className: sepClassName || _this.defaultSepClassName });
        _this.uiSchema = (uiSchema && uiSchema.items) || {};
        return _this;
    }
    Edit.prototype.render = function () {
        var _this = this;
        var schema = this.props.schema;
        var sep;
        return React.createElement("div", null,
            this.topBorder,
            schema.map(function (itemSchema, index) {
                var stopEdit = _this.props.stopEdit;
                var name = itemSchema.name;
                var uiItem = _this.uiSchema === undefined ? undefined : _this.uiSchema[name];
                var label, labelHide;
                if (uiItem !== undefined) {
                    label = uiItem.label || name;
                    labelHide = uiItem.labelHide;
                }
                ;
                var value = _this.props.data[name];
                var itemEdit = createItemEdit(_this, itemSchema, uiItem, label, value);
                var rowContainerClassName = _this.rowContainerClassName;
                var editInRow = itemEdit.editInRow;
                if (editInRow === false) {
                    if (stopEdit !== true)
                        editInRow = false;
                }
                if (editInRow === false)
                    rowContainerClassName += ' cursor-pointer';
                var required = itemSchema.required;
                var requireFlag = required === true && React.createElement("span", { className: "text-danger" }, "*");
                var divLabel, cn = 'flex-fill d-flex ';
                if (labelHide === true) {
                    divLabel = undefined;
                }
                else {
                    divLabel = React.createElement("div", null,
                        label,
                        " ",
                        requireFlag);
                    cn += 'justify-content-end';
                }
                var ret = React.createElement(React.Fragment, { key: index },
                    sep,
                    React.createElement("div", { className: 'd-flex align-items-center' + rowContainerClassName, onClick: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.rowClick(itemEdit)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        }); }); } },
                        divLabel,
                        React.createElement("div", { className: cn }, itemEdit === undefined ? undefined : itemEdit.renderContent()),
                        editInRow === false && React.createElement("div", { className: "w-2c text-right" },
                            React.createElement("i", { className: "fa fa-angle-right" }))));
                sep = _this.sep;
                return ret;
            }),
            this.bottomBorder);
    };
    Edit.prototype.onItemChanged = function (itemEdit, newValue) {
        return __awaiter(this, void 0, void 0, function () {
            var itemSchema, uiItem, value, _a, onItemChanged, stopEdit;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        itemSchema = itemEdit.itemSchema, uiItem = itemEdit.uiItem, value = itemEdit.value;
                        this.props.data[itemSchema.name] = newValue;
                        _a = this.props, onItemChanged = _a.onItemChanged, stopEdit = _a.stopEdit;
                        if (stopEdit === true)
                            return [2 /*return*/];
                        if ((uiItem === null || uiItem === void 0 ? void 0 : uiItem.readOnly) === true)
                            return [2 /*return*/];
                        if (!(onItemChanged === undefined)) return [3 /*break*/, 1];
                        alert(itemSchema.name + " value changed, new: " + newValue + ", pre: " + value);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, onItemChanged(itemSchema, newValue, value)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    Edit = __decorate([
        mobx_react_1.observer
    ], Edit);
    return Edit;
}(React.Component));
exports.Edit = Edit;
function createItemEdit(edit, itemSchema, uiItem, label, value) {
    var ie;
    var itemEdit;
    if (uiItem !== undefined) {
        switch (uiItem.widget) {
            default: break;
            case 'id':
                itemEdit = idItemEdit_1.IdItemEdit;
                break;
            case 'text':
                itemEdit = stringItemEdit_1.StringItemEdit;
                break;
            case 'textarea':
                itemEdit = textAreaItemEdit_1.TextAreaItemEdit;
                break;
            case 'image':
                itemEdit = imageItemEdit_1.ImageItemEdit;
                break;
            case 'select':
                itemEdit = selectItemEdit_1.SelectItemEdit;
                break;
            case 'range':
                itemEdit = rangeItemEdit_1.RangeItemEdit;
                break;
            case 'number':
            case 'updown':
                itemEdit = numberItemEdit_1.NumberItemEdit;
                break;
            case 'checkbox':
                itemEdit = checkBoxItemEdit_1.CheckBoxItemEdit;
                break;
            case 'radio':
                ie = new radioItemEdit_1.RadioItemEdit(edit, itemSchema, uiItem, label, value);
                break;
            case 'tagSingle':
                ie = new tagItemEdit_1.TagSingleItemEdit(edit, itemSchema, uiItem, label, value);
                break;
            case 'tagMulti':
                ie = new tagItemEdit_1.TagMultiItemEdit(edit, itemSchema, uiItem, label, value);
                break;
        }
    }
    if (ie === undefined) {
        if (itemEdit === undefined) {
            switch (itemSchema.type) {
                case 'string':
                    itemEdit = stringItemEdit_1.StringItemEdit;
                    break;
                case 'image':
                    itemEdit = imageItemEdit_1.ImageItemEdit;
                    break;
                case 'boolean':
                    itemEdit = checkBoxItemEdit_1.CheckBoxItemEdit;
                    break;
                case 'number':
                case 'integer':
                    itemEdit = rangeItemEdit_1.RangeItemEdit;
                    break;
            }
        }
        if (itemEdit === undefined)
            return;
        ie = new itemEdit(edit, itemSchema, uiItem, label, value);
    }
    ie.init();
    return ie;
}
//# sourceMappingURL=edit.js.map