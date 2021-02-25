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
exports.PageStateItems = exports.Sheet = exports.UqSheet = void 0;
var entity_1 = require("./entity");
var pageItems_1 = require("../tool/pageItems");
var caller_1 = require("./caller");
var UqSheet = /** @class */ (function (_super) {
    __extends(UqSheet, _super);
    function UqSheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UqSheet.prototype, "typeName", {
        get: function () { return 'sheet'; },
        enumerable: false,
        configurable: true
    });
    /*
    setStates(states: SheetState[]) {
        for (let state of states) {
            this.setStateAccess(this.states.find(s=>s.name==state.name), state);
        }
    }*/
    UqSheet.prototype.setSchema = function (schema) {
        _super.prototype.setSchema.call(this, schema);
        this.states = schema.states;
        this.verify = schema.verify;
    };
    UqSheet.prototype.build = function (obj) {
        this.states = [];
        for (var _i = 0, _a = obj.ops; _i < _a.length; _i++) {
            var op = _a[_i];
            this.states.push({ name: op, actions: undefined });
        }
        /*
        for (let p in obj) {
            switch(p) {
                case '#':
                case '$': continue;
                default: this.states.push(this.createSheetState(p, obj[p])); break;
            }
        }*/
    };
    UqSheet.prototype.createSheetState = function (name, obj) {
        var ret = { name: name, actions: [] };
        var actions = ret.actions;
        for (var p in obj) {
            var action = { name: p };
            actions.push(action);
        }
        return ret;
    };
    UqSheet.prototype.save = function (discription, data) {
        return __awaiter(this, void 0, void 0, function () {
            var id, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.uq.id;
                        params = { app: id, discription: discription, data: data };
                        return [4 /*yield*/, new SaveCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.saveDebugDirect = function (discription, data) {
        return __awaiter(this, void 0, void 0, function () {
            var id, params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.uq.id;
                        params = { app: id, discription: discription, data: data };
                        return [4 /*yield*/, new SaveDirectCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.action = function (id, flow, state, action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ActionCaller(this, { id: id, flow: flow, state: state, action: action }).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.actionDebugDirect = function (id, flow, state, action) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new ActionDirectCaller(this, { id: id, flow: flow, state: state, action: action }).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.unpack = function (data) {
        //if (this.schema === undefined) await this.loadSchema();
        var ret = data[0];
        var brief = ret[0];
        var sheetData = this.unpackSheet(brief.data);
        var flows = data[1];
        return {
            brief: brief,
            data: sheetData,
            flows: flows,
        };
    };
    UqSheet.prototype.getSheet = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new GetSheetCaller(this, id).request()];
                    case 1:
                        ret = _a.sent();
                        if (!(ret[0].length === 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.getArchive(id)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, this.unpack(ret)];
                }
            });
        });
    };
    UqSheet.prototype.getArchive = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new SheetArchiveCaller(this, id).request()];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, this.unpack(ret)];
                }
            });
        });
    };
    UqSheet.prototype.getArchives = function (pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { pageStart: pageStart, pageSize: pageSize };
                        return [4 /*yield*/, new SheetArchivesCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.getStateSheets = function (state, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { state: state, pageStart: pageStart, pageSize: pageSize };
                        return [4 /*yield*/, new StateSheetsCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.createPageStateItems = function () { return new PageStateItems(this); };
    UqSheet.prototype.stateSheetCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new StateSheetCountCaller(this, undefined).request()];
                    case 1: 
                    /*
                    await this.loadSchema();
                    let ret:StateCount[] = await this.uqApi.stateSheetCount(this.name);
                    return this.states.map(s => {
                        let n = s.name, count = 0;
                        let r = ret.find(v => v.state === n);
                        if (r !== undefined) count = r.count;
                        return {state: n, count: count}
                    });
                    */
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.userSheets = function (state, user, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { state: state, user: user, pageStart: pageStart, pageSize: pageSize };
                        return [4 /*yield*/, new UserSheetsCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqSheet.prototype.mySheets = function (state, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var params;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        params = { state: state, pageStart: pageStart, pageSize: pageSize };
                        return [4 /*yield*/, new MySheetsCaller(this, params).request()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UqSheet;
}(entity_1.Entity));
exports.UqSheet = UqSheet;
var Sheet = /** @class */ (function (_super) {
    __extends(Sheet, _super);
    function Sheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sheet;
}(UqSheet));
exports.Sheet = Sheet;
var SheetCaller = /** @class */ (function (_super) {
    __extends(SheetCaller, _super);
    function SheetCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SheetCaller.prototype, "entity", {
        get: function () { return this._entity; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SheetCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name + "/" + this.suffix; },
        enumerable: false,
        configurable: true
    });
    return SheetCaller;
}(caller_1.EntityCaller));
var SaveCaller = /** @class */ (function (_super) {
    __extends(SaveCaller, _super);
    function SaveCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SaveCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    SaveCaller.prototype.buildParams = function () {
        var _a = this.params, app = _a.app, discription = _a.discription, data = _a.data;
        return {
            app: app,
            discription: discription,
            data: this.entity.pack(data)
        };
    };
    SaveCaller.prototype.xresult = function (res) {
        var verify = this.entity.verify;
        if (verify === undefined)
            return res;
        var resVerify = res.verify;
        if (resVerify === undefined || resVerify.length === 0) {
            res.verify = undefined;
            return res;
        }
        var returns = verify.returns;
        res.verify = this.entity.unpackReturns(resVerify, returns);
        return res;
    };
    return SaveCaller;
}(SheetCaller));
var SaveDirectCaller = /** @class */ (function (_super) {
    __extends(SaveDirectCaller, _super);
    function SaveDirectCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SaveDirectCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name + "/direct"; },
        enumerable: false,
        configurable: true
    });
    return SaveDirectCaller;
}(SaveCaller));
var ActionCaller = /** @class */ (function (_super) {
    __extends(ActionCaller, _super);
    function ActionCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = 'PUT';
        return _this;
    }
    Object.defineProperty(ActionCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name; },
        enumerable: false,
        configurable: true
    });
    return ActionCaller;
}(SheetCaller));
var ActionDirectCaller = /** @class */ (function (_super) {
    __extends(ActionDirectCaller, _super);
    function ActionDirectCaller() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ActionDirectCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name + "/direct"; },
        enumerable: false,
        configurable: true
    });
    return ActionDirectCaller;
}(ActionCaller));
var GetSheetCaller = /** @class */ (function (_super) {
    __extends(GetSheetCaller, _super);
    function GetSheetCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //protected readonly params: number;  // id
        _this.method = 'GET';
        return _this;
    }
    //private id:number;
    //protected readonly suffix = 'archive';
    GetSheetCaller.prototype.buildParams = function () { };
    Object.defineProperty(GetSheetCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name + "/get/" + this.params; },
        enumerable: false,
        configurable: true
    });
    return GetSheetCaller;
}(SheetCaller));
var SheetArchiveCaller = /** @class */ (function (_super) {
    __extends(SheetArchiveCaller, _super);
    function SheetArchiveCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //protected readonly params: number;  // id
        _this.method = 'GET';
        return _this;
    }
    //protected readonly suffix = 'archive';
    SheetArchiveCaller.prototype.buildParams = function () { };
    Object.defineProperty(SheetArchiveCaller.prototype, "path", {
        get: function () { return "sheet/" + this.entity.name + "/archive/" + this.params; },
        enumerable: false,
        configurable: true
    });
    return SheetArchiveCaller;
}(SheetCaller));
var SheetArchivesCaller = /** @class */ (function (_super) {
    __extends(SheetArchivesCaller, _super);
    function SheetArchivesCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = 'archives';
        return _this;
    }
    return SheetArchivesCaller;
}(SheetCaller));
var StateSheetsCaller = /** @class */ (function (_super) {
    __extends(StateSheetsCaller, _super);
    function StateSheetsCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = 'states';
        return _this;
    }
    return StateSheetsCaller;
}(SheetCaller));
var StateSheetCountCaller = /** @class */ (function (_super) {
    __extends(StateSheetCountCaller, _super);
    function StateSheetCountCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.method = 'GET';
        _this.suffix = 'statecount';
        return _this;
    }
    StateSheetCountCaller.prototype.xresult = function (res) {
        var states = this.entity.states;
        return states.map(function (s) {
            var n = s.name, count = 0;
            var r = res.find(function (v) { return v.state === n; });
            if (r !== undefined)
                count = r.count;
            return { state: n, count: count };
        });
    };
    return StateSheetCountCaller;
}(SheetCaller));
var UserSheetsCaller = /** @class */ (function (_super) {
    __extends(UserSheetsCaller, _super);
    function UserSheetsCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = 'user-sheets';
        return _this;
    }
    UserSheetsCaller.prototype.xresult = function (res) {
        return res;
    };
    return UserSheetsCaller;
}(SheetCaller));
var MySheetsCaller = /** @class */ (function (_super) {
    __extends(MySheetsCaller, _super);
    function MySheetsCaller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.suffix = 'my-sheets';
        return _this;
    }
    MySheetsCaller.prototype.xresult = function (res) {
        return res;
    };
    return MySheetsCaller;
}(SheetCaller));
var PageStateItems = /** @class */ (function (_super) {
    __extends(PageStateItems, _super);
    function PageStateItems(sheet) {
        var _this = _super.call(this, true) || this;
        _this.sheet = sheet;
        _this.pageSize = 10;
        return _this;
    }
    PageStateItems.prototype.loadResults = function (param, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sheet.getStateSheets(param, pageStart, pageSize)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, { $page: ret }];
                }
            });
        });
    };
    /*
    protected async load(param:any, pageStart:any, pageSize:number):Promise<any[]> {
        let ret = await this.sheet.getStateSheets(param, pageStart, pageSize);
        return ret;
    }
    */
    PageStateItems.prototype.getPageId = function (item) {
        return item === undefined ? 0 : item.id;
    };
    return PageStateItems;
}(pageItems_1.PageItems));
exports.PageStateItems = PageStateItems;
//# sourceMappingURL=sheet.js.map