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
exports.userApi = exports.UserApi = exports.loadAppUqs = exports.CenterAppApi = exports.callCenterapi = exports.CallCenterApi = exports.uqTokenApi = exports.UqTokenApi = exports.CenterApiBase = exports.setCenterToken = exports.centerToken = exports.setCenterUrl = exports.UnitxApi = exports.logoutUnitxApis = exports.UqApi = exports.logoutApis = void 0;
var lodash_1 = __importDefault(require("lodash"));
var httpChannel_1 = require("./httpChannel");
var httpChannelUI_1 = require("./httpChannelUI");
var appBridge_1 = require("./appBridge");
var apiBase_1 = require("./apiBase");
var host_1 = require("./host");
var tool_1 = require("../tool");
var user_1 = require("../tool/user");
var channelUIs = {};
var channelNoUIs = {};
function logoutApis() {
    channelUIs = {};
    channelNoUIs = {};
    logoutUnitxApis();
    appBridge_1.logoutUqTokens();
}
exports.logoutApis = logoutApis;
/*
interface UqLocals {
    user: number;
    unit: number;
    uqs: {[uq:string]: UqLocal};
}
*/
/*
const uqLocalEntities = 'uqLocalEntities';
class CacheUqLocals {
    private local:UqLocals;

    async loadAccess(uqApi: UqApi):Promise<any> {
        try {
            let {uqOwner, uqName} = uqApi;
            if (this.local === undefined) {
                let ls = null; // localStorage.getItem(uqLocalEntities);
                if (ls !== null) {
                    this.local = JSON.parse(ls);
                }
            }
            if (this.local !== undefined) {
                let {user, uqs} = this.local;
                if (user !== loginedUserId || uqs === undefined) {
                    this.local = undefined;
                }
                else {
                    for (let i in uqs) {
                        let ul = uqs[i];
                        ul.isNet = undefined;
                    }
                }
            }
            if (this.local === undefined) {
                this.local = {
                    user: loginedUserId,
                    unit: undefined,
                    uqs: {}
                };
            }

            let ret: any;
            let un = uqOwner+'/'+uqName;
            let uq = this.local.uqs[un];
            if (uq !== undefined) {
                let {value} = uq;
                ret = value;
            }
            if (ret === undefined) {
                ret = await uqApi.__loadAccess();
                //this.saveLocal(un, ret);
            }
            return _.cloneDeep(ret);
        }
        catch (err) {
            this.local = undefined;
            localStorage.removeItem(uqLocalEntities);
            throw err;
        }
    }

    private saveLocal(uqName:string, accessValue: any) {
        this.local.uqs[uqName] = {
            value: accessValue,
            isNet: true,
        }
        let str = JSON.stringify(this.local);
        localStorage.setItem(uqLocalEntities, str);
    }

    async checkAccess(uqApi: UqApi):Promise<boolean> {
        if (this.local === undefined) return false;
        let {uqOwner, uqName} = uqApi;
        let un = uqOwner+'/'+uqName;
        let uq = this.local.uqs[un];
        if (uq === undefined) return false;
        let {isNet, value} = uq;
        if (isNet === true) return true;
        let ret = await uqApi.__loadAccess();
        let isMatch = _.isMatch(value, ret);
        if (isMatch === false) {
            this.saveLocal(un, ret);
            return false;
        }
        uq.isNet = true;
        return true;
    }
}

const localUqs = new CacheUqLocals;
*/
var UqApi = /** @class */ (function (_super) {
    __extends(UqApi, _super);
    function UqApi(basePath, appOwner, appName, uqOwner, uqName, access, showWaiting) {
        var _this = _super.call(this, basePath, showWaiting) || this;
        _this.appOwner = appOwner;
        _this.appName = appName;
        if (uqName) {
            _this.uqOwner = uqOwner;
            _this.uqName = uqName;
            _this.uq = uqOwner + '/' + uqName;
        }
        _this.access = access;
        _this.showWaiting = showWaiting;
        return _this;
    }
    //setUqVersion(uqVersion:number) {this.uqVersion = undefined}
    UqApi.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, appBridge_1.buildAppUq(this.uq, this.uqOwner, this.uqName, this.appOwner, this.appName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UqApi.prototype.getHttpChannel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channels, channelUI, channel, arr;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.showWaiting === true || this.showWaiting === undefined) {
                    channels = channelUIs;
                    channelUI = new httpChannelUI_1.HttpChannelNavUI();
                }
                else {
                    channels = channelNoUIs;
                }
                channel = channels[this.uq];
                if (channel !== undefined) {
                    if (Array.isArray(channel) === false)
                        return [2 /*return*/, channel];
                }
                else {
                    channel = channels[this.uq] = [];
                }
                arr = channel;
                return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                        var uqToken, url, token, _i, arr_1, pv;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    arr.push({ resolve: resolve, reject: reject });
                                    if (arr.length !== 1)
                                        return [2 /*return*/];
                                    uqToken = appBridge_1.appUq(this.uq);
                                    if (!!uqToken) return [3 /*break*/, 2];
                                    //debugger;
                                    return [4 /*yield*/, this.init()];
                                case 1:
                                    //debugger;
                                    _a.sent();
                                    uqToken = appBridge_1.appUq(this.uq);
                                    _a.label = 2;
                                case 2:
                                    url = uqToken.url, token = uqToken.token;
                                    this.token = token;
                                    channel = new httpChannel_1.UqHttpChannel(url, token, channelUI);
                                    channels[this.uq] = channel;
                                    for (_i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                                        pv = arr_1[_i];
                                        pv.resolve(channel);
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            });
        });
    };
    /*async update():Promise<string> {
        return await this.get('update');
    }*/
    /*
    async __loadAccess():Promise<any> {
        let acc = this.access === undefined?
            '' :
            this.access.join('|');
        let ret = await this.get('access', {acc:acc});
        return ret;
    }
    */
    UqApi.prototype.loadAccess = function () {
        return __awaiter(this, void 0, void 0, function () {
            var acc, ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        acc = this.access === undefined ?
                            '' :
                            this.access.join('|');
                        return [4 /*yield*/, this.get('access', { acc: acc })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    /*async loadEntities():Promise<any> {
        return await this.get('entities');
    }*/
    /*
    async checkAccess():Promise<boolean> {
        return await localUqs.checkAccess(this);
    }
    */
    UqApi.prototype.allSchemas = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('all-schemas')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqApi.prototype.schema = function (name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('schema/' + name)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UqApi.prototype.queueModify = function (start, page, entities) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('queue-modify', { start: start, page: page, entities: entities })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UqApi;
}(apiBase_1.ApiBase));
exports.UqApi = UqApi;
var channels = {};
function logoutUnitxApis() {
    channels = {};
}
exports.logoutUnitxApis = logoutUnitxApis;
var UnitxApi = /** @class */ (function (_super) {
    __extends(UnitxApi, _super);
    function UnitxApi(unitId) {
        var _this = _super.call(this, 'tv/', undefined, undefined, undefined, undefined, undefined, true) || this;
        _this.unitId = unitId;
        return _this;
    }
    UnitxApi.prototype.getHttpChannel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channel, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        channel = channels[this.unitId];
                        if (channel !== undefined)
                            return [2 /*return*/, channel];
                        _a = channels;
                        _b = this.unitId;
                        return [4 /*yield*/, this.buildChannel()];
                    case 1: return [2 /*return*/, _a[_b] = _c.sent()];
                }
            });
        });
    };
    UnitxApi.prototype.buildChannel = function () {
        return __awaiter(this, void 0, void 0, function () {
            var channelUI, centerAppApi, ret, token, db, url, urlTest, realUrl;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        channelUI = new httpChannelUI_1.HttpChannelNavUI();
                        centerAppApi = new CenterAppApi('tv/', undefined);
                        return [4 /*yield*/, centerAppApi.unitxUq(this.unitId)];
                    case 1:
                        ret = _a.sent();
                        token = ret.token, db = ret.db, url = ret.url, urlTest = ret.urlTest;
                        realUrl = host_1.host.getUrlOrTest(db, url, urlTest);
                        this.token = token;
                        return [2 /*return*/, new httpChannel_1.UqHttpChannel(realUrl, token, channelUI)];
                }
            });
        });
    };
    return UnitxApi;
}(UqApi));
exports.UnitxApi = UnitxApi;
var centerHost;
function setCenterUrl(url) {
    console.log('setCenterUrl %s', url);
    centerHost = url;
    //centerToken = undefined;
    centerChannel = undefined;
    centerChannelUI = undefined;
}
exports.setCenterUrl = setCenterUrl;
exports.centerToken = undefined;
var loginedUserId = 0;
function setCenterToken(userId, t) {
    loginedUserId = userId;
    exports.centerToken = t;
    console.log('setCenterToken %s', t);
    centerChannel = undefined;
    centerChannelUI = undefined;
}
exports.setCenterToken = setCenterToken;
var centerChannelUI;
var centerChannel;
function getCenterChannelUI() {
    if (centerChannelUI !== undefined)
        return centerChannelUI;
    return centerChannelUI = new httpChannel_1.CenterHttpChannel(centerHost, exports.centerToken, new httpChannelUI_1.HttpChannelNavUI());
}
function getCenterChannel() {
    if (centerChannel !== undefined)
        return centerChannel;
    return centerChannel = new httpChannel_1.CenterHttpChannel(centerHost, exports.centerToken);
}
var CenterApiBase = /** @class */ (function (_super) {
    __extends(CenterApiBase, _super);
    function CenterApiBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    constructor(path: string, showWaiting?: boolean) {
        super(path, showWaiting);
    }*/
    CenterApiBase.prototype.getHttpChannel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, (this.showWaiting === true || this.showWaiting === undefined) ?
                        getCenterChannelUI() :
                        getCenterChannel()];
            });
        });
    };
    return CenterApiBase;
}(apiBase_1.ApiBase));
exports.CenterApiBase = CenterApiBase;
var uqTokensName = 'uqTokens';
var UqTokenApi = /** @class */ (function (_super) {
    __extends(UqTokenApi, _super);
    function UqTokenApi() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.localMap = tool_1.env.localDb.map(uqTokensName);
        return _this;
    }
    UqTokenApi.prototype.uq = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var uqOwner, uqName, un, localCache, uqToken, unit, user, nowTick, tick, value, appUqParams, ret, unit, uqOwner_1, uqName_1, err, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uqOwner = params.uqOwner, uqName = params.uqName;
                        un = uqOwner + '/' + uqName;
                        localCache = this.localMap.child(un);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        uqToken = localCache.get();
                        if (uqToken !== undefined) {
                            unit = uqToken.unit, user = uqToken.user;
                            if (unit !== params.unit || user !== loginedUserId) {
                                localCache.remove();
                                uqToken = undefined;
                            }
                        }
                        nowTick = Math.floor(Date.now() / 1000);
                        if (uqToken !== undefined) {
                            tick = uqToken.tick, value = uqToken.value;
                            if (value !== undefined && (nowTick - tick) < 24 * 3600) {
                                return [2 /*return*/, lodash_1.default.clone(value)];
                            }
                        }
                        appUqParams = lodash_1.default.clone(params);
                        appUqParams.testing = host_1.host.testing;
                        return [4 /*yield*/, this.get('app-uq', appUqParams)];
                    case 2:
                        ret = _a.sent();
                        if (ret === undefined) {
                            unit = params.unit, uqOwner_1 = params.uqOwner, uqName_1 = params.uqName;
                            err = "center get app-uq(unit=" + unit + ", '" + uqOwner_1 + "/" + uqName_1 + "') - not exists or no unit-service";
                            throw err;
                        }
                        uqToken = {
                            unit: params.unit,
                            user: loginedUserId,
                            tick: nowTick,
                            value: ret,
                        };
                        localCache.set(uqToken);
                        return [2 /*return*/, lodash_1.default.clone(ret)];
                    case 3:
                        err_1 = _a.sent();
                        localCache.remove();
                        throw err_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UqTokenApi;
}(CenterApiBase));
exports.UqTokenApi = UqTokenApi;
exports.uqTokenApi = new UqTokenApi('tv/tie/', undefined);
var CallCenterApi = /** @class */ (function (_super) {
    __extends(CallCenterApi, _super);
    function CallCenterApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallCenterApi.prototype.directCall = function (url, method, body) {
        return this.call(url, method, body);
    };
    return CallCenterApi;
}(CenterApiBase));
exports.CallCenterApi = CallCenterApi;
exports.callCenterapi = new CallCenterApi('', undefined);
//const appUqsName = 'appUqs';
var CenterAppApi = /** @class */ (function (_super) {
    __extends(CenterAppApi, _super);
    function CenterAppApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //private local: LocalCache = env.localDb.item(appUqsName);
    //private cachedUqs: UqAppData;
    CenterAppApi.prototype.uqs = function (appOwner, appName) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/app-uqs', { appOwner: appOwner, appName: appName })];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret];
                }
            });
        });
    };
    CenterAppApi.prototype.uqsPure = function (appOwner, appName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/app-uqs', { appOwner: appOwner, appName: appName })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /*
    private async isOkCheckUqs(appOwner:string, appName:string):Promise<boolean> {
        let ret = await this.uqsPure(appOwner, appName);
        let {id:cachedId, uqs:cachedUqs} = this.local.get(); //.cachedUqs;
        let {id:retId, uqs:retUqs} = ret;
        if (cachedId !== retId) return false;
        if (cachedUqs.length !== retUqs.length) return false;
        let len = cachedUqs.length;
        for (let i=0; i<len; i++) {
            if (_.isMatch(cachedUqs[i], retUqs[i]) === false) return false;
        }
        return true;
    }
    async checkUqs(appOwner:string, appName:string):Promise<boolean> {
        let ret = await this.isOkCheckUqs(appOwner, appName);
        if (ret === false) {
            this.local.remove();
            nav.start();
        }
        return ret;
    }
    */
    CenterAppApi.prototype.unitxUq = function (unit) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/unitx-uq', { unit: unit })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CenterAppApi.prototype.changePassword = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('tie/change-password', param)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CenterAppApi;
}(CenterApiBase));
exports.CenterAppApi = CenterAppApi;
function loadAppUqs(appOwner, appName) {
    return __awaiter(this, void 0, void 0, function () {
        var centerAppApi, ret;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    centerAppApi = new CenterAppApi('tv/', undefined);
                    return [4 /*yield*/, centerAppApi.uqs(appOwner, appName)];
                case 1:
                    ret = _a.sent();
                    //await centerAppApi.checkUqs(appOwner, appName);
                    /*
                    .then(v => {
                        if (v === false) {
                            localStorage.removeItem(appUqs);
                            nav.start();
                        }
                    });
                    */
                    return [2 /*return*/, ret];
            }
        });
    });
}
exports.loadAppUqs = loadAppUqs;
;
var UserApi = /** @class */ (function (_super) {
    __extends(UserApi, _super);
    function UserApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserApi.prototype.login = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var ret, token, user, nick, icon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('user/login', params)];
                    case 1:
                        ret = _a.sent();
                        switch (typeof ret) {
                            default: return [2 /*return*/];
                            case 'string': return [2 /*return*/, user_1.decodeUserToken(ret)];
                            case 'object':
                                token = ret.token;
                                user = user_1.decodeUserToken(token);
                                nick = ret.nick, icon = ret.icon;
                                if (nick)
                                    user.nick = nick;
                                if (icon)
                                    user.icon = icon;
                                return [2 /*return*/, user];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UserApi.prototype.register = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('user/register', params)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.sendVerify = function (account, type, oem) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('user/set-verify', { account: account, type: type, oem: oem })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.checkVerify = function (account, verify) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('user/check-verify', { account: account, verify: verify })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.isExists = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('user/is-exists', { account: account })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.resetPassword = function (account, password, verify, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('user/reset-password', { account: account, password: password, verify: verify, type: type })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.userSetProp = function (prop, value) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.post('tie/user-set-prop', { prop: prop, value: value })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserApi.prototype.me = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/me')];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.user = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/user', { id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.fromKey = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.get('tie/user-from-key', { key: key })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserApi;
}(CenterApiBase));
exports.UserApi = UserApi;
exports.userApi = new UserApi('tv/', undefined);
//# sourceMappingURL=uqApi.js.map