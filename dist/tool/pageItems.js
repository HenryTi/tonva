"use strict";
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
exports.PageItems = void 0;
var lodash_1 = __importDefault(require("lodash"));
var mobx_1 = require("mobx");
var PageItems = /** @class */ (function () {
    function PageItems(itemObservable) {
        var _this = this;
        if (itemObservable === void 0) { itemObservable = false; }
        this.isFirst = true;
        this.loading = false;
        this.beforeLoad = true;
        this.loaded = false;
        this.allLoaded = false;
        this.topDiv = '$$top';
        this.bottomDiv = '$$bottom';
        this.scrollToTop = function () {
            _this.scrollIntoView(_this.topDiv);
            //let id = '$$top'+uid();
            //this.topDiv = id;
            /*
            setTimeout(() => {
                let div = document.getElementById(this.topDiv);
                div?.scrollIntoView();
            }, 20);
            */
        };
        this.scrollToBottom = function () {
            _this.scrollIntoView(_this.bottomDiv);
            //let id = '$$bottom'+uid();
            //this.bottomDiv = id;
            /*
            setTimeout(() => {
                let div = document.getElementById(this.bottomDiv);
                div?.scrollIntoView();
            }, 20);
            */
        };
        this.firstSize = 100;
        this.pageStart = undefined;
        this.pageSize = 30;
        this.appendPosition = 'tail';
        this.changing = false;
        if (itemObservable === undefined)
            itemObservable = false;
        this._items = mobx_1.observable.array([], { deep: itemObservable });
    }
    Object.defineProperty(PageItems.prototype, "items", {
        get: function () {
            if (this.beforeLoad === true)
                return null;
            if (this.loaded === false)
                return undefined;
            return this._items;
        },
        enumerable: false,
        configurable: true
    });
    PageItems.prototype.setEachPageItem = function (pageItemAction) {
        this.pageItemAction = pageItemAction;
    };
    PageItems.prototype.setItemConverter = function (itemConverter) {
        this.itemConverter = itemConverter;
    };
    PageItems.prototype.scrollIntoView = function (divId) {
        setTimeout(function () {
            var div = document.getElementById(divId);
            div === null || div === void 0 ? void 0 : div.scrollIntoView();
        }, 20);
    };
    PageItems.prototype.getPageId = function (item) { return; };
    PageItems.prototype.setPageStart = function (item) {
        this.pageStart = this.getPageId(item);
    };
    PageItems.prototype.load = function (param, pageStart, pageSize) {
        return __awaiter(this, void 0, void 0, function () {
            var results, pageList, ret, len, i, item, len, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResults(param, pageStart, pageSize)];
                    case 1:
                        results = _a.sent();
                        pageList = results.$page;
                        if (this.itemConverter) {
                            ret = [];
                            len = pageList.length;
                            for (i = 0; i < len; i++) {
                                item = this.itemConverter(pageList[i], results);
                                ret.push(item);
                            }
                            return [2 /*return*/, ret];
                        }
                        if (this.pageItemAction !== undefined) {
                            len = pageList.length;
                            for (i = 0; i < len; i++) {
                                this.pageItemAction(pageList[i], results);
                            }
                        }
                        return [2 /*return*/, pageList];
                }
            });
        });
    };
    PageItems.prototype.reset = function () {
        this.isFirst = true;
        this.beforeLoad = true;
        this.loaded = false;
        this.param = undefined;
        this.allLoaded = false;
        this.pageStart = undefined;
        this._items.clear();
        //this.setPageStart(undefined);
    };
    PageItems.prototype.append = function (item) {
        if (this.appendPosition === 'tail')
            this._items.unshift(item);
        else
            this._items.push(item);
    };
    PageItems.prototype.first = function (param) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.reset();
                        this.beforeLoad = false;
                        this.param = param;
                        return [4 /*yield*/, this.more()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PageItems.prototype.attach = function () {
        return __awaiter(this, void 0, void 0, function () {
            var items, isAsc, endItem, scrollToEnd, pushItem, endIndex_1, startId, pid, sum, max, ret, len, i, item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.sortOrder === undefined) {
                            console.error('没有定义增减序，无法attach');
                            return [2 /*return*/];
                        }
                        if (this.changing === true)
                            return [2 /*return*/];
                        this.changing = true;
                        items = this._items;
                        isAsc = this.sortOrder === 'asc';
                        if (this.appendPosition === 'tail') {
                            //isTail = true;
                            endItem = items[0];
                            scrollToEnd = this.scrollToTop;
                            pushItem = function (item) { return items.unshift(item); };
                        }
                        else {
                            endIndex_1 = items.length;
                            endItem = items[endIndex_1 - 1];
                            scrollToEnd = this.scrollToBottom;
                            pushItem = function (item) { return items.splice(endIndex_1, 0, item); };
                        }
                        startId = this.getPageId(endItem);
                        pid = undefined;
                        sum = 0, max = 50;
                        _a.label = 1;
                    case 1:
                        if (!(sum < max)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.load(this.param, pid, 3)];
                    case 2:
                        ret = _a.sent();
                        len = ret.length;
                        if (len === 0)
                            return [3 /*break*/, 4];
                        for (i = 0; i < len; i++) {
                            item = ret[i];
                            pid = this.getPageId(item);
                            if (isAsc === true) {
                                if (pid >= startId) {
                                    max = 0;
                                    break;
                                }
                            }
                            else {
                                if (pid <= startId) {
                                    max = 0;
                                    break;
                                }
                            }
                            pushItem(item);
                            /*
                            if (isTail === true) {
                                this._items.unshift(item);
                            }
                            else {
                                this._items.push(item);
                            }
                            */
                            ++sum;
                        }
                        _a.label = 3;
                    case 3: return [3 /*break*/, 1];
                    case 4:
                        this.changing = false;
                        if (sum > 0) {
                            scrollToEnd();
                            /*
                            if (isTail === true) this.scrollToTop();
                            else this.scrollToBottom();
                            */
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    PageItems.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.changing === true)
                            return [2 /*return*/];
                        this.changing = true;
                        return [4 /*yield*/, this.load(this.param, undefined, this.firstSize > this.pageSize ? this.firstSize : this.pageSize)];
                    case 1:
                        ret = _a.sent();
                        this._items.clear();
                        this.setLoaded(ret);
                        /*
                        for (let i=0; i<len; i++) {
                            let item = ret[i];
                            let pid = this.getRefreshPageId(item);
                            let index = this._items.findIndex(v => this.getRefreshPageId(v) === pid);
                            //let index = _.sortedIndexBy(this._items, item, v=>this.getRefreshPageId(v));
                            //let oldItem = this._items[index];
                            //let oid = this.getRefreshPageId(oldItem);
                            if (index >= 0) {
                                _.merge(this._items[index], item);
                            }
                            else {
                                this._items.splice(0, 0, item);
                            }
                        }
                        */
                        this.changing = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    PageItems.prototype.getRefreshPageId = function (item) {
        return this.getPageId(item);
    };
    PageItems.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    PageItems.prototype.onLoaded = function () {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    PageItems.prototype.more = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pageSize, ret, len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.allLoaded === true)
                            return [2 /*return*/, false];
                        if (this.loading === true)
                            return [2 /*return*/, true];
                        if (this.changing === true)
                            return [2 /*return*/, true];
                        this.loading = true;
                        this.changing = true;
                        return [4 /*yield*/, this.onLoad()];
                    case 1:
                        _a.sent();
                        if (this.pageStart === undefined)
                            this.setPageStart(undefined);
                        pageSize = this.pageSize + 1;
                        if (this.isFirst === true) {
                            if (this.firstSize > this.pageSize)
                                pageSize = this.firstSize + 1;
                        }
                        return [4 /*yield*/, this.load(this.param, this.pageStart, pageSize)];
                    case 2:
                        ret = _a.sent();
                        this.loaded = true;
                        len = ret.length;
                        if ((this.isFirst === true && len > this.firstSize) ||
                            (this.isFirst === false && len > this.pageSize)) {
                            this.allLoaded = false;
                            --len;
                            ret.splice(len, 1);
                        }
                        else {
                            this.allLoaded = true;
                        }
                        /*
                        if (len === 0) {
                            this.setPageStart(undefined);
                            this._items.clear();
                        }
                        else {
                            this.setPageStart(ret[len-1]);
                            if (this.appendPosition === 'tail') {
                                this._items.push(...ret);
                            }
                            else {
                                this._items.unshift(...ret.reverse());
                            }
                        }
                        */
                        this.setLoaded(ret);
                        this.isFirst = false;
                        this.onLoaded();
                        this.changing = false;
                        this.loading = false;
                        return [2 /*return*/, !this.allLoaded];
                }
            });
        });
    };
    PageItems.prototype.setLoaded = function (data) {
        var _a, _b;
        var len = data.length;
        if (len === 0) {
            this.setPageStart(undefined);
            this._items.clear();
        }
        else {
            this.setPageStart(data[len - 1]);
            if (this.appendPosition === 'tail') {
                (_a = this._items).push.apply(_a, data);
            }
            else {
                (_b = this._items).unshift.apply(_b, data.reverse());
            }
        }
    };
    PageItems.prototype.findItem = function (item) {
        var _this = this;
        var pid = this.getPageId(item);
        var index = lodash_1.default.findIndex(this._items, function (v) { return _this.getPageId(v) === pid; });
        if (index < 0)
            return;
        return this._items[index];
        //let oldItem = this._items[index];
        //let oid = this.getPageId(oldItem);
        //if (pid === oid) return oldItem;
    };
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "loading", void 0);
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "beforeLoad", void 0);
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "loaded", void 0);
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "allLoaded", void 0);
    __decorate([
        mobx_1.computed
    ], PageItems.prototype, "items", null);
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "topDiv", void 0);
    __decorate([
        mobx_1.observable
    ], PageItems.prototype, "bottomDiv", void 0);
    return PageItems;
}());
exports.PageItems = PageItems;
//# sourceMappingURL=pageItems.js.map