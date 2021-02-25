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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var React = __importStar(require("react"));
var mobx_react_1 = require("mobx-react");
var pageHeader_1 = require("./pageHeader");
var tabs_1 = require("./tabs");
var scrollView_1 = require("./scrollView");
var nav_1 = require("../nav");
var Page = /** @class */ (function (_super) {
    __extends(Page, _super);
    function Page(props) {
        var _this = _super.call(this, props) || this;
        var tabsProps = props.tabsProps;
        if (tabsProps) {
            _this.tabsView = new tabs_1.TabsView(tabsProps);
        }
        return _this;
    }
    Page.prototype.renderHeader = function (webNav) {
        var _a = this.props, back = _a.back, header = _a.header, right = _a.right, headerClassName = _a.headerClassName, afterBack = _a.afterBack, logout = _a.logout;
        if (header === false)
            return;
        //const {webNav} = this.props;
        var inWebNav = false;
        var pageHeaderProps = {
            back: back,
            center: header,
            right: right,
            logout: logout,
            className: headerClassName,
            afterBack: afterBack,
        };
        if (webNav !== undefined) {
            inWebNav = true;
            var rph = webNav.renderPageHeader;
            if (rph)
                return rph(pageHeaderProps);
        }
        else {
            inWebNav = false;
        }
        return pageHeader_1.renderPageHeader(pageHeaderProps, inWebNav);
        /*
        let pageHeader = header !== false && <PageHeader
            back={back}
            center={header as any}
            right={right}
            logout={this.props.logout}
            className={headerClassName}
            afterBack={afterBack}
            />;
        return pageHeader;
        */
    };
    Page.prototype.renderFooter = function (webNav) {
        var footer = this.props.footer;
        if (!footer)
            return;
        var elFooter = React.createElement("footer", null, footer);
        if (webNav)
            return elFooter;
        return React.createElement(React.Fragment, null,
            React.createElement("section", { className: "tv-page-footer" }, elFooter),
            elFooter);
    };
    Page.prototype.componentDidCatch = function (error, errorInfo) {
        // You can also log the error to an error reporting service
        //logErrorToMyService(error, errorInfo);
        debugger;
    };
    Page.prototype.render = function () {
        if (this.tabsView) {
            return React.createElement(this.tabsView.content);
        }
        var _a = this.props, onScroll = _a.onScroll, onScrollTop = _a.onScrollTop, onScrollBottom = _a.onScrollBottom, children = _a.children, className = _a.className, webNav = _a.webNav;
        var pageWebNav;
        if (!webNav) {
            pageWebNav = nav_1.nav.pageWebNav;
        }
        else {
            pageWebNav = webNav;
        }
        var content = React.createElement(React.Fragment, null,
            this.renderHeader(pageWebNav),
            React.createElement("main", null, children),
            this.renderFooter(pageWebNav));
        if (pageWebNav) {
            return React.createElement(scrollView_1.WebNavScrollView, { onScroll: onScroll, onScrollTop: onScrollTop, onScrollBottom: onScrollBottom, className: className, webNav: pageWebNav }, content);
        }
        else {
            return React.createElement(scrollView_1.ScrollView, { onScroll: onScroll, onScrollTop: onScrollTop, onScrollBottom: onScrollBottom, className: className }, content);
        }
    };
    Page = __decorate([
        mobx_react_1.observer
    ], Page);
    return Page;
}(React.Component));
exports.Page = Page;
//# sourceMappingURL=page.js.map