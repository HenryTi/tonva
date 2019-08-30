/// <reference types="react" />
import { Tuid, BoxId } from '../../uqs';
export declare class TuidWithUIRes {
    readonly tuid: Tuid;
    readonly ui: any;
    readonly res: any;
    constructor(tuid: Tuid, ui: any, res: any);
}
export declare class ReactBoxId implements BoxId {
    readonly id: number;
    protected tuidUR: TuidWithUIRes;
    readonly isUndefined: boolean;
    constructor(tuidUR: TuidWithUIRes, id: number);
    readonly obj: any;
    render(ui: TvTemplet, x: any): JSX.Element;
    readonly boxName: string;
    assure(): Promise<void>;
}
export declare type TvTemplet = (values?: any, x?: any) => JSX.Element;
export declare const tv: (tuidValue: number | BoxId, ui?: TvTemplet, x?: any, nullUI?: () => JSX.Element) => JSX.Element;