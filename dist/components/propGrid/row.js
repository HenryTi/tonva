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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentPropRow = exports.ListPropRow = exports.NumberPropRow = exports.StringPropRow = exports.LabeledPropRow = exports.PropGap = exports.PropBorder = exports.PropRow = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var PropRow = /** @class */ (function () {
    function PropRow() {
    }
    PropRow.prototype.setValues = function (values) { };
    return PropRow;
}());
exports.PropRow = PropRow;
var PropBorder = /** @class */ (function (_super) {
    __extends(PropBorder, _super);
    function PropBorder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropBorder.prototype.render = function (key) {
        return React.createElement("div", { key: '_b_' + key, className: "" },
            React.createElement("div", { className: "w-100" },
                React.createElement("div", { style: { borderTop: '1px solid #f0f0f0' } })));
    };
    return PropBorder;
}(PropRow));
exports.PropBorder = PropBorder;
var PropGap = /** @class */ (function (_super) {
    __extends(PropGap, _super);
    function PropGap(param) {
        var _this = _super.call(this) || this;
        _this.param = param;
        return _this;
    }
    PropGap.prototype.render = function (key) {
        var w;
        switch (this.param) {
            default:
                w = 'py-2';
                break;
            case '=':
                w = 'py-1';
                break;
            case '-':
                w = 'pb-1';
                break;
        }
        var cn = classnames_1.default(w);
        return React.createElement("div", { key: '_g_' + key, className: cn });
    };
    return PropGap;
}(PropRow));
exports.PropGap = PropGap;
var valueAlignStart = 'justify-content-start';
var valueAlignCenter = 'justify-content-center';
var valueAlignEnd = 'justify-content-end';
var LabeledPropRow = /** @class */ (function (_super) {
    __extends(LabeledPropRow, _super);
    //protected values: any;
    function LabeledPropRow(gridProps, prop) {
        var _this = _super.call(this) || this;
        _this.gridProps = gridProps;
        _this._prop = prop;
        _this.col = gridProps.labelFixLeft === true ? 'col' : 'col-sm';
        return _this;
        //this.values = values;
    }
    Object.defineProperty(LabeledPropRow.prototype, "prop", {
        get: function () { return this._prop; },
        enumerable: false,
        configurable: true
    });
    LabeledPropRow.prototype.render = function (key) {
        var _a = this.prop, onClick = _a.onClick, bk = _a.bk;
        var cn = classnames_1.default({
            "cursor-pointer": onClick !== undefined,
            "bg-white": bk === undefined,
            "row": true
        });
        return React.createElement("div", { key: key, className: cn, onClick: onClick },
            this.renderLabel(),
            this.renderProp());
    };
    LabeledPropRow.prototype.renderLabel = function () {
        var label = this.prop.label;
        if (label === undefined)
            return null;
        return React.createElement("label", { className: this.col + '-3 col-form-label' }, label);
    };
    LabeledPropRow.prototype.renderProp = function () {
        var label = this.prop.label;
        var align, vAlign;
        switch (this.gridProps.alignValue) {
            case 'left':
                align = valueAlignStart;
                break;
            case 'center':
                align = valueAlignCenter;
                break;
            case 'right':
                align = valueAlignEnd;
                break;
        }
        switch (this.prop.vAlign) {
            case 'top':
                vAlign = 'align-items-start';
                break;
            default:
            case 'center':
                vAlign = 'align-items-center';
                break;
            case 'bottom':
                vAlign = 'align-items-end';
                break;
            case 'stretch':
                vAlign = 'align-items-stretch';
                break;
        }
        var col = this.col + (label === undefined ? '-12' : '-9');
        var cn = classnames_1.default(align, vAlign, col, 'd-flex');
        return React.createElement("div", { className: cn }, this.renderPropBody());
    };
    LabeledPropRow.prototype.renderPropBody = function () {
        return React.createElement("div", { className: "form-control-plaintext" }, this.renderPropContent());
    };
    LabeledPropRow.prototype.renderPropContent = function () {
        return this.content;
    };
    return LabeledPropRow;
}(PropRow));
exports.LabeledPropRow = LabeledPropRow;
var StringPropRow = /** @class */ (function (_super) {
    __extends(StringPropRow, _super);
    function StringPropRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(StringPropRow.prototype, "prop", {
        get: function () { return this._prop; },
        enumerable: false,
        configurable: true
    });
    StringPropRow.prototype.setValues = function (values) {
        if (values === undefined)
            this.content = undefined;
        else
            this.content = values[this.prop.name];
    };
    return StringPropRow;
}(LabeledPropRow));
exports.StringPropRow = StringPropRow;
var NumberPropRow = /** @class */ (function (_super) {
    __extends(NumberPropRow, _super);
    function NumberPropRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(NumberPropRow.prototype, "prop", {
        get: function () { return this._prop; },
        enumerable: false,
        configurable: true
    });
    NumberPropRow.prototype.setValues = function (values) {
        if (values === undefined)
            this.content = undefined;
        else
            this.content = values[this.prop.name];
    };
    return NumberPropRow;
}(LabeledPropRow));
exports.NumberPropRow = NumberPropRow;
var ListPropRow = /** @class */ (function (_super) {
    __extends(ListPropRow, _super);
    function ListPropRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListPropRow.prototype, "prop", {
        get: function () { return this._prop; },
        enumerable: false,
        configurable: true
    });
    ListPropRow.prototype.setValues = function (values) {
        if (values === undefined)
            this.content = undefined;
        else {
            var list = this.prop.list;
            if (typeof list === 'string')
                this.content = values[list];
            else
                this.content = undefined;
        }
    };
    ListPropRow.prototype.renderPropBody = function () {
        var _a = this.prop, list = _a.list, row = _a.row;
        var items = typeof list === 'string' ? this.content : list;
        if (items === undefined)
            return React.createElement("div", null);
        // new row(item)
        return React.createElement("div", { className: "w-100" }, items.map(function (item, index) { return React.createElement(React.Fragment, { key: index },
            index === 0 ? null : React.createElement("div", { style: { width: '100%', borderBottom: '1px solid #f0f0f0' } }),
            React.createElement(row, item)); }));
    };
    return ListPropRow;
}(LabeledPropRow));
exports.ListPropRow = ListPropRow;
var ComponentPropRow = /** @class */ (function (_super) {
    __extends(ComponentPropRow, _super);
    function ComponentPropRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComponentPropRow.prototype, "prop", {
        get: function () { return this._prop; },
        enumerable: false,
        configurable: true
    });
    ComponentPropRow.prototype.renderPropBody = function () {
        var component = this.prop.component;
        return component;
    };
    ComponentPropRow.prototype.renderProp = function () {
        var _a = this.prop, label = _a.label, full = _a.full;
        var align, vAlign;
        switch (this.gridProps.alignValue) {
            case 'left':
                align = valueAlignStart;
                break;
            case 'center':
                align = valueAlignCenter;
                break;
            case 'right':
                align = valueAlignEnd;
                break;
        }
        switch (this.prop.vAlign) {
            case 'top':
                vAlign = 'align-items-start';
                break;
            default:
            case 'center':
                vAlign = 'align-items-center';
                break;
            case 'bottom':
                vAlign = 'align-items-end';
                break;
            case 'stretch':
                vAlign = 'align-items-stretch';
                break;
        }
        var col;
        if (full !== true)
            col = this.col + (label === undefined ? '-12' : '-9');
        else
            col = 'w-100';
        var cn = classnames_1.default(align, vAlign, col, 'd-flex');
        return React.createElement("div", { className: cn }, this.renderPropBody());
    };
    return ComponentPropRow;
}(LabeledPropRow));
exports.ComponentPropRow = ComponentPropRow;
//# sourceMappingURL=row.js.map