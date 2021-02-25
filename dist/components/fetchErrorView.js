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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemNotifyPage = void 0;
var React = __importStar(require("react"));
var net_1 = require("../net");
var page_1 = require("./page/page");
var FetchErrorView = /** @class */ (function (_super) {
    __extends(FetchErrorView, _super);
    function FetchErrorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.reApi = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, channel, url, options, resolve, reject;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.props.clearError();
                        _a = this.props, channel = _a.channel, url = _a.url, options = _a.options, resolve = _a.resolve, reject = _a.reject;
                        return [4 /*yield*/, net_1.refetchApi(channel, url, options, resolve, reject)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.close = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.props.clearError();
                return [2 /*return*/];
            });
        }); };
        return _this;
    }
    FetchErrorView.prototype.render = function () {
        var _a = this.props, error = _a.error, url = _a.url;
        var errContent;
        if (typeof error === 'object') {
            var err = [];
            for (var i in error) {
                err.push(React.createElement("li", { key: i },
                    React.createElement("label", null, i),
                    React.createElement("div", { style: { wordWrap: "break-word" } }, error[i])));
            }
            errContent = React.createElement("ul", null, err);
        }
        else {
            errContent = React.createElement("div", null, error);
        }
        return React.createElement("div", null,
            React.createElement("article", null,
                React.createElement("main", { className: "va-error" },
                    React.createElement("div", null, "\u7F51\u7EDC\u51FA\u73B0\u95EE\u9898"),
                    React.createElement("div", null, "\u70B9\u51FB\u91CD\u65B0\u8BBF\u95EE"),
                    React.createElement("div", { style: { wordWrap: "break-word" } },
                        "url: ",
                        url),
                    errContent,
                    React.createElement("div", { className: "p-3" },
                        React.createElement("button", { type: 'button', onClick: this.reApi }, "\u91CD\u65B0API"),
                        React.createElement("button", { type: 'button', onClick: this.close }, "\u5173\u95ED")))));
    };
    return FetchErrorView;
}(React.Component));
exports.default = FetchErrorView;
var SystemNotifyPage = function (_a) {
    var message = _a.message;
    return React.createElement(page_1.Page, { header: "\u7CFB\u7EDF\u63D0\u9192" },
        React.createElement("div", { className: "px-3" }, message));
};
exports.SystemNotifyPage = SystemNotifyPage;
//# sourceMappingURL=fetchErrorView.js.map