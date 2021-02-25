import { ItemSchema, UiItem } from '../schema';
import { Edit } from './edit';
export declare abstract class ItemEdit {
    protected edit: Edit;
    protected name: string;
    protected _itemSchema: ItemSchema;
    get itemSchema(): ItemSchema;
    protected _uiItem: UiItem;
    get uiItem(): UiItem;
    value: any;
    label: string;
    get editInRow(): boolean;
    protected error: string;
    protected isChanged: boolean;
    protected newValue: any;
    constructor(edit: Edit, itemSchema: ItemSchema, uiItem: UiItem, label: string, value: any);
    init(): void;
    start(): Promise<any>;
    protected abstract internalStart(): Promise<any>;
    end(): Promise<any>;
    renderContent(): any;
    protected internalEnd(): Promise<void>;
    protected verifyValue(): void;
}
