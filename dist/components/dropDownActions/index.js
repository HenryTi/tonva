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
exports.DropdownActions = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var DropdownActions = /** @class */ (function (_super) {
    __extends(DropdownActions, _super);
    function DropdownActions(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDocumentClick = function (evt) {
            if (_this.state.dropdownOpen === false)
                return;
            if (_this.button && _this.button.contains(evt.target))
                return;
            if (!_this.menu)
                return;
            //if (!this.menu.contains(evt.target)) 
            _this.toggle();
        };
        _this.toggle = function () {
            _this.setState({
                dropdownOpen: !_this.state.dropdownOpen
            });
        };
        _this.state = {
            dropdownOpen: false
        };
        return _this;
    }
    DropdownActions.prototype.componentDidMount = function () {
        document.addEventListener('click', this.handleDocumentClick);
        document.addEventListener('touchstart', this.handleDocumentClick);
    };
    DropdownActions.prototype.componentWillUnmount = function () {
        document.removeEventListener('click', this.handleDocumentClick);
        document.removeEventListener('touchstart', this.handleDocumentClick);
    };
    DropdownActions.prototype.render = function () {
        var _this = this;
        var _a = this.props, icon = _a.icon, actions = _a.actions, isRight = _a.isRight, className = _a.className, itemIconClass = _a.itemIconClass, itemCaptionClass = _a.itemCaptionClass;
        if (isRight === undefined)
            isRight = true;
        var hasIcon = actions.some(function (v) { return v.icon !== undefined; });
        var dropdownOpen = this.state.dropdownOpen;
        //isOpen={this.state.dropdownOpen} toggle={this.toggle}
        var cn = className || 'cursor-pointer dropdown-toggle btn btn-sm';
        //if (className) cn += className;
        return React.createElement("div", { className: 'dropdown' },
            React.createElement("button", { ref: function (v) { return _this.button = v; }, className: cn, "data-toggle": "dropdown", "aria-expanded": dropdownOpen, onClick: this.toggle },
                React.createElement("i", { className: classnames_1.default('fa fa-fw ', 'fa-' + (icon || 'ellipsis-v')) })),
            React.createElement("div", { ref: function (v) { return _this.menu = v; }, className: classnames_1.default({ "dropdown-menu": true, "dropdown-menu-right": isRight, "show": dropdownOpen }) }, actions.map(function (v, index) {
                if (!v) {
                    return React.createElement("div", { className: "dropdown-divider", key: index });
                }
                var icon = v.icon, caption = v.caption, action = v.action, iconClass = v.iconClass, captionClass = v.captionClass;
                if (icon === undefined && caption === undefined)
                    return React.createElement("div", { className: "dropdown-divider" });
                var i;
                if (hasIcon === true) {
                    if (icon !== undefined)
                        icon = 'fa-' + icon;
                    i = React.createElement("i", { className: classnames_1.default('mr-2', 'fa', icon, 'fa-fw', iconClass || itemIconClass), "aria-hidden": true });
                }
                if (action === undefined)
                    return React.createElement("h6", { className: "dropdown-header" },
                        i,
                        " ",
                        caption);
                var onMenuItemClick = function (evt) {
                    evt.preventDefault();
                    action();
                };
                var onTouchStart = function (evt) {
                    action();
                };
                // eslint-disable-next-line
                return React.createElement("a", { className: "dropdown-item", key: index, href: "#/", onClick: onMenuItemClick, onTouchStart: onTouchStart },
                    i,
                    " ",
                    React.createElement("span", { className: captionClass || itemCaptionClass }, caption));
            })));
    };
    return DropdownActions;
}(React.Component));
exports.DropdownActions = DropdownActions;
//# sourceMappingURL=index.js.map