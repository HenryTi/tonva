import { Tuid } from "./tuid";
export declare type CreateBoxId = (tuid: Tuid, id: number) => BoxId;
export interface BoxId {
    readonly id: number;
    obj: any;
    boxName: string;
    isUndefined: boolean;
    assure(): Promise<void>;
}
