export declare abstract class Caller<T> {
    protected readonly _params: T;
    constructor(params: T, waiting: boolean);
    protected get params(): any;
    buildParams(): any;
    method: string;
    abstract get path(): string;
    get headers(): {
        [header: string]: string;
    };
    waiting: boolean;
}
