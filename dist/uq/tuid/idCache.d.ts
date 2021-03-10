import { LocalArr } from '../../tool';
import { BoxId } from './boxId';
import { TuidInner, TuidDiv } from './tuid';
export declare class IdCache {
    private queue;
    private cache;
    private loadingIds;
    protected localArr: LocalArr;
    protected waitingIds: number[];
    protected tuidInner: TuidInner;
    constructor(tuidLocal: TuidInner);
    protected initLocalArr(): void;
    useId(id: number, defer?: boolean): void;
    protected clearWaiting(): void;
    private moveToHead;
    getValue(id: number): any;
    remove(id: number): void;
    valueFromId(id: number | BoxId): any;
    resetCache(id: number): void;
    cacheValue(val: any): boolean;
    protected getIdFromObj(val: any): number;
    cacheIds(): Promise<void>;
    protected cacheIdValues(tuidValues: any[]): void;
    modifyIds(ids: any[]): Promise<void>;
    protected loadIds(): Promise<any[]>;
    protected unpackTuidIds(values: string[]): any[];
    protected cacheTuidFieldValues(tuidValue: any): void;
    assureObj(id: number): Promise<void>;
    protected loadTuidIds(netIds: number[]): Promise<any[]>;
    private loadTuidIdsOrLocal;
}
export declare class IdDivCache extends IdCache {
    private div;
    protected divName: string;
    constructor(tuidLocal: TuidInner, div: TuidDiv);
    protected initLocalArr(): void;
    protected getIdFromObj(val: any): number;
    protected unpackTuidIds(values: string[]): any[];
    protected cacheTuidFieldValues(tuidValue: any): void;
    protected loadTuidIds(netIds: number[]): Promise<any[]>;
}
