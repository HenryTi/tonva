import { Entity } from "../entity";
import { TagView } from "./tagView";
export interface TagValue {
    id: number;
    name: string;
    ext: string;
}
export declare class Tag extends Entity {
    get typeName(): string;
    values: TagValue[];
    private coll;
    private _view;
    get view(): TagView;
    nameFromId(id: number): string;
    namesFromIds(ids: string): string[];
    loadValues(): Promise<TagValue[]>;
}
