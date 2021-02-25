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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagView = void 0;
var React = __importStar(require("react"));
var radioStyle = { height: 'auto' };
var TagView = /** @class */ (function () {
    function TagView(tag) {
        this.tag = tag;
    }
    TagView.prototype.render = function (values) {
        var names;
        if (typeof values === 'number') {
            names = [this.tag.nameFromId(values)];
        }
        else {
            names = this.tag.namesFromIds(values);
        }
        return React.createElement("div", { className: "d-flex flex-wrap " }, names.map(function (name, index) {
            return React.createElement("div", { key: index, className: "mx-2 border border-muted rounded px-3 bg-light" }, name);
        }));
    };
    TagView.prototype.renderRadios = function (value, options) {
        var _this = this;
        var content = this.tag.values.map(function (item, index) {
            return React.createElement("div", { className: "col", key: index }, _this.renderRadio(item, value, options));
        });
        return this.renderView(options, content);
    };
    TagView.prototype.renderChecks = function (values, options) {
        var _this = this;
        var arr = values === undefined ? undefined : values.split('|').map(function (v) { return Number(v); });
        var content = this.tag.values.map(function (item, index) {
            var checked = arr === undefined ? undefined : arr.indexOf(item.id) >= 0;
            return React.createElement("div", { className: "col", key: index }, _this.renderCheck(item, checked, options));
        });
        return this.renderView(options, content);
    };
    TagView.prototype.renderView = function (options, content) {
        var className = options.className, wrapClassName = options.wrapClassName;
        wrapClassName = wrapClassName ?
            'row ' + wrapClassName
            :
                'row row-cols-2 row-cols-sm-3 row-cols-md-4';
        return React.createElement("div", { className: className, style: radioStyle },
            React.createElement("div", { className: wrapClassName }, content));
    };
    TagView.prototype.renderRadio = function (item, value, options) {
        var id = item.id, name = item.name;
        var inputs = options.inputs, inputName = options.inputName, onInputChange = options.onInputChange;
        var ref = inputs && (function (input) { return inputs[id] = input; });
        return React.createElement("label", { className: "form-radio-inline" },
            React.createElement("input", { ref: ref, type: "radio", name: inputName, value: id, defaultChecked: value === id, onChange: onInputChange }),
            name);
    };
    TagView.prototype.renderCheck = function (item, checked, options) {
        var id = item.id, name = item.name;
        var inputs = options.inputs, onInputChange = options.onInputChange;
        var ref = inputs && (function (input) { return inputs[id] = input; });
        return React.createElement("label", { className: "form-radio-inline" },
            React.createElement("input", { ref: ref, type: "checkbox", value: id, defaultChecked: checked, onChange: onInputChange }),
            name);
    };
    return TagView;
}());
exports.TagView = TagView;
//# sourceMappingURL=tagView.js.map