/// <reference types="react" />
import { LocalMap, LocalCache } from '../tool';
import { UqData } from '../net';
import { UqMan } from './uqMan';
export interface TVs {
    [uqName: string]: {
        [tuidName: string]: (values: any) => JSX.Element;
    };
}
export declare class UQsMan {
    static _uqs: any;
    static value: UQsMan;
    static errors: string[];
    static load(tonvaAppName: string, version: string, tvs: TVs): Promise<string[]>;
    private collection;
    private readonly tvs;
    readonly appOwner: string;
    readonly appName: string;
    readonly localMap: LocalMap;
    readonly localData: LocalCache;
    id: number;
    private constructor();
    addUq(uq: UqMan): void;
    private buildTVs;
    init(uqsData: UqData[]): Promise<void>;
    load(): Promise<string[]>;
    buildUQs(): any;
    getUqCollection(): {
        [uqName: string]: UqMan;
    };
    private showReload;
    setTuidImportsLocal(): string[];
    private setInner;
}
