export declare type RouteFunc = (params?: string | {
    [name: string]: string;
}, query?: string) => void;
export interface NamedRoute {
    as: string;
    uses: RouteFunc;
    hooks?: Hooks;
}
export interface Hooks {
    before: (done: () => void, params: object) => void;
    after: (params: object) => void;
    leave: (params: object) => void;
    already: (params: object) => void;
}
interface LastResolved {
    url: string;
    query: string;
    hooks: Hooks;
    params?: {
        [name: string]: string;
    };
    name?: string;
}
interface Route {
    route: string | RegExp;
    handler: RouteFunc;
    name: string;
    hooks: Hooks;
}
export declare class Navigo {
    private static PARAMETER_REGEXP;
    private static WILDCARD_REGEXP;
    private static REPLACE_VARIABLE_REGEXP;
    private static REPLACE_WILDCARD;
    private static FOLLOWED_BY_SLASH_REGEXP;
    private static MATCH_REGEXP_FLAGS;
    private static isPushStateAvailable;
    private static clean;
    private static cleanUrl;
    private static regExpResultToParams;
    private static replaceDynamicURLParts;
    private static getUrlDepth;
    private static compareUrlDepth;
    private static findMatchedRoutes;
    private static match;
    private static root;
    private static isHashChangeAPIAvailable;
    private static extractGETParameters;
    private static getOnlyURL;
    private static manageHooks;
    private static isHashedRoot;
    private root;
    private _routes;
    private _useHash;
    private _hash;
    private _paused;
    private _destroyed;
    private _lastRouteResolved;
    private _notFoundHandler;
    private _defaultHandler;
    private _usePushState;
    private _genericHooks;
    private _historyUpdateMethod;
    private timout;
    constructor(r?: string, useHash?: boolean, hash?: string);
    navigate(path: string, absolute?: boolean): Navigo;
    on(routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    on(url: string, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    on(regex: RegExp, routeFunc: RouteFunc, hooks?: Hooks): Navigo;
    on(options: {
        [url: string]: RouteFunc | NamedRoute;
    }): Navigo;
    off(handler: RouteFunc): Navigo;
    notFound(handler: RouteFunc, hooks: Hooks): Navigo;
    resolve(current?: string): boolean | {
        match: RegExpMatchArray;
        route: Route;
        params: any;
    };
    destroy(): void;
    updatePageLinks(): void;
    generate(name: string, data?: any): string;
    link(path: string): string;
    pause(status?: boolean): void;
    resume(): void;
    historyAPIUpdateMethod(value: 'pushState' | 'replaceState'): "pushState" | "replaceState";
    disableIfAPINotAvailable(): void;
    lastRouteResolved(): LastResolved;
    getLinkPath(link: any): any;
    hooks(hooks: Hooks): void;
    private _add;
    private _historyUpdate;
    private _getRoot;
    private _listen;
    private _cLoc;
    private _findLinks;
    private _onLocationChange;
    private _callLeave;
}
export declare const navigo: Navigo;
export {};
