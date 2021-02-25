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
exports.ActionSubmitCaller = exports.Action = exports.UqAction = void 0;
var entity_1 = require("./entity");
var caller_1 = require("./caller");
var UqAction = /** @class */ (function (_super) {
    __extends(UqAction, _super);
    function UqAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqAction.prototype, "typeName", {
        get: function () { return 'action'; },
        enumerable: false,
        configurable: true
    });
    UqAction.prototype.submit = function (data, waiting) {
        if (waiting === void 0) { waiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var caller, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caller = new ActionSubmitCaller(this, data);
                        return [4 /*yield*/, caller.request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    UqAction.prototype.submitReturns = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SubmitReturnsCaller(this, data).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqAction.prototype.submitConvert = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SubmitConvertCaller(this, data).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UqAction;
}(entity_1.Entity));
exports.UqAction = UqAction;
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Action;
}(UqAction));
exports.Action = Action;
var ActionSubmitCaller = /** @class */ (function (_super) {
    __extends(ActionSubmitCaller, _super);
    function ActionSubmitCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActionSubmitCaller.prototype, "path", {
        get: function () { return 'action/' + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    ActionSubmitCaller.prototype.buildParams = function () {
        return { data: this.entity.pack(this.params) };
    };
    return ActionSubmitCaller;
}(caller_1.ActionCaller));
exports.ActionSubmitCaller = ActionSubmitCaller;
var SubmitReturnsCaller = /** @class */ (function (_super) {
    __extends(SubmitReturnsCaller, _super);
    function SubmitReturnsCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubmitReturnsCaller.prototype, "path", {
        get: function () { return 'action/' + this.entity.name + '/returns'; },
        enumerable: false,
        configurable: true
    });
    SubmitReturnsCaller.prototype.xresult = function (res) {
        var returns = this.entity.returns;
        var len = returns.length;
        var ret = {};
        for (var i = 0; i < len; i++) {
            var retSchema = returns[i];
            ret[retSchema.name] = res[i];
        }
        return ret;
    };
    return SubmitReturnsCaller;
}(ActionSubmitCaller));
var SubmitConvertCaller = /** @class */ (function (_super) {
    __extends(SubmitConvertCaller, _super);
    function SubmitConvertCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SubmitConvertCaller.prototype, "path", {
        get: function () { return 'action-convert/' + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    SubmitConvertCaller.prototype.buildParams = function () {
        return {
            data: this.params
        };
    };
    return SubmitConvertCaller;
}(ActionSubmitCaller));
//# sourceMappingURL=action.js.map