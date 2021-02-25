import { UiSelect } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class SelectItemEdit extends ItemEdit {
    get uiItem(): UiSelect;
    protected internalStart(): Promise<any>;
    private onChange;
    private page;
}
