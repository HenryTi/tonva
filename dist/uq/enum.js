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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UqEnum = void 0;
var entity_1 = require("./entity");
var UqEnum = /** @class */ (function (_super) {
    __extends(UqEnum, _super);
    function UqEnum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqEnum.prototype, "typeName", {
        get: function () { return 'enum'; },
        enumerable: false,
        configurable: true
    });
    return UqEnum;
}(entity_1.Entity));
exports.UqEnum = UqEnum;
//# sourceMappingURL=enum.js.map