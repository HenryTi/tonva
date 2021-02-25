/// <reference types="react" />
import { ListBase } from './base';
import { List } from './index';
export interface SelectableItem {
    selected: boolean;
    item: any;
    labelId: string;
}
export declare class Selectable extends ListBase {
    private _items;
    private inputItems;
    constructor(list: List);
    private listenArraySplice;
    private buildItems;
    get items(): SelectableItem[];
    private checkAll;
    selectAll(): void;
    unselectAll(): void;
    private get anySelected();
    private onSelect;
    get selectedItems(): any[];
    render: (item: SelectableItem, index: number) => JSX.Element;
    private row;
}
