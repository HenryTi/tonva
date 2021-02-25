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
exports.QueryPageCaller = exports.QueryQueryCaller = exports.ActionCaller = exports.EntityCaller = void 0;
//import _ from 'lodash';
var net_1 = require("../net");
var EntityCaller = /** @class */ (function (_super) {
    __extends(EntityCaller, _super);
    function EntityCaller(entity, params, waiting) {
        if (waiting === void 0) { waiting = true; }
        var _this = _super.call(this, params, waiting) || this;
        _this.tries = 0;
        _this._entity = entity;
        return _this;
    }
    Object.defineProperty(EntityCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    //大多的entityCaller都不需要这个
    //buildParams() {return this.entity.buildParams(this.params);}
    EntityCaller.prototype.request = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entity.loadSchema()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.innerRequest()];
                    case 2:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    EntityCaller.prototype.innerCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.entity.uqApi.xcall(this)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EntityCaller.prototype.innerRequest = function () {
        return __awaiter(this, void 0, void 0, function () {
            var jsonResult, $uq, $modify, res, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.innerCall()];
                    case 1:
                        jsonResult = _a.sent();
                        $uq = jsonResult.$uq, $modify = jsonResult.$modify, res = jsonResult.res;
                        this.entity.uq.pullModify($modify);
                        if ($uq === undefined) {
                            ret = this.xresult(res);
                            //if (ret === undefined) debugger;
                            return [2 /*return*/, ret];
                        }
                        return [4 /*yield*/, this.retry($uq)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EntityCaller.prototype.xresult = function (res) { return res; };
    Object.defineProperty(EntityCaller.prototype, "headers", {
        get: function () {
            var _a = this.entity, ver = _a.ver, uq = _a.uq;
            var uqVersion = uq.uqVersion;
            return {
                uq: "" + uqVersion,
                en: "" + ver,
            };
        },
        enumerable: false,
        configurable: true
    });
    EntityCaller.prototype.retry = function (schema) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ++this.tries;
                        if (this.tries > 5)
                            throw new Error('can not get right uq response schema, 5 tries');
                        this.rebuildSchema(schema);
                        return [4 /*yield*/, this.innerRequest()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EntityCaller.prototype.rebuildSchema = function (schema) {
        var uq = schema.uq, entity = schema.entity;
        if (uq !== undefined) {
            this.entity.uq.buildEntities(uq);
        }
        if (entity !== undefined) {
            this.entity.setSchema(entity);
        }
    };
    return EntityCaller;
}(net_1.Caller));
exports.EntityCaller = EntityCaller;
var ActionCaller = /** @class */ (function (_super) {
    __extends(ActionCaller, _super);
    function ActionCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActionCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    return ActionCaller;
}(EntityCaller));
exports.ActionCaller = ActionCaller;
var QueryQueryCaller = /** @class */ (function (_super) {
    __extends(QueryQueryCaller, _super);
    function QueryQueryCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QueryQueryCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QueryQueryCaller.prototype, "path", {
        get: function () { return "query/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    QueryQueryCaller.prototype.xresult = function (res) {
        var data = this.entity.unpackReturns(res);
        return data;
    };
    QueryQueryCaller.prototype.buildParams = function () { return this.entity.buildParams(this.params); };
    return QueryQueryCaller;
}(EntityCaller));
exports.QueryQueryCaller = QueryQueryCaller;
var QueryPageCaller = /** @class */ (function (_super) {
    __extends(QueryPageCaller, _super);
    function QueryPageCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(QueryPageCaller.prototype, "params", {
        get: function () { return this._params; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QueryPageCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    ;
    Object.defineProperty(QueryPageCaller.prototype, "path", {
        //results: {[name:string]:any[]};
        get: function () { return "query-page/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    QueryPageCaller.prototype.buildParams = function () {
        var _a = this.params, pageStart = _a.pageStart, pageSize = _a.pageSize, params = _a.params;
        var p;
        if (params === undefined) {
            p = { key: '' };
        }
        else {
            p = this.entity.buildParams(params);
        }
        /*
        switch (typeof params) {
            case 'undefined': p = {key: ''}; break;
            default: p = _.clone(params); break;
        }
        */
        p['$pageStart'] = pageStart;
        p['$pageSize'] = pageSize;
        return p;
    };
    ;
    QueryPageCaller.prototype.xresult = function (res) {
        var ret = this.entity.unpackReturns(res);
        //return this.results.$page;// as any[];
        return ret;
    };
    return QueryPageCaller;
}(EntityCaller));
exports.QueryPageCaller = QueryPageCaller;
//# sourceMappingURL=caller.js.map