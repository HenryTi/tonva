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
import { ItemEdit } from './itemEdit';
var SelectItemBaseEdit = /** @class */ (function (_super) {
    __extends(SelectItemBaseEdit, _super);
    function SelectItemBaseEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SelectItemBaseEdit.prototype, "uiItem", {
        get: function () { return this._uiItem; },
        enumerable: false,
        configurable: true
    });
    return SelectItemBaseEdit;
}(ItemEdit));
export { SelectItemBaseEdit };
//# sourceMappingURL=selectBaseItemEdit.js.map