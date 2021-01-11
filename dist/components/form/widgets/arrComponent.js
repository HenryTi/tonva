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
exports.ArrComponent = void 0;
var React = __importStar(require("react"));
var mobx_react_1 = require("mobx-react");
var classnames_1 = __importDefault(require("classnames"));
//import { ArrRow } from '../arrRow';
var context_1 = require("../context");
var unknown_1 = require("./unknown");
var factory_1 = require("./factory");
exports.ArrComponent = mobx_react_1.observer(function (_a) {
    var parentContext = _a.parentContext, arrSchema = _a.arrSchema, children = _a.children;
    var name = arrSchema.name, arr = arrSchema.arr;
    var data = parentContext.initData[name];
    var form = parentContext.form;
    var arrRowContexts = parentContext.getArrRowContexts(name);
    var ui = parentContext.getUiItem(name);
    var onDeleted = ui.onDeleted, onRestored = ui.onRestored;
    var arrLabel = name;
    var Templet;
    var selectable, deletable, restorable;
    var ArrContainer = form.ArrContainer, RowContainer = form.RowContainer, RowSeperator = form.RowSeperator, uiSchema = form.uiSchema;
    if (uiSchema !== undefined) {
        var formSelectable = uiSchema.selectable, formDeletable = uiSchema.deletable, formRestorable = uiSchema.restorable;
        if (selectable !== true)
            selectable = formSelectable;
        if (deletable !== true)
            deletable = formDeletable;
        if (restorable !== true)
            restorable = formRestorable;
    }
    if (ui !== undefined) {
        var widgetType = ui.widget, label = ui.label, arrSelectable = ui.selectable, arrDeletable = ui.deletable, arrRestorable = ui.restorable, ac = ui.ArrContainer, rc = ui.RowContainer, rs = ui.RowSeperator;
        if (arrSelectable !== undefined)
            selectable = arrSelectable;
        if (arrDeletable !== undefined)
            deletable = arrDeletable;
        if (arrRestorable !== undefined)
            restorable = arrRestorable;
        if (ac !== undefined)
            ArrContainer = ac;
        if (rc !== undefined)
            RowContainer = rc;
        if (rs !== undefined)
            RowSeperator = rs;
        Templet = ui.Templet;
        if (widgetType !== 'arr')
            return unknown_1.Unknown(arrSchema.type, widgetType, ['arr']);
        arrLabel = label || arrLabel;
    }
    var first = true;
    return ArrContainer(arrLabel, React.createElement(React.Fragment, null, data.map(function (row, index) {
        var rowContext;
        var rowContent;
        var sep = undefined;
        if (first === false)
            sep = RowSeperator;
        else
            first = false;
        if (children !== undefined) {
            rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
            rowContent = React.createElement(React.Fragment, null, children);
        }
        else {
            var typeofTemplet = typeof Templet;
            if (typeofTemplet === 'function') {
                rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
                rowContent = React.createElement(mobx_react_1.observer(Templet), row);
            }
            else if (typeofTemplet === 'object') {
                rowContext = new context_1.RowContext(parentContext, arrSchema, row, true);
                rowContent = Templet;
            }
            else {
                rowContext = new context_1.RowContext(parentContext, arrSchema, row, false);
                rowContent = React.createElement(React.Fragment, null, arr.map(function (v, index) {
                    return React.createElement(React.Fragment, { key: v.name }, factory_1.factory(rowContext, v, undefined));
                }));
            }
        }
        var rowKey = rowContext.rowKey;
        arrRowContexts[rowKey] = rowContext;
        var selectCheck, deleteIcon;
        if (selectable === true) {
            var onClick = function (evt) {
                var checked = evt.target.checked;
                row.$isSelected = checked;
                var $source = row.$source;
                if ($source !== undefined)
                    $source.$isSelected = checked;
                rowContext.clearErrors();
            };
            selectCheck = React.createElement("div", { className: "form-row-checkbox" },
                React.createElement("input", { type: "checkbox", onClick: onClick, defaultChecked: row.$isSelected }));
        }
        var isDeleted = !(row.$isDeleted === undefined || row.$isDeleted === false);
        if (deletable === true) {
            var icon = isDeleted ? 'fa-undo' : 'fa-trash';
            var onDelClick = function () {
                if (restorable === true) {
                    row.$isDeleted = !isDeleted;
                    var $source = row.$source;
                    if ($source !== undefined)
                        $source.$isDeleted = !isDeleted;
                    if (onRestored)
                        onRestored(row);
                }
                else {
                    var p = data.indexOf(row);
                    if (p >= 0)
                        data.splice(p, 1);
                    if (onDeleted)
                        onDeleted(row);
                }
                rowContext.clearErrors();
            };
            deleteIcon = React.createElement("div", { className: "form-row-edit text-info", onClick: onDelClick },
                React.createElement("i", { className: classnames_1.default('fa', icon, 'fa-fw') }));
        }
        var editContainer = selectable === true || deletable === true ?
            function (content) { return React.createElement("fieldset", { disabled: isDeleted },
                React.createElement("div", { className: classnames_1.default('d-flex', { 'deleted': isDeleted, 'row-selected': row.$isSelected }) },
                    selectCheck,
                    React.createElement("div", { className: selectable === true && deletable === true ? "form-row-content" : "form-row-content-1" }, content),
                    deleteIcon)); }
            :
                function (content) { return content; };
        return React.createElement(context_1.ContextContainer.Provider, { key: rowKey, value: rowContext },
            sep,
            RowContainer(editContainer(React.createElement(React.Fragment, null,
                React.createElement(rowContext.renderErrors, null),
                rowContent))));
    })));
});
//# sourceMappingURL=arrComponent.js.map