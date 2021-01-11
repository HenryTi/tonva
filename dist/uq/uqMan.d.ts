/// <reference types="react" />
import { UqApi, UqData } from '../net';
import { Tuid, TuidDiv, TuidBox } from './tuid';
import { Action } from './action';
import { Sheet } from './sheet';
import { Query } from './query';
import { Book } from './book';
import { History } from './history';
import { Map } from './map';
import { Pending } from './pending';
import { CreateBoxId } from './tuid';
import { LocalMap, LocalCache } from '../tool';
import { UQsMan } from './uqsMan';
import { Tag } from './tag/tag';
import { UqEnum } from './enum';
export declare type FieldType = 'id' | 'tinyint' | 'smallint' | 'int' | 'bigint' | 'dec' | 'char' | 'text' | 'datetime' | 'date' | 'time' | 'timestamp';
export declare function fieldDefaultValue(type: FieldType): 0 | "" | "2000-1-1" | "0:00";
export interface Field {
    name: string;
    type: FieldType;
    tuid?: string;
    arr?: string;
    null?: boolean;
    size?: number;
    owner?: string;
    _tuid: TuidBox;
}
export interface ArrFields {
    name: string;
    fields: Field[];
    id?: string;
    order?: string;
}
export interface FieldMap {
    [name: string]: Field;
}
export interface SchemaFrom {
    owner: string;
    uq: string;
}
export interface TuidModify {
    max: number;
    seconds: number;
}
export declare class UqMan {
    private readonly enums;
    private readonly actions;
    private readonly sheets;
    private readonly queries;
    private readonly books;
    private readonly maps;
    private readonly histories;
    private readonly pendings;
    private readonly tags;
    private readonly tuidsCache;
    private readonly localAccess;
    private readonly tvs;
    readonly localMap: LocalMap;
    readonly localModifyMax: LocalCache;
    readonly tuids: {
        [name: string]: Tuid;
    };
    readonly createBoxId: CreateBoxId;
    readonly newVersion: boolean;
    readonly uqOwner: string;
    readonly uqName: string;
    readonly name: string;
    readonly uqApi: UqApi;
    readonly id: number;
    uqVersion: number;
    constructor(uqs: UQsMan, uqData: UqData, createBoxId: CreateBoxId, tvs: {
        [entity: string]: (values: any) => JSX.Element;
    });
    get entities(): any;
    private createBoxIdFromTVs;
    tuid(name: string): Tuid;
    tuidDiv(name: string, div: string): TuidDiv;
    action(name: string): Action;
    sheet(name: string): Sheet;
    query(name: string): Query;
    book(name: string): Book;
    map(name: string): Map;
    history(name: string): History;
    pending(name: string): Pending;
    sheetFromTypeId(typeId: number): Sheet;
    readonly tuidArr: Tuid[];
    readonly actionArr: Action[];
    readonly enumArr: UqEnum[];
    readonly sheetArr: Sheet[];
    readonly queryArr: Query[];
    readonly bookArr: Book[];
    readonly mapArr: Map[];
    readonly historyArr: History[];
    readonly pendingArr: Pending[];
    readonly tagArr: Tag[];
    init(): Promise<void>;
    loadEntities(): Promise<string>;
    buildEntities(entities: any): void;
    private buildTuids;
    loadEntitySchema(entityName: string): Promise<any>;
    loadAllSchemas(): Promise<void>;
    getTuid(name: string): Tuid;
    private buildAccess;
    cacheTuids(defer: number): void;
    newEnum(name: string, id: number): UqEnum;
    newAction(name: string, id: number): Action;
    private newTuid;
    newQuery(name: string, id: number): Query;
    private newBook;
    private newMap;
    private newTag;
    private newHistory;
    private newPending;
    newSheet(name: string, id: number): Sheet;
    private fromType;
    private fromObj;
    private buildSheet;
    buildFieldTuid(fields: Field[], mainFields?: Field[]): void;
    buildArrFieldsTuid(arrFields: ArrFields[], mainFields: Field[]): void;
    pullModify(modifyMax: number): void;
}
