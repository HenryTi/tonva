import { UiTextItem } from '../schema';
import { ItemEdit } from './itemEdit';
export interface InputOptions {
    type: string;
    min?: number;
    max?: number;
    step?: number;
}
export declare class StringItemEdit extends ItemEdit {
    get uiItem(): UiTextItem;
    protected internalStart(): Promise<any>;
    private onChange;
    private onBlur;
    private onFocus;
    protected inputOptions(): InputOptions;
    private page;
}
