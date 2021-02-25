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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.Query = exports.UqQuery = exports.QueryPager = void 0;
var lodash_1 = __importDefault(require("lodash"));
var mobx_1 = require("mobx");
var tool_1 = require("../tool");
var entity_1 = require("./entity");
var caller_1 = require("./caller");
var QueryPager = /** @class */ (function (_super) {
    __extends(QueryPager, _super);
    function QueryPager(query, pageSize, firstSize, itemObservable) {
        var _this = _super.call(this, itemObservable) || this;
        _this.query = query;
        if (pageSize !== undefined)
            _this.pageSize = pageSize;
        if (firstSize !== undefined)
            _this.firstSize = firstSize;
        return _this;
    }
    QueryPager.prototype.setReverse = function () {
        this.appendPosition = 'head';
    };
    QueryPager.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var schema, $page, fields, field;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.$page)
                            return [2 /*return*/];
                        schema = this.query.schema;
                        if (!(schema === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.query.loadSchema()];
                    case 1:
                        _a.sent();
                        schema = this.query.schema;
                        _a.label = 2;
                    case 2:
                        if (schema === undefined)
                            return [2 /*return*/];
                        $page = this.$page = schema.returns.find(function (v) { return v.name === '$page'; });
                        if ($page === undefined)
                            return [2 /*return*/];
                        this.sortOrder = $page.order;
                        fields = $page.fields;
                        if (fields !== undefined) {
                            field = fields[0];
                            if (field)
                                this.idFieldName = field.name;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QueryPager.prototype.loadResults = function (param, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query.page(param, pageStart, pageSize)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    QueryPager.prototype.getPageId = function (item) {
        if (item === undefined)
            return;
        if (typeof item === 'number')
            return item;
        var start = item[this.idFieldName];
        if (start === null)
            return;
        if (start === undefined)
            return;
        if (typeof start === 'object') {
            var id = start.id;
            if (id !== undefined)
                return id;
        }
        return start;
    };
    QueryPager.prototype.refreshItems = function (item) {
        return __awaiter(this, void 0, void 0, function () {
            var index, startIndex, pageStart, pageSize, ret, len, _loop_1, this_1, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = this._items.indexOf(item);
                        if (index < 0)
                            return [2 /*return*/];
                        if (this.appendPosition === 'tail') {
                            startIndex = index - 1;
                        }
                        else {
                            startIndex = index + 1;
                        }
                        pageStart = this.getPageId(this._items[startIndex]);
                        pageSize = 1;
                        return [4 /*yield*/, this.load(this.param, pageStart, pageSize)];
                    case 1:
                        ret = _a.sent();
                        len = ret.length;
                        if (len === 0) {
                            this._items.splice(index, 1);
                            return [2 /*return*/];
                        }
                        _loop_1 = function (i) {
                            var newItem = ret[i];
                            if (!newItem)
                                return "continue";
                            var newId = newItem[this_1.idFieldName];
                            if (newId === undefined || newId === null)
                                return "continue";
                            if (typeof newId === 'object')
                                newId = newId.id;
                            var oldItem = this_1._items.find(function (v) {
                                var oldId = v[_this.idFieldName];
                                if (oldId === undefined || oldId === null)
                                    return false;
                                if (typeof oldId === 'object')
                                    oldId = oldId.id;
                                return oldId = newId;
                            });
                            if (oldItem) {
                                lodash_1.default.merge(oldItem, newItem);
                            }
                        };
                        this_1 = this;
                        for (i = 0; i < len; i++) {
                            _loop_1(i);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return QueryPager;
}(tool_1.PageItems));
exports.QueryPager = QueryPager;
var UqQuery = /** @class */ (function (_super) {
    __extends(UqQuery, _super);
    function UqQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqQuery.prototype, "typeName", {
        get: function () { return 'query'; },
        enumerable: false,
        configurable: true
    });
    UqQuery.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        var returns = schema.returns;
        //this.returns = returns;
        this.isPaged = returns && returns.find(function (v) { return v.name === '$page'; }) !== undefined;
    };
    UqQuery.prototype.resetPage = function (size, params) {
        this.pageStart = undefined;
        this.pageSize = size;
        this.params = params;
        this.more = false;
        this.list = undefined;
    };
    Object.defineProperty(UqQuery.prototype, "hasMore", {
        get: function () { return this.more; },
        enumerable: false,
        configurable: true
    });
    UqQuery.prototype.loadPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pageStart, ret, page, ret_1;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.pageSize === undefined) {
                            throw new Error('call resetPage(size:number, params:any) first');
                        }
                        if (this.pageStart !== undefined) {
                            switch (this.startField.type) {
                                default:
                                    pageStart = this.pageStart;
                                    break;
                                case 'date':
                                case 'time':
                                case 'datetime':
                                    pageStart = this.pageStart.getTime();
                                    break;
                            }
                        }
                        return [4 /*yield*/, this.page(this.params, pageStart, this.pageSize + 1)];
                    case 1:
                        ret = _b.sent();
                        page = ret.$page;
                        /*
                        await this.loadSchema();
                        let res = await this.tvApi.page(this.name, pageStart, this.pageSize+1, this.params);
                        let data = await this.unpackReturns(res);
                        let page = data['$page'] as any[];
                        */
                        this.list = mobx_1.observable.array([], { deep: false });
                        if (page !== undefined) {
                            if (page.length > this.pageSize) {
                                this.more = true;
                                page.pop();
                                ret_1 = this.returns.find(function (r) { return r.name === '$page'; });
                                this.startField = ret_1.fields[0];
                                this.pageStart = page[page.length - 1][this.startField.name];
                            }
                            else {
                                this.more = false;
                            }
                            (_a = this.list).push.apply(_a, page);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UqQuery.prototype.pageCaller = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return new caller_1.QueryPageCaller(this, params, showWaiting);
    };
    UqQuery.prototype.page = function (params, pageStart, pageSize, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var p, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        p = { pageStart: pageStart, pageSize: pageSize, params: params };
                        return [4 /*yield*/, this.pageCaller(p, showWaiting).request()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    UqQuery.prototype.queryCaller = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return new caller_1.QueryQueryCaller(this, params, showWaiting);
    };
    UqQuery.prototype.query = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.queryCaller(params, showWaiting).request()];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    UqQuery.prototype.table = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var ret, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query(params, showWaiting)];
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
    UqQuery.prototype.obj = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.table(params, showWaiting)];
                    case 1:
                        ret = _a.sent();
                        if (ret.length > 0)
                            return [2 /*return*/, ret[0]];
                        return [2 /*return*/];
                }
            });
        });
    };
    UqQuery.prototype.scalar = function (params, showWaiting) {
        if (showWaiting === void 0) { showWaiting = true; }
        return __awaiter(this, void 0, void 0, function () {
            var ret, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.obj(params, showWaiting)];
                    case 1:
                        ret = _a.sent();
                        for (i in ret)
                            return [2 /*return*/, ret[i]];
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        mobx_1.observable
    ], UqQuery.prototype, "list", void 0);
    return UqQuery;
}(entity_1.Entity));
exports.UqQuery = UqQuery;
var Query = /** @class */ (function (_super) {
    __extends(Query, _super);
    function Query() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Query;
}(UqQuery));
exports.Query = Query;
//# sourceMappingURL=query.js.map