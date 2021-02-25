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
exports.TuidBoxDiv = exports.TuidDiv = exports.TuidBox = exports.TuidImport = exports.TuidInner = exports.Tuid = exports.UqTuid = void 0;
var lodash_1 = __importDefault(require("lodash"));
var entity_1 = require("../entity");
var caller_1 = require("../caller");
var idCache_1 = require("./idCache");
var UqTuid = /** @class */ (function (_super) {
    __extends(UqTuid, _super);
    function UqTuid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeName = 'tuid';
        _this.isImport = false;
        return _this;
    }
    UqTuid.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        var id = schema.id;
        this.idName = id;
    };
    UqTuid.prototype.buildTuidBox = function () {
        return new TuidBox(this);
    };
    UqTuid.prototype.getIdFromObj = function (obj) { return obj[this.idName]; };
    UqTuid.prototype.stopCache = function () { this.noCache = true; };
    UqTuid.idValue = function (id) {
        switch (typeof id) {
            default:
                debugger;
                throw new Error('unknown id');
            case 'object': return id.id;
            case 'number': return id;
        }
    };
    UqTuid.equ = function (id1, id2) {
        if (id1 === undefined || id1 === null)
            return false;
        if (id2 === undefined || id2 === null)
            return false;
        return Tuid.idValue(id1) === Tuid.idValue(id2);
        /*
        if (typeof id1 === 'object') {
            let id1Id = id1.id;
            return typeof id2 === 'object'? id1Id === id2.id : id1Id === id2;
        }
        if (typeof id2 === 'object') {
            let id2Id = id2.id;
            return typeof id1 === 'object'? id2Id === id1.id : id2Id === id1;
        }
        return id1 === id2;
        */
    };
    UqTuid.prototype.cacheIds = function () { };
    UqTuid.prototype.modifyIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    return UqTuid;
}(entity_1.Entity));
exports.UqTuid = UqTuid;
var Tuid = /** @class */ (function (_super) {
    __extends(Tuid, _super);
    function Tuid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Tuid;
}(UqTuid));
exports.Tuid = Tuid;
var TuidInner = /** @class */ (function (_super) {
    __extends(TuidInner, _super);
    function TuidInner(uq, name, typeId) {
        var _this = _super.call(this, uq, name, typeId) || this;
        _this.idCache = new idCache_1.IdCache(_this);
        _this.localArr = _this.cache.arr(_this.name + '.whole');
        if (uq.newVersion === true)
            _this.localArr.removeAll();
        return _this;
    }
    TuidInner.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        var arrs = schema.arrs;
        if (arrs !== undefined) {
            this.divs = {};
            for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
                var arr = arrs_1[_i];
                var name_1 = arr.name;
                var tuidDiv = new TuidDiv(this.uq, this, name_1);
                this.divs[name_1] = tuidDiv;
                tuidDiv.setSchema(arr);
                tuidDiv.buildFieldsTuid();
            }
        }
    };
    TuidInner.prototype.useId = function (id, defer) {
        if (this.noCache === true)
            return;
        if (!id)
            return;
        this.idCache.useId(id, defer);
    };
    TuidInner.prototype.boxId = function (id) {
        if (!id)
            return;
        if (typeof id === 'object')
            return id;
        this.useId(id);
        var createBoxId = this.uq.createBoxId;
        if (!createBoxId)
            return { id: id };
        return createBoxId(this, id);
    };
    TuidInner.prototype.valueFromId = function (id) { return this.idCache.getValue(id); };
    TuidInner.prototype.resetCache = function (id) {
        if (typeof id === 'object')
            id = id.id;
        this.idCache.resetCache(id);
    };
    TuidInner.prototype.assureBox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!id)
                            return [2 /*return*/];
                        if (typeof id === 'object')
                            id = id.id;
                        return [4 /*yield*/, this.idCache.assureObj(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.idCache.getValue(id)];
                }
            });
        });
    };
    TuidInner.prototype.cacheIds = function () {
        this.idCache.cacheIds();
        if (this.divs === undefined)
            return;
        for (var i in this.divs)
            this.divs[i].cacheIds();
    };
    TuidInner.prototype.modifyIds = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.idCache.modifyIds(ids)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidInner.prototype.cacheTuids = function (defer) { this.uq.cacheTuids(defer); };
    Object.defineProperty(TuidInner.prototype, "hasDiv", {
        get: function () { return this.divs !== undefined; },
        enumerable: false,
        configurable: true
    });
    TuidInner.prototype.div = function (name) {
        return this.divs && this.divs[name];
    };
    TuidInner.prototype.loadTuidIds = function (divName, ids) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new IdsCaller(this, { divName: divName, ids: ids }, false).request()];
                    case 1:
                        ret = _a.sent();
                        if (ret.length > 0)
                            this.cached = true;
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidInner.prototype.loadMain = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (typeof id === 'object')
                            id = id.id;
                        return [4 /*yield*/, this.idCache.assureObj(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.idCache.valueFromId(id)];
                }
            });
        });
    };
    TuidInner.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var valuesText, values, _i, _a, f, tuid, t, n;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (id === undefined || id === 0)
                            return [2 /*return*/];
                        //let cacheValue = this.idCache.valueFromId(id); 
                        //if (typeof cacheValue === 'object') return cacheValue;
                        if (typeof id === 'object')
                            id = id.id;
                        valuesText = undefined;
                        if (!valuesText) return [3 /*break*/, 1];
                        values = JSON.parse(valuesText);
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, new GetCaller(this, id).request()];
                    case 2:
                        values = _b.sent();
                        if (values !== undefined) {
                            // this.localArr.setItem(id, JSON.stringify(values));
                        }
                        _b.label = 3;
                    case 3:
                        if (values === undefined)
                            return [2 /*return*/];
                        for (_i = 0, _a = this.schema.fields; _i < _a.length; _i++) {
                            f = _a[_i];
                            tuid = f.tuid;
                            if (tuid === undefined)
                                continue;
                            t = this.uq.getTuid(tuid);
                            if (t === undefined)
                                continue;
                            n = f.name;
                            values[n] = t.boxId(values[n]);
                        }
                        this.idCache.cacheValue(values);
                        this.cacheTuidFieldValues(values);
                        return [2 /*return*/, values];
                }
            });
        });
    };
    TuidInner.prototype.cacheTuidFieldValues = function (values) {
        var _a = this.schema, fields = _a.fields, arrs = _a.arrs;
        this.cacheFieldsInValue(values, fields);
        if (arrs !== undefined) {
            for (var _i = 0, _b = arrs; _i < _b.length; _i++) {
                var arr = _b[_i];
                var name_2 = arr.name, fields_1 = arr.fields;
                var arrValues = values[name_2];
                if (arrValues === undefined)
                    continue;
                var tuidDiv = this.div(name_2);
                for (var _c = 0, arrValues_1 = arrValues; _c < arrValues_1.length; _c++) {
                    var row = arrValues_1[_c];
                    //row._$tuid = tuidDiv;
                    //row.$owner = this.boxId(row.owner);
                    tuidDiv.cacheValue(row);
                    this.cacheFieldsInValue(row, fields_1);
                }
            }
        }
    };
    TuidInner.prototype.buildFieldsTuid = function () {
        _super.prototype.buildFieldsTuid.call(this);
        var _a = this.schema, mainFields = _a.mainFields, $create = _a.$create, $update = _a.$update, stampOnMain = _a.stampOnMain;
        if (mainFields === undefined)
            debugger;
        this.cacheFields = mainFields || this.fields;
        if (stampOnMain === true) {
            if ($create === true)
                this.cacheFields.push({ name: '$create', type: 'timestamp', _tuid: undefined });
            if ($update === true)
                this.cacheFields.push({ name: '$update', type: 'timestamp', _tuid: undefined });
        }
        this.uq.buildFieldTuid(this.cacheFields);
    };
    TuidInner.prototype.unpackTuidIds = function (values) {
        return this.unpackTuidIdsOfFields(values, this.cacheFields);
    };
    TuidInner.prototype.save = function (id, props) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SaveCaller(this, { id: id, props: props }).request()];
                    case 1:
                        ret = _a.sent();
                        if (id !== undefined) {
                            this.idCache.remove(id);
                            this.localArr.removeItem(id);
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidInner.prototype.saveProp = function (id, prop, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SavePropCaller(this, { id: id, prop: prop, value: value }).request()];
                    case 1:
                        _a.sent();
                        this.idCache.remove(id);
                        return [4 /*yield*/, this.idCache.assureObj(id)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidInner.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new AllCaller(this, {}).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidInner.prototype.search = function (key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.searchArr(undefined, key, pageStart, pageSize)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidInner.prototype.searchArr = function (owner, key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var params, ret, fields, _i, ret_1, row;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { arr: undefined, owner: owner, key: key, pageStart: pageStart, pageSize: pageSize };
                        return [4 /*yield*/, new SearchCaller(this, params).request()];
                    case 1:
                        ret = _a.sent();
                        fields = this.schema.fields;
                        for (_i = 0, ret_1 = ret; _i < ret_1.length; _i++) {
                            row = ret_1[_i];
                            this.cacheFieldsInValue(row, fields);
                        }
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidInner.prototype.loadArr = function (arr, owner, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (id === undefined || id === 0)
                            return [2 /*return*/];
                        return [4 /*yield*/, new LoadArrCaller(this, { arr: arr, owner: owner, id: id }).request()];
                    case 1: 
                    //let api = this.uqApi;
                    //return await api.tuidArrGet(this.name, arr, owner, id);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidInner.prototype.saveArr = function (arr, owner, id, props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SaveArrCaller(this, { arr: arr, owner: owner, id: id, props: props }).request()];
                    case 1: 
                    //let params = _.clone(props);
                    //params["$id"] = id;
                    //return await this.uqApi.tuidArrSave(this.name, arr, owner, params);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidInner.prototype.posArr = function (arr, owner, id, order) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ArrPosCaller(this, { arr: arr, owner: owner, id: id, order: order }).request()];
                    case 1: 
                    //return await this.uqApi.tuidArrPos(this.name, arr, owner, id, order);
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidInner.prototype.no = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new TuidNoCaller(this, undefined).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TuidInner;
}(Tuid));
exports.TuidInner = TuidInner;
var TuidCaller = /** @class */ (function (_super) {
    __extends(TuidCaller, _super);
    function TuidCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TuidCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    ;
    return TuidCaller;
}(caller_1.EntityCaller));
// 包含main字段的load id
// 当前为了兼容，先调用的包含所有字段的内容
var GetCaller = /** @class */ (function (_super) {
    __extends(GetCaller, _super);
    function GetCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = 'GET';
        return _this;
    }
    Object.defineProperty(GetCaller.prototype, "path", {
        get: function () { return "tuid/" + this.entity.name + "/" + this.params; },
        enumerable: false,
        configurable: true
    });
    return GetCaller;
}(TuidCaller));
var IdsCaller = /** @class */ (function (_super) {
    __extends(IdsCaller, _super);
    function IdsCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IdsCaller.prototype, "path", {
        get: function () {
            var divName = this.params.divName;
            return "tuidids/" + this.entity.name + "/" + (divName !== undefined ? divName : '$');
        },
        enumerable: false,
        configurable: true
    });
    IdsCaller.prototype.buildParams = function () { return this.params.ids; };
    IdsCaller.prototype.xresult = function (res) {
        return res.split('\n');
    };
    return IdsCaller;
}(TuidCaller));
var SaveCaller = /** @class */ (function (_super) {
    __extends(SaveCaller, _super);
    function SaveCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SaveCaller.prototype, "path", {
        get: function () { return "tuid/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    SaveCaller.prototype.buildParams = function () {
        var _a = this.entity.schema, fields = _a.fields, arrs = _a.arrs;
        var _b = this.params, id = _b.id, props = _b.props;
        var params = { $id: id };
        this.transParams(params, props, fields);
        if (arrs !== undefined) {
            for (var _i = 0, arrs_2 = arrs; _i < arrs_2.length; _i++) {
                var arr = arrs_2[_i];
                var arrName = arr.name;
                var arrParams = [];
                var arrFields = arr.fields;
                var arrValues = props[arrName];
                if (arrValues !== undefined) {
                    for (var _c = 0, arrValues_2 = arrValues; _c < arrValues_2.length; _c++) {
                        var arrValue = arrValues_2[_c];
                        var row = {};
                        this.transParams(row, arrValue, arrFields);
                        arrParams.push(row);
                    }
                }
                params[arrName] = arrParams;
            }
        }
        return params;
    };
    SaveCaller.prototype.transParams = function (values, params, fields) {
        if (params === undefined)
            return;
        for (var _i = 0, fields_2 = fields; _i < fields_2.length; _i++) {
            var field = fields_2[_i];
            var name_3 = field.name, tuid = field.tuid, type = field.type;
            var val = params[name_3];
            if (tuid !== undefined) {
                if (typeof val === 'object') {
                    if (val !== null)
                        val = val.id;
                }
            }
            else {
                switch (type) {
                    case 'date':
                        val = this.entity.buildDateParam(val);
                        //val = (val as string).replace('T', ' ');
                        //val = (val as string).replace('Z', '');
                        break;
                    case 'datetime':
                        val = this.entity.buildDateTimeParam(val);
                        //val = new Date(val).toISOString();
                        //val = (val as string).replace('T', ' ');
                        //val = (val as string).replace('Z', '');
                        break;
                }
            }
            values[name_3] = val;
        }
    };
    return SaveCaller;
}(TuidCaller));
var SearchCaller = /** @class */ (function (_super) {
    __extends(SearchCaller, _super);
    function SearchCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SearchCaller.prototype, "path", {
        get: function () { return "tuids/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    return SearchCaller;
}(TuidCaller));
var AllCaller = /** @class */ (function (_super) {
    __extends(AllCaller, _super);
    function AllCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = 'GET';
        return _this;
    }
    Object.defineProperty(AllCaller.prototype, "path", {
        get: function () { return "tuid-all/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    return AllCaller;
}(TuidCaller));
var LoadArrCaller = /** @class */ (function (_super) {
    __extends(LoadArrCaller, _super);
    function LoadArrCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = 'GET';
        return _this;
    }
    Object.defineProperty(LoadArrCaller.prototype, "path", {
        get: function () {
            var _a = this.params, arr = _a.arr, owner = _a.owner, id = _a.id;
            return "tuid-arr/" + this.entity.name + "/" + owner + "/" + arr + "/" + id;
        },
        enumerable: false,
        configurable: true
    });
    return LoadArrCaller;
}(TuidCaller));
var SavePropCaller = /** @class */ (function (_super) {
    __extends(SavePropCaller, _super);
    function SavePropCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SavePropCaller.prototype, "path", {
        get: function () { return "tuid-prop/" + this.entity.name + "/"; },
        enumerable: false,
        configurable: true
    });
    return SavePropCaller;
}(TuidCaller));
var SaveArrCaller = /** @class */ (function (_super) {
    __extends(SaveArrCaller, _super);
    function SaveArrCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SaveArrCaller.prototype, "path", {
        get: function () {
            var _a = this.params, arr = _a.arr, owner = _a.owner;
            return "tuid-arr/" + this.entity.name + "/" + owner + "/" + arr + "/";
        },
        enumerable: false,
        configurable: true
    });
    SaveArrCaller.prototype.buildParams = function () {
        var _a = this.params, id = _a.id, props = _a.props;
        var params = lodash_1.default.clone(props);
        params['$id'] = id;
        return params;
    };
    return SaveArrCaller;
}(TuidCaller));
var ArrPosCaller = /** @class */ (function (_super) {
    __extends(ArrPosCaller, _super);
    function ArrPosCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArrPosCaller.prototype, "path", {
        get: function () {
            var _a = this.params, arr = _a.arr, owner = _a.owner;
            return "tuid-arr-pos/" + this.entity.name + "/" + owner + "/" + arr + "/";
        },
        enumerable: false,
        configurable: true
    });
    ArrPosCaller.prototype.buildParams = function () {
        var _a = this.params, id = _a.id, order = _a.order;
        return { bid: id, $order: order };
    };
    return ArrPosCaller;
}(TuidCaller));
var TuidNoCaller = /** @class */ (function (_super) {
    __extends(TuidNoCaller, _super);
    function TuidNoCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(TuidNoCaller.prototype, "path", {
        get: function () {
            return "tuid-no/" + this.entity.name + "/";
        },
        enumerable: false,
        configurable: true
    });
    TuidNoCaller.prototype.buildParams = function () {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var date = d.getDate();
        return { year: year, month: month, date: date };
    };
    return TuidNoCaller;
}(TuidCaller));
var TuidImport = /** @class */ (function (_super) {
    __extends(TuidImport, _super);
    function TuidImport(uq, name, typeId, from) {
        var _this = _super.call(this, uq, name, typeId) || this;
        _this.isImport = true;
        _this.from = from;
        return _this;
    }
    TuidImport.prototype.setFrom = function (tuidLocal) { this.tuidLocal = tuidLocal; };
    TuidImport.prototype.useId = function (id) { this.tuidLocal.useId(id); };
    TuidImport.prototype.boxId = function (id) { return this.tuidLocal.boxId(id); };
    TuidImport.prototype.valueFromId = function (id) { return this.tuidLocal.valueFromId(id); };
    TuidImport.prototype.resetCache = function (id) {
        this.tuidLocal.resetCache(id);
    };
    TuidImport.prototype.assureBox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.assureBox(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.tuidLocal.valueFromId(id)];
                }
            });
        });
    };
    Object.defineProperty(TuidImport.prototype, "hasDiv", {
        get: function () { return this.tuidLocal.hasDiv; },
        enumerable: false,
        configurable: true
    });
    TuidImport.prototype.div = function (name) { return this.tuidLocal.div(name); };
    TuidImport.prototype.loadMain = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.loadMain(id)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    TuidImport.prototype.load = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.load(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.save = function (id, props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.save(id, props)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.saveProp = function (id, prop, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.saveProp(id, prop, value)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidImport.prototype.all = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.all()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.search = function (key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.search(key, pageStart, pageSize)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.searchArr = function (owner, key, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.searchArr(owner, key, pageStart, pageSize)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.loadArr = function (arr, owner, id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.loadArr(arr, owner, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    TuidImport.prototype.saveArr = function (arr, owner, id, props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.saveArr(arr, owner, id, props)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidImport.prototype.posArr = function (arr, owner, id, order) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.posArr(arr, owner, id, order)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidImport.prototype.no = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.tuidLocal.no()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return TuidImport;
}(Tuid));
exports.TuidImport = TuidImport;
// field._tuid 用这个接口
// Tuid, TuidDiv 实现这个接口
var TuidBox = /** @class */ (function () {
    function TuidBox(tuid) {
        this.ownerField = undefined;
        this.tuid = tuid;
    }
    TuidBox.prototype.boxId = function (id) {
        return this.tuid.boxId(id);
    };
    TuidBox.prototype.getIdFromObj = function (obj) {
        return this.tuid.getIdFromObj(obj);
    };
    TuidBox.prototype.useId = function (id) {
        return this.tuid.useId(id);
    };
    TuidBox.prototype.showInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                alert('showInfo not implemented');
                return [2 /*return*/];
            });
        });
    };
    return TuidBox;
}());
exports.TuidBox = TuidBox;
var TuidDiv = /** @class */ (function (_super) {
    __extends(TuidDiv, _super); /* Entity*/
    //ui: React.StatelessComponent<any>;
    //res: any;
    function TuidDiv(uq, tuid, name) {
        var _this = _super.call(this, uq, name, 0) || this;
        _this.typeName = 'div';
        _this.tuid = tuid;
        _this.idName = 'id';
        _this.idCache = new idCache_1.IdDivCache(tuid, _this);
        return _this;
    }
    Object.defineProperty(TuidDiv.prototype, "owner", {
        get: function () { return this.tuid; },
        enumerable: false,
        configurable: true
    });
    /*
    setSchema(schema:any) {
        super.setSchema(schema);
        this.buildFieldsTuid();
    }*/
    /*
    setUIRes(ui:any, res:any) {
        this.ui = ui && ui.content;
        this.res = res;
    }
    */
    TuidDiv.prototype.buildFieldsTuid = function () {
        _super.prototype.buildFieldsTuid.call(this);
        var mainFields = this.schema.mainFields;
        if (mainFields === undefined)
            debugger;
        this.uq.buildFieldTuid(this.cacheFields = mainFields);
    };
    TuidDiv.prototype.buildTuidDivBox = function (ownerField) {
        return new TuidBoxDiv(this.tuid, this, ownerField);
    };
    TuidDiv.prototype.getIdFromObj = function (obj) { return obj[this.idName]; };
    TuidDiv.prototype.cacheValue = function (value) {
        this.idCache.cacheValue(value);
    };
    TuidDiv.prototype.useId = function (id, defer) {
        if (this.noCache === true)
            return;
        this.idCache.useId(id, defer);
    };
    /*
    boxId(id:number):BoxId {
        if (typeof id === 'object') return id;
        this.useId(id);
        //return new BoxDivId(this.tuid, this, id);
        return this.tuid.boxDivId(this, id);
    }
    */
    TuidDiv.prototype.valueFromId = function (id) {
        return this.idCache.getValue(id);
    };
    TuidDiv.prototype.assureBox = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.idCache.assureObj(id)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.idCache.getValue(id)];
                }
            });
        });
    };
    TuidDiv.prototype.cacheIds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.idCache.cacheIds()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TuidDiv.prototype.cacheTuidFieldValues = function (values) {
        var fields = this.schema.fields;
        this.cacheFieldsInValue(values, fields);
    };
    TuidDiv.prototype.unpackTuidIds = function (values) {
        return this.unpackTuidIdsOfFields(values, this.cacheFields);
    };
    return TuidDiv;
}(TuidInner /* Entity*/));
exports.TuidDiv = TuidDiv;
var TuidBoxDiv = /** @class */ (function (_super) {
    __extends(TuidBoxDiv, _super);
    function TuidBoxDiv(tuid, div, ownerField) {
        var _this = _super.call(this, tuid) || this;
        _this.div = div;
        _this.ownerField = ownerField;
        return _this;
    }
    TuidBoxDiv.prototype.boxId = function (id) {
        return this.div.boxId(id);
    };
    TuidBoxDiv.prototype.getIdFromObj = function (obj) {
        return this.div.getIdFromObj(obj);
    };
    TuidBoxDiv.prototype.useId = function (id) {
        return this.div.useId(id);
    };
    return TuidBoxDiv;
}(TuidBox));
exports.TuidBoxDiv = TuidBoxDiv;
//# sourceMappingURL=tuid.js.map