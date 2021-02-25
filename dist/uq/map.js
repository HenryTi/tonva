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
exports.Map = void 0;
var entity_1 = require("./entity");
var action_1 = require("./action");
var caller_1 = require("./caller");
var Map = /** @class */ (function (_super) {
    __extends(Map, _super);
    function Map() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actions = {};
        _this.queries = {};
        return _this;
    }
    Object.defineProperty(Map.prototype, "typeName", {
        get: function () { return 'map'; },
        enumerable: false,
        configurable: true
    });
    Map.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        this.schemaFrom = this.schema.from;
        var actions = schema.actions, queries = schema.queries, keys = schema.keys;
        this.uq.buildFieldTuid(this.keys = keys);
        for (var i in actions) {
            var actionSchema = actions[i];
            var name_1 = actionSchema.name;
            var action = this.uq.newAction(name_1, undefined);
            action.setSchema(actionSchema);
            action.buildFieldsTuid();
            this.actions[i] = action;
        }
        for (var i in queries) {
            var querySchema = queries[i];
            var name_2 = querySchema.name;
            var query = this.uq.newQuery(name_2, undefined);
            query.setSchema(querySchema);
            query.buildFieldsTuid();
            this.queries[i] = query;
        }
    };
    Map.prototype.add = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new AddCaller(this, param).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Map.prototype.del = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new DelCaller(this, param).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Map.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new AllCaller(this, undefined).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Map.prototype.page = function (param, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new PageCaller(this, { pageStart: pageStart, pageSize: pageSize, param: param }).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Map.prototype.query = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            var qc, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qc = new QueryCaller(this, param);
                        return [4 /*yield*/, qc.request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    Map.prototype.table = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query(params)];
                    case 1:
                        ret = _a.sent();
                        for (i in ret) {
                            return [2 /*return*/, ret[i]];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.obj = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.table(params)];
                    case 1:
                        ret = _a.sent();
                        if (ret.length > 0)
                            return [2 /*return*/, ret[0]];
                        return [2 /*return*/];
                }
            });
        });
    };
    Map.prototype.scalar = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.obj(params)];
                    case 1:
                        ret = _a.sent();
                        for (i in ret)
                            return [2 /*return*/, ret[i]];
                        return [2 /*return*/];
                }
            });
        });
    };
    return Map;
}(entity_1.Entity));
exports.Map = Map;
var MapCaller = /** @class */ (function (_super) {
    __extends(MapCaller, _super);
    function MapCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MapCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapCaller.prototype, "path", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    MapCaller.prototype.innerCall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var caller, res, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caller = this.getCaller(this.params);
                        return [4 /*yield*/, this.entity.uqApi.xcall(caller)];
                    case 1:
                        res = _a.sent();
                        ret = caller.xresult(res.res);
                        return [2 /*return*/, { res: ret }];
                }
            });
        });
    };
    MapCaller.prototype.buildParams = function () {
        var p = _super.prototype.buildParams.call(this);
        return p;
    };
    return MapCaller;
}(caller_1.EntityCaller));
var AddCaller = /** @class */ (function (_super) {
    __extends(AddCaller, _super);
    function AddCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddCaller.prototype.getCaller = function (param) {
        return new MapAddCaller(this.entity, this.entity.actions.add, param);
    };
    return AddCaller;
}(MapCaller));
var DelCaller = /** @class */ (function (_super) {
    __extends(DelCaller, _super);
    function DelCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DelCaller.prototype.getCaller = function (param) {
        return new MapDelCaller(this.entity, this.entity.actions.add, param);
    };
    return DelCaller;
}(MapCaller));
var AllCaller = /** @class */ (function (_super) {
    __extends(AllCaller, _super);
    function AllCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllCaller.prototype.getCaller = function (param) {
        return new MapAllCaller(this.entity, this.entity.queries.all, param);
    };
    return AllCaller;
}(MapCaller));
var PageCaller = /** @class */ (function (_super) {
    __extends(PageCaller, _super);
    function PageCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageCaller.prototype.getCaller = function (param) {
        return new MapPageCaller(this.entity, this.entity.queries.page, param);
    };
    return PageCaller;
}(MapCaller));
var QueryCaller = /** @class */ (function (_super) {
    __extends(QueryCaller, _super);
    function QueryCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QueryCaller.prototype.getCaller = function (param) {
        return new MapQueryCaller(this.entity, this.entity.queries.query, param);
    };
    return QueryCaller;
}(MapCaller));
var MapAddCaller = /** @class */ (function (_super) {
    __extends(MapAddCaller, _super);
    function MapAddCaller(map, action, params) {
        var _this = _super.call(this, action, params) || this;
        _this.map = map;
        return _this;
    }
    Object.defineProperty(MapAddCaller.prototype, "path", {
        get: function () { return "map/" + this.map.name + "/add"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapAddCaller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return MapAddCaller;
}(action_1.ActionSubmitCaller));
var MapDelCaller = /** @class */ (function (_super) {
    __extends(MapDelCaller, _super);
    function MapDelCaller(map, action, params) {
        var _this = _super.call(this, action, params) || this;
        _this.map = map;
        return _this;
    }
    Object.defineProperty(MapDelCaller.prototype, "path", {
        get: function () { return "map/" + this.map.name + "/del"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapDelCaller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return MapDelCaller;
}(action_1.ActionSubmitCaller));
var MapAllCaller = /** @class */ (function (_super) {
    __extends(MapAllCaller, _super);
    function MapAllCaller(map, query, params) {
        var _this = _super.call(this, query, params) || this;
        _this.map = map;
        return _this;
    }
    Object.defineProperty(MapAllCaller.prototype, "path", {
        get: function () { return "map/" + this.map.name + "/all"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapAllCaller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return MapAllCaller;
}(caller_1.QueryPageCaller));
var MapPageCaller = /** @class */ (function (_super) {
    __extends(MapPageCaller, _super);
    function MapPageCaller(map, query, params) {
        var _this = _super.call(this, query, params) || this;
        _this.map = map;
        return _this;
    }
    Object.defineProperty(MapPageCaller.prototype, "path", {
        get: function () { return "map/" + this.map.name + "/page"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapPageCaller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return MapPageCaller;
}(caller_1.QueryPageCaller));
var MapQueryCaller = /** @class */ (function (_super) {
    __extends(MapQueryCaller, _super);
    function MapQueryCaller(map, query, params) {
        var _this = _super.call(this, query, params) || this;
        _this.map = map;
        return _this;
    }
    Object.defineProperty(MapQueryCaller.prototype, "path", {
        get: function () { return "map/" + this.map.name + "/query"; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MapQueryCaller.prototype, "headers", {
        get: function () { return undefined; },
        enumerable: false,
        configurable: true
    });
    return MapQueryCaller;
}(caller_1.QueryQueryCaller));
//# sourceMappingURL=map.js.map