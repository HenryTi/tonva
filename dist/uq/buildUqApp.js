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
exports.buildUqApp = exports.uqAppStart = void 0;
var fs_1 = __importDefault(require("fs"));
var index_1 = require("./index");
var components_1 = require("../components");
//import { env } from 'tonva/tool';
//const uqAppPath = 'src/UqApp';
var red = '\x1b[41m%s\x1b[0m';
var lastBuildTime = 0;
var gUqOwnerMap;
function uqAppStart(options) {
    return __awaiter(this, void 0, void 0, function () {
        var uqAppName, appVersion, appUnitId;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uqAppName = options.uqAppName, appVersion = options.uqAppVersion, appUnitId = options.uqAppUnitId;
                    process.env.REACT_APP_UNIT = String(appUnitId);
                    components_1.nav.forceDevelopment = true;
                    return [4 /*yield*/, components_1.nav.init()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, index_1.UQsMan.load(uqAppName, appVersion, undefined)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.uqAppStart = uqAppStart;
function buildUqApp(options) {
    return __awaiter(this, void 0, void 0, function () {
        var uqAppSrcPath, uqOwnerMap, i, tsAppName, tsAppConfig, tsIndex, tsCApp, tsCBase, tsVMain;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    uqAppSrcPath = options.uqAppSrcPath, uqOwnerMap = options.uqOwnerMap;
                    if (!uqAppSrcPath)
                        uqAppSrcPath = 'src/UqApp';
                    gUqOwnerMap = uqOwnerMap || {};
                    for (i in gUqOwnerMap) {
                        gUqOwnerMap[i.toLowerCase()] = gUqOwnerMap[i];
                    }
                    if (lastBuildTime > 0) {
                        //if (Date.now() - lastBuildTime < 30*1000) {
                        console.log(red, 'quit !');
                        return [2 /*return*/];
                    }
                    if (!fs_1.default.existsSync(uqAppSrcPath)) {
                        fs_1.default.mkdirSync(uqAppSrcPath);
                    }
                    tsAppName = buildTsAppName(options);
                    saveTsFile(uqAppSrcPath, 'appName', tsAppName);
                    tsAppConfig = buildTsAppConfig(options);
                    saveTsFileIfNotExists(uqAppSrcPath, 'appConfig', tsAppConfig);
                    tsIndex = buildTsIndex();
                    saveTsFile(uqAppSrcPath, 'index', tsIndex);
                    tsCApp = buildTsCApp();
                    saveTsFileIfNotExists(uqAppSrcPath, 'CApp', tsCApp);
                    tsCBase = buildTsCBase();
                    saveTsFile(uqAppSrcPath, 'CBase', tsCBase);
                    tsVMain = buildTsVMain();
                    saveTsFileIfNotExists(uqAppSrcPath, 'VMain', tsVMain, 'tsx');
                    saveTsFile(uqAppSrcPath, 'uqs', '');
                    fs_1.default.unlinkSync(uqAppSrcPath + '/uqs.ts');
                    return [4 /*yield*/, buildUqsFolder(uqAppSrcPath + '/uqs', options)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.buildUqApp = buildUqApp;
;
function saveTsFileIfNotExists(uqAppSrcPath, fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var tsFile = uqAppSrcPath + "/" + fileName + "." + suffix;
    if (fs_1.default.existsSync(tsFile) === true)
        return;
    saveTsFile(uqAppSrcPath, fileName, content, suffix);
}
function saveTsFile(uqAppSrcPath, fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var srcFile = uqAppSrcPath + "/" + fileName + "." + suffix + ".txt";
    var tsFile = uqAppSrcPath + "/" + fileName + "." + suffix;
    if (!fs_1.default.existsSync(srcFile)) {
        if (fs_1.default.existsSync(tsFile)) {
            fs_1.default.renameSync(tsFile, srcFile);
        }
    }
    fs_1.default.writeFileSync(tsFile, content);
    lastBuildTime = Date.now();
    console.log(red, tsFile + " is built");
}
function overrideTsFile(uqAppSrcPath, fileName, content, suffix) {
    if (suffix === void 0) { suffix = 'ts'; }
    var tsFile = uqAppSrcPath + "/" + fileName + "." + suffix;
    fs_1.default.writeFileSync(tsFile, content);
    lastBuildTime = Date.now();
    console.log(red, tsFile + " is built");
}
function buildTsHeader() {
    return "//=== UqApp builder created on " + new Date() + " ===//";
}
function buildTsAppName(options) {
    var uqAppName = options.uqAppName, appName = options.appName;
    return buildTsHeader() + "\nexport const appName = '" + (uqAppName || appName) + "';\n";
}
function buildTsAppConfig(options) {
    var version = options.version, noUnit = options.noUnit, tvs = options.tvs, oem = options.oem, htmlTitle = options.htmlTitle;
    function toString(s) {
        if (s === undefined)
            return;
        if (s === null)
            return null;
        return "'" + s + "'";
    }
    return buildTsHeader() + "\nimport { AppConfig } from \"tonva\";\nimport { appName } from \"./appName\";\n\nexport const appConfig: AppConfig = {\n    appName: appName,\n\tversion: " + toString(version) + ",\n\tnoUnit: " + noUnit + ",\n    tvs: " + JSON.stringify(tvs) + ",\n\toem: " + toString(oem) + ",\n\thtmlTitle: " + toString(htmlTitle) + ",\n};\n";
}
function buildTsIndex() {
    return buildTsHeader() + "\nexport { appConfig } from './appConfig';\nexport { CUqApp, CUqBase, CUqSub } from './CBase';\nexport { CApp } from './CApp';\nexport * from './uqs';\n";
}
function buildTsCApp() {
    return buildTsHeader() + "\nimport { CUqApp } from \"./CBase\";\nimport { VMain } from \"./VMain\";\n\nexport class CApp extends CUqApp {\n\tprotected async internalStart(isUserLogin: boolean) {\n\t\tthis.openVPage(VMain, undefined, this.dispose);\n\t}\n}\n";
}
function buildTsCBase() {
    return buildTsHeader() + "\nimport { CSub, CBase, CAppBase, IConstructor } from 'tonva';\nimport { UQs } from './uqs';\nimport { CApp } from './CApp';\n\nexport abstract class CUqBase extends CBase {\n\tget cApp(): CApp { return this._cApp; }\n\tprotected get uqs(): UQs { return this._uqs as UQs };\n}\n\nexport abstract class CUqSub<T extends CUqBase> extends CSub<T> {\n\tget cApp(): CApp { return this._cApp; }\n\tprotected get uqs(): UQs { return this._uqs as UQs };\n\tget owner(): T { return this._owner as T }\n}\n\nexport abstract class CUqApp extends CAppBase {\n\tget uqs(): UQs { return this._uqs };\n\n\tprotected newC<T extends CUqBase>(type: IConstructor<T>): T {\n\t\tlet c = new type(this);\n\t\tc.init();\n\t\treturn c;\n\t}\n}\n";
}
function buildTsVMain() {
    return buildTsHeader() + "\nimport { VPage, Page } from 'tonva';\nimport { CApp } from './CApp';\n\nexport class VMain extends VPage<CApp> {\n\tasync open(param?: any, onClosePage?: (ret:any)=>void) {\n\t\tthis.openPage(this.render, param, onClosePage);\n\t}\n\n\trender = (param?: any): JSX.Element => {\n\t\treturn <Page header=\"TEST\">\n\t\t\t<div className=\"m-3\">\n\t\t\t\t<div>{this.renderMe()}</div>\n\t\t\t\t<div className=\"mb-5\">\u540C\u82B1\u6837\u4F8B\u4E3B\u9875\u9762</div>\n\t\t\t</div>\n\t\t</Page>;\n\t}\n}\n";
}
function buildUqsFolder(uqsFolder, options) {
    return __awaiter(this, void 0, void 0, function () {
        var uqsMan, coll, promiseArr, uqs, i, lowerI, error, _i, uqs_1, uq, tsUqsIndexHeader, tsUqsIndexContent, tsUqsExports, _a, uqs_2, uq, uqOwner, uqName, o1, n1, tsUq, _b, _c, enm, enmName;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, uqAppStart(options)];
                case 1:
                    _d.sent();
                    uqsMan = index_1.UQsMan.value;
                    coll = uqsMan.getUqCollection();
                    promiseArr = [];
                    uqs = [];
                    for (i in coll) {
                        lowerI = i.toLowerCase();
                        if (lowerI !== i)
                            continue;
                        uqs.push(coll[i]);
                    }
                    if (!uqsMan.id) {
                        error = options.uqAppName + ' not defined!';
                        throw new Error(error);
                    }
                    for (_i = 0, uqs_1 = uqs; _i < uqs_1.length; _i++) {
                        uq = uqs_1[_i];
                        promiseArr.push(loadUqEntities(uq));
                    }
                    return [4 /*yield*/, Promise.all(promiseArr)];
                case 2:
                    _d.sent();
                    if (!fs_1.default.existsSync(uqsFolder)) {
                        fs_1.default.mkdirSync(uqsFolder);
                    }
                    tsUqsIndexHeader = buildTsHeader();
                    tsUqsIndexContent = "\n\nexport interface UQs {";
                    tsUqsExports = '\n\n';
                    for (_a = 0, uqs_2 = uqs; _a < uqs_2.length; _a++) {
                        uq = uqs_2[_a];
                        uqOwner = uq.uqOwner, uqName = uq.uqName;
                        o1 = getUqOwnerName(uqOwner);
                        n1 = getUqName(uqName);
                        tsUq = buildTsUq(uq);
                        overrideTsFile(uqsFolder, o1 + n1, tsUq);
                        // as ${o1}${n1}
                        tsUqsIndexHeader += "\nimport { " + o1 + n1 + " } from './" + o1 + n1 + "';";
                        tsUqsIndexContent += "\n\t" + o1 + n1 + ": " + o1 + n1 + ".Uq" + o1 + n1 + ";";
                        tsUqsExports += "\nexport {";
                        for (_b = 0, _c = uq.enumArr; _b < _c.length; _b++) {
                            enm = _c[_b];
                            enmName = "" + capitalCaseString(enm.sName);
                            tsUqsExports += "\n\t" + enmName + " as " + o1 + n1 + enmName + ",";
                        }
                        tsUqsExports += "\n} from './" + o1 + n1 + "';";
                    }
                    overrideTsFile(uqsFolder, 'index', tsUqsIndexHeader + tsUqsIndexContent + '\n}' + tsUqsExports + '\n');
                    return [2 /*return*/];
            }
        });
    });
}
function buildTsUq(uq) {
    var ret = buildTsHeader();
    ret += '\nimport { UqTuid, UqQuery, UqAction, UqSheet/*, Map, Tag*/ } from "tonva";';
    //for (let uq of uqs) {
    ret += '\n';
    ret += '\n//===============================';
    ret += "\n//======= UQ " + uq.name + " ========";
    ret += '\n//===============================';
    ret += '\n';
    ret += buildUQ(uq);
    ret += '\n';
    ret += '\n';
    //}
    /*
    ret += '\n//===============================';
    ret += `\n//============= UQs =============`;
    ret += '\n//===============================';
    ret += '\nexport interface UQs {';
    for (let uq of uqs) {
        let {uqOwner, uqName} = uq;
        let o1 = getUqOwnerName(uqOwner);
        let n1 = getUqName(uqName);
        ret += `\n\t${o1}${n1}: ${o1}${n1}.Uq;`;
    }
    ret += '\n}\n';
    */
    return ret;
}
function capitalCaseString(s) {
    var parts = s.split(/[-._]/);
    return parts.map(function (v) { return firstCharUppercase(v); }).join('');
}
function camelCaseString(s) {
    var parts = s.split(/[-._]/);
    var len = parts.length;
    parts[0] = firstCharLowercase(parts[0]);
    for (var i = 1; i < len; i++) {
        parts[1] = firstCharUppercase(parts[1]);
    }
    return parts.join('');
}
function entityName(s) {
    return capitalCaseString(s);
}
function getUqOwnerName(uqOwner) {
    var uo = gUqOwnerMap[uqOwner.toLowerCase()];
    if (uo === undefined)
        return '';
    if (uo.length === 0)
        return '';
    return capitalCaseString(uo);
}
function getUqName(uqName) {
    return capitalCaseString(uqName);
}
function uqBlock(entity, build) {
    var name = entity.name;
    if (name.indexOf('$') > 0)
        return '';
    var entityCode = build(entity);
    if (!entityCode)
        return '';
    return '\n' + entityCode;
}
function uqEntityInterface(entity, buildInterface) {
    var name = entity.name;
    if (name.indexOf('$') > 0)
        return '';
    var entityCode = buildInterface(entity);
    if (!entityCode)
        return '';
    //return uqFirstLine(entity) + 
    return '\n' + entityCode + '\n';
}
var aCode = 'a'.charCodeAt(0);
var zCode = 'z'.charCodeAt(0);
function firstCharUppercase(s) {
    if (!s)
        return '';
    var c = s.charCodeAt(0);
    if (c >= aCode && c <= zCode) {
        return String.fromCharCode(c - 0x20) + s.substr(1);
    }
    return s;
}
var ACode = 'A'.charCodeAt(0);
var ZCode = 'Z'.charCodeAt(0);
function firstCharLowercase(s) {
    if (!s)
        return '';
    var c = s.charCodeAt(0);
    if (c >= ACode && c <= ZCode) {
        return String.fromCharCode(c + 0x20) + s.substr(1);
    }
    return s;
}
function loadUqEntities(uq) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, uq.loadAllSchemas()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function buildUQ(uq) {
    var uqOwner = uq.uqOwner, uqName = uq.uqName;
    var ts = "";
    uq.enumArr.forEach(function (v) { return ts += uqEntityInterface(v, buildEnumInterface); });
    ts += "\nexport declare namespace " + getUqOwnerName(uqOwner) + getUqName(uqName) + " {";
    uq.tuidArr.forEach(function (v) { return ts += uqEntityInterface(v, buildTuidInterface); });
    uq.actionArr.forEach(function (v) { return ts += uqEntityInterface(v, buildActionInterface); });
    uq.sheetArr.forEach(function (v) { return ts += uqEntityInterface(v, buildSheetInterface); });
    uq.queryArr.forEach(function (v) { return ts += uqEntityInterface(v, buildQueryInterface); });
    uq.bookArr.forEach(function (v) { return ts += uqEntityInterface(v, buildBookInterface); });
    uq.mapArr.forEach(function (v) { return ts += uqEntityInterface(v, buildMapInterface); });
    uq.historyArr.forEach(function (v) { return ts += uqEntityInterface(v, buildHistoryInterface); });
    uq.pendingArr.forEach(function (v) { return ts += uqEntityInterface(v, buildPendingInterface); });
    uq.tagArr.forEach(function (v) { return ts += uqEntityInterface(v, buildTagInterface); });
    ts += "\n\nexport interface Uq" + getUqOwnerName(uqOwner) + getUqName(uqName) + " {";
    uq.tuidArr.forEach(function (v) { return ts += uqBlock(v, buildTuid); });
    uq.actionArr.forEach(function (v) { return ts += uqBlock(v, buildAction); });
    //uq.enumArr.forEach(v => ts += uqBlock<UqEnum>(v, buildEnum));
    uq.sheetArr.forEach(function (v) { return ts += uqBlock(v, buildSheet); });
    uq.queryArr.forEach(function (v) { return ts += uqBlock(v, buildQuery); });
    uq.bookArr.forEach(function (v) { return ts += uqBlock(v, buildBook); });
    uq.mapArr.forEach(function (v) { return ts += uqBlock(v, buildMap); });
    uq.historyArr.forEach(function (v) { return ts += uqBlock(v, buildHistory); });
    uq.pendingArr.forEach(function (v) { return ts += uqBlock(v, buildPending); });
    uq.tagArr.forEach(function (v) { return ts += uqBlock(v, buildTag); });
    ts += '\n}\n}\n';
    return ts;
}
function buildFields(fields, indent) {
    if (indent === void 0) { indent = 1; }
    if (!fields)
        return;
    var ts = '';
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var f = fields_1[_i];
        ts += buildField(f, indent);
    }
    return ts;
}
var fieldTypeMap = {
    "char": "string",
    "text": "string",
    "id": "number",
    "int": "number",
    "bigint": "number",
    "smallint": "number",
    "tinyint": "number",
};
function buildField(field, indent) {
    if (indent === void 0) { indent = 1; }
    var type = field.type;
    var s = fieldTypeMap[type];
    if (!s)
        s = 'any';
    return "\n" + '\t'.repeat(indent) + field.name + ": " + s + ";";
}
function buildArrs(arrFields) {
    if (!arrFields)
        return '';
    var ts = '\n';
    for (var _i = 0, arrFields_1 = arrFields; _i < arrFields_1.length; _i++) {
        var af = arrFields_1[_i];
        ts += "\t" + camelCaseString(af.name) + ": {";
        ts += buildFields(af.fields, 2);
        ts += '\n\t}[];\n';
    }
    return ts;
}
var typeMap = {
    action: 'Action',
    query: 'Query',
};
function buildReturns(entity, returns) {
    if (!returns)
        return;
    //let {typeName} = entity;
    //let type = typeMap[typeName] || typeName;
    var sName = entity.sName;
    sName = capitalCaseString(sName);
    var ts = '';
    for (var _i = 0, returns_1 = returns; _i < returns_1.length; _i++) {
        var ret = returns_1[_i];
        var retName = capitalCaseString(ret.name);
        ts += "interface Return" + sName + retName + " {";
        ts += buildFields(ret.fields);
        ts += '\n}\n';
    }
    ts += "interface Result" + sName + " {\n";
    for (var _a = 0, returns_2 = returns; _a < returns_2.length; _a++) {
        var ret = returns_2[_a];
        var retName = capitalCaseString(ret.name);
        ts += "\t" + ret.name + ": Return" + sName + retName + "[];\n";
    }
    ts += '}';
    return ts;
}
function buildTuid(tuid) {
    var ts = "\t" + entityName(tuid.sName) + ": UqTuid<Tuid" + capitalCaseString(tuid.sName) + ">;";
    return ts;
}
function buildTuidInterface(tuid) {
    var ts = "export interface Tuid" + capitalCaseString(tuid.sName) + " {";
    ts += buildFields(tuid.fields);
    ts += '\n}';
    return ts;
}
function buildAction(action) {
    var ts = "\t" + entityName(action.sName) + ": UqAction<Param" + capitalCaseString(action.sName) + ", Result" + capitalCaseString(action.sName) + ">;";
    return ts;
}
function buildActionInterface(action) {
    var ts = "export interface Param" + capitalCaseString(action.sName) + " {";
    ts += buildFields(action.fields);
    ts += buildArrs(action.arrFields);
    ts += '\n}\n';
    ts += buildReturns(action, action.returns);
    return ts;
}
function buildEnumInterface(enm) {
    var schema = enm.schema;
    if (!schema)
        return;
    var values = schema.values;
    var ts = "export enum " + capitalCaseString(enm.sName) + " {";
    var first = true;
    for (var i in values) {
        if (first === false) {
            ts += ',';
        }
        else {
            first = false;
        }
        var v = values[i];
        ts += '\n\t' + i + ' = ';
        if (typeof v === 'string') {
            ts += '"' + v + '"';
        }
        else {
            ts += v;
        }
    }
    return ts += '\n};';
}
function buildQuery(query) {
    var sName = query.sName;
    var ts = "\t" + entityName(sName) + ": UqQuery<Param" + capitalCaseString(sName) + ", Result" + capitalCaseString(sName) + ">;";
    return ts;
}
function buildQueryInterface(query) {
    var ts = "export interface Param" + capitalCaseString(query.sName) + " {";
    ts += buildFields(query.fields);
    ts += '\n}\n';
    ts += buildReturns(query, query.returns);
    return ts;
}
function buildSheet(sheet) {
    var sName = sheet.sName, verify = sheet.verify;
    var cName = capitalCaseString(sName);
    var v = verify ? "Verify" + cName : 'any';
    var ts = "\t" + entityName(sName) + ": UqSheet<Sheet" + cName + ", " + v + ">;";
    return ts;
}
function buildSheetInterface(sheet) {
    var sName = sheet.sName, fields = sheet.fields, arrFields = sheet.arrFields, verify = sheet.verify;
    var ts = "export interface Sheet" + capitalCaseString(sName) + " {";
    ts += buildFields(fields);
    ts += buildArrs(arrFields);
    ts += '}';
    if (verify) {
        var returns = verify.returns;
        ts += "\nexport interface Verify" + capitalCaseString(sName) + " {";
        for (var _i = 0, returns_3 = returns; _i < returns_3.length; _i++) {
            var item = returns_3[_i];
            var arrName = item.name, fields_2 = item.fields;
            ts += '\n\t' + arrName + ': {';
            ts += buildFields(fields_2, 2);
            ts += '\n\t}[];';
        }
        ts += '\n}';
    }
    return ts;
}
function buildBook(book) {
    return;
}
function buildBookInterface(book) {
    return;
}
function buildMap(map) {
    return;
}
function buildMapInterface(map) {
    return;
}
function buildHistory(history) {
    return;
}
function buildHistoryInterface(history) {
    return;
}
function buildPending(pending) {
    return;
}
function buildPendingInterface(pending) {
    return;
}
function buildTag(tag) {
    return;
}
function buildTagInterface(tag) {
    return;
}
//# sourceMappingURL=buildUqApp.js.map