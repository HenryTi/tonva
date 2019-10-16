var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { List, Muted, LMR, EasyDate, FA } from '../../components';
import { VEntity } from '../CVEntity';
var leftFlowStyle = { width: '8rem' };
var VSheetView = /** @class */ (function (_super) {
    __extends(VSheetView, _super);
    function VSheetView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //data: any;
        //state: string;
        //flows:any[];
        _this.flowRow = function (item, index) {
            var date = item.date, state = item.state, action = item.action;
            if (action === undefined)
                action = React.createElement(React.Fragment, null,
                    React.createElement(FA, { className: "text-primary", name: "pencil-square-o" }),
                    " \u5236\u5355");
            var to;
            switch (state) {
                case '$': break;
                case '#':
                    to = React.createElement(React.Fragment, null,
                        React.createElement(FA, { className: "text-success", name: "file-archive-o" }));
                    break;
                default:
                    to = React.createElement(React.Fragment, null,
                        React.createElement(FA, { className: "text-muted", name: "arrow-right" }),
                        " \u00A0 ",
                        state);
                    break;
            }
            /*
            return <div className="row">
                <div className="col-sm"></div>
                <div className="col-sm"><div className="p-2">{to}</div></div>
                <div className="col-sm text-right"><div className="p-2"><Muted><EasyDate date={date} /></Muted></div></div>
            </div>;
            */
            return React.createElement(LMR, { left: React.createElement("div", { className: "pl-3 py-2", style: leftFlowStyle }, action), right: React.createElement("div", { className: "p-2" },
                    React.createElement(Muted, null,
                        React.createElement(EasyDate, { date: date }))) },
                React.createElement("div", { className: "p-2" }, to));
        };
        _this.sheetView = function () {
            var _a = _this.sheetData, brief = _a.brief, flows = _a.flows;
            var removed;
            if (brief.state === '-')
                removed = React.createElement("div", { className: "mx-3 my-2", style: { color: 'red' } }, "\u672C\u5355\u636E\u4F5C\u5E9F");
            return React.createElement("div", null,
                removed,
                _this.vForm.render(),
                React.createElement(List, { header: React.createElement(Muted, { className: "mx-3 my-1" }, "\u6D41\u7A0B"), items: flows, item: { render: _this.flowRow } }));
        };
        return _this;
    }
    return VSheetView;
}(VEntity));
export { VSheetView };
//# sourceMappingURL=vSheetView.js.map