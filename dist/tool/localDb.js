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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalMap = exports.LocalArr = exports.LocalCache = void 0;
var lodash_1 = __importDefault(require("lodash"));
var _LocalStorage = /** @class */ (function () {
    function _LocalStorage() {
    }
    _LocalStorage.prototype.getItem = function (key) {
        return localStorage.getItem(key);
    };
    _LocalStorage.prototype.setItem = function (key, value) {
        localStorage.setItem(key, value);
    };
    _LocalStorage.prototype.removeItem = function (key) {
        localStorage.removeItem(key);
    };
    return _LocalStorage;
}());
var __ls = new _LocalStorage(); // new Ls;
var LocalCache = /** @class */ (function () {
    function LocalCache(local, key) {
        this.local = local;
        this.key = key;
    }
    LocalCache.prototype.get = function () {
        try {
            // 下面缓冲的内容不能有，可能会被修改，造成circular引用
            //if (this.value !== undefined) return this.value;
            var text = this.local.getItem(this.key);
            if (text === null)
                return;
            if (text === undefined)
                return undefined;
            //return this.value = 
            return JSON.parse(text);
        }
        catch (err) {
            this.local.removeItem(this.key);
            return;
        }
    };
    LocalCache.prototype.set = function (value) {
        var t = JSON.stringify(value, function (key, value) {
            if (key !== '_tuid')
                return value;
        });
        this.local.setItem(this.key, t);
    };
    LocalCache.prototype.remove = function (local) {
        if (local === undefined) {
            this.local.removeItem(this.key);
        }
        else {
            this.local.removeLocal(local);
        }
    };
    LocalCache.prototype.child = function (key) {
        return this.local.child(key);
    };
    LocalCache.prototype.arr = function (key) {
        return this.local.arr(key);
    };
    LocalCache.prototype.map = function (key) {
        return this.local.map(key);
    };
    return LocalCache;
}());
exports.LocalCache = LocalCache;
var Local = /** @class */ (function () {
    function Local(name) {
        this.name = name;
        this.caches = {};
        this.locals = {};
    }
    Local.prototype.getItem = function (key) {
        var k = this.keyForGet(key);
        if (k === undefined)
            return;
        return __ls.getItem(k);
    };
    Local.prototype.setItem = function (key, value) {
        var k = this.keyForSet(key);
        __ls.setItem(k, value);
    };
    Local.prototype.removeItem = function (key) {
        var k = this.keyForSet(key);
        if (k === undefined)
            return;
        localStorage.removeItem(k);
    };
    Local.prototype.arr = function (key) {
        var sk = String(key);
        var arr = this.locals[sk];
        if (arr === undefined) {
            var k = this.keyForSet(key);
            this.locals[sk] = arr = new LocalArr(k);
        }
        return arr;
    };
    Local.prototype.map = function (key) {
        var sk = String(key);
        var map = this.locals[sk];
        if (map === undefined) {
            var k = this.keyForSet(key);
            this.locals[sk] = map = new LocalMap(k);
        }
        return map;
    };
    Local.prototype.removeLocal = function (local) {
        var sk = local.name;
        var k = this.keyForRemove(sk);
        if (k === undefined)
            return;
        var arr = this.locals[sk];
        if (arr === undefined)
            arr = new LocalArr(k);
        else
            this.locals[sk] = undefined;
        arr.removeAll();
    };
    Local.prototype.child = function (key) {
        var ks = String(key);
        var ret = this.caches[ks];
        if (ret !== undefined)
            return ret;
        return this.caches[ks] = ret = new LocalCache(this, key);
    };
    return Local;
}());
var maxArrSize = 500;
var LocalArr = /** @class */ (function (_super) {
    __extends(LocalArr, _super);
    function LocalArr(name) {
        var _this = _super.call(this, name) || this;
        var index = __ls.getItem(_this.name);
        _this.index = index === null ? [] : index.split('\n').map(function (v) { return Number(v); });
        return _this;
    }
    LocalArr.prototype.saveIndex = function () {
        __ls.setItem(this.name, this.index.join('\n'));
    };
    LocalArr.prototype.keyForGet = function (key) {
        var i = lodash_1.default.indexOf(this.index, key);
        if (i < 0)
            return undefined;
        return this.name + "." + key;
    };
    LocalArr.prototype.keyForSet = function (key) {
        var i = lodash_1.default.indexOf(this.index, key);
        if (i < 0) {
            this.index.unshift(key);
            if (this.index.length > maxArrSize)
                this.index.pop();
        }
        else {
            this.index.splice(i, 1);
            this.index.unshift(key);
        }
        this.saveIndex();
        return this.name + "." + key;
    };
    LocalArr.prototype.keyForRemove = function (key) {
        var i = lodash_1.default.indexOf(this.index, key);
        if (i < 0)
            return;
        this.index.splice(i, 1);
        this.saveIndex();
        return this.name + "." + key;
    };
    LocalArr.prototype.removeAll = function () {
        for (var _i = 0, _a = this.index; _i < _a.length; _i++) {
            var i = _a[_i];
            __ls.removeItem(this.name + "." + i);
        }
        __ls.removeItem(this.name);
        this.index.splice(0);
    };
    LocalArr.prototype.item = function (index) {
        return this.child(index);
    };
    return LocalArr;
}(Local));
exports.LocalArr = LocalArr;
var LocalMap = /** @class */ (function (_super) {
    __extends(LocalMap, _super);
    function LocalMap(name) {
        var _this = _super.call(this, name) || this;
        _this.max = 0;
        _this.index = {};
        var index = __ls.getItem(_this.name);
        if (index !== null) {
            var ls = index.split('\n');
            ls.forEach(function (l) {
                var p = l.indexOf('\t');
                if (p < 0)
                    return;
                var key = l.substr(0, p);
                var i = Number(l.substr(p + 1));
                if (isNaN(i) === true)
                    return;
                _this.index[key] = i;
                if (i > _this.max)
                    _this.max = i;
            });
        }
        return _this;
    }
    LocalMap.prototype.saveIndex = function () {
        var ls = [];
        for (var k in this.index) {
            var v = this.index[k];
            if (v === undefined)
                continue;
            ls.push(k + "\t" + v);
        }
        __ls.setItem(this.name, ls.join('\n'));
    };
    LocalMap.prototype.keyForGet = function (key) {
        var i = this.index[key];
        if (i === undefined)
            return undefined;
        return this.name + "." + i;
    };
    LocalMap.prototype.keyForSet = function (key) {
        var i = this.index[key];
        if (i === undefined) {
            ++this.max;
            i = this.max;
            this.index[key] = i;
            this.saveIndex();
        }
        return this.name + "." + i;
    };
    LocalMap.prototype.keyForRemove = function (key) {
        var i = this.index[key];
        if (i === undefined)
            return;
        this.index[key] = undefined;
        this.saveIndex();
        return this.name + "." + i;
    };
    LocalMap.prototype.removeAll = function () {
        for (var i in this.index) {
            __ls.removeItem(this.name + "." + this.index[i]);
            this.index[i] = undefined;
        }
        __ls.removeItem(this.name);
        this.max = 0;
    };
    LocalMap.prototype.item = function (key) {
        return this.child(key);
    };
    return LocalMap;
}(Local));
exports.LocalMap = LocalMap;
//# sourceMappingURL=localDb.js.map