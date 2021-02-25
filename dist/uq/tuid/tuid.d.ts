import { LocalArr } from '../../tool';
import { Entity } from '../entity';
import { UqMan, Field, SchemaFrom } from '../uqMan';
import { BoxId } from './boxId';
import { IdCache, IdDivCache } from './idCache';
export interface TuidSaveResult {
    id: number;
    inId: number;
}
export interface TuidNOResult {
    date: string;
    no: number;
}
export declare abstract class UqTuid<M> extends Entity {
    protected noCache: boolean;
    readonly typeName: string;
    protected idName: string;
    cached: boolean;
    unique: string[];
    setSchema(schema: any): void;
    buildTuidBox(): TuidBox;
    getIdFromObj(obj: any): number;
    stopCache(): void;
    abstract useId(id: number): void;
    abstract boxId(id: number): BoxId;
    abstract valueFromId(id: number): any;
    abstract resetCache(id: number | BoxId): void;
    abstract assureBox<T>(id: number | BoxId): Promise<T>;
    static idValue(id: {
        id: number;
    } | number): number;
    static equ(id1: {
        id: number;
    } | number, id2: {
        id: number;
    } | number): boolean;
    cacheIds(): void;
    modifyIds(ids: any[]): Promise<void>;
    isImport: boolean;
    abstract get hasDiv(): boolean;
    abstract div(name: string): TuidDiv;
    abstract loadMain(id: number | BoxId): Promise<M>;
    abstract load(id: number | BoxId): Promise<M>;
    abstract all(): Promise<M[]>;
    abstract save(id: number, props: M): Promise<TuidSaveResult>;
    abstract saveProp(id: number, prop: string, value: any): Promise<void>;
    abstract search(key: string, pageStart: string | number, pageSize: number): Promise<M[]>;
    abstract searchArr(owner: number, key: string, pageStart: string | number, pageSize: number): Promise<any>;
    abstract loadArr(arr: string, owner: number, id: number): Promise<any>;
    abstract saveArr(arr: string, owner: number, id: number, props: any): Promise<void>;
    abstract posArr(arr: string, owner: number, id: number, order: number): Promise<void>;
    abstract no(): Promise<TuidNOResult>;
}
export declare abstract class Tuid extends UqTuid<any> {
}
export declare class TuidInner extends Tuid {
    private divs;
    protected cacheFields: Field[];
    protected idCache: IdCache;
    protected localArr: LocalArr;
    constructor(uq: UqMan, name: string, typeId: number);
    setSchema(schema: any): void;
    useId(id: number, defer?: boolean): void;
    boxId(id: number): BoxId;
    valueFromId(id: number): any;
    resetCache(id: number | BoxId): void;
    assureBox<T>(id: number | BoxId): Promise<T>;
    cacheIds(): void;
    modifyIds(ids: any[]): Promise<void>;
    cacheTuids(defer: number): void;
    get hasDiv(): boolean;
    div(name: string): TuidDiv;
    loadTuidIds(divName: string, ids: number[]): Promise<any[]>;
    loadMain(id: number | BoxId): Promise<any>;
    load(id: number | BoxId): Promise<any>;
    cacheTuidFieldValues(values: any): void;
    buildFieldsTuid(): void;
    unpackTuidIds(values: string[]): any[];
    save(id: number, props: any): Promise<TuidSaveResult>;
    saveProp(id: number, prop: string, value: any): Promise<void>;
    all(): Promise<any[]>;
    search(key: string, pageStart: string | number, pageSize: number): Promise<any[]>;
    searchArr(owner: number, key: string, pageStart: string | number, pageSize: number): Promise<any>;
    loadArr(arr: string, owner: number, id: number): Promise<any>;
    saveArr(arr: string, owner: number, id: number, props: any): Promise<any>;
    posArr(arr: string, owner: number, id: number, order: number): Promise<any>;
    no(): Promise<TuidNOResult>;
}
export declare class TuidImport extends Tuid {
    private tuidLocal;
    constructor(uq: UqMan, name: string, typeId: number, from: SchemaFrom);
    setFrom(tuidLocal: TuidInner): void;
    readonly from: SchemaFrom;
    isImport: boolean;
    useId(id: number): void;
    boxId(id: number): BoxId;
    valueFromId(id: number): any;
    resetCache(id: number | BoxId): void;
    assureBox<T>(id: number): Promise<T>;
    get hasDiv(): boolean;
    div(name: string): TuidDiv;
    loadMain(id: number | BoxId): Promise<any>;
    load(id: number | BoxId): Promise<any>;
    save(id: number, props: any): Promise<TuidSaveResult>;
    saveProp(id: number, prop: string, value: any): Promise<void>;
    all(): Promise<any[]>;
    search(key: string, pageStart: string | number, pageSize: number): Promise<any>;
    searchArr(owner: number, key: string, pageStart: string | number, pageSize: number): Promise<any>;
    loadArr(arr: string, owner: number, id: number): Promise<any>;
    saveArr(arr: string, owner: number, id: number, props: any): Promise<void>;
    posArr(arr: string, owner: number, id: number, order: number): Promise<void>;
    no(): Promise<TuidNOResult>;
}
export declare class TuidBox {
    tuid: Tuid;
    ownerField: Field;
    constructor(tuid: Tuid);
    boxId(id: number): BoxId;
    getIdFromObj(obj: any): number;
    useId(id: number): void;
    showInfo(): Promise<void>;
}
export declare class TuidDiv extends TuidInner {
    readonly typeName: string;
    protected cacheFields: Field[];
    protected tuid: TuidInner;
    protected idName: string;
    protected idCache: IdDivCache;
    constructor(uq: UqMan, tuid: TuidInner, name: string);
    get owner(): TuidInner;
    buildFieldsTuid(): void;
    buildTuidDivBox(ownerField: Field): TuidBoxDiv;
    getIdFromObj(obj: any): number;
    cacheValue(value: any): void;
    useId(id: number, defer?: boolean): void;
    valueFromId(id: number): any;
    assureBox<T>(id: number): Promise<T>;
    cacheIds(): Promise<void>;
    cacheTuidFieldValues(values: any): void;
    unpackTuidIds(values: string[]): any[];
}
export declare class TuidBoxDiv extends TuidBox {
    ownerField: Field;
    private div;
    constructor(tuid: Tuid, div: TuidDiv, ownerField: Field);
    boxId(id: number): BoxId;
    getIdFromObj(obj: any): number;
    useId(id: number): void;
}
