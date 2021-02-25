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
exports.Entity = void 0;
var tool_1 = require("../tool");
var tab = '\t';
var ln = '\n';
var chars = '\\ntbfvr';
var codeBackSlash = chars.charCodeAt(0);
var codeN = chars.charCodeAt(1);
var codeT = chars.charCodeAt(2);
var codeB = chars.charCodeAt(3);
var codeF = chars.charCodeAt(4);
var codeV = chars.charCodeAt(5);
var codeR = chars.charCodeAt(6);
var codes = '\n\t\b\f\v\r';
var codeBN = codes.charCodeAt(0);
var codeBT = codes.charCodeAt(1);
var codeBB = codes.charCodeAt(2);
var codeBF = codes.charCodeAt(3);
var codeBV = codes.charCodeAt(4);
var codeBR = codes.charCodeAt(5);
var Entity = /** @class */ (function () {
    function Entity(uq, name, typeId) {
        this.ver = 0;
        //getApiFrom() {return this.entities.uqApi;}
        this.fieldMaps = {};
        this.uq = uq;
        this.name = name;
        this.typeId = typeId;
        this.sys = this.name.indexOf('$') >= 0;
        this.cache = this.uq.localMap.item(this.name); // new EntityCache(this);
        this.uqApi = this.uq.uqApi;
    }
    Object.defineProperty(Entity.prototype, "sName", {
        get: function () { return this.jName || this.name; },
        enumerable: false,
        configurable: true
    });
    Entity.prototype.fieldMap = function (arr) {
        if (arr === undefined)
            arr = '$';
        var ret = this.fieldMaps[arr];
        if (ret === undefined) {
            var fields = void 0;
            if (arr === '$')
                fields = this.fields;
            else if (this.arrFields !== undefined) {
                var arrFields = this.arrFields.find(function (v) { return v.name === arr; });
                if (arrFields !== undefined)
                    fields = arrFields.fields;
            }
            else if (this.returns !== undefined) {
                var arrFields = this.returns.find(function (v) { return v.name === arr; });
                if (arrFields !== undefined)
                    fields = arrFields.fields;
            }
            if (fields === undefined)
                return {};
            ret = {};
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var f = fields_1[_i];
                ret[f.name] = f;
            }
            this.fieldMaps[arr] = ret;
        }
        return ret;
    };
    Entity.prototype.loadSchema = function () {
        return __awaiter(this, void 0, void 0, function () {
            var schema;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.schema !== undefined)
                            return [2 /*return*/];
                        schema = this.cache.get();
                        if (!!schema) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.uq.loadEntitySchema(this.name)];
                    case 1:
                        schema = _a.sent();
                        _a.label = 2;
                    case 2:
                        //this.setSchema(schema);
                        //this.buildFieldsTuid();
                        this.buildSchema(schema);
                        return [4 /*yield*/, this.loadValues()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Entity.prototype.buildSchema = function (schema) {
        this.setSchema(schema);
        this.buildFieldsTuid();
        //await this.loadValues();
    };
    Entity.prototype.loadValues = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    // 如果要在setSchema里面保存cache，必须先调用clearSchema
    Entity.prototype.clearSchema = function () {
        this.schema = undefined;
    };
    Entity.prototype.setSchema = function (schema) {
        if (schema === undefined)
            return;
        var name = schema.name, version = schema.version;
        this.ver = version || 0;
        this.setJName(name);
        this.cache.set(schema);
        this.schema = schema;
        this.buildFieldsTuid();
    };
    Entity.prototype.setJName = function (name) {
        if (name !== this.name)
            this.jName = name;
    };
    Entity.prototype.buildFieldsTuid = function () {
        var _a = this.schema, fields = _a.fields, arrs = _a.arrs, returns = _a.returns;
        this.uq.buildFieldTuid(this.fields = fields);
        this.uq.buildArrFieldsTuid(this.arrFields = arrs, fields);
        this.uq.buildArrFieldsTuid(this.returns = returns, fields);
    };
    Entity.prototype.schemaStringify = function () {
        return JSON.stringify(this.schema, function (key, value) {
            if (key === '_tuid')
                return undefined;
            return value;
        }, 4);
    };
    Entity.prototype.tuidFromName = function (fieldName, arrName) {
        if (this.schema === undefined)
            return;
        var _a = this.schema, fields = _a.fields, arrs = _a.arrs;
        var entities = this.uq;
        function getTuid(fn, fieldArr) {
            if (fieldArr === undefined)
                return;
            var f = fieldArr.find(function (v) { return v.name === fn; });
            if (f === undefined)
                return;
            return entities.getTuid(f.tuid);
        }
        var fn = fieldName.toLowerCase();
        if (arrName === undefined)
            return getTuid(fn, fields);
        if (arrs === undefined)
            return;
        var an = arrName.toLowerCase();
        var arr = arrs.find(function (v) { return v.name === an; });
        if (arr === undefined)
            return;
        return getTuid(fn, arr.fields);
    };
    Entity.prototype.buildParams = function (params) {
        var result = {};
        var fields = this.fields;
        if (fields !== undefined)
            this.buildFieldsParams(result, fields, params);
        var arrs = this.arrFields;
        if (arrs !== undefined) {
            for (var _i = 0, arrs_1 = arrs; _i < arrs_1.length; _i++) {
                var arr = arrs_1[_i];
                var name_1 = arr.name, fields_2 = arr.fields;
                var paramsArr = params[name_1];
                if (paramsArr === undefined)
                    continue;
                var arrResult = [];
                result[name_1] = arrResult;
                for (var _a = 0, params_1 = params; _a < params_1.length; _a++) {
                    var pa = params_1[_a];
                    var rowResult = {};
                    this.buildFieldsParams(rowResult, fields_2, pa);
                    arrResult.push(rowResult);
                }
            }
        }
        return result;
    };
    Entity.prototype.buildFieldsParams = function (result, fields, params) {
        for (var _i = 0, fields_3 = fields; _i < fields_3.length; _i++) {
            var field = fields_3[_i];
            var name_2 = field.name, type = field.type;
            var d = params[name_2];
            var val = void 0;
            switch (type) {
                case 'datetime':
                    val = this.buildDateTimeParam(d);
                    break;
                case 'date':
                    if (d instanceof Date) {
                        val = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
                    }
                    else {
                        val = d;
                    }
                    break;
                default:
                    switch (typeof d) {
                        default:
                            val = d;
                            break;
                        case 'object':
                            if (d instanceof Date) {
                                val = d;
                                break;
                            }
                            var tuid = field._tuid;
                            if (tuid === undefined)
                                val = d.id;
                            else
                                val = tuid.getIdFromObj(d);
                            break;
                    }
                    break;
            }
            result[name_2] = val;
        }
    };
    Entity.prototype.buildDateTimeParam = function (val) {
        var dt;
        switch (typeof val) {
            default:
                debugger;
                throw new Error('escape datetime field in pack data error: value=' + val);
            case 'undefined': return undefined;
            case 'object':
                dt = val;
                break;
            case 'string':
            case 'number':
                dt = new Date(val);
                break;
        }
        return Math.floor(dt.getTime() / 1000);
    };
    Entity.prototype.buildDateParam = function (val) {
        var dt;
        switch (typeof val) {
            default:
                debugger;
                throw new Error('escape datetime field in pack data error: value=' + val);
            case 'undefined': return '';
            case 'string': return val;
            case 'object':
                dt = val;
                break;
            case 'number':
                dt = new Date(val);
                break;
        }
        var ret = dt.toISOString();
        var p = ret.indexOf('T');
        return p > 0 ? ret.substr(0, p) : ret;
    };
    Entity.prototype.pack = function (data) {
        var ret = [];
        var fields = this.fields;
        if (fields !== undefined)
            this.packRow(ret, fields, data);
        var arrs = this.arrFields;
        if (arrs !== undefined) {
            for (var _i = 0, arrs_2 = arrs; _i < arrs_2.length; _i++) {
                var arr = arrs_2[_i];
                var name_3 = arr.name, fields_4 = arr.fields;
                var arrData = tool_1.getObjPropIgnoreCase(data, name_3);
                //if (!arrData) arrData = data[name.toLowerCase()];
                this.packArr(ret, fields_4, arrData);
            }
        }
        return ret.join('');
    };
    Entity.prototype.escape = function (row, field) {
        var d = row[field.name];
        switch (field.type) {
            case 'datetime':
                return this.buildDateTimeParam(d);
            default:
                switch (typeof d) {
                    default: return d;
                    case 'object':
                        var tuid = field._tuid;
                        if (tuid === undefined)
                            return d.id;
                        return tuid.getIdFromObj(d);
                    case 'string':
                        var len = d.length;
                        var r = '', p = 0;
                        for (var i = 0; i < len; i++) {
                            var c = d.charCodeAt(i), ch = void 0;
                            switch (c) {
                                default: continue;
                                case codeBackSlash:
                                    ch = '\\\\';
                                    break;
                                case codeBT:
                                    ch = '\\t';
                                    break;
                                case codeBN:
                                    ch = '\\n';
                                    break;
                                case codeBF:
                                    ch = '\\f';
                                    break;
                                case codeBV:
                                    ch = '\\v';
                                    break;
                                case codeBB:
                                    ch = '\\b';
                                    break;
                                case codeBR:
                                    ch = '\\r';
                                    break;
                            }
                            r += d.substring(p, i) + ch;
                            p = i + 1;
                        }
                        return r + d.substring(p);
                    case 'undefined': return '';
                }
        }
    };
    Entity.prototype.packRow = function (result, fields, data) {
        var len = fields.length;
        if (len === 0)
            return;
        var ret = '';
        ret += this.escape(data, fields[0]);
        for (var i = 1; i < len; i++) {
            var f = fields[i];
            ret += tab + this.escape(data, f);
        }
        result.push(ret + ln);
    };
    Entity.prototype.packArr = function (result, fields, data) {
        if (data !== undefined) {
            if (data.length === 0) {
                result.push(ln);
            }
            else {
                for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                    var row = data_1[_i];
                    this.packRow(result, fields, row);
                }
            }
        }
        else {
            result.push(ln);
        }
        result.push(ln);
    };
    Entity.prototype.cacheFieldsInValue = function (values, fields) {
        for (var _i = 0, _a = fields; _i < _a.length; _i++) {
            var f = _a[_i];
            var name_4 = f.name, _tuid = f._tuid;
            if (_tuid === undefined)
                continue;
            var id = values[name_4];
            //_tuid.useId(id);
            values[name_4] = _tuid.boxId(id);
        }
    };
    Entity.prototype.unpackTuidIdsOfFields = function (values, fields) {
        if (fields === undefined)
            return values;
        //if (this.fields === undefined) return values as any[];
        var ret = [];
        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
            var ln_1 = values_1[_i];
            if (!ln_1)
                continue;
            var len = ln_1.length;
            var p = 0;
            while (p < len) {
                var ch = ln_1.charCodeAt(p);
                if (ch === 10) {
                    ++p;
                    break;
                }
                var row = {};
                p = this.unpackRow(row, fields, ln_1, p);
                ret.push(row);
            }
        }
        return ret;
    };
    Entity.prototype.unpackSheet = function (data) {
        var ret = {}; //new this.newMain();
        //if (schema === undefined || data === undefined) return;
        var fields = this.fields;
        var p = 0;
        if (fields !== undefined)
            p = this.unpackRow(ret, fields, data, p);
        var arrs = this.arrFields; //schema['arrs'];
        if (arrs !== undefined) {
            for (var _i = 0, arrs_3 = arrs; _i < arrs_3.length; _i++) {
                var arr = arrs_3[_i];
                p = this.unpackArr(ret, arr, data, p);
            }
        }
        return ret;
    };
    Entity.prototype.unpackReturns = function (data, returns) {
        if (data === undefined)
            debugger;
        var ret = {};
        var p = 0;
        var arrs = returns || this.returns;
        if (arrs !== undefined) {
            for (var _i = 0, arrs_4 = arrs; _i < arrs_4.length; _i++) {
                var arr = arrs_4[_i];
                p = this.unpackArr(ret, arr, data, p);
            }
        }
        return ret;
    };
    Entity.prototype.unpackRow = function (ret, fields, data, p) {
        var ch0 = 0, ch = 0, c = p, i = 0, len = data.length, fLen = fields.length;
        for (; p < len; p++) {
            ch0 = ch;
            ch = data.charCodeAt(p);
            if (ch === 9) {
                var f_1 = fields[i];
                var name_5 = f_1.name;
                if (ch0 !== 8) {
                    if (p > c) {
                        var v = data.substring(c, p);
                        ret[name_5] = this.to(ret, v, f_1);
                    }
                }
                else {
                    ret[name_5] = null;
                }
                c = p + 1;
                ++i;
                if (i >= fLen) {
                    p = data.indexOf('\n', c);
                    if (p >= 0)
                        ++p;
                    else
                        p = len;
                    return p;
                }
            }
            else if (ch === 10) {
                var f_2 = fields[i];
                var name_6 = f_2.name;
                if (ch0 !== 8) {
                    if (p > c) {
                        var v = data.substring(c, p);
                        ret[name_6] = this.to(ret, v, f_2);
                    }
                }
                else {
                    ret[name_6] = null;
                }
                ++p;
                ++i;
                return p;
            }
        }
        var f = fields[i];
        var name = f.name;
        if (ch0 !== 8) {
            var v = data.substring(c);
            ret[name] = this.to(ret, v, f);
        }
        return len;
    };
    Entity.prototype.to = function (ret, v, f) {
        switch (f.type) {
            default: return v;
            case 'text':
            case 'char':
                return this.reverseNT(v);
            case 'datetime':
            case 'time':
            case 'timestamp':
                var n = Number(v);
                var date = isNaN(n) === true ? new Date(v) : new Date(n * 1000);
                return date;
            case 'date':
                var parts = v.split('-');
                return new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
            case 'tinyint':
            case 'smallint':
            case 'int':
            case 'bigint':
            case 'dec':
                return Number(v);
            case 'id':
                var id = Number(v);
                var _tuid = f._tuid;
                if (_tuid === undefined)
                    return id;
                return _tuid.boxId(id);
        }
    };
    Entity.prototype.reverseNT = function (text) {
        if (text === undefined)
            return;
        if (text === null)
            return;
        var len = text.length;
        var r = '';
        var p = 0;
        for (var i = 0; i < len; i++) {
            var c = text.charCodeAt(i);
            if (c === codeBackSlash) {
                if (i === len - 1)
                    break;
                var c1 = text.charCodeAt(i + 1);
                var ch = void 0;
                switch (c1) {
                    default: continue;
                    case codeBackSlash:
                        ch = '\\';
                        break;
                    case codeN:
                        ch = '\n';
                        break;
                    case codeT:
                        ch = '\t';
                        break;
                    case codeB:
                        ch = '\b';
                        break;
                    case codeF:
                        ch = '\f';
                        break;
                    case codeV:
                        ch = '\v';
                        break;
                    case codeR:
                        ch = '\r';
                        break;
                }
                r += text.substring(p, i) + ch;
                p = i + 2;
                ++i;
            }
        }
        r += text.substring(p, len);
        return r;
    };
    Entity.prototype.unpackArr = function (ret, arr, data, p) {
        var p0 = p;
        var vals = [], len = data.length;
        var name = arr.name, fields = arr.fields;
        while (p < len) {
            var ch = data.charCodeAt(p);
            if (ch === 10) {
                if (p === p0) {
                    ch = data.charCodeAt(p);
                    if (ch !== 10) {
                        throw new Error('upackArr: arr第一个字符是10，则必须紧跟一个10，表示整个arr的结束');
                    }
                    ++p;
                }
                ++p;
                break;
            }
            var val = {}; //new creater();
            vals.push(val);
            p = this.unpackRow(val, fields, data, p);
        }
        ret[name] = vals;
        return p;
    };
    return Entity;
}());
exports.Entity = Entity;
//# sourceMappingURL=entity.js.map