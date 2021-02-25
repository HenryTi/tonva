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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RuleInt = exports.RuleNum = exports.RuleRequired = exports.RulePredefined = exports.RuleCustom = exports.Rule = void 0;
var lodash_1 = __importDefault(require("lodash"));
var Rule = /** @class */ (function () {
    function Rule() {
    }
    return Rule;
}());
exports.Rule = Rule;
var RuleCustom = /** @class */ (function (_super) {
    __extends(RuleCustom, _super);
    function RuleCustom(func) {
        var _this = _super.call(this) || this;
        _this.func = func;
        return _this;
    }
    RuleCustom.prototype.check = function (defy, value) {
        var ret = this.func(value);
        if (ret === undefined)
            return;
        switch (typeof ret) {
            case 'undefined': return;
            case 'string':
                defy.push(ret);
                return;
            default:
                defy.push.apply(defy, ret);
                return;
        }
    };
    return RuleCustom;
}(Rule));
exports.RuleCustom = RuleCustom;
var RulePredefined = /** @class */ (function (_super) {
    __extends(RulePredefined, _super);
    function RulePredefined(res) {
        var _this = _super.call(this) || this;
        _this.res = res;
        return _this;
    }
    return RulePredefined;
}(Rule));
exports.RulePredefined = RulePredefined;
var RuleRequired = /** @class */ (function (_super) {
    __extends(RuleRequired, _super);
    function RuleRequired() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuleRequired.prototype.check = function (defy, value) {
        switch (typeof value) {
            default:
            case 'boolean': return;
            case 'object':
                if (value !== null)
                    return;
                break;
            case 'string':
                if (value.trim().length > 0)
                    return;
                break;
            case 'number':
                if (isNaN(value) === false)
                    return;
                break;
            case 'undefined':
                break;
        }
        defy.push(this.res.required);
    };
    return RuleRequired;
}(RulePredefined));
exports.RuleRequired = RuleRequired;
var RuleNum = /** @class */ (function (_super) {
    __extends(RuleNum, _super);
    function RuleNum(res, min, max) {
        var _this = _super.call(this, res) || this;
        _this.minMsg = lodash_1.default.template(res.min);
        _this.maxMsg = lodash_1.default.template(res.max);
        _this.min = min;
        _this.max = max;
        return _this;
    }
    RuleNum.prototype.check = function (defy, value) {
        if (value === undefined || value === null)
            return;
        var n = Number(value);
        if (isNaN(n) === true) {
            defy.push(this.res.number);
        }
        else {
            this.checkMore(defy, n);
        }
    };
    RuleNum.prototype.checkMore = function (defy, value) {
        if (this.min !== undefined && Number(value) < this.min) {
            defy.push(this.minMsg({ min: this.min }));
        }
        if (this.max !== undefined && Number(value) > this.max) {
            defy.push(this.maxMsg({ max: this.max }));
        }
    };
    return RuleNum;
}(RulePredefined));
exports.RuleNum = RuleNum;
var RuleInt = /** @class */ (function (_super) {
    __extends(RuleInt, _super);
    function RuleInt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RuleInt.prototype.checkMore = function (defy, n) {
        _super.prototype.checkMore.call(this, defy, n);
        if (Number.isInteger(n) === false) {
            defy.push(this.res.integer);
        }
    };
    return RuleInt;
}(RuleNum));
exports.RuleInt = RuleInt;
//# sourceMappingURL=index.js.map