import { UiSelectBase } from '../schema';
import { ItemEdit } from './itemEdit';
export declare abstract class SelectItemBaseEdit extends ItemEdit {
    get uiItem(): UiSelectBase;
}
