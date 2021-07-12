"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TonvaView = exports.nav = exports.Nav = exports.NavView = void 0;
var React = __importStar(require("react"));
var mobx_1 = require("mobx");
var lodash_1 = __importDefault(require("lodash"));
var page_1 = require("./page/page");
var netToken_1 = require("../net/netToken");
var fetchErrorView_1 = __importStar(require("./fetchErrorView"));
var tool_1 = require("../tool");
var net_1 = require("../net");
var res_1 = require("../res/res");
var loading_1 = require("./loading");
var navigo_1 = require("./navigo");
require("font-awesome/css/font-awesome.min.css");
require("../css/va-form.css");
require("../css/va.css");
require("../css/animation.css");
var simple_1 = require("./simple");
var net_2 = require("../net");
var reloadPage_1 = require("./reloadPage");
var login_1 = require("./login");
//import { createLogin } from '../auth';
var regEx = new RegExp('Android|webOS|iPhone|iPad|' +
    'BlackBerry|Windows Phone|' +
    'Opera Mini|IEMobile|Mobile', 'i');
var isMobile = regEx.test(navigator.userAgent);
var logMark;
var logs = [];
;
var stackKey = 1;
var notSupportedBrowsers = ['IE'];
var NavView = /** @class */ (function (_super) {
    __extends(NavView, _super);
    function NavView(props) {
        var _this = _super.call(this, props) || this;
        _this.waitCount = 0;
        _this.upgradeUq = function () {
            exports.nav.start();
        };
        _this.isHistoryBack = false;
        _this.navBack = function () {
            //nav.log('backbutton pressed - nav level: ' + this.stack.length);
            var tick = Date.now();
            _this.isHistoryBack = true;
            _this.back(true);
            _this.isHistoryBack = false;
            console.log("///\\\\ " + (Date.now() - tick) + "ms backbutton pressed - nav level: " + _this.stack.length);
        };
        _this.back = function (confirm) {
            if (confirm === void 0) { confirm = true; }
            return __awaiter(_this, void 0, void 0, function () {
                var stack, len, top;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            stack = this.stack;
                            len = stack.length;
                            if (len === 0)
                                return [2 /*return*/];
                            if (len === 1) {
                                if (window.self !== window.top) {
                                    window.top.postMessage({ type: 'pop-app' }, '*');
                                }
                                return [2 /*return*/];
                            }
                            top = stack[len - 1];
                            if (!(confirm === true && top.confirmClose)) return [3 /*break*/, 2];
                            return [4 /*yield*/, top.confirmClose()];
                        case 1:
                            if ((_a.sent()) === true)
                                this.pop();
                            return [3 /*break*/, 3];
                        case 2:
                            this.pop();
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        _this.clearError = function () {
            _this.setState({ fetchError: undefined });
        };
        _this.stack = [];
        var browser = tool_1.env.browser;
        var notSupportedBrowser = notSupportedBrowsers.findIndex(function (v) { return v === browser; }) >= 0;
        _this.state = {
            notSupportedBrowser: notSupportedBrowser,
            stack: _this.stack,
            wait: 0,
            fetchError: undefined
        };
        exports.nav.set(_this);
        return _this;
    }
    NavView.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.state.notSupportedBrowser === true)
                            return [2 /*return*/];
                        window.addEventListener('popstate', this.navBack);
                        return [4 /*yield*/, exports.nav.init()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, exports.nav.start()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(NavView.prototype, "level", {
        get: function () {
            return this.stack.length;
        },
        enumerable: false,
        configurable: true
    });
    NavView.prototype.startWait = function () {
        var _this = this;
        if (this.waitCount === 0) {
            this.setState({ wait: 1 });
            this.waitTimeHandler = tool_1.env.setTimeout('NavView.startWait', function () {
                _this.waitTimeHandler = undefined;
                _this.setState({ wait: 2 });
            }, 1000);
        }
        ++this.waitCount;
        this.setState({
            fetchError: undefined,
        });
    };
    NavView.prototype.endWait = function () {
        var _this = this;
        tool_1.env.setTimeout(undefined, //'NavView.endWait',
        function () {
            /*
            this.setState({
                fetchError: undefined,
            });*/
            --_this.waitCount;
            if (_this.waitCount === 0) {
                if (_this.waitTimeHandler !== undefined) {
                    tool_1.env.clearTimeout(_this.waitTimeHandler);
                    _this.waitTimeHandler = undefined;
                }
                _this.setState({ wait: 0 });
            }
        }, 100);
    };
    NavView.prototype.onError = function (fetchError) {
        return __awaiter(this, void 0, void 0, function () {
            var err, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        err = fetchError.error;
                        if (!(err !== undefined)) return [3 /*break*/, 6];
                        if (!(err.unauthorized === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, exports.nav.showLogin(undefined)];
                    case 1:
                        _b.sent();
                        //nav.navigateToLogin();
                        return [2 /*return*/];
                    case 2:
                        _a = err.type;
                        switch (_a) {
                            case 'unauthorized': return [3 /*break*/, 3];
                            case 'sheet-processing': return [3 /*break*/, 5];
                        }
                        return [3 /*break*/, 6];
                    case 3: return [4 /*yield*/, exports.nav.showLogin(undefined)];
                    case 4:
                        _b.sent();
                        //nav.navigateToLogin();
                        return [2 /*return*/];
                    case 5:
                        exports.nav.push(React.createElement(fetchErrorView_1.SystemNotifyPage, { message: "\u5355\u636E\u6B63\u5728\u5904\u7406\u4E2D\u3002\u8BF7\u91CD\u65B0\u64CD\u4F5C\uFF01" }));
                        return [2 /*return*/];
                    case 6:
                        this.setState({
                            fetchError: fetchError,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    NavView.prototype.showUpgradeUq = function (uq, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.show(React.createElement(page_1.Page, { header: false },
                    React.createElement("div", null,
                        "UQ\u5347\u7EA7\u4E86\uFF0C\u8BF7\u70B9\u51FB\u6309\u94AE\u5347\u7EA7 ",
                        React.createElement("br", null),
                        React.createElement("small", { className: "text-muted" },
                            uq,
                            " ver-",
                            version),
                        React.createElement("button", { className: "btn btn-primary", onClick: this.upgradeUq }, "\u5347\u7EA7"))));
                return [2 /*return*/];
            });
        });
    };
    NavView.prototype.show = function (view, disposer) {
        this.clear();
        return this.push(view, disposer);
    };
    NavView.prototype.push = function (view, disposer) {
        this.removeCeased();
        if (this.stack.length > 0) {
            window.history.pushState('forward', null, null);
        }
        var key = stackKey++;
        this.stack.push({
            key: key,
            view: view,
            ceased: false,
            disposer: disposer
        });
        this.refresh();
        //console.log('push: %s pages', this.stack.length);
        return key;
    };
    NavView.prototype.replace = function (view, disposer) {
        var item = undefined;
        var stack = this.stack;
        if (stack.length > 0) {
            item = stack.pop();
            //this.popAndDispose();
        }
        var key = stackKey++;
        this.stack.push({
            key: key,
            view: view,
            ceased: false,
            disposer: disposer
        });
        if (item !== undefined)
            this.dispose(item.disposer);
        this.refresh();
        //console.log('replace: %s pages', this.stack.length);
        return key;
    };
    NavView.prototype.ceaseTop = function (level) {
        if (level === void 0) { level = 1; }
        var p = this.stack.length - 1;
        for (var i = 0; i < level; i++, p--) {
            if (p < 0)
                break;
            var item = this.stack[p];
            item.ceased = true;
        }
    };
    NavView.prototype.pop = function (level) {
        if (level === void 0) { level = 1; }
        var stack = this.stack;
        var len = stack.length;
        //console.log('pop start: %s pages level=%s', len, level);
        if (level <= 0 || len <= 1)
            return;
        if (len < level)
            level = len;
        var backLevel = 0;
        for (var i = 0; i < level; i++) {
            if (stack.length === 0)
                break;
            //stack.pop();
            this.popAndDispose();
            ++backLevel;
        }
        if (backLevel >= len)
            backLevel--;
        this.refresh();
        if (this.isHistoryBack !== true) {
            //window.removeEventListener('popstate', this.navBack);
            //window.history.back(backLevel);
            //window.addEventListener('popstate', this.navBack);
        }
        //console.log('pop: %s pages', stack.length);
    };
    NavView.prototype.popTo = function (key) {
        if (key === undefined)
            return;
        if (this.stack.find(function (v) { return v.key === key; }) === undefined)
            return;
        while (this.stack.length > 0) {
            var len = this.stack.length;
            var top_1 = this.stack[len - 1];
            if (top_1.key === key)
                break;
            this.pop();
        }
    };
    NavView.prototype.topKey = function () {
        var len = this.stack.length;
        if (len === 0)
            return undefined;
        return this.stack[len - 1].key;
    };
    NavView.prototype.removeCeased = function () {
        for (;;) {
            var p = this.stack.length - 1;
            if (p < 0)
                break;
            var top_2 = this.stack[p];
            if (top_2.ceased === false)
                break;
            var item = this.stack.pop();
            var disposer = item.disposer;
            this.dispose(disposer);
        }
        this.refresh();
    };
    NavView.prototype.popAndDispose = function () {
        this.removeCeased();
        var item = this.stack.pop();
        if (item === undefined)
            return;
        //if (nav.isRouting) {
        //	window.history.back();
        //}
        var disposer = item.disposer;
        this.dispose(disposer);
        this.removeCeased();
        return item;
    };
    NavView.prototype.dispose = function (disposer) {
        if (disposer === undefined)
            return;
        var item = this.stack.find(function (v) { return v.disposer === disposer; });
        if (item === undefined)
            disposer();
    };
    NavView.prototype.clear = function () {
        var len = this.stack.length;
        while (this.stack.length > 0)
            this.popAndDispose();
        //this.refresh();
        if (len > 1) {
            //window.removeEventListener('popstate', this.navBack);
            //window.history.back(len-1);
            //window.addEventListener('popstate', this.navBack);
        }
    };
    NavView.prototype.regConfirmClose = function (confirmClose) {
        var stack = this.stack;
        var len = stack.length;
        if (len === 0)
            return;
        var top = stack[len - 1];
        top.confirmClose = confirmClose;
    };
    NavView.prototype.confirmBox = function (message) {
        return window.confirm(message);
    };
    NavView.prototype.render = function () {
        var _a = this.state, notSupportedBrowser = _a.notSupportedBrowser, wait = _a.wait, fetchError = _a.fetchError;
        if (notSupportedBrowser === true) {
            return React.createElement("div", { className: "p-3 text-danger" },
                tool_1.env.browser,
                " not supported !");
        }
        var stack = this.state.stack;
        var top = stack.length - 1;
        var elWait = null, elError = null;
        switch (wait) {
            case 1:
                elWait = React.createElement("div", { className: "va-wait va-wait1" });
                break;
            case 2:
                elWait = React.createElement("div", { className: "va-wait va-wait2" },
                    React.createElement(loading_1.Loading, null));
                break;
        }
        if (fetchError) {
            elError = React.createElement(fetchErrorView_1.default, __assign({ clearError: this.clearError }, fetchError));
            ++top;
        }
        var test = exports.nav.testing === true &&
            React.createElement("span", { className: "cursor-pointer position-fixed", style: { top: 0, left: '0.2rem', zIndex: 90001 } },
                React.createElement(simple_1.FA, { className: "text-warning", name: "info-circle" }));
        return React.createElement(React.Fragment, null,
            stack.map(function (item, index) {
                var key = item.key, view = item.view;
                return React.createElement("div", { key: key, style: index < top ? { visibility: 'hidden', position: 'absolute' } : undefined }, view);
            }),
            elWait,
            elError,
            test);
    };
    NavView.prototype.refresh = function () {
        this.setState({ stack: this.stack });
    };
    return NavView;
}(React.Component));
exports.NavView = NavView;
var Nav = /** @class */ (function () {
    function Nav() {
        var _this = this;
        this.local = new tool_1.LocalData();
        this.user = undefined;
        this.arrs = ['/test', '/test/'];
        this.windowOnError = function (event, source, lineno, colno, error) {
            debugger;
            console.error('windowOnError');
            console.error(error);
        };
        this.windowOnUnhandledRejection = function (ev) {
            debugger;
            console.error('windowOnUnhandledRejection');
            console.error(ev.reason);
        };
        this.windowOnClick = function (ev) {
            console.error('windowOnClick');
        };
        this.windowOnMouseMove = function (ev) {
            console.log('navigator.userAgent: ' + navigator.userAgent);
            console.log('mouse move (%s, %s)', ev.x, ev.y);
        };
        this.windowOnScroll = function (ev) {
            console.log('scroll event');
        };
        this.reloadUser = function () {
            var user = _this.local.user.get();
            var curUser = exports.nav.user;
            if (user === undefined && curUser === undefined)
                return;
            if (user && curUser && user.id === curUser.id)
                return;
            if (!user)
                exports.nav.logout();
            else
                exports.nav.logined(user);
        };
        this.navLogin = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                exports.nav.showLogin(function (user) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, window.history.back()];
                }); }); }, false);
                return [2 /*return*/];
            });
        }); };
        this.navLogout = function (params) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                exports.nav.showLogout(function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                    return [2 /*return*/, window.history.back()];
                }); }); });
                return [2 /*return*/];
            });
        }); };
        this.navRegister = function (params) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                exports.nav.showRegister();
                return [2 /*return*/];
            });
        }); };
        this.navForget = function (params) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                exports.nav.showForget();
                return [2 /*return*/];
            });
        }); };
        this.doneSysRoutes = false;
        this.sysRoutes = {
            '/login': this.navLogin,
            '/logout': this.navLogout,
            '/register': this.navRegister,
            '/forget': this.navForget,
        };
        /*
        get isWebNav():boolean {
            if (!this.navigo) return false;
            return !isMobile;
        }
        */
        this.isWebNav = false;
        this.backIcon = React.createElement("i", { className: "fa fa-angle-left" });
        this.closeIcon = React.createElement("i", { className: "fa fa-close" });
        this.showPrivacyPage = function () {
            var privacy = _this.getPrivacyContent();
            if (privacy) {
                _this.privacyPage(privacy);
            }
            else {
                exports.nav.push(React.createElement(page_1.Page, { header: "\u9690\u79C1\u653F\u7B56" },
                    React.createElement("div", { className: "p-3" }, "AppConfig \u4E2D\u6CA1\u6709\u5B9A\u4E49 privacy\u3002\u53EF\u4EE5\u5B9A\u4E49\u4E3A\u5B57\u7B26\u4E32\uFF0C\u6216\u8005url\u3002markdown\u683C\u5F0F")));
            }
        };
        this.privacyPage = function (htmlString) { return __awaiter(_this, void 0, void 0, function () {
            var content;
            return __generator(this, function (_a) {
                content = { __html: htmlString };
                exports.nav.push(React.createElement(page_1.Page, { header: "\u9690\u79C1\u653F\u7B56" },
                    React.createElement("div", { className: "p-3", dangerouslySetInnerHTML: content })));
                return [2 /*return*/];
            });
        }); };
        this.createLogin = login_1.createLogin;
        this.reload = function () { return __awaiter(_this, void 0, void 0, function () {
            var waiting, registration, plus, webview, webView;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        waiting = new Promise(function (resolve, reject) {
                            setTimeout(resolve, 100);
                        });
                        if (!('serviceWorker' in navigator)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.race([waiting, navigator.serviceWorker.ready])];
                    case 1:
                        registration = _a.sent();
                        if (registration)
                            registration.unregister();
                        _a.label = 2;
                    case 2:
                        window.document.location.reload();
                        plus = window.plus;
                        if (plus) {
                            webview = plus.webview;
                            if (webview) {
                                if (webview.reload)
                                    webview.reload(true);
                            }
                            else {
                                webView = plus.webView;
                                if (webView) {
                                    if (webView.reload)
                                        webView.reload(true);
                                }
                            }
                            //plus.webview.reload(true)
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.resetAll = function () {
            _this.push(React.createElement(reloadPage_1.ConfirmReloadPage, { confirm: function (ok) {
                    if (ok === true) {
                        _this.showReloadPage('彻底升级');
                        localStorage.clear();
                        /*
                        this.local.readToMemory();
                        env.localDb.removeAll();
                        this.local.saveToLocalStorage();
                        */
                    }
                    else {
                        _this.pop();
                    }
                    return;
                } }));
        };
        var lang = res_1.resOptions.lang, district = res_1.resOptions.district;
        this.language = lang;
        this.culture = district;
        this.testing = false;
    }
    Object.defineProperty(Nav.prototype, "guest", {
        get: function () {
            var guest = this.local.guest;
            if (guest === undefined)
                return 0;
            var g = guest.get();
            if (g === undefined)
                return 0;
            return g.guest;
        },
        enumerable: false,
        configurable: true
    });
    Nav.prototype.set = function (navView) {
        //this.logo = logo;
        this.navView = navView;
    };
    /*
    registerReceiveHandler(handler: (message:any)=>Promise<void>):number {
        //if (this.ws === undefined) return;
        return messageHub.onReceiveAny(handler);
    }

    unregisterReceiveHandler(handlerId:number) {
        //if (this.ws === undefined) return;
        if (handlerId === undefined) return;
        messageHub.endReceive(handlerId);
    }
    */
    Nav.prototype.onReceive = function (msg) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //if (this.ws === undefined) return;
                    return [4 /*yield*/, net_1.messageHub.dispatch(msg)];
                    case 1:
                        //if (this.ws === undefined) return;
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.loadUnitJson = function () {
        return __awaiter(this, void 0, void 0, function () {
            var unitJsonPath, unitRes, res, err1_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        unitJsonPath = this.unitJsonPath();
                        return [4 /*yield*/, fetch(unitJsonPath, {})];
                    case 1:
                        unitRes = _a.sent();
                        return [4 /*yield*/, unitRes.json()];
                    case 2:
                        res = _a.sent();
                        return [2 /*return*/, res.unit];
                    case 3:
                        err1_1 = _a.sent();
                        this.local.unit.remove();
                        return [2 /*return*/];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.getPredefinedUnitName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var el, json, res, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        el = document.getElementById('unit');
                        if (el) {
                            return [2 /*return*/, el.innerText];
                        }
                        el = document.getElementById('unit.json');
                        if (!!el) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadUnitJson()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        _a.trys.push([2, 3, , 5]);
                        json = el.innerHTML;
                        res = JSON.parse(json);
                        return [2 /*return*/, res.unit];
                    case 3:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.loadUnitJson()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.loadPredefinedUnit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var envUnit, unitName, unit, unitId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        envUnit = process.env.REACT_APP_UNIT;
                        if (envUnit !== undefined) {
                            return [2 /*return*/, Number(envUnit)];
                        }
                        unit = this.local.unit.get();
                        if (!(unit !== undefined)) return [3 /*break*/, 2];
                        if (tool_1.env.isDevelopment !== true)
                            return [2 /*return*/, unit.id];
                        return [4 /*yield*/, this.getPredefinedUnitName()];
                    case 1:
                        unitName = _a.sent();
                        if (unitName === undefined)
                            return [2 /*return*/];
                        if (unit.name === unitName)
                            return [2 /*return*/, unit.id];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.getPredefinedUnitName()];
                    case 3:
                        unitName = _a.sent();
                        if (unitName === undefined)
                            return [2 /*return*/];
                        _a.label = 4;
                    case 4: return [4 /*yield*/, net_1.guestApi.unitFromName(unitName)];
                    case 5:
                        unitId = _a.sent();
                        if (unitId !== undefined) {
                            this.local.unit.set({ id: unitId, name: unitName });
                        }
                        return [2 /*return*/, unitId];
                }
            });
        });
    };
    Nav.prototype.setSettings = function (settings) {
        this.navSettings = settings;
        var htmlTitle = settings.htmlTitle;
        if (htmlTitle) {
            document.title = htmlTitle;
        }
        var html = document.getElementsByTagName('html');
        var html0 = html[0];
        if (html0) {
            var version = html0 === null || html0 === void 0 ? void 0 : html0.getAttribute('data-version');
            if (version) {
                //appConfig.version = version;
            }
        }
    };
    Object.defineProperty(Nav.prototype, "oem", {
        get: function () {
            return this.navSettings && this.navSettings.oem;
        },
        enumerable: false,
        configurable: true
    });
    Nav.prototype.unitJsonPath = function () {
        var _a = document.location, origin = _a.origin, pathname = _a.pathname;
        pathname = pathname.toLowerCase();
        for (var _i = 0, _b = this.arrs; _i < _b.length; _i++) {
            var item = _b[_i];
            if (pathname.endsWith(item) === true) {
                pathname = pathname.substr(0, pathname.length - item.length);
                break;
            }
        }
        if (pathname.endsWith('/') === true || pathname.endsWith('\\') === true) {
            pathname = pathname.substr(0, pathname.length - 1);
        }
        return origin + pathname + '/unit.json';
    };
    Nav.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var url, ws, resHost, guest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.testing = tool_1.env.testing;
                        if (this.forceDevelopment === true) {
                            tool_1.env.isDevelopment = true;
                        }
                        return [4 /*yield*/, net_1.host.start(this.testing)];
                    case 1:
                        _a.sent();
                        url = net_1.host.url, ws = net_1.host.ws, resHost = net_1.host.resHost;
                        this.centerHost = url;
                        this.resUrl = net_1.resUrlFromHost(resHost);
                        this.wsHost = ws;
                        net_1.setCenterUrl(url);
                        guest = this.local.guest.get();
                        if (!(guest === undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, net_1.guestApi.guest()];
                    case 2:
                        guest = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!guest) {
                            debugger;
                            throw Error('guest can not be undefined');
                        }
                        exports.nav.setGuest(guest);
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, notLogined, userPassword, ret, userName, password, logindUser, notLogined_1, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 10, 11, 12]);
                        window.onerror = this.windowOnError;
                        window.onunhandledrejection = this.windowOnUnhandledRejection;
                        window.onfocus = this.reloadUser;
                        if (isMobile === true) {
                            document.onselectstart = function () { return false; };
                            document.oncontextmenu = function () { return false; };
                        }
                        //window.setInterval(()=>console.error('tick every 5 seconds'), 5000);
                        exports.nav.clear();
                        //nav.onSysNavRoutes();
                        this.startWait();
                        user = this.local.user.get();
                        if (!(user === undefined)) return [3 /*break*/, 8];
                        _a = this.navView.props, notLogined = _a.notLogined, userPassword = _a.userPassword;
                        if (!userPassword) return [3 /*break*/, 3];
                        return [4 /*yield*/, userPassword()];
                    case 1:
                        ret = _b.sent();
                        if (!ret) return [3 /*break*/, 3];
                        userName = ret.user, password = ret.password;
                        return [4 /*yield*/, net_2.userApi.login({
                                user: userName,
                                pwd: password,
                                guest: exports.nav.guest,
                            })];
                    case 2:
                        logindUser = _b.sent();
                        user = logindUser;
                        _b.label = 3;
                    case 3:
                        if (!(user === undefined)) return [3 /*break*/, 8];
                        notLogined_1 = this.navView.props.notLogined;
                        if (!(notLogined_1 !== undefined)) return [3 /*break*/, 5];
                        return [4 /*yield*/, notLogined_1()];
                    case 4:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, exports.nav.showLogin(undefined)];
                    case 6:
                        _b.sent();
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                    case 8: return [4 /*yield*/, exports.nav.logined(user)];
                    case 9:
                        _b.sent();
                        return [3 /*break*/, 12];
                    case 10:
                        err_2 = _b.sent();
                        console.error(err_2);
                        debugger;
                        return [3 /*break*/, 12];
                    case 11:
                        this.endWait();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.resolveRoute = function () {
        //if (this.isRouting === false) return;
        if (this.navigo === undefined)
            return;
        this.navigo.resolve();
    };
    Nav.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this.navigo === undefined) {
            this.navigo = new navigo_1.Navigo();
            if (this.isWebNav !== true)
                this.navigo.historyAPIUpdateMethod('replaceState');
        }
        return this.navigo.on(args[0], args[1], args[2]);
    };
    Nav.prototype.navigateToLogin = function () {
        exports.nav.navigate('/login');
    };
    Nav.prototype.openSysPage = function (url) {
        var navPage = this.sysRoutes[url];
        if (navPage === undefined) {
            //alert(url + ' is not defined in sysRoutes');
            return false;
        }
        navPage(undefined);
        return true;
    };
    Nav.prototype.routeFromNavPage = function (navPage) {
        var _this = this;
        return function (params, queryStr) {
            if (navPage) {
                if (_this.isWebNav)
                    exports.nav.clear();
                navPage(params);
            }
        };
    };
    Nav.prototype.onNavRoute = function (navPage) {
        this.on(this.routeFromNavPage(navPage));
    };
    /*
    onSysNavRoutes() {
        this.onNavRoutes(this.sysRoutes);
    }
    */
    Nav.prototype.onNavRoutes = function (navPageRoutes) {
        if (this.doneSysRoutes === false) {
            this.doneSysRoutes = true;
            this.internalOnNavRoutes(this.sysRoutes);
        }
        this.internalOnNavRoutes(navPageRoutes);
    };
    Nav.prototype.internalOnNavRoutes = function (navPageRoutes) {
        if (!navPageRoutes)
            return;
        this.navPageRoutes = lodash_1.default.merge(this.navPageRoutes, navPageRoutes);
        var navOns = {};
        for (var route in navPageRoutes) {
            var navPage = navPageRoutes[route];
            navOns[route] = this.routeFromNavPage(navPage);
        }
        this.on(navOns);
    };
    Nav.prototype.setIsWebNav = function () {
        this.isWebNav = true;
        this.backIcon = React.createElement("i", { className: "fa fa-arrow-left" });
        this.closeIcon = React.createElement("i", { className: "fa fa-close" });
    };
    Object.defineProperty(Nav.prototype, "isMobile", {
        get: function () { return isMobile; },
        enumerable: false,
        configurable: true
    });
    Nav.prototype.navigate = function (url, absolute) {
        if (!this.navigo) {
            alert('Is not in webnav state, cannot navigate to url "' + url + '"');
            return;
        }
        if (this.testing === true) {
            url += '#test';
        }
        return this.navigo.navigate(url, absolute);
    };
    Nav.prototype.go = function (showPage, url, absolute) {
        if (this.navigo !== undefined) {
            this.navigate(url, absolute);
        }
        else {
            showPage();
        }
    };
    Nav.prototype.showAppView = function (isUserLogin) {
        return __awaiter(this, void 0, void 0, function () {
            var onLogined;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        onLogined = this.navView.props.onLogined;
                        if (onLogined === undefined) {
                            exports.nav.push(React.createElement("div", null, "NavView has no prop onLogined"));
                            return [2 /*return*/];
                        }
                        exports.nav.clear();
                        return [4 /*yield*/, onLogined(isUserLogin)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.setGuest = function (guest) {
        this.local.guest.set(guest);
        netToken_1.netToken.set(0, guest.token);
    };
    Nav.prototype.saveLocalUser = function () {
        this.local.user.set(this.user);
    };
    Nav.prototype.setUqRoles = function (uq, roles) {
        var userRoles = this.user.roles;
        if (!userRoles) {
            this.user.roles = {};
        }
        this.user.roles[uq] = roles;
        this.local.user.set(this.user);
    };
    Nav.prototype.loadMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            var me;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, net_2.userApi.me()];
                    case 1:
                        me = _a.sent();
                        this.user.icon = me.icon;
                        this.user.nick = me.nick;
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.internalLogined = function (user, callback, isUserLogin) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        net_1.logoutApis();
                        console.log("logined: %s", JSON.stringify(user));
                        this.user = user;
                        this.saveLocalUser();
                        netToken_1.netToken.set(user.id, user.token);
                        exports.nav.clear();
                        return [4 /*yield*/, ((_a = this.onChangeLogin) === null || _a === void 0 ? void 0 : _a.call(this, this.user))];
                    case 1:
                        _b.sent();
                        if (!(callback !== undefined)) return [3 /*break*/, 3];
                        return [4 /*yield*/, callback(user)];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        if (!(this.isWebNav === true)) return [3 /*break*/, 4];
                        this.navigate('/index');
                        return [3 /*break*/, 6];
                    case 4: return [4 /*yield*/, this.showAppView(isUserLogin)];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    // 缓冲登录
    Nav.prototype.logined = function (user, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.internalLogined(user, callback, false)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 用户操作之后登录
    Nav.prototype.userLogined = function (user, callback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.internalLogined(user, callback, true)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.loginTop = function (defaultTop) {
        return (this.navSettings && this.navSettings.loginTop) || defaultTop;
    };
    Nav.prototype.privacyEntry = function () {
        if (!this.getPrivacyContent())
            return;
        return React.createElement("div", { className: "text-center" },
            React.createElement("button", { className: "btn btn-sm btn-link", onClick: this.showPrivacyPage },
                React.createElement("small", { className: "text-muted" }, "\u9690\u79C1\u653F\u7B56")));
    };
    Nav.prototype.getPrivacyContent = function () {
        if (!this.navSettings)
            return;
        var privacy = this.navSettings.privacy;
        return privacy;
    };
    Nav.prototype.setCreateLogin = function (createLogin) {
        this.createLogin = createLogin;
    };
    Nav.prototype.getLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.login)
                            return [2 /*return*/, this.login];
                        _a = this;
                        return [4 /*yield*/, this.createLogin()];
                    case 1: return [2 /*return*/, _a.login = _b.sent()];
                }
            });
        });
    };
    Nav.prototype.showLogin = function (callback, withBack) {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLogin()];
                    case 1:
                        login = _a.sent();
                        login.showLogin(callback, withBack);
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.showLogout = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLogin()];
                    case 1:
                        login = _a.sent();
                        login.showLogout(callback);
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.showRegister = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                login_1.showRegister();
                return [2 /*return*/];
            });
        });
    };
    Nav.prototype.showForget = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                login_1.showForget();
                return [2 /*return*/];
            });
        });
    };
    Nav.prototype.logout = function (callback) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var guest;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.local.logoutClear();
                        this.user = undefined; //{} as User;
                        net_1.logoutApis();
                        guest = this.local.guest.get();
                        net_1.setCenterToken(0, guest && guest.token);
                        this.clear();
                        if (!(callback === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, exports.nav.start()];
                    case 1:
                        _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, callback()];
                    case 3:
                        _b.sent();
                        _b.label = 4;
                    case 4:
                        (_a = this.onChangeLogin) === null || _a === void 0 ? void 0 : _a.call(this, undefined);
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.changePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var login;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLogin()];
                    case 1:
                        login = _a.sent();
                        login.showChangePassword();
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Nav.prototype, "level", {
        get: function () {
            return this.navView.level;
        },
        enumerable: false,
        configurable: true
    });
    Nav.prototype.startWait = function () {
        var _a;
        (_a = this.navView) === null || _a === void 0 ? void 0 : _a.startWait();
    };
    Nav.prototype.endWait = function () {
        var _a;
        (_a = this.navView) === null || _a === void 0 ? void 0 : _a.endWait();
    };
    Nav.prototype.onError = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navView.onError(error)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.showUpgradeUq = function (uq, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navView.showUpgradeUq(uq, version)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.show = function (view, disposer) {
        this.navView.show(view, disposer);
    };
    Nav.prototype.push = function (view, disposer) {
        this.navView.push(view, disposer);
    };
    Nav.prototype.replace = function (view, disposer) {
        this.navView.replace(view, disposer);
    };
    Nav.prototype.pop = function (level) {
        if (level === void 0) { level = 1; }
        this.navView.pop(level);
    };
    Nav.prototype.topKey = function () {
        return this.navView.topKey();
    };
    Nav.prototype.popTo = function (key) {
        this.navView.popTo(key);
    };
    Nav.prototype.clear = function () {
        var _a;
        (_a = this.navView) === null || _a === void 0 ? void 0 : _a.clear();
    };
    Nav.prototype.navBack = function () {
        this.navView.navBack();
    };
    Nav.prototype.ceaseTop = function (level) {
        this.navView.ceaseTop(level);
    };
    Nav.prototype.removeCeased = function () {
        this.navView.removeCeased();
    };
    Nav.prototype.back = function (confirm) {
        if (confirm === void 0) { confirm = true; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.navView.back(confirm)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Nav.prototype.regConfirmClose = function (confirmClose) {
        this.navView.regConfirmClose(confirmClose);
    };
    Nav.prototype.confirmBox = function (message) {
        return this.navView.confirmBox(message);
    };
    Object.defineProperty(Nav.prototype, "logs", {
        /*
        async navToApp(url: string, unitId: number, apiId?:number, sheetType?:number, sheetId?:number):Promise<void> {
            return new Promise<void>((resolve, reject) => {
                let sheet = this.centerHost.includes('http://localhost:') === true? 'sheet_debug':'sheet'
                let uh = sheetId === undefined?
                        appUrl(url, unitId) :
                        appUrl(url, unitId, sheet, [apiId, sheetType, sheetId]);
                console.log('navToApp: %s', JSON.stringify(uh));
                nav.push(<article className='app-container'>
                    <span id={uh.hash} onClick={()=>this.back()}/>
                        <i className="fa fa-arrow-left" />
                    </span>
                    {
                        // eslint-disable-next-line
                        <iframe src={uh.url} title={String(sheetId)} />
                    }
                </article>,
                ()=> {
                    resolve();
                });
            });
        }
    
        navToSite(url: string) {
            // show in new window
            window.open(url);
        }
        */
        get: function () { return logs; },
        enumerable: false,
        configurable: true
    });
    ;
    Nav.prototype.log = function (msg) {
        logs.push(msg);
    };
    Nav.prototype.logMark = function () {
        var date = new Date();
        logMark = date.getTime();
        logs.push('log-mark: ' + date.toTimeString());
    };
    Nav.prototype.logStep = function (step) {
        logs.push(step + ': ' + (new Date().getTime() - logMark));
    };
    Nav.prototype.showReloadPage = function (msg) {
        var seconds = -1;
        this.push(React.createElement(reloadPage_1.ReloadPage, { message: msg, seconds: seconds }));
        /*
        if (seconds > 0) {
            env.setTimeout(undefined, this.reload, seconds*1000);
        }
        */
    };
    Nav.prototype.checkVersion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var href, ret, r, parser, htmlDoc, elHtml, newVersion;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        href = document.location.href;
                        href += (href.indexOf('?') >= 0 ? '&' : '?') + '_t_t_=' + new Date().getTime();
                        return [4 /*yield*/, fetch(href)];
                    case 1:
                        ret = _a.sent();
                        return [4 /*yield*/, ret.text()];
                    case 2:
                        r = _a.sent();
                        parser = new DOMParser();
                        htmlDoc = parser.parseFromString(r, 'text/html');
                        elHtml = htmlDoc.getElementsByTagName('html');
                        newVersion = elHtml[0].getAttribute('data-version');
                        return [2 /*return*/, newVersion];
                }
            });
        });
    };
    __decorate([
        mobx_1.observable
    ], Nav.prototype, "user", void 0);
    return Nav;
}());
exports.Nav = Nav;
exports.nav = new Nav();
var TonvaView = /** @class */ (function (_super) {
    __extends(TonvaView, _super);
    function TonvaView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TonvaView;
}(NavView));
exports.TonvaView = TonvaView;
//# sourceMappingURL=nav.js.map