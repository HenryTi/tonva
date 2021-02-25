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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheIds = void 0;
var mobx_1 = require("mobx");
var CacheIds = /** @class */ (function () {
    function CacheIds(maxCount) {
        if (maxCount === void 0) { maxCount = 100; }
        this.arr = [];
        this.dict = new Map();
        this.maxCount = maxCount;
    }
    CacheIds.prototype.loadIds = function (ids) {
        var arr = [];
        for (var _i = 0, ids_1 = ids; _i < ids_1.length; _i++) {
            var id = ids_1[_i];
            if (id === null)
                continue;
            var item = this.dict.get(id);
            if (item === undefined) {
                arr.push(id);
                item = { id: id };
                this.dict.set(id, item);
            }
        }
        this.loadId(arr);
    };
    CacheIds.prototype.get = function (id) {
        if (id === undefined || id === null)
            return null;
        var item = this.dict.get(id);
        if (item === undefined) {
            this.dict.set(id, { id: id });
            this.loadId([id]);
            item = this.dict.get(id);
        }
        return item;
    };
    CacheIds.prototype.setItem = function (id, item) {
        if (item === undefined) {
            this.dict.set(id, null);
            this.arr.push({ id: id });
        }
        else {
            this.dict.set(id, item);
            this.arr.push(item);
        }
        if (this.arr.length > this.maxCount) {
            item = this.arr.shift();
            this.dict.delete(item.id);
        }
    };
    CacheIds.prototype.loadId = function (ids) {
        return __awaiter(this, void 0, void 0, function () {
            var items, _i, ids_2, id, item, _loop_1, this_1, _a, ids_3, id;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this._loadIds(ids)];
                    case 1:
                        items = _b.sent();
                        if (!(items === undefined)) return [3 /*break*/, 6];
                        _i = 0, ids_2 = ids;
                        _b.label = 2;
                    case 2:
                        if (!(_i < ids_2.length)) return [3 /*break*/, 5];
                        id = ids_2[_i];
                        if (id === null)
                            return [3 /*break*/, 4];
                        return [4 /*yield*/, this._loadId(id)];
                    case 3:
                        item = _b.sent();
                        this.setItem(id, item);
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        _loop_1 = function (id) {
                            var item = items.find(function (v) { return v.id === id; });
                            this_1.setItem(id, item);
                        };
                        this_1 = this;
                        for (_a = 0, ids_3 = ids; _a < ids_3.length; _a++) {
                            id = ids_3[_a];
                            _loop_1(id);
                        }
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        mobx_1.observable
    ], CacheIds.prototype, "dict", void 0);
    return CacheIds;
}());
exports.CacheIds = CacheIds;
//# sourceMappingURL=cacheIds.js.map