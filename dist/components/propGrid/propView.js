"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropView = void 0;
var row_1 = require("./row");
var PropView = /** @class */ (function () {
    function PropView(gridProps, props) {
        this.gridProps = gridProps;
        this.props = props;
        //this.values = values;
        this.buildRows();
    }
    PropView.prototype.buildRows = function () {
        this.rows = [];
        var isGap = true;
        for (var _i = 0, _a = this.props; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (typeof prop === 'string') {
                this.rows.push(new row_1.PropGap(prop));
                isGap = true;
            }
            else {
                if (!isGap)
                    this.rows.push(new row_1.PropBorder());
                var row = void 0;
                switch (prop.type) {
                    default: continue;
                    case 'string':
                        row = new row_1.StringPropRow(this.gridProps, prop);
                        break;
                    case 'number':
                        row = new row_1.NumberPropRow(this.gridProps, prop);
                        break;
                    case 'list':
                        row = new row_1.ListPropRow(this.gridProps, prop);
                        break;
                    case 'component':
                        row = new row_1.ComponentPropRow(this.gridProps, prop);
                        break;
                }
                this.rows.push(row);
                isGap = false;
            }
        }
    };
    PropView.prototype.setValues = function (values) {
        for (var _i = 0, _a = this.rows; _i < _a.length; _i++) {
            var r = _a[_i];
            r.setValues(values);
        }
    };
    PropView.prototype.render = function () {
        return this.rows.map(function (row, index) { return row.render(String(index)); });
    };
    return PropView;
}());
exports.PropView = PropView;
//# sourceMappingURL=propView.js.map