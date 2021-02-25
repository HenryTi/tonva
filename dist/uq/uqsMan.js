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
exports.UQsMan = void 0;
var tool_1 = require("../tool");
var net_1 = require("../net");
var uqMan_1 = require("./uqMan");
var components_1 = require("../components");
var UQsMan = /** @class */ (function () {
    function UQsMan(tonvaAppName, tvs) {
        this.tvs = tvs || {};
        this.buildTVs();
        this.collection = {};
        var parts = tonvaAppName.split('/');
        if (parts.length !== 2) {
            throw new Error('tonvaApp name must be / separated, owner/app');
        }
        this.appOwner = parts[0];
        this.appName = parts[1];
        this.localMap = tool_1.env.localDb.map(tonvaAppName);
        this.localData = this.localMap.child('uqData');
    }
    UQsMan.load = function (tonvaAppName, version, tvs) {
        return __awaiter(this, void 0, void 0, function () {
            var uqsMan, appOwner, appName, localData, uqAppData, _i, _a, uq, id, uqs, retErrors;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        uqsMan = UQsMan.value = new UQsMan(tonvaAppName, tvs);
                        appOwner = uqsMan.appOwner, appName = uqsMan.appName;
                        localData = uqsMan.localData;
                        uqAppData = localData.get();
                        if (!(!uqAppData || uqAppData.version !== version)) return [3 /*break*/, 2];
                        return [4 /*yield*/, net_1.loadAppUqs(appOwner, appName)];
                    case 1:
                        uqAppData = _b.sent();
                        if (!uqAppData.id) {
                            return [2 /*return*/, [
                                    appOwner + "/" + appName + "\u4E0D\u5B58\u5728\u3002\u8BF7\u4ED4\u7EC6\u68C0\u67E5app\u5168\u540D\u3002"
                                ]];
                        }
                        uqAppData.version = version;
                        localData.set(uqAppData);
                        // 
                        for (_i = 0, _a = uqAppData.uqs; _i < _a.length; _i++) {
                            uq = _a[_i];
                            uq.newVersion = true;
                        }
                        _b.label = 2;
                    case 2:
                        id = uqAppData.id, uqs = uqAppData.uqs;
                        uqsMan.id = id;
                        return [4 /*yield*/, uqsMan.init(uqs)];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, uqsMan.load()];
                    case 4:
                        retErrors = _b.sent();
                        if (retErrors.length === 0) {
                            retErrors.push.apply(retErrors, uqsMan.setTuidImportsLocal());
                            if (retErrors.length === 0) {
                                UQsMan._uqs = uqsMan.buildUQs();
                                return [2 /*return*/];
                            }
                        }
                        UQsMan.errors = retErrors;
                        return [2 /*return*/];
                }
            });
        });
    };
    // to be removed in the future
    UQsMan.prototype.addUq = function (uq) {
        this.collection[uq.name] = uq;
    };
    UQsMan.prototype.buildTVs = function () {
        for (var i in this.tvs) {
            var uqTVs = this.tvs[i];
            if (uqTVs === undefined)
                continue;
            var l = i.toLowerCase();
            if (l === i)
                continue;
            this.tvs[l] = uqTVs;
            for (var j in uqTVs) {
                var en = uqTVs[j];
                if (en === undefined)
                    continue;
                var lj = j.toLowerCase();
                if (lj === j)
                    continue;
                uqTVs[lj] = en;
            }
        }
    };
    UQsMan.prototype.init = function (uqsData) {
        return __awaiter(this, void 0, void 0, function () {
            var promiseInits;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promiseInits = uqsData.map(function (uqData) {
                            var uqOwner = uqData.uqOwner, uqName = uqData.uqName;
                            var uqFullName = uqOwner + '/' + uqName;
                            //let uqUI = this.ui.uqs[uqFullName] as UqUI || {};
                            //let cUq = this.newCUq(uqData, uqUI);
                            //this.cUqCollection[uqFullName] = cUq;
                            //this.uqs.addUq(cUq.uq);
                            var uq = new uqMan_1.UqMan(_this, uqData, undefined, _this.tvs[uqFullName] || _this.tvs[uqName]);
                            _this.collection[uqFullName] = uq;
                            var lower = uqFullName.toLowerCase();
                            if (lower !== uqFullName) {
                                _this.collection[lower] = uq;
                            }
                            return uq.init();
                        });
                        return [4 /*yield*/, Promise.all(promiseInits)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UQsMan.prototype.load = function () {
        return __awaiter(this, void 0, void 0, function () {
            var retErrors, promises, i, uq, results, _i, results_1, result, retError;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        retErrors = [];
                        promises = [];
                        for (i in this.collection) {
                            uq = this.collection[i];
                            promises.push(uq.loadEntities());
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        results = _a.sent();
                        for (_i = 0, results_1 = results; _i < results_1.length; _i++) {
                            result = results_1[_i];
                            retError = result;
                            if (retError !== undefined) {
                                retErrors.push(retError);
                                continue;
                            }
                        }
                        return [2 /*return*/, retErrors];
                }
            });
        });
    };
    UQsMan.prototype.buildUQs = function () {
        var that = this;
        var uqs = {};
        var _loop_1 = function (i) {
            var uqMan = this_1.collection[i];
            //let n = uqMan.name;
            var uqName = uqMan.uqName;
            var l = uqName.toLowerCase();
            var uqKey = uqName.split(/[-._]/).join('').toLowerCase();
            var entities = uqMan.entities;
            var keys = Object.keys(entities);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                var entity = entities[key];
                var name_1 = entity.name;
                entities[name_1.toLowerCase()] = entity;
            }
            var proxy = uqs[l] = new Proxy(entities, {
                get: function (target, key, receiver) {
                    var lk = key.toLowerCase();
                    var ret = target[lk];
                    if (ret !== undefined)
                        return ret;
                    debugger;
                    var err = "entity " + uqName + "." + String(key) + " not defined";
                    console.error(err);
                    that.showReload('UQ错误：' + err);
                    return undefined;
                }
            });
            if (uqKey !== l)
                uqs[uqKey] = proxy;
        };
        var this_1 = this;
        for (var i in this.collection) {
            _loop_1(i);
        }
        //let uqs = this.collection;
        return new Proxy(uqs, {
            get: function (target, key, receiver) {
                var lk = key.toLowerCase();
                var ret = target[lk];
                if (ret !== undefined)
                    return ret;
                /*
                for (let i in uqs) {
                    if (i.toLowerCase() === lk) {
                        return uqs[i];
                    }
                }*/
                debugger;
                console.error('error in uqs');
                that.showReload("\u4EE3\u7801\u9519\u8BEF\uFF1A\u65B0\u589E uq " + String(key));
                return undefined;
            },
        });
    };
    UQsMan.prototype.getUqCollection = function () {
        return this.collection;
    };
    UQsMan.prototype.showReload = function (msg) {
        this.localMap.removeAll();
        components_1.nav.showReloadPage(msg);
    };
    UQsMan.prototype.setTuidImportsLocal = function () {
        var ret = [];
        for (var i in this.collection) {
            var uq = this.collection[i];
            for (var _i = 0, _a = uq.tuidArr; _i < _a.length; _i++) {
                var tuid = _a[_i];
                if (tuid.isImport === true) {
                    var error = this.setInner(tuid);
                    if (error)
                        ret.push(error);
                }
            }
        }
        return ret;
    };
    UQsMan.prototype.setInner = function (tuidImport) {
        var from = tuidImport.from;
        var fromName = from.owner + '/' + from.uq;
        var uq = this.collection[fromName];
        if (uq === undefined) {
            //debugger;
            return "setInner(tuidImport: TuidImport): uq " + fromName + " is not loaded";
        }
        var iName = tuidImport.name;
        var tuid = uq.tuid(iName);
        if (tuid === undefined) {
            //debugger;
            return "setInner(tuidImport: TuidImport): uq " + fromName + " has no Tuid " + iName;
        }
        if (tuid.isImport === true) {
            //debugger;
            return "setInner(tuidImport: TuidImport): uq " + fromName + " Tuid " + iName + " is import";
        }
        tuidImport.setFrom(tuid);
    };
    return UQsMan;
}());
exports.UQsMan = UQsMan;
//# sourceMappingURL=uqsMan.js.map