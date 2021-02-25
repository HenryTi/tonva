export interface Callback {
    (...params: any[]): Promise<void>;
}
export declare class Callbacks<T extends Callback> {
    private list;
    get has(): boolean;
    register(callback: T): void;
    unregister(callback: T): void;
    call(...params: any[]): void;
}
