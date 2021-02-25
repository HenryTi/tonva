import { UiRadio } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class RadioItemEdit extends ItemEdit {
    get uiItem(): UiRadio;
    init(): void;
    protected internalStart(): Promise<any>;
    private onChange;
    private page;
}
