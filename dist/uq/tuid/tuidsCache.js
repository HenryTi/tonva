"use strict";
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
exports.TuidsCache = void 0;
var tool_1 = require("../../tool");
var TuidsCache = /** @class */ (function () {
    function TuidsCache(uq) {
        var _this = this;
        this.loadIds = function () {
            _this.clearCacheTimer();
            var tuids = _this.uq.tuids;
            for (var i in tuids) {
                var tuid = tuids[i];
                tuid.cacheIds();
            }
        };
        this.uq = uq;
    }
    TuidsCache.prototype.cacheTuids = function (defer) {
        this.clearCacheTimer();
        this.cacheTimer = tool_1.env.setTimeout('TuidsCache.cacheTuids', this.loadIds, defer);
    };
    TuidsCache.prototype.clearCacheTimer = function () {
        if (this.cacheTimer === undefined)
            return;
        tool_1.env.clearTimeout(this.cacheTimer);
        this.cacheTimer = undefined;
    };
    TuidsCache.prototype.pullModify = function (modifyMax) {
        if (modifyMax === undefined)
            return;
        var now = Math.floor(Date.now() / 1000);
        if (this.modifyMax === undefined) {
            this.modifyMax = this.uq.localModifyMax.get();
            if (this.modifyMax === undefined) {
                this.modifyMax = {
                    max: modifyMax,
                    seconds: now,
                };
                this.uq.localModifyMax.set(this.modifyMax);
            }
        }
        var _a = this.modifyMax, max = _a.max, seconds = _a.seconds;
        var lockGap = 3600;
        if (now - seconds < lockGap)
            return;
        if (modifyMax <= max)
            return;
        var tuidCached = [];
        var tuids = this.uq.tuids;
        for (var i in tuids) {
            //if (tuids[i].cached === true) 
            tuidCached.push(i);
        }
        if (tuidCached.length === 0)
            return;
        this.modifyMax.seconds = now;
        this.innerPullModify(tuidCached.join('\t'));
    };
    TuidsCache.prototype.innerPullModify = function (tuidLists) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, uqApi, tuids, max, ret, group, modifyMax, _i, _b, modify, id, entity, key, tuid, item, _c, _d, _e, i, _f, tuid, ids, now;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _a = this.uq, uqApi = _a.uqApi, tuids = _a.tuids;
                        max = this.modifyMax.max;
                        return [4 /*yield*/, uqApi.queueModify(max, 30, tuidLists)];
                    case 1:
                        ret = _g.sent();
                        group = {};
                        modifyMax = 0;
                        for (_i = 0, _b = ret.queue; _i < _b.length; _i++) {
                            modify = _b[_i];
                            id = modify.id, entity = modify.entity, key = modify.key;
                            if (!key)
                                continue;
                            tuid = tuids[entity];
                            if (tuid === undefined)
                                continue;
                            item = group[entity];
                            if (item === undefined) {
                                item = group[entity] = { tuid: tuid, ids: [] };
                            }
                            item.ids.push(key);
                            if (id > modifyMax)
                                modifyMax = id;
                        }
                        _c = [];
                        for (_d in group)
                            _c.push(_d);
                        _e = 0;
                        _g.label = 2;
                    case 2:
                        if (!(_e < _c.length)) return [3 /*break*/, 5];
                        i = _c[_e];
                        _f = group[i], tuid = _f.tuid, ids = _f.ids;
                        return [4 /*yield*/, tuid.modifyIds(ids)];
                    case 3:
                        _g.sent();
                        _g.label = 4;
                    case 4:
                        _e++;
                        return [3 /*break*/, 2];
                    case 5:
                        now = Math.floor(Date.now() / 1000);
                        this.modifyMax = {
                            max: modifyMax,
                            seconds: now,
                        };
                        this.uq.localModifyMax.set(this.modifyMax);
                        return [2 /*return*/];
                }
            });
        });
    };
    return TuidsCache;
}());
exports.TuidsCache = TuidsCache;
//# sourceMappingURL=tuidsCache.js.map