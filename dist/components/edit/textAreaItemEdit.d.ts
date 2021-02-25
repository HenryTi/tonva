import { UiTextItem } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class TextAreaItemEdit extends ItemEdit {
    get uiItem(): UiTextItem;
    protected internalStart(): Promise<any>;
    private onChange;
    private onBlur;
    private onFocus;
    private page;
}
