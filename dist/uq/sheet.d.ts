import { Entity } from './entity';
import { PageItems } from '../tool/pageItems';
import { Field } from './uqMan';
export interface SheetState {
    name: string;
    actions: SheetAction[];
}
export interface SheetAction {
    name: string;
}
export interface StateCount {
    state: string;
    count: number;
}
export interface SheetSaveReturnV<V> {
    id: number;
    flow: number;
    state: string;
    error: V[];
}
export interface SheetSaveReturn extends SheetSaveReturnV<any> {
}
export declare class UqSheet<M, V> extends Entity {
    get typeName(): string;
    states: SheetState[];
    verify: {
        returns: Field[];
    };
    setSchema(schema: any): void;
    build(obj: any): void;
    private createSheetState;
    save(discription: string, data: M): Promise<SheetSaveReturn>;
    saveDebugDirect(discription: string, data: M): Promise<SheetSaveReturn>;
    action(id: number, flow: number, state: string, action: string): Promise<any>;
    actionDebugDirect(id: number, flow: number, state: string, action: string): Promise<any>;
    private unpack;
    getSheet(id: number): Promise<{
        brief: string;
        data: M;
        flows: any[];
    }>;
    getArchive(id: number): Promise<{
        brief: string;
        data: M;
        flows: any[];
    }>;
    getArchives(pageStart: number, pageSize: number): Promise<any>;
    getStateSheets(state: string, pageStart: number, pageSize: number): Promise<any[]>;
    createPageStateItems<T>(): PageStateItems<T>;
    stateSheetCount(): Promise<StateCount[]>;
    userSheets(state: string, user: number, pageStart: number, pageSize: number): Promise<any[]>;
    mySheets(state: string, pageStart: number, pageSize: number): Promise<any[]>;
}
export declare class Sheet extends UqSheet<any, any> {
}
export declare class PageStateItems<T> extends PageItems<T> {
    private sheet;
    constructor(sheet: Sheet);
    protected loadResults(param: any, pageStart: any, pageSize: number): Promise<{
        [name: string]: any[];
    }>;
    protected getPageId(item: T): any;
}
