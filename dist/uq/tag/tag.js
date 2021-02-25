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
exports.Tag = void 0;
var entity_1 = require("../entity");
var tagView_1 = require("./tagView");
var Tag = /** @class */ (function (_super) {
    __extends(Tag, _super);
    function Tag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.coll = {};
        return _this;
    }
    Object.defineProperty(Tag.prototype, "typeName", {
        get: function () { return 'tag'; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Tag.prototype, "view", {
        get: function () {
            if (this._view !== undefined)
                return this._view;
            return this._view = new tagView_1.TagView(this);
        },
        enumerable: false,
        configurable: true
    });
    Tag.prototype.nameFromId = function (id) {
        var c = this.coll[id];
        return c === undefined ? undefined : c.name;
    };
    Tag.prototype.namesFromIds = function (ids) {
        var ret = [];
        for (var _i = 0, _a = ids.split('|'); _i < _a.length; _i++) {
            var id = _a[_i];
            var c = this.coll[Number(id)];
            var name_1 = c === undefined ? undefined : c.name;
            if (name_1 !== undefined)
                ret.push(name_1);
        }
        return ret;
    };
    Tag.prototype.loadValues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ret, lines, _i, lines_1, line, parts, id, val;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.values !== undefined)
                            return [2 /*return*/, this.values];
                        this.values = [];
                        return [4 /*yield*/, this.uqApi.get('tag/values/' + this.name)];
                    case 1:
                        ret = _a.sent();
                        if (ret === undefined)
                            return [2 /*return*/];
                        lines = ret.split('\n');
                        for (_i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
                            line = lines_1[_i];
                            if (line.length === 0)
                                continue;
                            parts = line.split('\t');
                            id = Number(parts[0]);
                            val = {
                                id: id,
                                name: parts[1],
                                ext: parts[2],
                            };
                            this.values.push(val);
                            this.coll[id] = val;
                        }
                        return [2 /*return*/, this.values];
                }
            });
        });
    };
    return Tag;
}(entity_1.Entity));
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map