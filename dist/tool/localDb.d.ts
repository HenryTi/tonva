export declare class LocalCache {
    private readonly local;
    readonly key: string | number;
    constructor(local: Local, key: string | number);
    get(): any;
    set(value: any): void;
    remove(local?: Local): void;
    child(key: string | number): LocalCache;
    arr(key: string | number): LocalArr;
    map(key: string | number): LocalMap;
}
declare abstract class Local {
    private readonly caches;
    private readonly locals;
    protected readonly name: string;
    constructor(name: string);
    protected abstract keyForGet(key: string | number): string;
    protected abstract keyForSet(key: string | number): string;
    protected abstract keyForRemove(key: string | number): string;
    abstract removeAll(): void;
    getItem(key: string | number): string;
    setItem(key: string | number, value: string): void;
    removeItem(key: string | number): void;
    arr(key: string | number): LocalArr;
    map(key: string | number): LocalMap;
    removeLocal(local: Local): void;
    child(key: string | number): LocalCache;
}
export declare class LocalArr extends Local {
    private readonly index;
    constructor(name: string);
    private saveIndex;
    protected keyForGet(key: number): string;
    protected keyForSet(key: number): string;
    protected keyForRemove(key: number): string;
    removeAll(): void;
    item(index: number): LocalCache;
}
export declare class LocalMap extends Local {
    private readonly index;
    private max;
    constructor(name: string);
    private saveIndex;
    protected keyForGet(key: number): string;
    protected keyForSet(key: number): string;
    protected keyForRemove(key: string | number): string;
    removeAll(): void;
    item(key: string): LocalCache;
}
export {};
