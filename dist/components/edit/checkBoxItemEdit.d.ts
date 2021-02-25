/// <reference types="react" />
import { UiCheckItem } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class CheckBoxItemEdit extends ItemEdit {
    private input;
    get uiItem(): UiCheckItem;
    get editInRow(): boolean;
    protected internalStart(): Promise<any>;
    end(): Promise<any>;
    renderContent(): JSX.Element;
    private getValue;
    private onChange;
}
