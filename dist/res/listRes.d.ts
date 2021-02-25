import { KeyValueRes, Res } from './res';
export interface ListRes extends KeyValueRes {
    none: string;
}
export declare const listRes: Res<ListRes>;
