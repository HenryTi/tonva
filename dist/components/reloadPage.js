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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfirmReloadPage = exports.ReloadPage = void 0;
var React = __importStar(require("react"));
var nav_1 = require("./nav");
var page_1 = require("./page/page");
var ReloadPage = /** @class */ (function (_super) {
    __extends(ReloadPage, _super);
    function ReloadPage(props) {
        var _this = _super.call(this, props) || this;
        _this.reload = function () {
            clearInterval(_this.timerHandler);
            nav_1.nav.reload();
        };
        var seconds = props.seconds;
        if (seconds === undefined)
            return _this;
        _this.state = { seconds: seconds };
        if (seconds <= 0)
            return _this;
        _this.timerHandler = setInterval(function () {
            var seconds = _this.state.seconds;
            seconds--;
            if (seconds <= 0) {
                _this.reload();
            }
            else {
                _this.setState({ seconds: seconds });
            }
        }, 1000);
        return _this;
    }
    ReloadPage.prototype.render = function () {
        var seconds = this.state.seconds;
        var title, msg;
        if (seconds > 0) {
            title = '程序升级中...';
            msg = this.state.seconds + '秒钟之后自动重启动';
        }
        else {
            title = '程序需要升级';
            msg = '请点击下面按钮重启';
        }
        return React.createElement(page_1.Page, { header: false },
            React.createElement("div", { className: "text-center p-5" },
                React.createElement("div", { className: "text-info py-5" },
                    React.createElement("span", { className: "text-danger" }, title),
                    React.createElement("br", null),
                    msg,
                    React.createElement("br", null),
                    React.createElement("span", { className: "small text-muted" }, this.props.message)),
                React.createElement("button", { className: "btn btn-danger", onClick: this.reload }, "\u7ACB\u523B\u91CD\u542F")));
    };
    return ReloadPage;
}(React.Component));
exports.ReloadPage = ReloadPage;
var ConfirmReloadPage = function (props) {
    return React.createElement(page_1.Page, { header: "\u5347\u7EA7\u8F6F\u4EF6", back: "close" },
        React.createElement("div", { className: "py-5 px-3 my-5 mx-2 border bg-white rounded" },
            React.createElement("div", { className: "text-center text-info" }, "\u5347\u7EA7\u5C06\u6E05\u9664\u6240\u6709\u672C\u673A\u7F13\u51B2\u533A\u5185\u5BB9\uFF0C\u5E76\u4ECE\u670D\u52A1\u5668\u91CD\u65B0\u5B89\u88C5\u7A0B\u5E8F\uFF01"),
            React.createElement("div", { className: "text-center mt-5" },
                React.createElement("button", { className: "btn btn-danger mr-3", onClick: function () { return props.confirm(true); } }, "\u786E\u8BA4\u5347\u7EA7"))));
    // <button className="btn btn-outline-danger" onClick={()=>props.confirm(false)}>暂不</button>
};
exports.ConfirmReloadPage = ConfirmReloadPage;
//# sourceMappingURL=reloadPage.js.map