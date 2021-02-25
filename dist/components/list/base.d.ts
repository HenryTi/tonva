/// <reference types="react" />
import { IObservableArray } from 'mobx';
import { List } from './index';
export declare abstract class ListBase {
    protected list: List;
    constructor(list: List);
    get isPaged(): boolean;
    get items(): any[] | IObservableArray<any>;
    get loading(): boolean;
    get selectedItems(): any[];
    dispose(): void;
    abstract render: (item: any, index: number) => JSX.Element;
    protected renderContent(item: any, index: number): JSX.Element;
}
