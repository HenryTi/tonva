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
exports.View = void 0;
var React = __importStar(require("react"));
var components_1 = require("../components");
var tool_1 = require("../tool");
var View = /** @class */ (function () {
    function View(controller) {
        this.controller = controller;
        this.res = controller.res;
        this.x = controller.x;
        this.t = controller.t;
    }
    Object.defineProperty(View.prototype, "isDev", {
        get: function () { return tool_1.env.isDevelopment; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(View.prototype, "isWebNav", {
        get: function () { return this.controller.isWebNav; },
        enumerable: false,
        configurable: true
    });
    View.prototype.navigate = function (url) { this.controller.navigate(url); };
    View.prototype.isMe = function (id) { return this.controller.isMe(id); };
    View.prototype.renderVm = function (vm, param) {
        return (new vm(this.controller)).render(param);
    };
    View.prototype.openVPage = function (vp, param, afterBack) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (new vp(this.controller)).open(param, afterBack)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    View.prototype.event = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.event(type, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    View.prototype.go = function (showPage, url, absolute) {
        this.controller.go(showPage, url, absolute);
    };
    View.prototype.vCall = function (vp, param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.controller.vCall(vp, param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    View.prototype.returnCall = function (value) {
        this.controller.returnCall(value);
    };
    View.prototype.renderUser = function (user, imageClassName, textClassName) {
        var renderUser = function (user) {
            var name = user.name, nick = user.nick, icon = user.icon;
            return React.createElement(React.Fragment, null,
                React.createElement(components_1.Image, { src: icon, className: imageClassName || 'w-1c h-1c mr-2' }),
                React.createElement("span", { className: textClassName }, nick || name));
        };
        return React.createElement(components_1.UserView, { user: user, render: renderUser });
    };
    View.prototype.renderUserText = function (user) {
        var renderUser = function (user) {
            var name = user.name, nick = user.nick;
            return React.createElement(React.Fragment, null, nick || name);
        };
        return React.createElement(components_1.UserView, { user: user, render: renderUser });
    };
    View.prototype.renderMe = function (imageClassName, textClassName) {
        var user = this.controller.user;
        if (!user)
            return;
        return this.renderUser(user.id, imageClassName, textClassName);
    };
    View.prototype.openPage = function (view, param, onClosePage) {
        var type = typeof param;
        if (type === 'object' || type === 'undefined') {
            this.controller.openPage(React.createElement(view, param), onClosePage);
        }
        else {
            this.controller.openPage(React.createElement(components_1.Page, { header: "param type error" },
                "View.openPage param must be object, but here is ",
                type), onClosePage);
        }
    };
    View.prototype.replacePage = function (view, param) {
        this.controller.replacePage(React.createElement(view, param));
    };
    View.prototype.openPageElement = function (page, onClosePage) {
        this.controller.openPage(page, onClosePage);
    };
    View.prototype.replacePageElement = function (page, onClosePage) {
        this.controller.replacePage(page, onClosePage);
    };
    View.prototype.backPage = function () {
        this.controller.backPage();
    };
    View.prototype.closePage = function (level) {
        this.controller.closePage(level);
    };
    View.prototype.ceasePage = function (level) {
        this.controller.ceasePage(level);
    };
    View.prototype.removeCeased = function () {
        this.controller.removeCeased();
    };
    View.prototype.regConfirmClose = function (confirmClose) {
        this.controller.regConfirmClose(confirmClose);
    };
    View.prototype.popToTopPage = function () {
        this.controller.popToTopPage();
    };
    return View;
}());
exports.View = View;
//# sourceMappingURL=view.js.map