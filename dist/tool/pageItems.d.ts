import { IObservableArray } from 'mobx';
export declare abstract class PageItems<T> {
    constructor(itemObservable?: boolean);
    private isFirst;
    private pageItemAction;
    private itemConverter;
    loading: boolean;
    private beforeLoad;
    protected loaded: boolean;
    protected _items: IObservableArray<T>;
    allLoaded: boolean;
    get items(): IObservableArray<T>;
    setEachPageItem(pageItemAction: (item: T, results: {
        [name: string]: any[];
    }) => void): void;
    setItemConverter(itemConverter: (item: any, queryResults: {
        [name: string]: any[];
    }) => T): void;
    topDiv: string;
    bottomDiv: string;
    scrollToTop: () => void;
    scrollToBottom: () => void;
    private scrollIntoView;
    protected param: any;
    protected firstSize: number;
    protected pageStart: any;
    protected pageSize: number;
    protected appendPosition: 'head' | 'tail';
    protected sortOrder: 'asc' | 'desc';
    protected abstract loadResults(param: any, pageStart: any, pageSize: number): Promise<{
        [name: string]: any[];
    }>;
    protected getPageId(item: T): any;
    protected setPageStart(item: T): void;
    protected load(param: any, pageStart: any, pageSize: number): Promise<any[]>;
    reset(): void;
    append(item: T): void;
    first(param: any): Promise<void>;
    private changing;
    attach(): Promise<void>;
    refresh(): Promise<void>;
    protected getRefreshPageId(item: T): any;
    protected onLoad(): Promise<void>;
    protected onLoaded(): Promise<void>;
    more(): Promise<boolean>;
    private setLoaded;
    findItem(item: any): T;
}
