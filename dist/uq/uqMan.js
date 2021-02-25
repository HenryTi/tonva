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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UqMan = exports.fieldDefaultValue = void 0;
var lodash_1 = __importDefault(require("lodash"));
var net_1 = require("../net");
var tuid_1 = require("./tuid");
var action_1 = require("./action");
var sheet_1 = require("./sheet");
var query_1 = require("./query");
var book_1 = require("./book");
var history_1 = require("./history");
var map_1 = require("./map");
var pending_1 = require("./pending");
var reactBoxId_1 = require("./tuid/reactBoxId");
var tag_1 = require("./tag/tag");
var enum_1 = require("./enum");
function fieldDefaultValue(type) {
    switch (type) {
        case 'tinyint':
        case 'smallint':
        case 'int':
        case 'bigint':
        case 'dec':
            return 0;
        case 'char':
        case 'text':
            return '';
        case 'datetime':
        case 'date':
            return '2000-1-1';
        case 'time':
            return '0:00';
    }
}
exports.fieldDefaultValue = fieldDefaultValue;
var UqMan = /** @class */ (function () {
    function UqMan(uqs, uqData, createBoxId, tvs) {
        var _this = this;
        this.enums = {};
        this.actions = {};
        this.sheets = {};
        this.queries = {};
        this.books = {};
        this.maps = {};
        this.histories = {};
        this.pendings = {};
        this.tags = {};
        this.tuids = {};
        this.createBoxIdFromTVs = function (tuid, id) {
            var name = tuid.name;
            /*
            let tuidUR = this.tuidURs[name];
            if (tuidUR === undefined) {
                let {ui, res} = this.getUI(tuid);
                this.tuidURs[name] = tuidUR = new TuidWithUIRes(tuid, ui, res);
            }
            */
            return new reactBoxId_1.ReactBoxId(id, tuid, _this.tvs[name]);
        };
        this.tuidArr = [];
        this.actionArr = [];
        this.enumArr = [];
        this.sheetArr = [];
        this.queryArr = [];
        this.bookArr = [];
        this.mapArr = [];
        this.historyArr = [];
        this.pendingArr = [];
        this.tagArr = [];
        this.createBoxId = createBoxId;
        if (createBoxId === undefined) {
            this.createBoxId = this.createBoxIdFromTVs;
            this.tvs = tvs || {};
        }
        var id = uqData.id, uqOwner = uqData.uqOwner, uqName = uqData.uqName, access = uqData.access, newVersion = uqData.newVersion;
        this.newVersion = newVersion;
        this.uqOwner = uqOwner;
        this.uqName = uqName;
        this.id = id;
        this.name = uqOwner + '/' + uqName;
        this.uqVersion = 0;
        this.localMap = uqs.localMap.map(this.name);
        this.localModifyMax = this.localMap.child('$modifyMax');
        this.localAccess = this.localMap.child('$access');
        //let hash = document.location.hash;
        var baseUrl = 'tv/';
        var acc;
        if (access === null || access === undefined || access === '*') {
            acc = [];
        }
        else {
            acc = access.split(';').map(function (v) { return v.trim(); }).filter(function (v) { return v.length > 0; });
        }
        if (this.name === '$$$/$unitx') {
            // 这里假定，点击home link之后，已经设置unit了
            // 调用 UnitxApi会自动搜索绑定 unitx service
            this.uqApi = new net_1.UnitxApi(net_1.appInFrame.unit);
        }
        else {
            var appOwner = uqs.appOwner, appName = uqs.appName;
            this.uqApi = new net_1.UqApi(baseUrl, appOwner, appName, uqOwner, uqName, acc, true);
        }
        this.tuidsCache = new tuid_1.TuidsCache(this);
    }
    Object.defineProperty(UqMan.prototype, "entities", {
        get: function () {
            return lodash_1.default.merge({}, this.actions, this.sheets, this.queries, this.books, this.maps, this.histories, this.pendings, this.tuids, this.tags);
        },
        enumerable: false,
        configurable: true
    });
    UqMan.prototype.tuid = function (name) { return this.tuids[name.toLowerCase()]; };
    UqMan.prototype.tuidDiv = function (name, div) {
        var tuid = this.tuids[name.toLowerCase()];
        return tuid && tuid.div(div.toLowerCase());
    };
    UqMan.prototype.action = function (name) { return this.actions[name.toLowerCase()]; };
    UqMan.prototype.sheet = function (name) { return this.sheets[name.toLowerCase()]; };
    UqMan.prototype.query = function (name) { return this.queries[name.toLowerCase()]; };
    UqMan.prototype.book = function (name) { return this.books[name.toLowerCase()]; };
    UqMan.prototype.map = function (name) { return this.maps[name.toLowerCase()]; };
    UqMan.prototype.history = function (name) { return this.histories[name.toLowerCase()]; };
    UqMan.prototype.pending = function (name) { return this.pendings[name.toLowerCase()]; };
    UqMan.prototype.sheetFromTypeId = function (typeId) {
        for (var i in this.sheets) {
            var sheet = this.sheets[i];
            if (sheet.typeId === typeId)
                return sheet;
        }
    };
    UqMan.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uqApi.init()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqMan.prototype.loadEntities = function () {
        return __awaiter(this, void 0, void 0, function () {
            var accesses, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        accesses = this.localAccess.get();
                        if (!!accesses) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.uqApi.loadAccess()];
                    case 1:
                        accesses = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!accesses)
                            return [2 /*return*/];
                        this.buildEntities(accesses);
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, err_1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UqMan.prototype.buildEntities = function (entities) {
        if (entities === undefined) {
            debugger;
        }
        this.localAccess.set(entities);
        var access = entities.access, tuids = entities.tuids, version = entities.version;
        this.uqVersion = version;
        this.buildTuids(tuids);
        this.buildAccess(access);
    };
    UqMan.prototype.buildTuids = function (tuids) {
        for (var i in tuids) {
            var schema = tuids[i];
            var typeId = schema.typeId, from = schema.from;
            var tuid = this.newTuid(i, typeId, from);
            tuid.sys = true;
        }
        for (var i in tuids) {
            var schema = tuids[i];
            var tuid = this.getTuid(i);
            tuid.setSchema(schema);
        }
        for (var i in this.tuids) {
            var tuid = this.tuids[i];
            tuid.buildFieldsTuid();
        }
    };
    UqMan.prototype.loadEntitySchema = function (entityName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uqApi.schema(entityName)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqMan.prototype.loadAllSchemas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, entities;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uqApi.allSchemas()];
                    case 1:
                        ret = _a.sent();
                        entities = [
                            this.actionArr,
                            this.enumArr,
                            this.sheetArr,
                            this.queryArr,
                            this.bookArr,
                            this.mapArr,
                            this.historyArr,
                            this.pendingArr,
                            this.tagArr,
                        ];
                        entities.forEach(function (arr) {
                            arr.forEach(function (v) {
                                var entity = ret[v.name.toLowerCase()];
                                if (!entity)
                                    return;
                                var schema = entity.call;
                                if (!schema)
                                    return;
                                v.buildSchema(schema);
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UqMan.prototype.getTuid = function (name) {
        return this.tuids[name];
    };
    UqMan.prototype.buildAccess = function (access) {
        for (var a in access) {
            var v = access[a];
            switch (typeof v) {
                case 'string':
                    this.fromType(a, v);
                    break;
                case 'object':
                    this.fromObj(a, v);
                    break;
            }
        }
    };
    UqMan.prototype.cacheTuids = function (defer) {
        this.tuidsCache.cacheTuids(defer);
    };
    UqMan.prototype.newEnum = function (name, id) {
        var enm = this.enums[name];
        if (enm !== undefined)
            return enm;
        enm = this.enums[name] = new enum_1.UqEnum(this, name, id);
        this.enumArr.push(enm);
        return enm;
    };
    UqMan.prototype.newAction = function (name, id) {
        var action = this.actions[name];
        if (action !== undefined)
            return action;
        action = this.actions[name] = new action_1.Action(this, name, id);
        this.actionArr.push(action);
        return action;
    };
    UqMan.prototype.newTuid = function (name, id, from) {
        var tuid = this.tuids[name];
        if (tuid !== undefined)
            return tuid;
        if (from !== undefined)
            tuid = new tuid_1.TuidImport(this, name, id, from);
        else
            tuid = new tuid_1.TuidInner(this, name, id);
        this.tuids[name] = tuid;
        this.tuidArr.push(tuid);
        return tuid;
    };
    UqMan.prototype.newQuery = function (name, id) {
        var query = this.queries[name];
        if (query !== undefined)
            return query;
        query = this.queries[name] = new query_1.Query(this, name, id);
        this.queryArr.push(query);
        return query;
    };
    UqMan.prototype.newBook = function (name, id) {
        var book = this.books[name];
        if (book !== undefined)
            return book;
        book = this.books[name] = new book_1.Book(this, name, id);
        this.bookArr.push(book);
        return book;
    };
    UqMan.prototype.newMap = function (name, id) {
        var map = this.maps[name];
        if (map !== undefined)
            return map;
        map = this.maps[name] = new map_1.Map(this, name, id);
        this.mapArr.push(map);
        return map;
    };
    UqMan.prototype.newTag = function (name, id) {
        var tag = this.tags[name];
        if (tag !== undefined)
            return tag;
        tag = this.tags[name] = new tag_1.Tag(this, name, id);
        this.tagArr.push(tag);
        return tag;
    };
    UqMan.prototype.newHistory = function (name, id) {
        var history = this.histories[name];
        if (history !== undefined)
            return;
        history = this.histories[name] = new history_1.History(this, name, id);
        this.historyArr.push(history);
        return history;
    };
    UqMan.prototype.newPending = function (name, id) {
        var pending = this.pendings[name];
        if (pending !== undefined)
            return;
        pending = this.pendings[name] = new pending_1.Pending(this, name, id);
        this.pendingArr.push(pending);
        return pending;
    };
    UqMan.prototype.newSheet = function (name, id) {
        var sheet = this.sheets[name];
        if (sheet !== undefined)
            return sheet;
        sheet = this.sheets[name] = new sheet_1.Sheet(this, name, id);
        this.sheetArr.push(sheet);
        return sheet;
    };
    UqMan.prototype.fromType = function (name, type) {
        var parts = type.split('|');
        type = parts[0];
        var id = Number(parts[1]);
        switch (type) {
            //case 'uq': this.id = id; break;
            case 'tuid':
                // Tuid should not be created here!;
                //let tuid = this.newTuid(name, id);
                //tuid.sys = false;
                break;
            case 'action':
                this.newAction(name, id);
                break;
            case 'query':
                this.newQuery(name, id);
                break;
            case 'book':
                this.newBook(name, id);
                break;
            case 'map':
                this.newMap(name, id);
                break;
            case 'history':
                this.newHistory(name, id);
                break;
            case 'sheet':
                this.newSheet(name, id);
                break;
            case 'pending':
                this.newPending(name, id);
                break;
            case 'tag':
                this.newTag(name, id);
                break;
            case 'enum':
                this.newEnum(name, id);
                break;
        }
    };
    UqMan.prototype.fromObj = function (name, obj) {
        switch (obj['$']) {
            case 'sheet':
                this.buildSheet(name, obj);
                break;
        }
    };
    UqMan.prototype.buildSheet = function (name, obj) {
        var sheet = this.sheets[name];
        if (sheet === undefined)
            sheet = this.newSheet(name, obj.id);
        sheet.build(obj);
    };
    UqMan.prototype.buildFieldTuid = function (fields, mainFields) {
        if (fields === undefined)
            return;
        for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
            var f = fields_1[_i];
            var tuid = f.tuid;
            if (tuid === undefined)
                continue;
            var t = this.getTuid(tuid);
            if (t === undefined)
                continue;
            f._tuid = t.buildTuidBox();
        }
        var _loop_1 = function (f) {
            var owner = f.owner;
            if (owner === undefined)
                return "continue";
            var ownerField = fields.find(function (v) { return v.name === owner; });
            if (ownerField === undefined) {
                if (mainFields !== undefined) {
                    ownerField = mainFields.find(function (v) { return v.name === owner; });
                }
                if (ownerField === undefined) {
                    debugger;
                    throw new Error("owner field " + owner + " is undefined");
                }
            }
            var arr = f.arr, tuid = f.tuid;
            var t = this_1.getTuid(ownerField._tuid.tuid.name);
            if (t === undefined)
                return "continue";
            var div = t.div(arr || tuid);
            f._tuid = div && div.buildTuidDivBox(ownerField);
            if (f._tuid === undefined) {
                debugger;
                throw new Error("owner field " + owner + " is not tuid");
            }
        };
        var this_1 = this;
        for (var _a = 0, fields_2 = fields; _a < fields_2.length; _a++) {
            var f = fields_2[_a];
            _loop_1(f);
        }
    };
    UqMan.prototype.buildArrFieldsTuid = function (arrFields, mainFields) {
        if (arrFields === undefined)
            return;
        for (var _i = 0, arrFields_1 = arrFields; _i < arrFields_1.length; _i++) {
            var af = arrFields_1[_i];
            var fields = af.fields;
            if (fields === undefined)
                continue;
            this.buildFieldTuid(fields, mainFields);
        }
    };
    UqMan.prototype.pullModify = function (modifyMax) {
        this.tuidsCache.pullModify(modifyMax);
    };
    return UqMan;
}());
exports.UqMan = UqMan;
//# sourceMappingURL=uqMan.js.map