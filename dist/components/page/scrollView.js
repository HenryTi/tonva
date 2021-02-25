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
exports.WebNavScrollView = exports.ScrollView = exports.Scroller = void 0;
var react_1 = __importDefault(require("react"));
var scrollAfter = 20; // 20ms之后，scroll执行
var Scroller = /** @class */ (function () {
    function Scroller(el) {
        this.el = el;
    }
    Scroller.prototype.scrollToTop = function () {
        var _this = this;
        setTimeout(function () { return _this.el.scrollTo(0, 0); }, scrollAfter);
    };
    Scroller.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () { return _this.el.scrollTo(0, _this.el.scrollTop + _this.el.offsetHeight); }, scrollAfter);
    };
    return Scroller;
}());
exports.Scroller = Scroller;
var scrollTimeGap = 100;
var ScrollViewBase = /** @class */ (function (_super) {
    __extends(ScrollViewBase, _super);
    function ScrollViewBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bottomTime = 0;
        _this.topTime = 0;
        _this.refDiv = function (div) {
            if (!div) {
                if (_this.div) {
                    _this.div.removeEventListener('resize', _this.onResize);
                }
                return;
            }
            _this.div = div;
            _this.div.addEventListener('resize', _this.onResize);
        };
        _this.onResize = function (ev) {
            console.error('div resize');
        };
        _this.onScroll = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var _a, onScroll, onScrollTop, onScrollBottom, el, scroller, topTime, bottomTime;
            return __generator(this, function (_b) {
                _a = this.props, onScroll = _a.onScroll, onScrollTop = _a.onScrollTop, onScrollBottom = _a.onScrollBottom;
                if (onScroll)
                    onScroll(e);
                el = e.target;
                scroller = new Scroller(el);
                if (el.scrollTop < 30) {
                    if (onScrollTop !== undefined) {
                        topTime = new Date().getTime();
                        if (topTime - this.topTime > scrollTimeGap) {
                            this.topTime = topTime;
                            onScrollTop(scroller).then(function (ret) {
                                // has more
                                if (ret === true) {
                                    var sh = el.scrollHeight;
                                    var top_1 = 200;
                                    if (top_1 > sh)
                                        top_1 = sh;
                                    el.scrollTop = top_1;
                                }
                            });
                        }
                    }
                }
                if (el.scrollTop + el.offsetHeight > el.scrollHeight - 30) {
                    //this.eachChild(this, 'bottom');
                    if (onScrollBottom !== undefined) {
                        bottomTime = new Date().getTime();
                        if (bottomTime - this.bottomTime > scrollTimeGap) {
                            this.bottomTime = bottomTime;
                            onScrollBottom(scroller);
                        }
                    }
                }
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    ScrollViewBase.prototype.eachChild = function (c, direct) {
        var _this = this;
        var props = c.props;
        if (props === undefined)
            return;
        var children = props.children;
        if (children === undefined)
            return;
        react_1.default.Children.forEach(children, function (child, index) {
            var _$scroll = child._$scroll;
            if (_$scroll)
                _$scroll(direct);
            console.log(child.toString());
            _this.eachChild(child, direct);
        });
    };
    return ScrollViewBase;
}(react_1.default.Component));
var ScrollView = /** @class */ (function (_super) {
    __extends(ScrollView, _super);
    function ScrollView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ScrollView.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style;
        return react_1.default.createElement("div", { ref: this.refDiv, className: "tv-page", onScroll: this.onScroll, style: style },
            react_1.default.createElement("article", { className: className }, this.props.children));
    };
    return ScrollView;
}(ScrollViewBase));
exports.ScrollView = ScrollView;
var WebNavScrollView = /** @class */ (function (_super) {
    __extends(WebNavScrollView, _super);
    function WebNavScrollView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebNavScrollView.prototype.render = function () {
        var _a = this.props, className = _a.className, style = _a.style, webNav = _a.webNav;
        var navHeader = webNav.navHeader, navRawHeader = webNav.navRawHeader, navFooter = webNav.navFooter, navRawFooter = webNav.navRawFooter;
        var vHeader, vFooter;
        if (navRawHeader)
            vHeader = navRawHeader;
        else if (navHeader)
            vHeader = react_1.default.createElement("header", null,
                react_1.default.createElement("main", null, navHeader));
        if (navRawFooter)
            vFooter = navRawFooter;
        else if (navFooter)
            vFooter = react_1.default.createElement("footer", null,
                react_1.default.createElement("main", null, navFooter));
        return react_1.default.createElement("div", { ref: this.refDiv, className: "tv-page-webnav", onScroll: this.onScroll, style: style },
            vHeader,
            react_1.default.createElement("article", { className: className }, this.props.children),
            vFooter);
    };
    return WebNavScrollView;
}(ScrollViewBase));
exports.WebNavScrollView = WebNavScrollView;
//# sourceMappingURL=scrollView.js.map