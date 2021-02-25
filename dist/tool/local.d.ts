export declare class LocalData {
    user: import("./localDb").LocalCache;
    guest: import("./localDb").LocalCache;
    unit: import("./localDb").LocalCache;
    private _user;
    private _guest;
    private _unit;
    readToMemory(): void;
    saveToLocalStorage(): void;
    logoutClear(): void;
}
