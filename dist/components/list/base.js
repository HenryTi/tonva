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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBase = void 0;
var React = __importStar(require("react"));
var mobx_1 = require("mobx");
var ListBase = /** @class */ (function () {
    function ListBase(list) {
        this.list = list;
    }
    Object.defineProperty(ListBase.prototype, "isPaged", {
        get: function () {
            var items = this.list.props.items;
            return (items !== null && items !== undefined && Array.isArray(items) === false);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "items", {
        get: function () {
            var items = this.list.props.items;
            if (items === null)
                return null;
            if (items === undefined)
                return undefined;
            if (Array.isArray(items) === true)
                return items;
            else
                return items.items;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "loading", {
        get: function () {
            var items = this.list.props.items;
            if (items === null)
                return false;
            if (items === undefined)
                return true;
            var pageItems = items;
            if (pageItems.items === undefined)
                return false;
            return pageItems.loading;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListBase.prototype, "selectedItems", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    //updateProps(nextProps:any) {}
    ListBase.prototype.dispose = function () { };
    ;
    ListBase.prototype.renderContent = function (item, index) {
        var render = this.list.props.item.render;
        if (render === undefined)
            return React.createElement("div", { className: "px-3 py-2" }, JSON.stringify(item));
        return render(item, index);
    };
    __decorate([
        mobx_1.computed
    ], ListBase.prototype, "loading", null);
    return ListBase;
}());
exports.ListBase = ListBase;
//# sourceMappingURL=base.js.map