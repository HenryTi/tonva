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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
var React = __importStar(require("react"));
var mobx_1 = require("mobx");
var classnames_1 = __importDefault(require("classnames"));
var widgets_1 = require("./widgets");
require("font-awesome/css/font-awesome.min.css");
var context_1 = require("./context");
var res_1 = require("../../res");
var res_2 = require("../../res/res");
var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form(props) {
        var _this = _super.call(this, props) || this;
        _this.watch = function () {
            var formData = _this.props.formData;
            if (formData === undefined)
                return;
            //this.initData(formData);
            _this.calcSelectOrDelete();
        };
        _this.DefaultContainer = function (content) {
            return React.createElement("form", { className: classnames_1.default(_this.props.className), onSubmit: function (e) { return e.preventDefault(); } }, content);
        };
        _this.DefaultFieldContainer = function (label, content) {
            var fieldLabelSize = _this.props.fieldLabelSize;
            if (fieldLabelSize > 0) {
                var labelView = void 0;
                if (label === null) {
                    fieldLabelSize = 0;
                }
                else {
                    labelView = React.createElement("label", { className: classnames_1.default('col-sm-' + fieldLabelSize, 'col-form-label') }, label);
                }
                var fieldCol = 'col-sm-' + (12 - fieldLabelSize);
                return React.createElement("div", { className: "form-group row" },
                    labelView,
                    React.createElement("div", { className: fieldCol }, content));
            }
            return React.createElement("div", { className: "form-group" },
                label === null ? null : React.createElement("label", { className: "col-form-label" }, label),
                content);
        };
        _this.DefaultFieldClass = undefined;
        _this.DefaultButtonClass = 'text-center py-2';
        _this.DefaultRes = res_2.resLang(res_1.formRes);
        _this.ArrContainer = function (label, content) {
            return React.createElement("div", null,
                React.createElement("div", { className: classnames_1.default('small text-muted text-center bg-light py-1 px-3 mt-4 mb-1') }, label),
                content);
        };
        _this.RowContainer = function (content) {
            var cn = classnames_1.default({
                'py-3': true
            });
            return React.createElement("div", { className: cn }, content);
        };
        _this.RowSeperator = React.createElement("div", { className: "border border-gray border-top" });
        var schema = props.schema, uiSchema = props.uiSchema, Container = props.Container, FieldContainer = props.FieldContainer, FieldClass = props.FieldClass, ButtonClass = props.ButtonClass, res = props.res;
        _this.Container = Container || _this.DefaultContainer;
        _this.FieldContainer = FieldContainer || _this.DefaultFieldContainer;
        _this.FieldClass = FieldClass !== undefined && FieldClass !== '' && FieldClass !== null ? FieldClass : _this.DefaultFieldClass;
        _this.res = res || _this.DefaultRes;
        _this.ButtonClass = ButtonClass || _this.DefaultButtonClass;
        _this.schema = schema;
        _this.itemSchemas = {};
        for (var _i = 0, _a = _this.schema; _i < _a.length; _i++) {
            var itemSchema = _a[_i];
            _this.itemSchemas[itemSchema.name] = itemSchema;
        }
        _this.uiSchema = uiSchema;
        _this.disposer = mobx_1.autorun(_this.watch);
        _this.data = {};
        return _this;
    }
    Form.prototype.renderContent = function () {
        var _this = this;
        this.initData(this.props.formData);
        var children = this.props.children;
        if (children !== undefined) {
            this.formContext = new context_1.FormContext(this, true);
            return React.createElement(React.Fragment, null, children);
        }
        var Templet;
        if (this.uiSchema !== undefined) {
            Templet = this.uiSchema.Templet;
        }
        if (Templet !== undefined) {
            this.formContext = new context_1.FormContext(this, true);
            return typeof (Templet) === 'function' ? Templet(this.data) : Templet;
        }
        if (!this.formContext) {
            this.formContext = new context_1.FormContext(this, false);
        }
        return React.createElement(React.Fragment, null, this.schema.map(function (v, index) {
            return React.createElement(React.Fragment, { key: index }, widgets_1.factory(_this.formContext, v, children));
        }));
    };
    Form.prototype.initData = function (formData) {
        if (formData === undefined)
            formData = {};
        if (this.uiSchema !== undefined) {
            var items = this.uiSchema.items;
            if (items !== undefined) {
                for (var i in items) {
                    var ui = items[i];
                    var dv = ui.defaultValue;
                    if (dv !== undefined) {
                        if (formData[i] === undefined) {
                            formData[i] = dv;
                        }
                    }
                }
            }
        }
        for (var _i = 0, _a = this.schema; _i < _a.length; _i++) {
            var itemSchema = _a[_i];
            this.initDataItem(itemSchema, this.data, formData);
        }
    };
    Form.prototype.initDataItem = function (itemSchema, data, formData) {
        var name = itemSchema.name, type = itemSchema.type;
        if (type === 'button')
            return;
        if (type !== 'arr') {
            data[name] = formData[name];
            return;
        }
        var arrItem = itemSchema;
        var arrItems = arrItem.arr;
        if (arrItems === undefined)
            return;
        var arrDict = arrItem.itemSchemas = {};
        for (var _i = 0, arrItems_1 = arrItems; _i < arrItems_1.length; _i++) {
            var item = arrItems_1[_i];
            arrDict[item.name] = item;
        }
        var val = formData[name];
        if (val === undefined)
            val = [];
        else if (Array.isArray(val) === false)
            val = [val];
        var arr = [];
        for (var _a = 0, val_1 = val; _a < val_1.length; _a++) {
            var row = val_1[_a];
            var $isSelected = row.$isSelected, $isDeleted = row.$isDeleted;
            var r = {
                $source: row,
                $isSelected: $isSelected,
                $isDeleted: $isDeleted,
            };
            for (var _b = 0, arrItems_2 = arrItems; _b < arrItems_2.length; _b++) {
                var item = arrItems_2[_b];
                this.initDataItem(item, r, row);
            }
            arr.push(r);
        }
        // 如果没有observable，行删除标志点击不管用
        // 不知道这里为什么要去掉observable。有可能会有别的问题
        data[name] = mobx_1.observable(arr);
        //data[name] = arr;
        return;
    };
    Form.prototype.calcSelectOrDelete = function () {
        for (var _i = 0, _a = this.schema; _i < _a.length; _i++) {
            var itemSchema = _a[_i];
            this.arrItemOperated(itemSchema);
        }
    };
    Form.prototype.arrItemOperated = function (itemSchema) {
        var name = itemSchema.name, type = itemSchema.type;
        if (type !== 'arr')
            return;
        if (this.data === undefined)
            return;
        var formArrVal = this.data[name];
        if (formArrVal === undefined)
            return;
        var arrItems = itemSchema.arr;
        for (var _i = 0, formArrVal_1 = formArrVal; _i < formArrVal_1.length; _i++) {
            var row = formArrVal_1[_i];
            var $source = row.$source;
            if ($source === undefined)
                continue;
            var $isSelected = $source.$isSelected, $isDeleted = $source.$isDeleted;
            row.$isSelected = $isSelected;
            row.$isDeleted = $isDeleted;
            //console.log($isSelected, $isDeleted);
            for (var _a = 0, arrItems_3 = arrItems; _a < arrItems_3.length; _a++) {
                var item = arrItems_3[_a];
                this.arrItemOperated(item);
            }
        }
    };
    Form.prototype.componentDidMount = function () {
        var beforeShow = this.props.beforeShow;
        if (beforeShow !== undefined)
            beforeShow(this.formContext);
    };
    Form.prototype.componentWillUnmount = function () {
        if (this.disposer !== undefined)
            this.disposer();
    };
    Form.prototype.render = function () {
        var content = this.renderContent();
        return React.createElement(context_1.ContextContainer.Provider, { value: this.formContext },
            React.createElement(this.formContext.renderErrors),
            this.Container(content));
    };
    Form.prototype.buttonClick = function (buttonName) {
        return __awaiter(this, void 0, void 0, function () {
            var onButtonClick, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.formContext.checkRules();
                        if (this.formContext.hasError === true)
                            return [2 /*return*/];
                        onButtonClick = this.formContext.form.props.onButtonClick;
                        if (onButtonClick === undefined) {
                            alert("you should define form onButtonClick");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, onButtonClick(buttonName, this.formContext)];
                    case 1:
                        ret = _a.sent();
                        if (ret === undefined)
                            return [2 /*return*/];
                        this.formContext.setError(buttonName, ret);
                        return [2 /*return*/];
                }
            });
        });
    };
    return Form;
}(React.Component));
exports.Form = Form;
//# sourceMappingURL=form.js.map