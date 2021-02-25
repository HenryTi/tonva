import { Tuid } from "./tuid";
export interface BoxId {
    readonly id: number;
    obj: any;
    boxName: string;
    isUndefined: boolean;
    assure(): Promise<any>;
    equ(id: {
        id: number;
    } | number): boolean;
}
export declare type CreateBoxId = (tuid: Tuid, id: number) => BoxId;
