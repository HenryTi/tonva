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
exports.host = exports.resUrlFromHost = void 0;
var tool_1 = require("../tool");
var centerHost = process.env['REACT_APP_CENTER_HOST'];
var centerDebugHost = 'localhost:3000'; //'192.168.86.64';
var resHost = process.env['REACT_APP_RES_HOST'] || centerHost;
var resDebugHost = 'localhost:3015'; //'192.168.86.63';
var uqDebugHost = 'localhost:3015'; //'192.168.86.63';
var uqDebugBuilderHost = 'localhost:3009';
var hosts = {
    centerhost: {
        value: process.env['REACT_APP_CENTER_DEBUG_HOST'] || centerDebugHost,
        local: false,
    },
    reshost: {
        value: process.env['REACT_APP_RES_DEBUG_HOST'] || resDebugHost,
        local: false,
    },
    uqhost: {
        value: process.env['REACT_APP_UQ_DEBUG_HOST'] || uqDebugHost,
        local: false,
    },
    unitxhost: {
        value: process.env['REACT_APP_UQ_DEBUG_HOST'] || uqDebugHost,
        local: false,
    },
    "uq-build": {
        value: process.env['REACT_APP_UQ_DEBUG_BUILDER_HOST'] || uqDebugBuilderHost,
        local: false,
    }
};
var httpArr = ['https://', 'http://'];
function isAbsoluteUrl(url) {
    for (var _i = 0, httpArr_1 = httpArr; _i < httpArr_1.length; _i++) {
        var str = httpArr_1[_i];
        if (url.startsWith(str) === true)
            return true;
    }
    return false;
}
function urlFromHost(host) {
    if (isAbsoluteUrl(host) === true) {
        if (host.endsWith('/'))
            return host;
        return host + '/';
    }
    return "http://" + host + "/";
}
function centerUrlFromHost(host) {
    return urlFromHost(host);
}
function centerWsFromHost(host) {
    var https = 'https://';
    if (host.startsWith(https) === true) {
        host = host.substr(https.length);
        if (host.endsWith('/') === true)
            host = host.substr(0, host.length - 1);
        return 'wss://' + host + '/tv/';
    }
    return "ws://" + host + "/tv/";
}
function resUrlFromHost(host) {
    if (!host)
        return;
    var url = urlFromHost(host);
    return url + 'res/';
}
exports.resUrlFromHost = resUrlFromHost;
var fetchOptions = {
    method: "GET",
    mode: "no-cors",
    headers: {
        "Content-Type": "text/plain"
    },
};
var Host = /** @class */ (function () {
    function Host() {
    }
    Host.prototype.start = function (testing) {
        return __awaiter(this, void 0, void 0, function () {
            var host;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!centerHost)
                            debugger;
                        this.testing = testing;
                        if (!(tool_1.env.isDevelopment === true)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.tryLocal()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        host = this.getCenterHost();
                        this.url = centerUrlFromHost(host);
                        this.ws = centerWsFromHost(host);
                        this.resHost = this.getResHost();
                        return [2 /*return*/];
                }
            });
        });
    };
    Host.prototype.debugHostUrl = function (host) { return "http://" + host + "/hello"; };
    Host.prototype.tryLocal = function () {
        return __awaiter(this, void 0, void 0, function () {
            var promises, hostArr, _loop_1, i, _i, hostArr_1, host_1, fetchUrl, results, len, i, local, host_2, j, hostValue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = [];
                        hostArr = [];
                        _loop_1 = function (i) {
                            var hostValue = hosts[i];
                            var value = hostValue.value;
                            if (hostArr.findIndex(function (v) { return v === value; }) < 0)
                                hostArr.push(value);
                        };
                        for (i in hosts) {
                            _loop_1(i);
                        }
                        for (_i = 0, hostArr_1 = hostArr; _i < hostArr_1.length; _i++) {
                            host_1 = hostArr_1[_i];
                            fetchUrl = this.debugHostUrl(host_1);
                            promises.push(localCheck(fetchUrl));
                        }
                        return [4 /*yield*/, Promise.all(promises)];
                    case 1:
                        results = _a.sent();
                        len = hostArr.length;
                        for (i = 0; i < len; i++) {
                            local = results[i];
                            host_2 = hostArr[i];
                            for (j in hosts) {
                                hostValue = hosts[j];
                                if (hostValue.value === host_2) {
                                    hostValue.local = local;
                                }
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    Host.prototype.getCenterHost = function () {
        var _a = hosts.centerhost, value = _a.value, local = _a.local;
        var hash = document.location.hash;
        if (hash.includes('sheet_debug') === true) {
            return value;
        }
        if (tool_1.env.isDevelopment === true) {
            if (local === true)
                return value;
        }
        return centerHost;
    };
    Host.prototype.getResHost = function () {
        var _a = hosts.reshost, value = _a.value, local = _a.local;
        var hash = document.location.hash;
        if (hash.includes('sheet_debug') === true) {
            return value;
        }
        if (tool_1.env.isDevelopment === true) {
            if (local === true)
                return value;
        }
        return resHost;
    };
    Host.prototype.getUrlOrDebug = function (url, debugHost) {
        if (debugHost === void 0) { debugHost = 'uqhost'; }
        if (tool_1.env.isDevelopment === false)
            return url;
        var host = hosts[debugHost];
        if (host === undefined)
            return url;
        var value = host.value, local = host.local;
        if (local === false)
            return url;
        return "http://" + value + "/";
    };
    Host.prototype.getUrlOrTest = function (db, url, urlTest) {
        var path;
        if (!urlTest) {
            urlTest = url;
            if (!urlTest) {
                console.error('no server set for ' + db);
                debugger;
            }
        }
        else if (!url) {
            url = urlTest;
            this.testing = true;
        }
        if (this.testing === true) {
            if (urlTest !== '-')
                url = urlTest;
            path = 'uq/test/' + db + '/';
        }
        else {
            path = 'uq/prod/' + db + '/';
        }
        url = this.getUrlOrDebug(url);
        if (url.endsWith('/') === false) {
            url += '/';
        }
        return url + path;
    };
    Host.prototype.localCheck = function (urlDebug) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, localCheck(urlDebug)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return Host;
}());
exports.host = new Host();
// 因为测试的都是局域网服务器，甚至本机服务器，所以一秒足够了
// 网上找了上面的fetch timeout代码。
// 尽管timeout了，fetch仍然继续，没有cancel
// 实际上，一秒钟不够。web服务器会自动停。重启的时候，可能会比较长时间。也许两秒甚至更多。
//const timeout = 2000;
var timeout = 2000;
function fetchLocalCheck(url) {
    return new Promise(function (resolve, reject) {
        fetch(url, fetchOptions)
            .then(function (v) {
            v.text().then(resolve).catch(reject);
        })
            .catch(reject);
        var e = new Error("Connection timed out");
        tool_1.env.setTimeout('fetchLocalCheck', reject, timeout, e);
    });
}
function localCheck(url) {
    return __awaiter(this, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, fetchLocalCheck(url)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2:
                    err_1 = _a.sent();
                    return [2 /*return*/, false];
                case 3: return [2 /*return*/];
            }
        });
    });
}
/*
export interface IUqForChannel {
    uq: string;
    uqVersion: number;
}
*/ 
//# sourceMappingURL=host.js.map