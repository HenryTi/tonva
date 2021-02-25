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
exports.UqHttpChannel = exports.CenterHttpChannel = exports.HttpChannel = void 0;
var appBridge_1 = require("./appBridge");
var nav_1 = require("../components/nav");
var tool_1 = require("../tool");
/*
export async function httpGet(url:string, params?:any):Promise<any> {
    let channel = new HttpChannel(false, url, undefined, undefined);
    let ret = await channel.get('', params);
    return ret;
}

export async function httpPost(url:string, params?:any):Promise<any> {
    let channel = new HttpChannel(false, url, undefined, undefined);
    let ret = await channel.post('', params);
    return ret;
}
*/
var methodsWithBody = ['POST', 'PUT'];
var HttpChannel = /** @class */ (function () {
    function HttpChannel(hostUrl, apiToken, ui) {
        var _this = this;
        this.startWait = function (waiting) {
            if (waiting === true) {
                if (_this.ui !== undefined)
                    _this.ui.startWait();
            }
        };
        this.endWait = function (url, reject) {
            if (_this.ui !== undefined)
                _this.ui.endWait();
            if (reject !== undefined)
                reject('访问webapi超时 ' + url);
        };
        this.showError = function (error) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.ui !== undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.ui.showError(error)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        }); };
        this.hostUrl = hostUrl;
        this.apiToken = apiToken;
        this.ui = ui;
        this.timeout = tool_1.env.isDevelopment === true ? 500000 : 50000;
    }
    HttpChannel.prototype.used = function () {
        this.post('', {});
    };
    HttpChannel.prototype.xcall = function (urlPrefix, caller) {
        return __awaiter(this, void 0, void 0, function () {
            var options, headers, path, method, h, i, p;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildOptions();
                        headers = caller.headers, path = caller.path, method = caller.method;
                        if (headers !== undefined) {
                            h = options.headers;
                            for (i in headers) {
                                //h.append(i, encodeURI(headers[i]));
                                h[i] = encodeURI(headers[i]);
                            }
                        }
                        options.method = method;
                        p = caller.buildParams();
                        if (methodsWithBody.indexOf(method) >= 0 && p !== undefined) {
                            options.body = JSON.stringify(p);
                        }
                        return [4 /*yield*/, this.innerFetch(urlPrefix + path, options, caller.waiting)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpChannel.prototype.innerFetchResult = function (url, options, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.innerFetch(url, options, waiting)];
                    case 1:
                        ret = _a.sent();
                        return [2 /*return*/, ret.res];
                }
            });
        });
    };
    HttpChannel.prototype.get = function (url, params, waiting) {
        if (params === void 0) { params = undefined; }
        return __awaiter(this, void 0, void 0, function () {
            var keys, c, _i, keys_1, k, v, options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (params) {
                            keys = Object.keys(params);
                            if (keys.length > 0) {
                                c = '?';
                                for (_i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                                    k = keys_1[_i];
                                    v = params[k];
                                    if (v === undefined)
                                        continue;
                                    url += c + k + '=' + params[k];
                                    c = '&';
                                }
                            }
                        }
                        options = this.buildOptions();
                        options.method = 'GET';
                        return [4 /*yield*/, this.innerFetchResult(url, options, waiting)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpChannel.prototype.post = function (url, params, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildOptions();
                        options.method = 'POST';
                        options.body = JSON.stringify(params);
                        return [4 /*yield*/, this.innerFetchResult(url, options, waiting)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpChannel.prototype.put = function (url, params, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildOptions();
                        options.method = 'PUT';
                        options.body = JSON.stringify(params);
                        return [4 /*yield*/, this.innerFetchResult(url, options, waiting)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpChannel.prototype.delete = function (url, params, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildOptions();
                        options.method = 'DELETE';
                        options.body = JSON.stringify(params);
                        return [4 /*yield*/, this.innerFetchResult(url, options, waiting)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HttpChannel.prototype.fetch = function (url, options, waiting, resolve, reject) {
        return __awaiter(this, void 0, void 0, function () {
            function buildError(err, ex) {
                switch (typeof err) {
                    case 'string':
                        if (ex !== undefined)
                            err += ' ' + ex;
                        break;
                    case 'object':
                        var keys = Object.keys(err);
                        var retErr = {
                            ex: ex,
                        };
                        for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
                            var key = keys_2[_i];
                            retErr[key] = err[key];
                        }
                        err = retErr;
                        break;
                }
                return {
                    channel: that,
                    url: path,
                    options: options,
                    resolve: resolve,
                    reject: reject,
                    error: err,
                };
            }
            var that, path, now_1, timeOutHandler_1, res, ct, text, error_1, err;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        that = this;
                        this.startWait(waiting);
                        path = url;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        console.log('%s-%s %s', options.method, path, options.body || '');
                        now_1 = Date.now();
                        timeOutHandler_1 = tool_1.env.setTimeout(undefined, //'httpChannel.fetch',
                        function () {
                            that.endWait(url + ' timeout endWait: ' + (Date.now() - now_1) + 'ms', reject);
                        }, this.timeout);
                        return [4 /*yield*/, fetch(encodeURI(path), options)];
                    case 2:
                        res = _a.sent();
                        if (res.ok === false) {
                            tool_1.env.clearTimeout(timeOutHandler_1);
                            console.log('ok false endWait');
                            that.endWait();
                            console.log('call error %s', res.statusText);
                            throw res.statusText;
                        }
                        ct = res.headers.get('content-type');
                        if (!(ct && ct.indexOf('json') >= 0)) return [3 /*break*/, 3];
                        return [2 /*return*/, res.json().then(function (retJson) { return __awaiter(_this, void 0, void 0, function () {
                                var retError;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            tool_1.env.clearTimeout(timeOutHandler_1);
                                            that.endWait();
                                            if (retJson.ok === true) {
                                                if (typeof retJson !== 'object') {
                                                    debugger;
                                                }
                                                else if (Array.isArray(retJson) === true) {
                                                    debugger;
                                                }
                                                return [2 /*return*/, resolve(retJson)];
                                            }
                                            retError = retJson.error;
                                            if (!(retError === undefined)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, that.showError(buildError('not valid tonva json'))];
                                        case 1:
                                            _a.sent();
                                            return [3 /*break*/, 4];
                                        case 2: return [4 /*yield*/, that.showError(buildError(retError, 'retJson.error'))];
                                        case 3:
                                            _a.sent();
                                            reject(retError);
                                            _a.label = 4;
                                        case 4: return [2 /*return*/];
                                    }
                                });
                            }); }).catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, that.showError(buildError(error, 'catch res.json()'))];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 3: return [4 /*yield*/, res.text()];
                    case 4:
                        text = _a.sent();
                        tool_1.env.clearTimeout(timeOutHandler_1);
                        console.log('text endWait');
                        that.endWait();
                        resolve(text);
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        this.endWait(url, reject);
                        if (typeof error_1 === 'string') {
                            err = error_1.toLowerCase();
                            if (err.startsWith('unauthorized') === true) {
                                nav_1.nav.logout();
                                return [2 /*return*/];
                            }
                        }
                        console.error('fecth error (no nav.showError): ' + url);
                        return [3 /*break*/, 7];
                    case 7:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    HttpChannel.prototype.callFetch = function (url, method, body) {
        return __awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        options = this.buildOptions();
                        options.method = method;
                        options.body = body;
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetch(url, options, true, resolve, reject)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    //private buildOptions(): {method:string; headers:Headers; body:any} {
    HttpChannel.prototype.buildOptions = function () {
        var headers = this.buildHeaders();
        var options = {
            headers: headers,
            method: undefined,
            body: undefined,
        };
        return options;
    };
    /*
    protected buildHeaders():Headers {
        let {language, culture} = nav;
        let headers = new Headers();
        //headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json;charset=UTF-8');
        let lang = language;
        if (culture) lang += '-' + culture;
        headers.append('Accept-Language', lang);
        if (this.apiToken) {
            headers.append('Authorization', this.apiToken);
        }
        return headers;
    }
    */
    HttpChannel.prototype.buildHeaders = function () {
        var language = nav_1.nav.language, culture = nav_1.nav.culture;
        var headers = {}; //new Headers();
        //headers.append('Access-Control-Allow-Origin', '*');
        //headers.append('Content-Type', 'application/json;charset=UTF-8');
        headers['Content-Type'] = 'application/json;charset=UTF-8';
        var lang = language;
        if (culture)
            lang += '-' + culture;
        //headers.append('Accept-Language', lang);
        headers['Accept-Language'] = lang;
        if (this.apiToken) {
            //headers.append('Authorization', this.apiToken); 
            headers['Authorization'] = this.apiToken;
        }
        return headers;
    };
    return HttpChannel;
}());
exports.HttpChannel = HttpChannel;
var CenterHttpChannel = /** @class */ (function (_super) {
    __extends(CenterHttpChannel, _super);
    function CenterHttpChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CenterHttpChannel.prototype.innerFetch = function (url, options, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = this.hostUrl + url;
                        if (!(this.apiToken === undefined && appBridge_1.isBridged())) return [3 /*break*/, 2];
                        return [4 /*yield*/, appBridge_1.bridgeCenterApi(u, options.method, options.body)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.fetch(u, options, waiting, resolve, reject)];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return CenterHttpChannel;
}(HttpChannel));
exports.CenterHttpChannel = CenterHttpChannel;
var UqHttpChannel = /** @class */ (function (_super) {
    __extends(UqHttpChannel, _super);
    function UqHttpChannel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UqHttpChannel.prototype.innerFetch = function (url, options, waiting) {
        return __awaiter(this, void 0, void 0, function () {
            var u;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        u = this.hostUrl + url;
                        return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.fetch(u, options, waiting, resolve, reject)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UqHttpChannel;
}(HttpChannel));
exports.UqHttpChannel = UqHttpChannel;
//# sourceMappingURL=httpChannel.js.map