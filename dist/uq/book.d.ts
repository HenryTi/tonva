import { Query } from './query';
import { QueryQueryCaller } from './caller';
export declare class Book extends Query {
    get typeName(): string;
    protected queryApiName: string;
    protected queryCaller(params: any): QueryQueryCaller;
}
export declare class BookQueryCaller extends QueryQueryCaller {
    get path(): string;
}
