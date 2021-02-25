import { UiIdItem } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class IdItemEdit extends ItemEdit {
    get uiItem(): UiIdItem;
    protected internalStart(): Promise<any>;
    protected internalEnd(): Promise<void>;
    private onChange;
    private page;
}
