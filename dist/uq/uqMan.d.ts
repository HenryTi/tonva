import { UqApi, UqData } from '../net';
import { Tuid, TuidDiv, TuidBox } from './tuid';
import { Action } from './action';
import { Sheet } from './sheet';
import { Query } from './query';
import { Book } from './book';
import { History } from './history';
import { Map } from './map';
import { Pending } from './pending';
import { CreateBoxId } from './boxId';
import { LocalMap, LocalCache } from '../tool';
import { UQsMan } from './uqsMan';
export declare type FieldType = 'id' | 'tinyint' | 'smallint' | 'int' | 'bigint' | 'dec' | 'char' | 'text' | 'datetime' | 'date' | 'time';
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
    private readonly actions;
    private readonly sheets;
    private readonly queries;
    private readonly books;
    private readonly maps;
    private readonly histories;
    private readonly pendings;
    private readonly tuidsCache;
    private readonly localAccess;
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
    constructor(uqs: UQsMan, uqData: UqData, createBoxId: CreateBoxId);
    readonly entities: any;
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
    tuidArr: Tuid[];
    actionArr: Action[];
    sheetArr: Sheet[];
    queryArr: Query[];
    bookArr: Book[];
    mapArr: Map[];
    historyArr: History[];
    pendingArr: Pending[];
    init(): Promise<void>;
    loadEntities(): Promise<string>;
    buildEntities(entities: any): void;
    loadEntitySchema(entityName: string): Promise<any>;
    getTuid(name: string): Tuid;
    private buildTuids;
    private buildAccess;
    cacheTuids(defer: number): void;
    newAction(name: string, id: number): Action;
    private newTuid;
    newQuery(name: string, id: number): Query;
    private newBook;
    private newMap;
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