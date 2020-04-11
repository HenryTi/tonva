var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as React from 'react';
import { nav } from '../nav';
export class PageHeader extends React.Component {
    constructor() {
        super(...arguments);
        this.back = () => __awaiter(this, void 0, void 0, function* () {
            yield nav.back(); // 这个才会显示confirm box，在dataForm里面，如果输入了数据的话
            let { afterBack } = this.props;
            if (afterBack)
                afterBack();
        });
        this.logoutClick = () => {
            nav.showLogout(this.logout);
        };
        this.logout = () => __awaiter(this, void 0, void 0, function* () {
            let { logout } = this.props;
            if (typeof logout === 'function') {
                yield logout();
            }
            yield nav.logout(undefined);
        });
    }
    openWindow() {
        window.open(document.location.href);
    }
    render() {
        let b = nav.level > 1 || window.self !== window.top;
        let { right, center, logout, className, ex } = this.props;
        let back, debugLogout;
        if (logout !== undefined && window.self === window.top) {
            if ((typeof logout === 'boolean' && logout === true)
                || typeof logout === 'function') {
                let { user } = nav;
                if (user !== undefined) {
                    let { nick, name } = user;
                    debugLogout = React.createElement("div", { className: "d-flex align-items-center" },
                        React.createElement("small", { className: "text-light" }, nick || name),
                        // eslint-disable-next-line
                        React.createElement("div", { className: "ml-2 py-2 px-3 cursor-pointer", role: "button", onClick: this.logoutClick },
                            React.createElement("i", { className: "fa fa-sign-out fa-lg" })));
                }
            }
        }
        if (b) {
            switch (this.props.back) {
                case 'none':
                    back = undefined;
                    break;
                default:
                case 'back':
                    back = React.createElement("nav", { onClick: this.back },
                        React.createElement("i", { className: "fa fa-angle-left" }));
                    break;
                case 'close':
                    back = React.createElement("nav", { onClick: this.back },
                        React.createElement("i", { className: "fa fa-close" }));
                    break;
            }
        }
        if (window.self !== window.top) {
            console.log(document.location.href);
            // pop = <header onClick={this.openWindow} className="mx-1"><FA name="external-link" /></header>;
        }
        if (back === undefined && typeof center === 'string') {
            center = React.createElement("div", { className: "px-3" }, center);
        }
        let rightView = (right || debugLogout) && React.createElement("aside", null,
            right,
            " ",
            debugLogout);
        let header = React.createElement("header", { className: className },
            React.createElement("nav", null,
                back,
                React.createElement("div", null, center),
                rightView),
            ex);
        return React.createElement(React.Fragment, null,
            React.createElement("section", { className: "tv-page-header" }, header),
            header);
        /*
            <header className={className}>
            <section>
                <header>
                    {back}
                    <div>{center}</div>
                    {rightView}
                </header>
            </section>
            {back}
            <div>{center}</div>
            {rightView}
        </header>;*/
    }
}
//# sourceMappingURL=pageHeader.js.map