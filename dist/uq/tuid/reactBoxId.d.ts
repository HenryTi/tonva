/// <reference types="react" />
import { BoxId } from './boxId';
import { Tuid } from './tuid';
export declare function uqStringify(values: any): string;
export declare class ReactBoxId implements BoxId {
    readonly id: number;
    protected tuid: Tuid;
    protected ui: (values: any) => JSX.Element;
    readonly isUndefined: boolean;
    constructor(id: number, tuid: Tuid, ui: (values: any) => JSX.Element);
    get obj(): any;
    equ(id: BoxId | number): boolean;
    render(ui: TvTemplet, x: any): JSX.Element;
    get boxName(): string;
    assure(): Promise<BoxId>;
}
export declare type TvTemplet = (values?: any, x?: any) => JSX.Element;
export declare const tv: (tuidValue: number | BoxId, ui?: TvTemplet, x?: any, nullUI?: () => JSX.Element) => JSX.Element;
