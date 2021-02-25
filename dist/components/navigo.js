"use strict";
// typescript version of krasimir/navigo
Object.defineProperty(exports, "__esModule", { value: true });
exports.navigo = exports.Navigo = void 0;
var Navigo = /** @class */ (function () {
    function Navigo(r, useHash, hash) {
        var _this = this;
        if (r === void 0) { r = null; }
        if (useHash === void 0) { useHash = false; }
        if (hash === void 0) { hash = '#'; }
        this._routes = [];
        this._onLocationChange = function () {
            console.log('_onLocationChange');
            _this.resolve();
        };
        this.root = null;
        this._useHash = useHash;
        this._hash = (!hash) ? '#' : hash;
        this._paused = false;
        this._destroyed = false;
        this._lastRouteResolved = null;
        this._notFoundHandler = null;
        this._defaultHandler = null;
        this._usePushState = !useHash && Navigo.isPushStateAvailable();
        //this._onLocationChange = this._onLocationChange.bind(this);
        this._genericHooks = null;
        this._historyUpdateMethod = 'pushState';
        if (r) {
            this.root = useHash ? r.replace(/\/$/, '/' + this._hash) : r.replace(/\/$/, '');
        }
        else if (useHash) {
            this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, '/' + this._hash);
        }
        this._listen();
        this.updatePageLinks();
    }
    Navigo.isPushStateAvailable = function () {
        return !!(typeof window !== 'undefined' &&
            window.history &&
            window.history.pushState);
    };
    Navigo.clean = function (s) {
        if (s instanceof RegExp)
            return s;
        return Navigo.cleanUrl(s);
    };
    Navigo.cleanUrl = function (s) {
        return s.replace(/\/+$/, '').replace(/^\/+/, '^/');
    };
    Navigo.regExpResultToParams = function (match, names) {
        if (names.length === 0)
            return null;
        if (!match)
            return null;
        return match
            .slice(1, match.length)
            .reduce(function (params, value, index) {
            if (params === null)
                params = {};
            params[names[index]] = decodeURIComponent(value);
            return params;
        }, null);
    };
    Navigo.replaceDynamicURLParts = function (route) {
        var paramNames = [], regexp;
        if (route instanceof RegExp) {
            regexp = route;
        }
        else {
            regexp = new RegExp(route.replace(Navigo.PARAMETER_REGEXP, function (full, dots, name) {
                paramNames.push(name);
                return Navigo.REPLACE_VARIABLE_REGEXP;
            })
                .replace(Navigo.WILDCARD_REGEXP, Navigo.REPLACE_WILDCARD) + Navigo.FOLLOWED_BY_SLASH_REGEXP, Navigo.MATCH_REGEXP_FLAGS);
        }
        return { regexp: regexp, paramNames: paramNames };
    };
    Navigo.getUrlDepth = function (url) {
        return url.replace(/\/$/, '').split('/').length;
    };
    Navigo.compareUrlDepth = function (urlA, urlB) {
        return Navigo.getUrlDepth(urlB) - Navigo.getUrlDepth(urlA);
    };
    Navigo.findMatchedRoutes = function (url, routes) {
        if (routes === void 0) { routes = []; }
        return routes.map(function (route) {
            var _a = Navigo.replaceDynamicURLParts(Navigo.clean(route.route)), regexp = _a.regexp, paramNames = _a.paramNames;
            var match = url.replace(/^\/+/, '/').match(regexp);
            var params = Navigo.regExpResultToParams(match, paramNames);
            return match ? { match: match, route: route, params: params } : false;
        }).filter(function (m) { return m; });
    };
    Navigo.match = function (url, routes) {
        return Navigo.findMatchedRoutes(url, routes)[0] || false;
    };
    Navigo.root = function (url, routes) {
        var colonExp = RegExp('\\/:\\D(\\w*)', 'g');
        var exp = ''; // '($|\\/)';  // 单\，编译报错 ($|\/)
        var matched = routes.map(function (route) {
            var r = route.route;
            if (r === '' || r === '*')
                return url;
            if (typeof r === 'string') {
                r = r.replace(colonExp, '\\/(\\w|%|[\u4E00-\u9FCC])+');
            }
            var routeExp = r + exp;
            var ret = url.split(new RegExp(routeExp))[0];
            return ret;
        });
        var fallbackURL = Navigo.cleanUrl(url);
        var len = matched.length;
        if (len === 0)
            return fallbackURL;
        var matched0 = matched[0];
        if (len === 1)
            return matched0;
        return matched.reduce(function (result, url) {
            if (result.length > url.length)
                result = url;
            return result;
        }, matched0);
    };
    Navigo.isHashChangeAPIAvailable = function () {
        return typeof window !== 'undefined' && 'onhashchange' in window;
    };
    Navigo.extractGETParameters = function (url) {
        return url.split(/\?(.*)?$/).slice(1).join('');
    };
    Navigo.getOnlyURL = function (url, useHash, hash) {
        var onlyURL = url, split;
        var cleanGETParam = function (str) { return str.split(/\?(.*)?$/)[0]; };
        if (typeof hash === 'undefined') {
            // To preserve BC
            hash = '#';
        }
        if (Navigo.isPushStateAvailable() && !useHash) {
            onlyURL = cleanGETParam(url).split(hash)[0];
        }
        else {
            split = url.split(hash);
            onlyURL = split.length > 1 ? cleanGETParam(split[1]) : cleanGETParam(split[0]);
        }
        return onlyURL;
    };
    Navigo.manageHooks = function (handler, hooks, params, exHooks) {
        if (hooks && typeof hooks === 'object') {
            if (hooks.before) {
                hooks.before(function (shouldRoute) {
                    if (shouldRoute === void 0) { shouldRoute = true; }
                    if (!shouldRoute)
                        return;
                    handler();
                    hooks.after && hooks.after(params);
                }, params);
                return;
            }
            else if (hooks.after) {
                handler();
                hooks.after && hooks.after(params);
                return;
            }
        }
        handler();
    };
    Navigo.isHashedRoot = function (url, useHash, hash) {
        if (Navigo.isPushStateAvailable() && !useHash) {
            return false;
        }
        if (!url.match(hash)) {
            return false;
        }
        var split = url.split(hash);
        return split.length < 2 || split[1] === '';
    };
    Navigo.prototype.navigate = function (path, absolute) {
        if (absolute === void 0) { absolute = false; }
        var to;
        path = path || '';
        if (this._usePushState) {
            to = (!absolute ? this._getRoot() + '/' : '') + path.replace(/^\/+/, '/');
            to = to.replace(/([^:])(\/{2,})/g, '$1/');
            to = to.replace('/#test/', '/');
            this._historyUpdate({}, '', to);
            this.resolve();
        }
        else if (typeof window !== 'undefined') {
            path = path.replace(new RegExp('^' + this._hash), '');
            var location_1 = window.location;
            location_1.href = location_1.href
                .replace(/#$/, '')
                .replace(new RegExp(this._hash + '.*$'), '') + this._hash + path;
        }
        return this;
    };
    Navigo.prototype.on = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var arg0 = args[0];
        var arg1 = args[1];
        switch (typeof arg0) {
            case 'function':
                this._defaultHandler = { handler: arg0, hooks: arg1 };
                if (!this._notFoundHandler) {
                    this._notFoundHandler = this._defaultHandler;
                }
                break;
            case 'object':
                var orderedRoutes = Object.keys(arg0).sort(Navigo.compareUrlDepth);
                orderedRoutes.forEach(function (route) { return _this.on(route, arg0[route]); });
                break;
            default:
                if (args.length < 2)
                    break;
                if (arg0 === '/') {
                    this._defaultHandler = {
                        handler: typeof arg1 === 'object' ? arg1.uses : arg1,
                        hooks: args[2],
                    };
                    break;
                }
                this._add(arg0, arg1, args[2]);
                break;
        }
        return this;
    };
    Navigo.prototype.off = function (handler) {
        if (this._defaultHandler !== null && handler === this._defaultHandler.handler) {
            this._defaultHandler = null;
        }
        else if (this._notFoundHandler !== null && handler === this._notFoundHandler.handler) {
            this._notFoundHandler = null;
        }
        this._routes = this._routes.reduce(function (result, r) {
            if (r.handler !== handler)
                result.push(r);
            return result;
        }, []);
        return this;
    };
    Navigo.prototype.notFound = function (handler, hooks) {
        this._notFoundHandler = { handler: handler, hooks: hooks };
        return this;
    };
    Navigo.prototype.resolve = function (current) {
        var _this = this;
        var c = current || this._cLoc();
        var root = this._getRoot();
        var url = c.replace(root, '');
        if (this._useHash) {
            var exp = '^\\/'; // 单\，编译报错 ^\/
            url = url.replace(new RegExp(exp + this._hash), '/');
        }
        var GETParameters = Navigo.extractGETParameters(current || this._cLoc());
        var onlyURL = Navigo.getOnlyURL(url, this._useHash, this._hash);
        if (onlyURL.startsWith('/') === false) {
            onlyURL = '/' + onlyURL;
        }
        if (this._paused)
            return false;
        if (this._lastRouteResolved &&
            onlyURL === this._lastRouteResolved.url &&
            GETParameters === this._lastRouteResolved.query) {
            if (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already) {
                this._lastRouteResolved.hooks.already(this._lastRouteResolved.params);
            }
            return false;
        }
        var matched = Navigo.match(onlyURL, this._routes);
        var manageHooks = function (handler) {
            Navigo.manageHooks(function () {
                Navigo.manageHooks(function () {
                    _this._callLeave();
                    _this._lastRouteResolved = {
                        url: onlyURL,
                        query: GETParameters,
                        hooks: handler.hooks
                    };
                    handler.handler(GETParameters);
                }, handler.hooks);
            }, _this._genericHooks);
        };
        if (matched === false) {
            if (this._defaultHandler && (onlyURL === '' ||
                onlyURL === '/' ||
                onlyURL === this._hash ||
                Navigo.isHashedRoot(onlyURL, this._useHash, this._hash))) {
                /*
                Navigo.manageHooks(() => {
                    Navigo.manageHooks(() => {
                        this._callLeave();
                        this._lastRouteResolved = {
                            url: onlyURL,
                            query: GETParameters,
                            hooks: this._defaultHandler.hooks
                        };
                        this._defaultHandler.handler(GETParameters);
                    }, this._defaultHandler.hooks);
                }, this._genericHooks);
                */
                manageHooks(this._defaultHandler);
                return true;
            }
            else if (this._notFoundHandler) {
                /*
                Navigo.manageHooks(() => {
                    Navigo.manageHooks(() => {
                        this._callLeave();
                        this._lastRouteResolved = {
                            url: onlyURL,
                            query: GETParameters,
                            hooks: this._notFoundHandler.hooks
                        };
                        this._notFoundHandler.handler(GETParameters);
                    }, this._notFoundHandler.hooks);
                }, this._genericHooks);
                */
                manageHooks(this._notFoundHandler);
            }
            return false;
        }
        var m = matched;
        if (m) {
            this._callLeave();
            this._lastRouteResolved = {
                url: onlyURL,
                query: GETParameters,
                hooks: m.route.hooks,
                params: m.params,
                name: m.route.name
            };
            var handler_1 = m.route.handler;
            Navigo.manageHooks(function () {
                Navigo.manageHooks(function () {
                    m.route.route instanceof RegExp ? handler_1.apply(void 0, (m.match.slice(1, m.match.length))) :
                        handler_1(m.params, GETParameters);
                }, m.route.hooks, m.params, _this._genericHooks);
            }, this._genericHooks, m.params);
            return m;
        }
    };
    Navigo.prototype.destroy = function () {
        this._routes = [];
        this._destroyed = true;
        this._lastRouteResolved = null;
        this._genericHooks = null;
        clearTimeout(this.timout);
        if (typeof window !== 'undefined') {
            window.removeEventListener('popstate', this._onLocationChange);
            window.removeEventListener('hashchange', this._onLocationChange);
        }
    };
    Navigo.prototype.updatePageLinks = function () {
        var _this = this;
        //var self = this;
        if (typeof document === 'undefined')
            return;
        this._findLinks().forEach(function (link) {
            if (!link.hasListenerAttached) {
                link.addEventListener('click', function (e) {
                    if ((e.ctrlKey || e.metaKey) && e.currentTarget.tagName.toLowerCase() === 'a') {
                        return false;
                    }
                    var location = _this.getLinkPath(link);
                    if (!_this._destroyed) {
                        e.preventDefault();
                        _this.navigate(location.replace(/\/+$/, '').replace(/^\/+/, '/'));
                    }
                });
                link.hasListenerAttached = true;
            }
        });
    };
    Navigo.prototype.generate = function (name, data) {
        if (data === void 0) { data = {}; }
        var result = this._routes.reduce(function (result, route) {
            if (route.name === name) {
                result = route.route.toString();
                for (var key in data) {
                    result = result.replace(':' + key, data[key]);
                }
            }
            return result;
        }, '');
        return this._useHash ? this._hash + result : result;
    };
    Navigo.prototype.link = function (path) {
        return this._getRoot() + path;
    };
    Navigo.prototype.pause = function (status) {
        if (status === void 0) { status = true; }
        this._paused = status;
        if (status) {
            this._historyUpdateMethod = 'replaceState';
        }
        else {
            this._historyUpdateMethod = 'pushState';
        }
    };
    Navigo.prototype.resume = function () {
        this.pause(false);
    };
    Navigo.prototype.historyAPIUpdateMethod = function (value) {
        if (typeof value === 'undefined')
            return this._historyUpdateMethod;
        this._historyUpdateMethod = value;
        return value;
    };
    Navigo.prototype.disableIfAPINotAvailable = function () {
        if (!Navigo.isPushStateAvailable()) {
            this.destroy();
        }
    };
    Navigo.prototype.lastRouteResolved = function () {
        return this._lastRouteResolved;
    };
    Navigo.prototype.getLinkPath = function (link) {
        return link.getAttribute('href');
    };
    Navigo.prototype.hooks = function (hooks) {
        this._genericHooks = hooks;
    };
    Navigo.prototype._add = function (route, handler, hooks) {
        if (typeof route === 'string') {
            route = encodeURI(route);
        }
        this._routes.push(typeof handler === 'object' ?
            {
                route: route,
                handler: handler.uses,
                name: handler.as,
                hooks: hooks || handler.hooks
            }
            :
                {
                    route: route,
                    handler: handler,
                    name: undefined,
                    hooks: hooks,
                });
        return this._add;
    };
    Navigo.prototype._historyUpdate = function (data, title, url) {
        switch (this._historyUpdateMethod) {
            default: throw Error('unknow history method ' + this._historyUpdateMethod);
            case 'pushState':
                window.history.pushState(data, title, url);
                return;
            case 'replaceState':
                window.history.replaceState(data, title, url);
                return;
        }
    };
    Navigo.prototype._getRoot = function () {
        if (this.root === null) {
            var cLoc = this._cLoc();
            var cLocRoot = cLoc.split('?')[0];
            this.root = Navigo.root(cLocRoot, this._routes);
        }
        var root = this.root.replace('#test', '');
        return root;
    };
    Navigo.prototype._listen = function () {
        var _this = this;
        if (this._usePushState) {
            window.addEventListener('popstate', this._onLocationChange);
        }
        else if (Navigo.isHashChangeAPIAvailable()) {
            window.addEventListener('hashchange', this._onLocationChange);
        }
        else {
            var cached_1 = this._cLoc();
            var check_1 = function () {
                var current = _this._cLoc();
                if (cached_1 !== current) {
                    cached_1 = current;
                    _this.resolve();
                }
                if (_this.timout)
                    clearTimeout(_this.timout);
                _this.timout = setTimeout(check_1, 200);
            };
            check_1();
        }
    };
    Navigo.prototype._cLoc = function () {
        if (typeof window !== 'undefined') {
            //if (typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__ !== 'undefined') {
            //	return window.__NAVIGO_WINDOW_LOCATION_MOCK__;
            //}
            var href = window.location.href;
            return Navigo.cleanUrl(href);
        }
        return '';
    };
    Navigo.prototype._findLinks = function () {
        return [].slice.call(document.querySelectorAll('[data-navigo]'));
    };
    Navigo.prototype._callLeave = function () {
        var lastRouteResolved = this._lastRouteResolved;
        if (lastRouteResolved) {
            var params = lastRouteResolved.params, hooks = lastRouteResolved.hooks;
            if (hooks) {
                if (hooks.leave) {
                    hooks.leave(params);
                }
            }
        }
    };
    Navigo.PARAMETER_REGEXP = /([:*])(\w+)/g;
    Navigo.WILDCARD_REGEXP = /\*/g;
    Navigo.REPLACE_VARIABLE_REGEXP = '([^\\/]+)'; // 单\，编译错误 ([^\/]+)
    Navigo.REPLACE_WILDCARD = "(?:.*)";
    Navigo.FOLLOWED_BY_SLASH_REGEXP = '(?:\\/$|$)'; // 单\，编译错误 (?:\/$|$)
    Navigo.MATCH_REGEXP_FLAGS = '';
    return Navigo;
}());
exports.Navigo = Navigo;
//export default Navigo;
exports.navigo = new Navigo();
//# sourceMappingURL=navigo.js.map