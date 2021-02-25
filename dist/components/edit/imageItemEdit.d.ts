import { UiImageItem } from '../schema';
import { ItemEdit } from './itemEdit';
export declare class ImageItemEdit extends ItemEdit {
    get uiItem(): UiImageItem;
    private resId;
    protected internalStart(): Promise<any>;
    private page;
}
