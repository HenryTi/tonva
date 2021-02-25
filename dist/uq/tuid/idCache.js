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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdDivCache = exports.IdCache = void 0;
var mobx_1 = require("mobx");
var util_1 = require("util");
var lodash_1 = __importDefault(require("lodash"));
var maxCacheSize = 1000;
var IdCache = /** @class */ (function () {
    function IdCache(tuidLocal) {
        this.queue = []; // 每次使用，都排到队头
        this.cache = mobx_1.observable.map({}, { deep: false }); // 已经缓冲的
        this.loading = false;
        this.waitingIds = []; // 等待loading的
        this.divName = undefined;
        this.tuidInner = tuidLocal;
        this.initLocalArr();
    }
    IdCache.prototype.initLocalArr = function () {
        this.localArr = this.tuidInner.cache.arr(this.tuidInner.name + '.ids');
    };
    IdCache.prototype.useId = function (id, defer) {
        if (!id)
            return;
        if (util_1.isNumber(id) === false)
            return;
        if (this.cache.has(id) === true) {
            this.moveToHead(id);
            return;
        }
        this.tuidInner.cacheTuids(defer === true ? 70 : 20);
        this.cache.set(id, id);
        if (this.waitingIds.findIndex(function (v) { return v === id; }) >= 0) {
            this.moveToHead(id);
            return;
        }
        if (this.queue.length >= maxCacheSize) {
            // 缓冲已满，先去掉最不常用的
            var r_1 = this.queue.shift();
            if (r_1 === id) {
                // 如果移除的，正好是现在用的，则插入
                this.queue.push(r_1);
                return;
            }
            //let rKey = String(r);
            if (this.cache.has(r_1) === true) {
                // 如果移除r已经缓存
                this.cache.delete(r_1);
            }
            else {
                // 如果移除r还没有缓存
                var index = this.waitingIds.findIndex(function (v) { return v === r_1; });
                this.waitingIds.splice(index, 1);
            }
        }
        this.waitingIds.push(id);
        this.queue.push(id);
        return;
    };
    IdCache.prototype.moveToHead = function (id) {
        var index = this.queue.findIndex(function (v) { return v === id; });
        this.queue.splice(index, 1);
        this.queue.push(id);
    };
    IdCache.prototype.getValue = function (id) {
        return this.cache.get(id);
    };
    IdCache.prototype.remove = function (id) {
        this.cache.delete(id);
        var index = this.queue.findIndex(function (v) { return v === id; });
        this.queue.splice(index, 1);
        this.localArr.removeItem(id);
    };
    IdCache.prototype.valueFromId = function (id) {
        var _id;
        switch (typeof id) {
            case 'object':
                _id = id.id;
                break;
            case 'number':
                _id = id;
                break;
            default: return;
        }
        return this.getValue(_id);
    };
    IdCache.prototype.resetCache = function (id) {
        this.remove(id);
        this.useId(id);
    };
    IdCache.prototype.cacheValue = function (val) {
        if (val === undefined)
            return false;
        var id = this.getIdFromObj(val);
        if (id === undefined)
            return false;
        var index = this.waitingIds.findIndex(function (v) { return v === id; });
        if (index >= 0)
            this.waitingIds.splice(index, 1);
        this.cache.set(id, val);
        return true;
    };
    IdCache.prototype.getIdFromObj = function (val) { return this.tuidInner.getIdFromObj(val); };
    IdCache.prototype.cacheIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var tuidValues;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.waitingIds.length === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.loadIds()];
                    case 1:
                        tuidValues = _a.sent();
                        if (tuidValues === undefined || tuidValues.length === 0) {
                            this.waitingIds.splice(0, this.waitingIds.length);
                            return [2 /*return*/];
                        }
                        this.cacheIdValues(tuidValues);
                        return [2 /*return*/];
                }
            });
        });
    };
    IdCache.prototype.cacheIdValues = function (tuidValues) {
        if (tuidValues === undefined)
            return;
        var tuids = this.unpackTuidIds(tuidValues);
        for (var _i = 0, tuids_1 = tuids; _i < tuids_1.length; _i++) {
            var tuidValue = tuids_1[_i];
            if (this.cacheValue(tuidValue) === false)
                continue;
            this.cacheTuidFieldValues(tuidValue);
        }
    };
    IdCache.prototype.modifyIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var tuidValues, localedValues;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTuidIdsOrLocal(ids)];
                    case 1:
                        tuidValues = _a.sent();
                        localedValues = tuidValues.filter(function (v) {
                            var p = v.indexOf('\t');
                            if (p < 0)
                                p = v.length;
                            var id = Number(v.substr(0, p));
                            var val = _this.localArr.getItem(id);
                            return (val !== undefined);
                        });
                        if (localedValues.length === 0)
                            return [2 /*return*/];
                        this.cacheIdValues(localedValues);
                        return [2 /*return*/];
                }
            });
        });
    };
    IdCache.prototype.loadIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.loading === true)
                            return [2 /*return*/];
                        this.loading = true;
                        return [4 /*yield*/, this.loadTuidIdsOrLocal(this.waitingIds)];
                    case 1:
                        ret = _a.sent();
                        this.loading = false;
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    IdCache.prototype.unpackTuidIds = function (values) {
        return this.tuidInner.unpackTuidIds(values);
    };
    IdCache.prototype.cacheTuidFieldValues = function (tuidValue) {
        this.tuidInner.cacheTuidFieldValues(tuidValue);
    };
    IdCache.prototype.assureObj = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var val, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = this.cache.get(id);
                        switch (typeof val) {
                            case 'object': return [2 /*return*/, val];
                            case 'number':
                                this.cache.set(id, id);
                                break;
                        }
                        return [4 /*yield*/, this.loadTuidIdsOrLocal([id])];
                    case 1:
                        ret = _a.sent();
                        this.cacheIdValues(ret);
                        return [2 /*return*/];
                }
            });
        });
    };
    IdCache.prototype.loadTuidIdsOrLocal = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, netIds, _i, ids_1, id, value, len, netRet, _loop_1, this_1, i, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ret = [];
                        netIds = [];
                        for (_i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
                            id = ids_1[_i];
                            value = this.localArr.getItem(id);
                            //if (value === undefined)
                            // 值不存在或者是空字符串，重新获取
                            if (!value)
                                netIds.push(id);
                            else
                                ret.push(value);
                        }
                        len = netIds.length;
                        if (!(len > 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tuidInner.loadTuidIds(this.divName, netIds)];
                    case 1:
                        netRet = _a.sent();
                        _loop_1 = function (i) {
                            //有些id可能没有内容，不会返回
                            //let id = netIds[i]; 
                            var row = netRet[i];
                            if (!row)
                                return "continue";
                            var p = row.indexOf('\t');
                            if (p < 0)
                                p = row.length;
                            var id = Number(row.substr(0, p));
                            lodash_1.default.remove(netIds, function (v) { return v === id; });
                            ret.push(row);
                            this_1.localArr.setItem(id, row);
                        };
                        this_1 = this;
                        for (i = 0; i < len; i++) {
                            _loop_1(i);
                        }
                        len = netIds.length;
                        for (i = 0; i < len; i++) {
                            this.localArr.setItem(netIds[i], '');
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, ret];
                }
            });
        });
    };
    return IdCache;
}());
exports.IdCache = IdCache;
var IdDivCache = /** @class */ (function (_super) {
    __extends(IdDivCache, _super);
    function IdDivCache(tuidLocal, div) {
        var _this = _super.call(this, tuidLocal) || this;
        _this.div = div;
        _this.divName = div.name;
        _this.localArr = tuidLocal.cache.arr(tuidLocal.name + '.ids.' + _this.divName);
        return _this;
    }
    IdDivCache.prototype.initLocalArr = function () {
        // 这个不需要，必须去掉
        // this.localArr = this.tuidInner.cache.arr(this.tuidInner.name + '.ids');
    };
    IdDivCache.prototype.getIdFromObj = function (val) { return this.div.getIdFromObj(val); };
    IdDivCache.prototype.unpackTuidIds = function (values) {
        return this.div.unpackTuidIds(values);
    };
    IdDivCache.prototype.cacheTuidFieldValues = function (tuidValue) {
        this.div.cacheTuidFieldValues(tuidValue);
    };
    return IdDivCache;
}(IdCache));
exports.IdDivCache = IdDivCache;
//# sourceMappingURL=idCache.js.map