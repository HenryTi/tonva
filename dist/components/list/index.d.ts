import * as React from 'react';
import { PageItems } from '../../tool/pageItems';
import '../../css/va-list.css';
import { IObservableArray } from 'mobx';
declare type StaticRow = string | JSX.Element | (() => string | JSX.Element);
interface ItemProps {
    className?: string | string[];
    render?: (item: any, index: number) => JSX.Element;
    onSelect?: (item: any, isSelected: boolean, anySelected: boolean) => void;
    onClick?: (item: any) => void;
    key?: (item: any) => string | number;
}
export interface ListProps {
    className?: string | string[];
    items: any[] | IObservableArray<any> | PageItems<any>;
    item: ItemProps;
    isItemSelected?: (item: any) => boolean;
    compare?: (item: any, selectItem: any) => boolean;
    selectedItems?: any[];
    header?: StaticRow;
    footer?: StaticRow;
    before?: StaticRow;
    loading?: StaticRow;
    none?: StaticRow;
    onFocus?: (evt: React.FocusEvent<HTMLUListElement>) => void;
}
export declare class List extends React.Component<ListProps> {
    private static res;
    private listBase;
    private selectable;
    constructor(props: ListProps);
    _$scroll: (direct: 'top' | 'bottom') => void;
    private buildBase;
    componentDidUpdate(prevProps: Readonly<ListProps>, prevState: Readonly<any>): void;
    componentWillUnmount(): void;
    selectAll(): void;
    unselectAll(): void;
    get selectedItems(): any[];
    render(): JSX.Element;
}
export {};
