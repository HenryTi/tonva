import { Uq, Field, ArrFields, FieldMap } from './uq';
import { Tuid } from './tuid';
import { UqApi } from '../../net';
export declare abstract class Entity {
    protected uq: Uq;
    protected schema: any;
    private jName;
    sys?: boolean;
    readonly name: string;
    readonly typeId: number;
    protected uqApi: UqApi;
    abstract readonly typeName: string;
    readonly sName: string;
    fields: Field[];
    arrFields: ArrFields[];
    returns: ArrFields[];
    constructor(uq: Uq, name: string, typeId: number);
    face: any;
    private fieldMaps;
    fieldMap(arr?: string): FieldMap;
    loadSchema(): Promise<void>;
    setSchema(schema: any): void;
    buildFieldsTuid(): void;
    schemaStringify(): string;
    tuidFromName(fieldName: string, arrName?: string): Tuid;
    protected buildParams(params: any): any;
    private buildFieldsParams;
    pack(data: any): string;
    private escape;
    private packRow;
    private packArr;
    protected cacheFieldsInValue(values: any, fields: Field[]): void;
    protected unpackTuidIdsOfFields(values: any[] | string, fields: Field[]): any[];
    unpackSheet(data: string): any;
    unpackReturns(data: string): any;
    protected unpackRow(ret: any, fields: Field[], data: string, p: number): number;
    private to;
    private unpackArr;
}